<template>
  <header class="header">
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-container class="fluid-md">
          <b-navbar-brand :to="localePath('index')">
              <img src="~/assets/uwr-logo.png" width="200" height="75" alt="">
          </b-navbar-brand>
          <b-navbar-brand :to="localePath('index')">
              <img src="~/assets/ksi-logo.png" width="200" height="75" alt="">
          </b-navbar-brand>
          <b-navbar-toggle class="ml-auto" target="brandnav_collapse"></b-navbar-toggle>

          <b-collapse is-nav id="brandnav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item target="_blank" href="https://www.zosia.org/"><i class="fa d-inline fa-lg fa-calendar-o"></i> ZOSIA</b-nav-item>
              <b-nav-item target="_blank" href="http://continuum.uni.wroc.pl/"><i class="fa d-inline fa-lg fa-handshake-o"></i> Continuum</b-nav-item>
              <b-nav-item target="_blank" href="http://www.ii.uni.wroc.pl/"><i class="fa d-inline fa-lg fa-bookmark-o"></i> II UWr</b-nav-item>
              <b-nav-item-dropdown right>
                <template slot="button-content"><i class="fa d-inline fa-lg fa-globe pr-1"></i></template>
                <b-dropdown-item
                  v-for="(locale, index) in $i18n.locales"
                  v-if="locale.code !== $i18n.locale"
                  :key="index"
                  :exact="true"
                  :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>

    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-container class="fluid-lg">
        <b-navbar-toggle class="ml-auto" target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="localePath('news')">Aktualności</b-nav-item>
            <b-nav-item :to="localePath('about-us')">O nas</b-nav-item>
            <b-nav-item :to="localePath('projects')">Projekty</b-nav-item>
            <b-nav-item :to="localePath('members')">Członkowie</b-nav-item>
            <b-nav-item :to="localePath('album')">Galeria</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  components: {
  }
}
</script>
