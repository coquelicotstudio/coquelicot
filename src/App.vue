<template>
  <div id="app">
      <nav class="level animated fadeIn" style="padding:15px;">
          <div class="level-left is-hidden-mobile">
              <p class="level-item">
                  <strong>
                    <router-link
                        to="/"
                        exact-active-class="has-text-dark is-underlined"
                        class="has-text-grey">Work</router-link>
                  </strong>
              </p>
              <p class="level-item">
                  <strong>
                      <router-link
                      to="/news"
                      exact-active-class="has-text-dark is-underlined"
                      class="has-text-grey">
                      News</router-link>
                  </strong>
              </p>
          </div>
          <div class="level-item has-text-centered">
                <!-- <img src="./assets/coq-logos/logo-medium.png" style="height:42px;"> -->
                <p class="is-size-2" style="font-family: bodoniflfbold">coquelicot</p>
        </div>
          <div class="level-right is-hidden-mobile">
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
        </nav>
        <nav class="level animated fadeIn is-mobile is-hidden-tablet" style="margin-top: -30px;">
                <p class="level-item">
                    <strong>
                      <router-link
                          to="/"
                          exact-active-class="has-text-dark is-underlined"
                          class="has-text-grey">Work</router-link>
                    </strong>
                </p>
                <p class="level-item">
                    <strong>
                        <router-link
                        to="/news"
                        exact-active-class="has-text-dark is-underlined"
                        class="has-text-grey">
                        News</router-link>
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
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>


<style>
@import "./assets/coq-font/stylesheet.css";
@import "./assets/coquelicot.css";
@import "./assets/bulma-c.css";
</style>
