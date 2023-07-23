import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.contacts;
export const selectFilteredContacts = (state) => state.filters;

export const displayedContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filteredContacts) => {
    const filter = filteredContacts?.filter?.toLowerCase() || "";
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  }
);
