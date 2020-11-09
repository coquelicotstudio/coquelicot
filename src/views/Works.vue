<template>
    <section class="hero is-coq" style="min-height: 100vh;">
      <div class="hero-body" style="margin-top:70px;">
        <div class="container">
            <div class="columns is-centered">
              <div class="column">
                <div v-if="works.length === 0" class="content" style="text-align: center;">
                  <p>No work to show yet!</p>
                </div>
                  <div class="columns is-multiline is-marginless">
                    <template v-if="loading" >
                      <div v-for="(i, k) in [1,1,1,1,1,1,1,1,1,1]" class="column is-3" :key="k">
                        <div  class="image is-1by1 has-shadow has-background-light">
                        </div>
                      </div>
                    </template>
                    <template v-else >
                      <router-link
                        v-for="w in works"
                        :key="w.title"
                        :to="'/works/'+ (w.title || w.linkedto)"
                        class="column is-3">
                        <div class="image has-shadow">
                          <img v-if="w.preview || w.image"
                            :src="'/coquelicot-posts/images/'+(w.preview||w.image)">
                          <img v-else src=".././assets/images/square-logo.jpg">
                          <span class="prev-label is-size-4">{{(w.title || w.linkedto)}}</span>
                        </div>
                        </router-link>
                    </template>
                  </div>
              </div>
            </div>
        </div>
      </div>
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
// import work from '@/components/work.vue';
export default {
  name: 'Works',
  props: [],
  data() {
    return {
      html: '',
      works: {},
      loading: false,
    };
  },
  mounted() {
    const root = this;
    async function wmount() {
      root.works = await root.start();
      root.loading = false;
    }
    wmount();
  },
  methods: {
    async start() {
      const date = new Date();
      const t = date.getTime();
      return this.axios
        .get(`../coquelicot-posts/blog.json?t=${t}`)
        .then((resp) => {
          const works = Object.values(resp.data.entries)
            .filter((el) => el.type === 'works')
            .sort((a, b) => new Date(b.created) - new Date(a.created));

          const tiles = Object.values(resp.data.tiles);
          for (let ti = 0; ti < tiles.length; ti += 1) {
            let rand = 0;
            while (rand === 0) {
              rand = Math.floor(Math.random() * (works.length)) + 1;
            }

            works.splice(rand, 0, tiles[ti]);
          }
          return works;
        });
    },
  },
  components: {
    // work,
  },
  computed: {
    route() {
      return this.$route.params.title;
    },
  },
  watch: {
    route() {
      this.start();
    },
  },
};
</script>
<style media="screen">

    .image .prev-label{
      transition: all 0.3 ease;
      position: absolute;
      width: 0px;
      top: 20px;
      font-family: bodoniflfbold;
      padding: 5px;
      left: 0;
      color: black;
      background: white;
      border-radius: 0;
      visibility: hidden;
  }
  .prev-label:hover{
    visibility:visible;

  }
  .image:hover .prev-label{
    visibility: visible;
    width:auto;
  }

  div.content img {
    box-shadow: 2px 3px 3px 0px #00000020;
  }

  .has-shadow img {
    box-shadow: 2px 3px 3px 0px #00000057;
  }
</style>
