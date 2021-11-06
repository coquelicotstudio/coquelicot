<template>
    <section class="hero is-coq is-fullheight" style="height:100vh;">
      <template v-if="!home_image">
        <Loader></Loader>
      </template>
      <template v-else>
        <div class="hero-body" style="margin-top:70px;">
          <div class="container">
            <router-link to="/works">
              <div class="columns is-centered animated fadeInUp">
                <div class="column">
                  <figure v-if="home_image" class="image">
                    <img :src="home_image" alt="" style="
                        max-height: calc(100vh - 167px);
                        width: auto;
                        margin: auto;"
                    >
                  </figure>
                </div>
              </div>
            </router-link>
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
