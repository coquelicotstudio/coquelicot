<template>
    <section class="hero is-coq is-fullheight" style="height:100vh;">
      <template v-if="!home_image">
        <Loader></Loader>
      </template>
      <template v-else>
        <div class="hero-body">
          <div class="container">
              <div class="columns is-centered animated fadeIn">
                <div class="column">
                  <figure v-if="home_image" class="image">
                    <img
                    src="../assets/images/coquelicot.png"
                    class="magic-title"
                    style="transform: scale(0.5)"
                    >
                    <div class="is-large" style="text-align: center; margin-top: -50px">
                      Sito in rinnovamento...
                    </div>
                  </figure>
                </div>
              </div>
          </div>
        </div>
      </template>

      <div class="hero-foot has-background-coq"
        style="box-shadow: rgba(0, 0, 0, 0.18) 0px -2px 8px;">
        <div class="section" style="padding:0.8rem; text-align:right">
          <p class="is-size-7">
            <strong>coquelicot</strong> © 2020 -
          developed by <a href="https://github.com/fdrcslv">fdrcslv</a>
          </p>
        </div>
      </div>
    </section>
</template>
<script>

import Loader from '../components/Loader.vue';

export default {
  name: 'Home',
  props: [],
  data() {
    return {
      home_image: '',
      rest: '',
    };
  },
  mounted() {
    const root = this;
    const date = new Date();
    const t = date.getTime();
    this.axios
      .get(`../coquelicot-posts/blog.json?t=${t}`)
      .then((resp) => {
        root.home_image = `/coquelicot-posts/images/${resp.data.home.image}`;
      });
  },
  components: {
    Loader,

  },
};
</script>
