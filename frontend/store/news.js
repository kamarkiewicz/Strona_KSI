export const state = () => ({
  entries: []
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

export const actions = {
  async GET_ENTRIES ({ commit }) {
    const { entries } = await this.$axios.$get('http://localhost:8080/api/collections/get/news')
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        title: entry.title,
        excerpt: entry.excerpt,
        image: entry.image.path,
        link: '#entry._id',
      }))
    )
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
