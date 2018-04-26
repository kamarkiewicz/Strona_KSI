export default function ({ app }) {
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.store.commit('SET_LOCALE', newLocale)
  }
}
