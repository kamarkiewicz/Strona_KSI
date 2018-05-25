import { getImage, fetchCollection, fetchSingleByTitle } from '~/assets/js/utils'

export const state = () => ({
  entries: [],
  entry: {}
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
  SET_ENTRY: (state, entry) => state.entry = entry,
}

export const actions = {
  async getEntries ({ commit, rootState }) {
    const { entries } = await fetchCollection(this.$axios, 'galleries', rootState.i18n.locale)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        image: getImage(entry.image), // Featured image
        title: entry.title,
        description: entry.description,
        images: entry.images.map(image => getImage(image)),
        link: entry.title_slug,
      }))
    )
  },
  async getSingle ({ commit, rootState }, { slug }) {
    const entry = await fetchSingleByTitle(this.$axios, 'galleries', slug, rootState.i18n.locale)
    commit('SET_ENTRY', {
      album: slug,
      title: entry.title,
      images: entry.images.map(getImage)
    })
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
  entry: state => state.entry,
}
