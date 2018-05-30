import { Image, fetchCollection, fetchSingleByTitle } from '~/assets/js/utils'

const COLLECTION_NAME = 'galleries'

export const state = () => ({
  entries: [],
  entry: {}
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
  SET_ENTRY: (state, entry) => state.entry = entry,
}

export const actions = {
  async getEntries ({ commit, rootState }, { axios }) {
    const { entries } = await fetchCollection(axios, COLLECTION_NAME, rootState.i18n.locale)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        image: new Image(entry.image), // Featured image
        title: entry.title,
        description: entry.description,
        images: entry.entries.map(e => new Image(e)),
        link: entry.title_slug,
      }))
    )
  },
  async getSingle ({ commit, rootState }, { axios, slug }) {
    const entry = await fetchSingleByTitle(axios, COLLECTION_NAME, slug, rootState.i18n.locale)
    commit('SET_ENTRY', {
      album: slug,
      title: entry.title,
      images: entry.entries.map(e => new Image(e))
    })
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
  entry: state => state.entry,
}
