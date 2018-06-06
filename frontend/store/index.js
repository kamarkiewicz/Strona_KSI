import { fetchRegion, fetchSlides } from '~/assets/js/utils'

export const state = () => ({
  adminPanelLink: '',
  slides: [],
  switchLocalePathImpl: null,
})

export const mutations = {
  INITIALIZE: (state, { adminPanelLink }) => {
    state.adminPanelLink = adminPanelLink
  },
  SET_SLIDES: (state, slides) => state.slides = slides,
  SET_SWITCHLOCALEPATHIMPL: (state, callback) => state.switchLocalePathImpl = callback,
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, ctx) {
    commit('INITIALIZE', {
      adminPanelLink: ctx.env.API_URL
    })
    await dispatch('contact/getEntries', { axios: ctx.$axios })
  },
  async getSlides ({ commit, rootState }, { axios }) {
    const slides = await fetchSlides (axios, 'carousel', rootState.i18n.locale)
    await commit('SET_SLIDES', slides)
  },
}

export const getters = {
  slides: state => state.slides,
  switchLocalePathImpl: state => state.switchLocalePathImpl,
}
