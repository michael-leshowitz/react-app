import React from 'react';
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, contact, updateContact } from '../contacts';

export const loader = async ({params}) => {
    const contact = await getContact(params.contactId);
    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found Haha"
        })
      }
    return contact;
}

export const action = async( {request, params }) => {
    let formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}

export default function Contact() {
    const contact = useLoaderData() as contact;
//   const contact = {
//     first: "Your",
//     last: "Name",
//     avatar: "https://placekitten.com/g/200/200",
//     twitter: "your_handle",
//     notes: "Some notes",
//     favorite: true,
//   };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            // This is a relative action, and will match the route contact/id/destory when submitted
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  const fetcher = useFetcher();
//   fetchers allow interactions with loaders without navigations
  let favorite = contact.favorite;
//   This if checks if the fetcher is processing any form data - if so we optimistically use the value from the form
//  after the fetcher is done, there will be no more formData, so the "true" value will populate again
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true"
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}