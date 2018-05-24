import { getImage } from '~/assets/js/utils'

export const state = () => ({
  entries: []
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

export const actions = {
  async getEntries ({ commit, rootState }) {
    const { entries } = await this.$axios.$get(`/api/collections/get/galleries?lang=${rootState.i18n.locale}`)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        image: getImage(entry.image), // Featured image
        title: entry.title,
        description: entry.description,
        images: entry.images.map(image => getImage(image)),
        link: 'slug',
      }))
    )
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
