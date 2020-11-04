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
                <div class="column is-9 has-text-centered">
                  <article v-for="(n, i) in news_filtered" :key="i" :class="{
                    'media box animated':true,
                    'fadeInUp':i%2,
                    'fadeInDown':!(i%2)
                    }">
                    <figure class="media-left">
                      <p v-if="n.preview" class="image is-128x128">
                        <img :src="'/coquelicot-posts/images/'+n.preview">
                      </p>
                      <p v-else class="image is-128x128">
                        <img src="./../assets/images/square-logo.jpg">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <h2 class="is-size-3" style="margin-bottom:0;">{{n.title}}</h2>
                        <p>
                          <small>posted </small>
                          <small class="has-text-info">{{when(n.created)}}</small>
                          <span v-html="n.html"></span>
                        </p>
                      </div>
                    </div>
                    <div class="media-right">
                    </div>
                  </article>
                </div>
            </div>

        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'News',
  props: [],
  data() {
    return {
      news: [],
      chunk_index: 3,
      loaded: 0,
    };
  },
  mounted() {
    const root = this;
    async function wmount() {
      root.news = await root.start();
      console.log(root.news);
      root.load_chunk();
    }
    wmount();
  },
  methods: {
    when(d) {
      const days = Math.floor(
        (new Date() - new Date(d)) / (1000 * 60 * 60 * 24),
      );
      let res;
      if (days === 0) {
        res = 'today';
      } else if (days === 1) {
        res = 'yesterday';
      } else if (days > 1) {
        res = `${days} days ago`;
      }
      return res;
    },
    load_chunk() {
      const root = this;
      for (let n = this.loaded; n < (this.loaded + this.chunk_index); n += 1) {
        if (!root.news[n]) return;
        this.axios
          .get(`../coquelicot-posts/news/${root.news[n].title}.md`)
          .then((resp) => {
            /* ./coquelicot-posts/images/ */
            const el = document.createElement('html');
            el.innerHTML = root.md.render(resp.data);
            const images = el.getElementsByTagName('img');
            for (let img = 0; img < images.length; img += 1) {
              images[img].src = `/coquelicot-posts/images/${images[img].src.match(/.*\/(.*)/)[1]}`;
            }
            root.$set(root.news[n], 'html', el.innerHTML);
          });
      }
      this.loaded += this.chunk_index;
    },
    async start() {
      const date = new Date();
      const t = date.getTime();
      return this.axios
        .get(`../coquelicot-posts/blog.json?t=${t}`)
        .then(
          (resp) => Object.values(resp.data.entries)
            .filter((el) => el.type === 'news')
            .sort((a, b) => new Date(b.created) - new Date(a.created)),
        );
    },
  },
  computed: {
    news_filtered() {
      return this.news.filter((el, i) => i < this.loaded);
    },
  },
};
</script>

<style lang="css" scoped>
</style>
