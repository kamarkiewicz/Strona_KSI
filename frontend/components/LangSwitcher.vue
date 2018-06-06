<template>
  <b-nav-item-dropdown right>
    <template slot="button-content"><i class="fa d-inline fa-lg fa-globe pr-1"></i></template>
    <b-dropdown-item
      v-for="(locale, index) in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="index"
      :exact="true"
      :to="pathResolver(locale.code)"
      v-text="locale.name"
    ></b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  methods: {
    pathResolver (code) {
      const switchLocalePathImpl = this.$store.getters['switchLocalePathImpl'] || this.switchLocalePath
      return switchLocalePathImpl(code)
    },
  },
}
</script>
