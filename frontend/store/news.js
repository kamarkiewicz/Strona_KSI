export const state = () => ({
  entries: []
})

export const mutations = {
  SET_ENTRIES: (state, entries) => state.entries = entries,
}

function getImage (image) {
  if ((image || {}).path) {
    // path may be relative URL
    let isAbsolute = /^(?:[a-z]+:)?\/\//i.test(image.path)
    image.path = (isAbsolute ? '' : process.env.API_URL) + image.path
  }
  return image
}

export const actions = {
  async GET_ENTRIES ({ commit, rootGetters }) {
    const { entries } = await this.$axios.$get(`/api/collections/get/news?lang=${rootGetters.locale}`)
    commit('SET_ENTRIES', entries.map(entry => ({
        id: entry._id,
        date: entry._created  * 1000,
        title: entry.title,
        excerpt: entry.excerpt,
        image: getImage(entry.image),
        link: '#entry._id',
      }))
    )
  }
}

export const getters = {
  entries: state => state.entries,
  entriesCount: state => state.entries.length,
}
