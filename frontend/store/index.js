export const state = () => ({
  adminPanelLink: ''
})

export const mutations = {
  INITIALIZE: (state, { adminPanelLink }) => {
    state.adminPanelLink = adminPanelLink
  }
}

export const actions = {
  nuxtServerInit ({ commit }, ctx) {
    commit('INITIALIZE', {
      adminPanelLink: ctx.env.API_URL
    })
  },
}

export const getters = {
}
