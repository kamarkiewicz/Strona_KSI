<template>
  <section class="wrapper">
    <div class="inner">

      <h2 class="major">Vitae phasellus</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>

      <section class="features">
        <article v-for="el in albums" :key="el.id">
          <a class="image"><img :src="el.imgSrc" alt=""></a>
          <h3 class="major">{{ el.title }}</h3>
          <p>{{ el.content }}</p>
          <a class="special" :href="el.albumLink">Learn more</a>
        </article>
      </section>

      <ul class="actions">
        <li><a class="button">Browse All</a></li>
      </ul>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      albums: [
        {
          id: 1,
          imgSrc: 'https://picsum.photos/505/295?image=1031',
          title: 'Sed feugiat lorem',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 2,
          imgSrc: 'https://picsum.photos/505/295?image=1032',
          title: 'Nisl placerat',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 3,
          imgSrc: 'https://picsum.photos/505/295?image=1033',
          title: 'Ante fermentum',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 4,
          imgSrc: 'https://picsum.photos/505/295?image=1014',
          title: 'Fusce consequat',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 5,
          imgSrc: 'https://picsum.photos/505/295?image=1035',
          title: 'Sed feugiat lorem',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 6,
          imgSrc: 'https://picsum.photos/505/295?image=1036',
          title: 'Nisl placerat',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 7,
          imgSrc: 'https://picsum.photos/505/295?image=1037',
          title: 'Ante fermentum',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 8,
          imgSrc: 'https://picsum.photos/505/295?image=1038',
          title: 'Fusce consequat',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        },
        { id: 9,
          imgSrc: 'https://picsum.photos/505/295?image=1039',
          title: 'Sed feugiat lorem',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
          albumLink: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .box-shadow {
//   box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
// }

.wrapper {
    background-color: #2e3141;
    position: relative;
}

.wrapper .inner {
    padding: 3em 0 1em 0;
    margin: 0 auto;
    width: 56em;
}

h2 {
    font-size: 1.2em;
}

p {
    margin: 0 0 2em 0;
}

.features {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 2em 0;
}

.features article {
    padding: 1.75em 1.75em 0.1em 1.75em;
    background-color: #353849;
    border-radius: 5px;
    margin: 1.5em 3em 1.5em 0;
    width: calc(50% - 3em);
}

.features article .image {
    border-radius: 5px 5px 0 0;
    display: block;
    margin-bottom: 1.75em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    position: relative;
    width: calc(100% + 3.5em);
}

.image {
    border-radius: 5px;
    border: 0;
    display: inline-block;
    position: relative;
}

a {
    -moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
    color: #ffffff;
    text-decoration: none;
}

.features article .image img {
    border-radius: 5px 5px 0 0;
    width: 100%;
}

.image img {
    border-radius: 5px;
    display: block;
}

h1.major, h2.major, h3.major, h4.major, h5.major, h6.major {
    padding-bottom: 1em;
    border-bottom: solid 2px rgba(255, 255, 255, 0.125);
}

h3 {
    font-size: 0.9em;
}
h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
}

a {
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
    color: #ffffff;
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
    border: solid 2px rgba(255, 255, 255, 0.125);
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
    text-transform: none !important;
}

</style>
