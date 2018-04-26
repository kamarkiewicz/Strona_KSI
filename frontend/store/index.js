export const state = () => ({
  locale: 'pl',
})

export const mutations = {
  SET_LOCALE: (state, locale) => state.locale = locale,
}

export const getters = {
  locale: state => state.locale,
}
