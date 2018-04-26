<template>
  <section id="news" class="news wrapper">

    <div class="container pt-5 pb-4">
      <h2 class="major">{{ $t('general.news') }}</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
    </div>

    <section class="container">
      <b-row>
        <b-col md="12" lg="6" v-for="el in news" :key="el.id">

          <article>
            <a class="image"><img :src="el.image" alt=""></a>
            <h3 class="major">{{ $d(el.date) }} | {{ el.title }}</h3>
            <div v-html="el.excerpt" class="excerpt"></div>
            <a class="special" :href="el.link">Czytaj więcej</a>
          </article>

        </b-col>
      </b-row>

      <b-pagination class="py-5" align="center" :total-rows="totalRows" v-model="currentPage" :per-page="perPage">
      </b-pagination>
    </section>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentPage: 1,
      perPage: 4,
    }
  },
  async fetch ({ store }) {
    await store.dispatch('news/GET_ENTRIES')
  },
  computed: {
    ...mapGetters({
      news: 'news/entries',
      totalRows: 'news/entriesCount',
    })
  }
}
</script>


<style lang="scss" scoped>

$bg-color: #f5f8fa;
$headtitle-color: #00a6d9;
$article-color: #ffffff;
$content-color: #637485;
$link-color: #00a6d9;
$linkicon-border: rgba($content-color, 0.125);
$corner-rounding: 0.5em;

.news {
  &.wrapper {
      background-color: $bg-color;
      color: $content-color;
  }

  article {
      // margin: 1.5em 3em 1.5em 0;
      padding: 1.75em 1.75em 0.1em 1.75em;
      background-color: $article-color;
      border-radius: $corner-rounding;
      box-shadow: 0 1em 5em rgba(0, 0, 0, 0.05);
  }

  article .image {
      border-radius: $corner-rounding $corner-rounding 0 0;
      display: block;
      margin-bottom: 1.75em;
      margin-left: -1.75em;
      margin-top: -1.75em;
      width: calc(100% + 3.5em);
  }

  article .image img {
      border-radius: $corner-rounding $corner-rounding 0 0;
      width: 100%;
  }

  h1.major, h2.major, h3.major, h4.major, h5.major, h6.major {
      padding-bottom: 1em;
      border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  }

  h2 {
      font-size: 1.2em;
  }

  h3 {
      font-size: 0.9em;
  }

  h1, h2, h3, h4, h5, h6 {
      color: $headtitle-color;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin: 0 0 1em 0;
      text-transform: uppercase;
  }

  a {
      transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
      border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
      color: $link-color;
      text-decoration: none;
  }

  a.special:not(.button) {
      text-decoration: none;
      border-bottom: 0;
      display: block;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin: 0 0 2em 0;
      text-transform: uppercase;
  }

  a.special:not(.button):before {
      transition: background-color 0.2s ease-in-out;
      border-radius: 100%;
      border: solid 2px $linkicon-border;
      content: '\f105';
      display: inline-block;
      font-size: 1.25em;
      height: 2em;
      line-height: 1.65em;
      margin-right: 0.85em;
      text-align: center;
      text-indent: 0.15em;
      vertical-align: middle;
      width: 2em;

      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
  }
}

</style>
