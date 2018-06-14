<template>
  <header class="header">
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-container class="fluid-md">
          <b-navbar-brand :to="localePath('index')">
              <img class="p-1" src="~/assets/brand-uwr.svg" width="200" height="75" alt="UWr">
          </b-navbar-brand>
          <b-navbar-brand :to="localePath('index')">
              <img class="p-1" src="~/assets/brand-ksi.svg" width="220" height="75" alt="KSI">
          </b-navbar-brand>
          <b-navbar-toggle class="ml-auto" target="brandnav_collapse"></b-navbar-toggle>

          <b-collapse is-nav id="brandnav_collapse">
            <b-navbar-nav role="menubar" class="ml-auto">
              <b-nav-item target="_blank" rel="noopener noreferrer" href="https://www.zosia.org/"><i class="fa d-inline fa-lg fa-calendar-o"></i> ZOSIA</b-nav-item>
              <b-nav-item target="_blank" rel="noopener noreferrer" href="http://continuum.uni.wroc.pl/"><i class="fa d-inline fa-lg fa-handshake-o"></i> Continuum</b-nav-item>
              <b-nav-item target="_blank" rel="noopener noreferrer" href="http://www.ii.uni.wroc.pl/"><i class="fa d-inline fa-lg fa-bookmark-o"></i> II UWr</b-nav-item>
              <lang-switcher />
            </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>

    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-container class="fluid-lg">
        <b-navbar-toggle class="ml-auto" target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="localePath('news')">{{ $t('general.news') }}</b-nav-item>
            <b-nav-item :to="localePath('about-us')">{{ $t('general.aboutUs') }}</b-nav-item>
            <b-nav-item :to="localePath('projects')">{{ $t('general.projects') }}</b-nav-item>
            <b-nav-item :to="localePath('members')">{{ $t('general.members') }}</b-nav-item>
            <b-nav-item :to="localePath('album')">{{ $t('general.album') }}</b-nav-item>
            <b-nav-item :to="localePath('zosia')">ZOSIA</b-nav-item>
            <b-nav-item v-scroll-to="'#contact'">{{ $t('general.contact') }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: {
    LangSwitcher,
  }
}
</script>
