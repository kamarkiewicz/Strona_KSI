<template>
  <div class="members-page pt-5 pb-slant bg-light">
    <div class="container text-center pb-4">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-primary" v-text="$t('members.title')"></h1>
          <p class="lead" v-text="$t('members.description')"></p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 p-4" v-for="el in members" :key="el">
          <img class="img-fluid d-block rounded-circle mx-auto" :src="el.image.src" :alt="el.image.title">
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
      title: this.$t('general.members'),
    }
  }
}
</script>
