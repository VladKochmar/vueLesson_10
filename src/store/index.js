import { createStore } from 'vuex'

import { contacts } from '@/data/contacts'

export default createStore({
  state: {
    contactsList: contacts,
    searchInputValue: null,
  },

  getters: {
    searchInputValue: (state) => state.searchInputValue,

    getContactById: (state) => (contactId) => ({ ...state.contactsList.find((contact) => contact.id == contactId) }),

    filteredContactsList: (state) =>
      !state.searchInputValue
        ? state.contactsList
        : state.contactsList.filter(
            (contact) =>
              contact.name.toLowerCase().includes(state.searchInputValue.toLowerCase()) ||
              contact.email.toLowerCase().includes(state.searchInputValue.toLowerCase())
          ),
  },

  mutations: {
    updateContact(state, contactData) {
      const index = state.contactsList.findIndex((contact) => contact.id === contactData.id)
      console.log(state.contactsList[index])
      state.contactsList[index] = { ...contactData }
      console.log(state.contactsList)
    },

    addContact(state, contact) {
      state.contactsList.push(contact)
    },

    updateSearchInputValue(state, newValue) {
      state.searchInputValue = newValue
    },
  },

  actions: {
    updateContact({ commit }, contactData) {
      commit('updateContact', contactData)
    },

    addContact({ commit }, contact) {
      commit('addContact', contact)
    },

    updateSearchInputValue({ commit }, newValue) {
      commit('updateSearchInputValue', newValue)
    },
  },

  modules: {},
})
