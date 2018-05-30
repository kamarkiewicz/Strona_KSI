<template>
  <section class="showcase wrapper">
    <div class="container py-5">

      <div class="row mb-5" v-for="(el, index) in entries" :key="el.id">
        <div class="col-md-5 align-self-center"
            :class="{ 'order-md-2': index % 2 === 0 }">
          <img class="img-fluid d-block mb-4 w-100 img-thumbnail" :src="el.image.path">
        </div>
        <div class="col-md-7">
          <h2 class="text-primary pt-3" v-text="el.title"></h2>
          <p class="description" v-text="el.description"></p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { Image } from '~/assets/js/utils'

export default {
  data () {
    return {
      entries: [
        {
          id: 1,
          title: 'O nas. Historia KSI',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=985'),
          link: 'about-us',
        },
        {
          id: 2,
          title: 'Projekty',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=986'),
          link: 'projects',
        },
        {
          id: 3,
          title: 'Członkowie',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: new Image('https://picsum.photos/270/180?image=987'),
          link: 'members',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/utils';

$bg-color: #ffffff;

.showcase {
  background-color: $bg-color;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -5em;

    width: 100%;
    height: 5em;

    @include bg-triangle($bg-color);
    transform: translateY(0) rotate(0); // scaleX(-1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 5em;

    @include bg-triangle($bg-color);
    transform: translateY(100%) rotate(180deg); // scaleX(-1);
  }
}
</style>
