<template>
  <div id="app">
    <nav class="navbar navbar-expand-md bg-white navbar-light">
      <div class="container">
        <a class="navbar-bra mr-auto" href="#">
          <img src="./assets/uwr-logo.png" width="200" height="75" class="d-inline-block align-top" alt="">
          <img src="./assets/ksi-logo.png" width="200" height="75" class="d-inline-block align-top mx-3" alt="">
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> ZOSIA</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> Continuum</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> II UWr</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-md bg-primary navbar-dark">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Aktualności</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">O nas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projekty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Członkowie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Galeria</a>
            </li>
          </ul>
          <form class="form-inline m-0">
            <input class="form-control mr-2" type="text" placeholder="Podaj frazę">
            <button class="btn btn-primary" type="submit">Szukaj</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view/>

    <div class="bg-dark text-white">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
