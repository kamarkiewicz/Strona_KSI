<template>
  <div class="py-5 text-center bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Członkowie Koła Studentów Informatyki</h1>
          <p class="lead">I TY możesz znaleźć się wśród nas!</p>
        </div>
      </div>
      <div class="row">

        <div class="col-md-4 p-4" v-for="el in members" :key="el">
          <img class="img-fluid d-block rounded-circle mx-auto" :src="el.image.path">
          <p class="my-4">
            <i>{{ el.description }}</i>
          </p>
          <p>
            <b>{{ el.name }}</b>
            <br>{{ el.title }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('members/getEntries')
  },
  computed: {
    ...mapGetters({
      members: 'members/entries',
    })
  },
  head () {
    return {
      title: 'Członkowie',
    }
  }
}
</script>
