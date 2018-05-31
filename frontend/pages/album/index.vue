<template>
  <section class="album wrapper">

    <div class="container pt-5 pb-4">
      <h2 class="major">Album galerii</h2>
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
  },
}
</script>

<style lang="scss" scoped>

$bg-color: #f5f8fa;
$headtitle-color: #00a6d9;
$content-color: #637485;

.album {
  &.wrapper {
      background-color: $bg-color;
      color: $content-color;
  }

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
