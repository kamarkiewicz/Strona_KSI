<template>
  <section class="album-page bg-light">

    <div class="container pt-5 pb-4">
      <h2 class="text-primary pb-4">Album galerii</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
    </div>

    <section class="container px-5">
      <b-row>
        <b-col md="12" lg="6" class="p-3" v-for="el in galleries" :key="el.id">
          <preview-card
            :image="el.image"
            :title="el.title"
            :excerpt="el.description"
            :link="localePath({ name: 'album-gallery', params: { gallery: el.link }})"
            linkText="Przejdź do galerii" />
        </b-col>
      </b-row>
    </section>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import PreviewCard from "~/components/PreviewCard.vue"

export default {
  components: {
    PreviewCard,
  },
  computed: {
    ...mapGetters({
      galleries: 'album/entries',
      totalRows: 'album/entriesCount',
    })
  },
  async fetch ({ app, store }) {
    await store.dispatch('album/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.album'),
    }
  }
}
</script>
