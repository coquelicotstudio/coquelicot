<template>
  <div id="app">
      <nav class="level coq-nav animated fadeInDown" style="
          padding: 15px;
          margin: 0px;
          width: 100%;
          position: fixed;
          z-index: 100;
          background-color: white;
          box-shadow: 0px 2px 3px 0px #0000002e;"
        >
          <div class="level-left is-hidden-mobile" style="width:0; z-index:1;">
              <p class="level-item">
                  <strong>
                    <router-link
                        to="/works"
                        exact-active-class="has-text-dark is-underlined"
                        class="has-text-grey">Works</router-link>
                  </strong>
              </p>
              <p class="level-item">
                  <strong>
                      <router-link
                      to="/thoughts"
                      exact-active-class="has-text-dark is-underlined"
                      class="has-text-grey">
                      Thoughts</router-link>
                  </strong>
              </p>
          </div>
          <div class="level-item has-text-centered">
              <router-link
                  to="/"
                  exact-active-class="has-text-dark is-underlined"
                  class="has-text-grey">
                  <img
                  src="./assets/images/coquelicot.png"
                  class="magic-title"
                  style="height:42px;"
                  >
              </router-link>
        </div>
          <div class="level-right is-hidden-mobile" style="width:0">
              <p class="level-item">
                  <strong>
                      <router-link
                      to="/about"
                      exact-active-class="has-text-dark is-underlined"
                      class="has-text-grey">
                      About</router-link>
                  </strong>
                  </p>
              <p class="level-item">
                  <strong>
                      <router-link
                      to="/contacts"
                      exact-active-class="has-text-dark is-underlined"
                      class="has-text-grey">Contacts</router-link>
                  </strong>
              </p>
          </div>
          <nav class="level animated fadeIn is-mobile is-hidden-tablet">
                  <p class="level-item">
                      <strong>
                        <router-link
                            to="/works"
                            exact-active-class="has-text-dark is-underlined"
                            class="has-text-grey">Works</router-link>
                      </strong>
                  </p>
                  <p class="level-item">
                      <strong>
                          <router-link
                          to="/thoughts"
                          exact-active-class="has-text-dark is-underlined"
                          class="has-text-grey">
                          Thoughts</router-link>
                      </strong>
                  </p>
                  <p class="level-item">
                      <strong>
                          <router-link
                          to="/about"
                          exact-active-class="has-text-dark is-underlined"
                          class="has-text-grey">
                          About</router-link>
                      </strong>
                      </p>
                  <p class="level-item">
                      <strong>
                          <router-link
                          to="/contacts"
                          exact-active-class="has-text-dark is-underlined"
                          class="has-text-grey">Contacts</router-link>
                      </strong>
                  </p>
            </nav>
        </nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      test: 'test',
    };
  },
};
</script>


<style>
@import "./assets/coq-font/stylesheet.css";
@import "./assets/coquelicot.css";
@import "./assets/coquelicot-bulma/bulma-c.css";

.magic-title{
  transition: all 0.3s ease;
}

.magic-title:hover{
  transform: scale(1.1);
}
/* .hero-body{
  background: antiquewhite;
} */

.coq-nav{
  background-color: antiquewhite !important;
}
</style>
