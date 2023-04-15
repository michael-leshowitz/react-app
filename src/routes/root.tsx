import React, { useEffect } from "react";
import { Link, Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { contact, getContacts, createContact } from "../contacts";

export const action = async () => {
    const contact = await createContact();
    // return contact;
    return redirect(`/contacts/${contact.id}/edit`);
}

export const loader = async( {request} ) : Promise<{contacts: contact[], q: string}> => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";
    const contacts = await getContacts(q);

    return { contacts: contacts, q: q };
}

export default function Root() {
    const {contacts, q} = useLoaderData() as {contacts: contact[], q: string};
    const navigation = useNavigation();
    // Will submit the arguement passed. In the use here, we are submitting the form that the currentTarget is attached to
    const submit = useSubmit();
    /*
useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".
    */
   useEffect(() => {
    // This useEffect to track what happens when we use the back navigation after a search, where "q" now takes a null state
    document!.getElementById("q")!.value = q;
   }, [q]);

//    Navigation.location will show up when the app is navigating to a new URL and loading the data for it.
//      Goes away when there is no pending navigation
   const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          {contacts && contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                    <NavLink
                        to={`contacts/${contact.id}`}
                        className={({ isActive, isPending }) => 
                            isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                    >
                    <Link to={`contacts/${contact.id}`}>
                        {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                        ) : (
                        <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
                    </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}                
                onChange={(event) => {
                    const isFirstSearch = q == null;
                    submit(event.currentTarget.form, {
                        replace: !isFirstSearch,
                    })
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
                {/* <a href={`/contacts/1`}>Your Name</a> */}
              </li>
              <li>
              <Link to={`/contacts/2`}>Your Fwiend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"
        className={
            navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet />
        </div>
      </>
    );
  }