<template>
  <div id="app">

    <b-navbar toggleable="md" type="light" variant="white">
      <b-container>
          <b-navbar-brand :to="localePath('index')">
              <img src="~/assets/uwr-logo.png" width="200" height="75" alt="">
          </b-navbar-brand>
          <b-navbar-brand :to="localePath('index')">
              <img src="~/assets/ksi-logo.png" width="200" height="75" alt="">
          </b-navbar-brand>
          <b-navbar-toggle class="ml-auto" target="brandnav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="brandnav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item><i class="fa d-inline fa-lg fa-calendar-o"></i> ZOSIA</b-nav-item>
              <b-nav-item><i class="fa d-inline fa-lg fa-handshake-o"></i> Continuum</b-nav-item>
              <b-nav-item><i class="fa d-inline fa-lg fa-bookmark-o"></i> II UWr</b-nav-item>
              <b-nav-item-dropdown right>
                <template slot="button-content"><i class="fa d-inline fa-lg fa-flag-o pr-1"></i></template>
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
      <b-container>
        <b-navbar-toggle class="ml-auto" target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="localePath('news')">Aktualności</b-nav-item>
            <b-nav-item :to="localePath('news')">O nas</b-nav-item>
            <b-nav-item :to="localePath('news')">Projekty</b-nav-item>
            <b-nav-item :to="localePath('news')">Członkowie</b-nav-item>
            <b-nav-item :to="localePath('album')">Galeria</b-nav-item>
          </b-navbar-nav>

          <b-nav-form class="m-0 ml-auto">
            <b-form-row class="mx-auto w-100">
              <b-col cols="9">
                <b-form-input class="w-100" type="text" placeholder="Podaj frazę"/>
              </b-col>
              <b-col cols="3">
                <b-button class="w-100" variant="primary" type="submit">
                  <i class="fa fa-search text-white"></i>
                </b-button>
              </b-col>
            </b-form-row>
          </b-nav-form>

        </b-collapse>
      </b-container>
    </b-navbar>

    <nuxt/>

    <footer class="footer bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="p-4 col-md-4">
            <h2 class="mb-4 text-secondary">Mapa strony</h2>
            <ul class="list-unstyled">
              <a href="#" class="text-white">Strona główna</a>
              <br>
              <a href="#" class="text-white">Galeria</a>
              <br>
              <a href="#" class="text-white">Aktualności</a>
              <br>
              <a href="#" class="text-white">Panel administracyjny</a>
            </ul>
          </div>
          <div class="p-4 col-md-4">
            <h2 class="mb-4">Kontakt</h2>
            <p>
              <a href="mailto:contact@example.com" class="text-white"><i class="fa d-inline mr-3 text-secondary fa-envelope-o"></i>contact@example.com</a>
            </p>
            <p>
              <a href="https://goo.gl/maps/Y7tyP99MnzH2" class="text-white" target="_blank"><i class="fa d-inline mr-3 fa-map-marker text-secondary"></i>Fryderyka Joliot-Curie 15<br>50-383 Wrocław</a>
            </p>
          </div>
          <div class="p-4 col-md-4">
            <div class="row">
              <div class="col-md-4"><i class="fa fa-fw fa-facebook fa-3x text-white"></i></div>
              <div class="col-md-4"><i class="fa fa-fw fa-twitter fa-3x text-white"></i></div>
              <div class="col-md-4"><i class="fa fa-fw fa-instagram text-white fa-3x"></i></div>
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

  </div>
</template>

<style lang="scss">
// stylelint-disable value-keyword-case
$font-family-sans-serif:      -apple-system, Quicksand, Lato, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
$font-family-base:            $font-family-sans-serif;
// stylelint-enable value-keyword-case

$body-bg:       #fff;
$body-color:    #637485;
$primary:       #00a6d9;
// $secondary:     #fff;
// $light:         #00a6d9;
// $dark:          #577492;

$enable-shadows:            false;
$enable-gradients:          true;
$enable-transitions: true;

$navbar-dark-color:                 rgba(#fff, .9);
$navbar-dark-hover-color:           rgba(#fff, .75);
$navbar-dark-active-color:          #fff;

@import "../node_modules/bootstrap/scss/bootstrap";
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>
