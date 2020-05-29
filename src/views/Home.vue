<template>
    <section class="hero is-medium is-coq">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <!-- <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div> -->
        <!-- <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div> -->
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container">
        <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-2"></div>
            <div class="column is-narrow">
                <h1 class="title is-1 has-text-printer animated-slow fadeIn">
                  coq
                </h1>
            </div>
            <div class="column is-2">
                <figure class="image is-128x128 animated-slow fadeIn">
                    <img src="../assets/COQ.png" alt="">
                </figure>
            </div>
            </div>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot" style="box-shadow: 0px 3px 3px 0px #00000036;">
      <div class="columns is-centered is-marginless">
              <div class="column is-narrow has-text-centered animated fadeInLeft">
                  <a class="has-text-printer is-size-3">Erbario</a>
              </div>
              <div class="column is-narrow has-text-centered is-size-3">

              </div>
              <div class="column is-narrow has-text-centered animated fadeInDown">
                  <a class="has-text-printer is-size-3">Architettura</a>
              </div>
              <div class="column is-narrow has-text-centered is-size-3">

              </div>
              <div class="column is-narrow has-text-centered animated fadeInRight">
                  <a class="has-text-printer is-size-3">Bestiario</a>
              </div>

      </div>
  </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
};
</script>
