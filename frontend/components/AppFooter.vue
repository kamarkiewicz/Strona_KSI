<template>
  <footer class="app-footer slant-in-before bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="p-4 col-md-4">
          <h2 class="mb-4 text-secondary">Inne linki</h2>
          <ul class="list-unstyled">
            <li v-for="el in leftSectionLinks" :key="el.id">
              <a v-if="el.external" :href="el.link" class="text-white" target="_blank">{{ el.caption }}</a>
              <nuxt-link v-else :to="localePath(el.link)" class="text-white">{{ el.caption }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="p-4 col-md-4">
          <h2 class="mb-4 text-secondary">Kontakt</h2>
          <div class="row pb-2">
              <div class="col-xs-3 text-center">
                  <i class="fa mr-3 fa-envelope-o"></i>
              </div>
              <div class="col-xs-9">
                <a :href="'mailto:' + email" class="link-unstyled">
                  <div v-text="email"></div>
                </a>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-3 text-center">
                  <i class="fa mr-3 fa-map-marker"></i>
              </div>
              <div class="col-xs-9">
                  <a :href="location" class="link-unstyled" target="_blank">
                    <div v-html="details"></div>
                  </a>
              </div>
          </div>
        </div>

        <div class="p-4 col-md-4">
          <div class="row">
            <div class="col-md-4">
              <a href="https://www.facebook.com/uniwroc/" target="_blank">
                <i class="fa fa-fw fa-3x text-white fa-facebook"></i>
              </a>
            </div>
            <div class="col-md-4">
              <a href="https://github.com/ksiuwr" target="_blank">
                <i class="fa fa-fw fa-3x text-white fa-github"></i>
              </a>
            </div>
            <div class="col-md-4">
              <a href="https://www.instagram.com/uniwersytet_wroclawski/" target="_blank">
                <i class="fa fa-fw fa-3x text-white fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-3">
          <p class="text-center text-white">© KSI</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      leftSectionLinks: [
        {
          id: 1,
          caption: 'Polityka prywatności',
          link: 'privacy',
        },
        {
          id: 2,
          caption: 'Aktualności',
          link: 'news',
        },
        {
          id: 3,
          caption: 'Galeria',
          link: 'album',
        },
        {
          id: 4,
          caption: 'Panel administracyjny',
          link: this.$store.state.adminPanelLink,
          external: true,
        },
      ]
    }
  },
  computed: {
    ...mapGetters({
      email: 'contact/email',
      location: 'contact/location',
      details: 'contact/details',
    })
  }
}
</script>
