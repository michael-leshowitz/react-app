import localforage from "localforage";
import { matchSorter } from "match-sorter";
// Needed to import @types/sort-by to get the typescript exports
import sortBy from "sort-by";

export interface contact {
    id?: string,
    first?: string,
    last?: string,
    avatar?: string,
    twitter?: string,
    notes?: string,
    favorite?: boolean,
    createdAt?: number,
}

export const getContacts = async(query? : string) : Promise<contact[]> => {
  await fakeNetwork(`getContacts:${query}`);
  let contacts  = await localforage.getItem("contacts");
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts("");
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id : string) {
  await fakeNetwork(`contact:${id}`);
  let contacts : contact[]|null = await localforage.getItem("contacts");
  let contact = contacts? contacts.find(contact => contact.id === id) : null;
  return contact;
}

export async function updateContact(id:string, updates) {
  await fakeNetwork("");
  let contacts : contact[]|null = await localforage.getItem("contacts");
  let contact = contacts? contacts.find(contact => contact.id === id) : null;
  if (!contact) throw new Error("No contact found for" + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id) {
  let contacts : contact[] | null = await localforage.getItem("contacts");
  let index = contacts? contacts.findIndex(contact => contact.id === id) : -1;
  if (index > -1) {
    contacts!.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key?) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}