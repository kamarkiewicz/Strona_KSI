<template>
  <div class="home">

    <home-news-component></home-news-component>

    <div class="py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-5 align-self-center order-md-2">
            <img class="img-fluid d-block mb-4 w-100 img-thumbnail" src="https://picsum.photos/270/180?image=985"> </div>
          <div class="col-md-7">
            <h2 class="text-primary pt-3">O nas. Historia KSI</h2>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-5 align-self-center">
            <img class="img-fluid d-block mb-4 w-100 img-thumbnail" src="https://picsum.photos/270/180?image=986"> </div>
          <div class="col-md-7">
            <h2 class="text-primary pt-3">Projekty</h2>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-5 align-self-center order-md-2">
            <img class="img-fluid d-block mb-4 w-100 img-thumbnail" src="https://picsum.photos/270/180?image=987"> </div>
          <div class="col-md-7">
            <h2 class="text-primary pt-3">Członkowie</h2>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5 text-white bg-secondary">
      <div class="container">
        <div class="row">
          <div class="align-self-center p-5 col-md-6">
            <h1 class="mb-4">Zobacz na własne oczy!</h1>
            <p class="mb-5">Get a fluid web page working on all devices with the Bootstrap 4 grid system.&nbsp; Responsive design made intuitive and effective with Pingendo.</p>
            <a class="btn btn-lg btn-outline-light" href="#">Przejdź do galerii</a>
          </div>
          <div class="col-md-6 p-0">
            <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                        background="#ababab"
                        :interval="4000"
                        img-width="500"
                        img-height="500"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
            >
              <b-carousel-slide caption="First slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/500/500?image=1033"
              ></b-carousel-slide>
              <b-carousel-slide caption="Second slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/500/500?image=1060"
              ></b-carousel-slide>
              <b-carousel-slide caption="Third slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/500/500?image=1059"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNewsComponent from './HomeNews.vue'

export default {
  name: 'HomeComponent',
  components: {
    HomeNewsComponent
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
</style>
