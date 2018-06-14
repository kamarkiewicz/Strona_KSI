import { BACK_DEFAULT_LOCALE, fetchRegion, Image } from '~/assets/js/utils'
import _ from 'lodash'

// Common Store
export const state = () => ({
  // Used in AppHeader >> LangSwitcher
  switchLocalePathImpl: null,
  // Used in AppFooter
  adminPanelLink: process.env.API_URL,

  // Regions' data
  contactDetails: {},
  homepage: {},
  privacyPage: {},
  zosiaPage: {},
})

export const mutations = {
  SET_SWITCHLOCALEPATHIMPL: (state, callback) => state.switchLocalePathImpl = callback,
  SET_CONTACTDETAILS: (state, contactDetails) => state.contactDetails = contactDetails,
  SET_HOMEPAGE: (state, homepage) => state.homepage = homepage,
  SET_PRIVACYPAGE: (state, privacyPage) => state.privacyPage = privacyPage,
  SET_ZOSIAPAGE: (state, zosiaPage) => state.zosiaPage = zosiaPage,
}

export const actions = {
  async getHomepage ({ commit, rootState }, { axios }) {
    if (!_.isEmpty(rootState.homepage)) return; // data already fetched
    let data = await fetchRegion (axios, 'carousel')
    _.each(data, (entry, locale) => {

      data[locale]['showcase'] = entry['showcase']
        .map(entry => entry.value)
        .map(entry => ({
          title: entry.title,
          description: entry.description,
          image: new Image(entry.image),
          link: entry.link,
        }))

      data[locale]['slides'] = entry['slides']
        .map(slide => slide.value)
        .map(slide => ({
          caption: slide.caption,
          description: slide.description,
          image: new Image(slide.image),
        }))

    })
    commit('SET_HOMEPAGE', data)
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
  async getZosiaPage ({ commit, rootState }, { axios }) {
    if (!_.isEmpty(rootState.zosiaPage)) return; // data already fetched
    let data = await fetchRegion (axios, 'zosia')
    commit('SET_ZOSIAPAGE', data)
  },

  async nuxtServerInit (store, app) {
    await store.dispatch('getContactDetails', { axios: app.$axios })
  },
}

export const getters = {
  switchLocalePathImpl: state => state.switchLocalePathImpl,
  adminPanelLink: state => state.adminPanelLink,
  contactDetails: state => state.contactDetails,
  homepage: state => state.homepage[state.i18n.locale],
  privacyPage: state => state.privacyPage[state.i18n.locale],
  zosiaPage: state => state.zosiaPage[state.i18n.locale],
}
