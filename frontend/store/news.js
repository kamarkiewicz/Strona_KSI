import { getImage, fetchCollection, fetchSingleByTitle } from '~/assets/js/utils'

const COLLECTION_NAME = 'news'

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
        title: entry.title,
        excerpt: entry.excerpt,
        image: getImage(entry.image),
        link: entry.title_slug,
      }))
    )
  },
  async getSingle ({ commit, rootState }, { axios, slug }) {
    const entry = await fetchSingleByTitle(axios, COLLECTION_NAME, slug, rootState.i18n.locale)
    commit('SET_ENTRY', {
      title: entry.title,
      date: entry._created * 1000,
      excerpt: entry.excerpt,
      content: entry.content,
      image: getImage(entry.image),
    })
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
  entry: state => state.entry,
}
