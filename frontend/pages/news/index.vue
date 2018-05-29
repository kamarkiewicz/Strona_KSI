<template>
  <section class="news wrapper">

    <div class="container pt-5 pb-4">
      <h2 class="major">{{ $t('general.news') }}</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
    </div>

    <section class="container px-5">
      <b-row>
        <b-col md="12" lg="6" class="p-3" v-for="el in news" :key="el.id">
          <preview-card
            :image="el.image"
            :date="el.date"
            :title="el.title"
            :excerpt="el.excerpt"
            :link="el.link" linkAppend
            linkText="Czytaj więcej" />
        </b-col>
      </b-row>

      <b-pagination class="pt-4" align="center"
        :total-rows="totalRows"
        v-model="currentPage"
        :per-page="perPage" />
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
  data () {
    return {
      currentPage: 1,
      perPage: 4,
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/entries',
      totalRows: 'news/entriesCount',
    })
  },
  async fetch ({ app, store }) {
    await store.dispatch('news/getEntries', { axios: app.$axios })
  },
  head () {
    return {
      title: this.$t('general.news'),
    }
  },
}
</script>


<style lang="scss" scoped>

$bg-color: #f5f8fa;
$headtitle-color: #00a6d9;
$content-color: #637485;

.news {
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
