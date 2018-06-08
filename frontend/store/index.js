import { fetchRegion, fetchSlides } from '~/assets/js/utils'

// Common Store
export const state = () => ({
  // Used in AppHeader >> LangSwitcher
  switchLocalePathImpl: null,
  // Used in HomeCarousel
  slides: [],
  // Used in AppFooter
  adminPanelLink: process.env.API_URL,
  contactDetails: {
    email: '',
    location: '',
    details: ''
  },
})

export const mutations = {
  SET_SWITCHLOCALEPATHIMPL: (state, callback) => state.switchLocalePathImpl = callback,
  SET_SLIDES: (state, slides) => state.slides = slides,
  SET_CONTACTDETAILS: (state, contactDetails) => state.contactDetails = contactDetails,
}

export const actions = {
  async getSlides ({ commit, rootState }, { axios }) {
    const slides = await fetchSlides (axios, 'carousel', rootState.i18n.locale)
    await commit('SET_SLIDES', slides)
  },
  async getContactDetails ({ commit, rootState }, { axios }) {
    let data = await fetchRegion (axios, 'contact', rootState.i18n.locale)
    data.location = `https://maps.google.com/?q=${data.location.lat},${data.location.lng}`
    commit('SET_CONTACTDETAILS', data)
  },

  async nuxtServerInit (store, app) {
    await store.dispatch('getContactDetails', { axios: app.$axios })
  },
}

export const getters = {
  switchLocalePathImpl: state => state.switchLocalePathImpl,
  slides: state => state.slides,
  adminPanelLink: state => state.adminPanelLink,
  contactDetails: state => state.contactDetails,
}
