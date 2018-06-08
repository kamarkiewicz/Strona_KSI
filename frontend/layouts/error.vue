<template>
  <div class="error-page container h-100 hmin-stronaksi">
    <div class="row h-100">
      <div class="col-12 text-center vcenter">
        <h1 v-if="error.statusCode === 404">{{ error.message || 'This page could not be found' }}</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Back to the home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss">
.error-page {
  position: relative;
  .vcenter {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
