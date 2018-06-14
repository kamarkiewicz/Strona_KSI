<template>
  <div class="projects-page pt-5 pb-slant">

    <div class="container">
      <header>
        <h2 class="text-primary pb-4" v-text="$t('projects.title')"></h2>
        <p class="text-secondary" v-text="$t('projects.description')"></p>
      </header>
    </div>

    <div class="container pb-4">
      <div class="row" v-for="(chunk, index) in entryChunks" :key="`chunk-${index}`">
        <div class="py-5 col-md-6" v-for="el in chunk" :key="el.id">
          <div class="row">
            <div class="text-center col-4">
              <i class="d-block mx-auto fa fa-5x" :class="el.icon"></i>
            </div>
            <div class="col-8">
              <h5 class="mb-3 text-primary font-weight-bold" v-text="el.title"></h5>
              <p class="my-1" v-text="el.excerpt"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  computed: {
    ...mapGetters({
      entries: 'projects/entries',
    }),
    entryChunks () {
      return _.chunk(this.entries, 2)
    },
  },
  async fetch ({ app, store }) {
    await store.dispatch('projects/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: 'Projekty',
    }
  }
}
</script>
