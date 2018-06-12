<template>
  <footer class="app-footer slant-in-before bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="p-4 col-md-4">
          <h2 class="mb-4 text-secondary" v-text="$t('appfooter.leftSectionCaption')"></h2>
          <ul class="list-unstyled">
            <li v-for="(el, index) in leftSectionLinks" :key="index">
              <nuxt-link class="text-white" v-text="el.caption" v-if="!el.external" :to="localePath(el.link)"></nuxt-link>
              <a class="text-white" v-text="el.caption" v-else :href="el.link" target="_blank" rel="noopener noreferrer"></a>
            </li>
          </ul>
        </div>

        <div class="p-4 col-md-4">
          <h2 class="mb-4 text-secondary" v-text="$t('general.contact')"></h2>
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
                  <a :href="location" class="link-unstyled" target="_blank" rel="noopener noreferrer">
                    <div v-html="details"></div>
                  </a>
              </div>
          </div>
        </div>

        <div class="p-4 col-md-4">
          <div class="row">
            <div class="col-md-4">
              <a href="https://www.facebook.com/uniwroc/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-fw fa-3x text-white fa-facebook"></i>
              </a>
            </div>
            <div class="col-md-4">
              <a href="https://github.com/ksiuwr" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-fw fa-3x text-white fa-github"></i>
              </a>
            </div>
            <div class="col-md-4">
              <a href="https://www.instagram.com/uniwersytet_wroclawski/" target="_blank" rel="noopener noreferrer">
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
  computed: {
    ...mapGetters({
      adminPanelLink: 'adminPanelLink',
      contactDetails: 'contactDetails',
    }),
    leftSectionLinks () {
      return [
        {
          caption: this.$t('appfooter.privacyCaption'),
          link: 'privacy',
        },
        {
          caption: this.$t('general.news'),
          link: 'news',
        },
        {
          caption: this.$t('general.album'),
          link: 'album',
        },
        {
          caption: this.$t('appfooter.adminPanelCaption'),
          link: this.adminPanelLink,
          external: true,
        },
      ]
    },
    email () {
      return this.contactDetails.email
    },
    location () {
      return this.contactDetails.location
    },
    details () {
      return this.contactDetails.details
    },
  },
}
</script>
