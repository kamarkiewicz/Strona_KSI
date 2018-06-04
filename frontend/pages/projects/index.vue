<template>
  <div class="projects-page py-5">
    <div class="container">

      <div class="row">
        <div class="col-12">
          <h2 class="major">Projekty</h2>
          <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
        </div>
      </div>

      <div class="row" v-for="(chunk, index) in entryChunks" :key="`chunk-${index}`">
        <div class="py-5 col-md-6" v-for="el in chunk" :key="el.id">
          <div class="row">
            <div class="text-center col-4">
              <i class="d-block mx-auto fa fa-5x" :class="el.icon"></i>
            </div>
            <div class="col-8">
              <h5 class="mb-3 text-primary">
                <b>{{ el.title }}</b>
              </h5>
              <p class="my-1">{{ el.excerpt }}</p>
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


<style lang="scss" scoped>

$headtitle-color: #00a6d9;

.projects-page {

  h1.major, h3.major, h4.major, h5.major, h6.major {
      border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  }

  h3 {
      font-size: 1.2em;
  }

  h1, h2, h3, h4, h5, h6 {
      color: $headtitle-color;
      font-weight: 400;
      margin: 0 0 1em 0;
  }
}

</style>
