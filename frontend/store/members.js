import { getImage } from '~/assets/js/utils'

export const state = () => ({
  entries: []
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

export const actions = {
  async getEntries ({ commit, rootState }) {
    const { entries } = await this.$axios.$get(`/api/collections/get/members?lang=${rootState.i18n.locale}`)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        name: entry.name,
        title: entry.title,
        description: entry.description,
        image: getImage(entry.image), // Avatar
      }))
    )
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
