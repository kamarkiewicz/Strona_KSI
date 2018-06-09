import { BACK_DEFAULT_LOCALE, fetchRegion, fetchSlides } from '~/assets/js/utils'
import _ from 'lodash'

// Common Store
export const state = () => ({
  // Used in AppHeader >> LangSwitcher
  switchLocalePathImpl: null,
  // Used in HomeCarousel
  slides: [],
  // Used in AppFooter
  adminPanelLink: process.env.API_URL,

  // Regions' data
  contactDetails: {},
  privacyPage: {},
})

export const mutations = {
  SET_SWITCHLOCALEPATHIMPL: (state, callback) => state.switchLocalePathImpl = callback,
  SET_SLIDES: (state, slides) => state.slides = slides,
  SET_CONTACTDETAILS: (state, contactDetails) => state.contactDetails = contactDetails,
  SET_PRIVACYPAGE: (state, privacyPage) => state.privacyPage = privacyPage,
}

export const actions = {
  async getSlides ({ commit, rootState }, { axios }) {
    const slides = await fetchSlides (axios, 'carousel', rootState.i18n.locale)
    await commit('SET_SLIDES', slides)
  },
  async getContactDetails ({ commit, rootState }, { axios }) {
    let data = await fetchRegion (axios, 'contact')
    data = data[BACK_DEFAULT_LOCALE] // nothing is localized here; fallback locale
    data.location = `https://maps.google.com/?q=${data.location.lat},${data.location.lng}`
    commit('SET_CONTACTDETAILS', data)
  },
  async getPrivacyPage ({ commit, rootState }, { axios }) {
    if (!_.isEmpty(rootState.privacyPage)) return; // data already fetched
    let data = await fetchRegion (axios, 'privacy')
    commit('SET_PRIVACYPAGE', data)
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
  privacyPage: state => state.privacyPage[state.i18n.locale],
}
