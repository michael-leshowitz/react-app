import React, { useEffect } from "react";
import { Link, Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { contact, getContacts, createContact } from "../contacts";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "../components/sidebar/sidebar";
import Navbar from "../components/topNav/navbar";
import styled from "@emotion/styled";

const OutletContainer = styled.div`
  position: relative;
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

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
  //  useEffect(() => {
  //   // This useEffect to track what happens when we use the back navigation after a search, where "q" now takes a null state
  //   document!.getElementById("q")!.value = q;
  //  }, [q]);

//    Navigation.location will show up when the app is navigating to a new URL and loading the data for it.
//      Goes away when there is no pending navigation
   const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    return (
      <ProSidebarProvider>
        <SideBar /> 
        <Main>          
          <Navbar />
          <OutletContainer>
            <Outlet />                          
          </OutletContainer> 
        </Main>
     </ProSidebarProvider>
    );
  }