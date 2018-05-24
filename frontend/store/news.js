import { getImage } from '~/assets/js/utils'

export const state = () => ({
  entries: []
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

export const actions = {
  async GET_ENTRIES ({ commit, rootState }) {
    const { entries } = await this.$axios.$get(`/api/collections/get/news?lang=${rootState.i18n.locale}`)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        title: entry.title,
        excerpt: entry.excerpt,
        image: getImage(entry.image),
        link: entry.title_slug,
      }))
    )
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
