<template>
    <section class="hero is-fullheight">
      <div class="hero-body" style="margin-top: 70px;align-items: flex-start;">
        <div class="container">
            <div class="columns is-centered">
                <!-- <div class="column is-3">
                    <figure class="image">
                        <img src="./../assets/images/COQ_LOGO_C.jpg" alt="">
                    </figure>
                </div> -->
                <div
                  class="column is-9 has-text-centered"
                  style="overflow-y: auto; max-height: calc(4 * 128px + 4 * 2.5rem)"
                  v-infinite-scroll="load_chunk"
                  infinite-scroll-throttle-delay="200"
                  >
                  <Singlenews v-for="(n, i) in news_filtered"
                  :key="i" :news="n"></Singlenews>
                  <div class="spacer" style="height:5vh;">
                    <div v-if="loaded < news.length" class="box">
                      <article class="media animated fadeIn">
                        <figure class="media-left">
                          <p class="image is-128x128 has-background-light">
                          </p>
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <h2 class="is-size-3 has-background-light has-text-light"
                            style="margin-bottom:0;">Loadin</h2>
                            <p>
                              <small class="has-background-light has-text-light">posted </small>
                              <small class="has-text-info"></small>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                        </div>
                      </article>
                    </div>
                    <p v-else>
                      No more news to show!
                    </p>
                  </div>
                </div>
            </div>
            </div>
      </div>
    </section>
</template>
<script>

import Singlenews from '../components/Singlenews.vue';

export default {
  name: 'Thoughts',
  props: [],
  data() {
    return {
      news: [],
      chunk_index: 4,
      loaded: 0,
      loading: true,
      load_cycles: 1,
    };
  },
  mounted() {
    const root = this;
    async function wmount() {
      root.news = await root.start();
      root.load_chunk();
    }
    wmount();
  },
  methods: {
    test() {
      console.log('test');
    },
    loadmore() {
      console.log('more', this.loaded);
      this.loaded += 1;
      const root = this;
      this.axios
        .get(`../coquelicot-posts/news/${root.news[root.loaded].title}.md`)
        .then((resp) => {
          /* ./coquelicot-posts/images/ */
          const el = document.createElement('html');
          el.innerHTML = root.md.render(resp.data);
          // const images = el.getElementsByTagName('img');
          // for (let img = 0; img < images.length; img += 1) {
          //   images[img].src = `/coquelicot-posts/images/${images[img].src.match(/.*\/(.*)/)[1]}`;
          // }
          root.$set(root.news[root.loaded], 'html', el.innerHTML);
        });
    },
    load_chunk() {
      const root = this;
      for (let n = this.loaded; n < (this.loaded + this.chunk_index); n += 1) {
        if (!root.news[n]) {
          return;
        }
        this.axios
          .get(`../coquelicot-posts/news/${root.news[n].title}.md`)
          .then((resp) => {
            /* ./coquelicot-posts/images/ */
            const el = document.createElement('html');
            el.innerHTML = root.md.render(resp.data);
            // const images = el.getElementsByTagName('img');
            // for (let img = 0; img < images.length; img += 1) {
            //   images[img].src = `/coquelicot-posts/images/${images[img]
            // .src.match(/.*\/(.*)/)[1]}`;
            // }
            root.$set(root.news[n], 'html', el.innerHTML);
            console.log(n);
            this.loaded += 1;
          });
      }
    },
    async start() {
      const date = new Date();
      const t = date.getTime();
      return this.axios
        .get(`../coquelicot-posts/testblog.json?t=${t}`)
        .then(
          (resp) => {
            console.log(resp.data);
            return Object.values(resp.data.entries)
              .filter((el) => el.type === 'news')
              .sort((a, b) => new Date(b.created) - new Date(a.created));
          },
        );
    },
  },
  computed: {
    news_filtered() {
      return this.news.filter((el, i) => i < this.loaded);
    },
  },
  components: {
    Singlenews,
  },
};
</script>

<style lang="css" scoped>
</style>
