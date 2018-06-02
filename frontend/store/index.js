export const state = () => ({
  adminPanelLink: ''
})

export const mutations = {
  INITIALIZE: (state, { adminPanelLink }) => {
    state.adminPanelLink = adminPanelLink
  }
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, ctx) {
    commit('INITIALIZE', {
      adminPanelLink: ctx.env.API_URL
    })
    await dispatch('contact/getEntries', { axios: ctx.$axios })
  },
}

export const getters = {
}
