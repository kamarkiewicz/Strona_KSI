import { fetchRegion } from '~/assets/js/utils'

export const state = () => ({
  email: '',
  location: '',
  details: ''
})

export const mutations = {
  SET_ENTRIES: (state, { email, location, details }) => {
    state.email = email
    state.location = location
    state.details = details
  },
}

export const actions = {
  async getEntries ({ commit, rootState }, { axios }) {
    let data = await fetchRegion (axios, 'contact', rootState.i18n.locale)
    data.location = `https://maps.google.com/?q=${data.location.lat},${data.location.lng}`
    await commit('SET_ENTRIES', data)
  }
}

export const getters = {
  email: state => state.email,
  location: state => state.location,
  details: state => state.details,
}
