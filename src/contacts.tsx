import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
// Needed to import @types/sort-by to get the typescript exports
import sortBy from 'sort-by'

export interface contact {
  id?: string
  first?: string
  last?: string
  avatar?: string
  twitter?: string
  notes?: string
  favorite?: boolean
  createdAt?: number
}

export const getContacts = async (query: string = ''): Promise<contact[]> => {
  await fakeNetwork(`getContacts:${query}`)
  let contacts = await localforage.getItem('contacts') as contact[]
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] })
  }
  return contacts.sort(sortBy('last', 'createdAt'))
}

export async function createContact (): Promise<contact> {
  await fakeNetwork()
  const id = Math.random().toString(36).substring(2, 9)
  const contact = { id, createdAt: Date.now() }
  const contacts = await getContacts('')
  contacts.unshift(contact)
  await set(contacts)
  return contact
}

export async function getContact (id: string): Promise<contact | null | undefined> {
  await fakeNetwork(`contact:${id}`)
  const contacts: contact[] | null = await localforage.getItem('contacts')
  const contact = (contacts != null) ? contacts.find(contact => contact.id === id) : null
  return contact
}

export async function updateContact (id: string, updates): Promise<contact> {
  await fakeNetwork('')
  const contacts: contact[] | null = await localforage.getItem('contacts')
  const contact = (contacts != null) ? contacts.find(contact => contact.id === id) : null
  if (contact == null) throw new Error('No contact found for' + id)
  Object.assign(contact, updates)
  await set(contacts)
  return contact
}

export async function deleteContact (id): Promise<boolean> {
  const contacts: contact[] | null = await localforage.getItem('contacts')
  const index = (contacts != null) ? contacts.findIndex(contact => contact.id === id) : -1
  if (index > -1 && contacts != null) {
    contacts.splice(index, 1)
    await set(contacts)
    return true
  }
  return false
}

async function set (contacts): Promise<void> {
  return await localforage.setItem('contacts', contacts)
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {}

async function fakeNetwork (key?): Promise<void> {
  if (!key) {
    fakeCache = {}
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 800)
  })
}
