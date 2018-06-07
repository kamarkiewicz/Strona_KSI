import { Image, fetchCollection, fetchSingleByTitle } from '~/assets/js/utils'

const COLLECTION_NAME = 'history'

export const state = () => ({
  entries: [],
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

export const actions = {
  async getEntries ({ commit, rootState }, { axios }) {
    const { entries } = await fetchCollection(axios, COLLECTION_NAME, rootState.i18n.locale)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: Date.parse(entry.date), // Date fieldtype returns text
        title: entry.title,
        image: new Image(entry.image),
        content: entry.content,
      }))
    )
  },
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
