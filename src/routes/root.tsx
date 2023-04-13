import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root(): JSX.Element {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
                {/* Using href causes the browser to make a new request to get the full document */}
                {/* Using link allows for client side routing */}
                {/* <a href={`/contacts/1`}>Your Name</a> */}
              </li>
              <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
                {/* <a href={`/contacts/2`}>Your Friend</a> */}
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }