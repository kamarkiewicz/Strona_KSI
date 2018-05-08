<template>
  <section id="home-news" class="news wrapper">
    <div class="container py-5">

      <h2 class="major">{{ $t('general.news') }}</h2>

      <section class="container-fluid">
        <b-row>
          <b-col lg="4" v-for="el in news" :key="el.id">

            <article>
              <a class="image"><img :src="el.image" alt=""></a>
              <h3 class="major">{{ el.date }} | {{ el.title }}</h3>
              <div v-html="el.excerpt" id="excerpt"></div>
              <nuxt-link class="special" :to="localePath('news') + '/slug'">Czytaj więcej</nuxt-link>
            </article>

          </b-col>
        </b-row>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  data () {
    var news = [
      {
        id: 1,
        date: '2018-11-28',
        title: 'Tytuł aktualności 1',
        excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
        image: 'https://picsum.photos/270/180?image=1024',
        link: '#read-more-link'
      },
      {
        id: 2,
        date: '2018-11-28',
        title: 'Tytuł aktualności 2',
        excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
        image: 'https://picsum.photos/270/180?image=1020',
        link: '#read-more-link'
      },
      {
        id: 3,
        date: '2018-11-28',
        title: 'Tytuł aktualności 3',
        excerpt: '<p>A party you cannot refuse...</p><p>Osoby zainteresowane proszone są o imienny zapis w pokoju KSI.</p>',
        image: 'https://picsum.photos/270/180?image=1010',
        link: '#read-more-link'
      },
    ]
    return {
      news: news
    }
  }
}
</script>

<style lang="scss">

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
