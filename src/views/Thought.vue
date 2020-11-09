<template lang="html">
  <section class="hero is-coq is-fullheight">
    <div class="hero-body" style="margin-top: 70px;align-items: flex-start;">
      <div class="container">
          <div class="columns is-centered animated fadeInUp">
              <!-- <div class="column is-3">
                  <figure class="image">
                      <img src="./../assets/images/COQ_LOGO_C.jpg" alt="">
                  </figure>
              </div> -->
              <div class="column is-12">
                <Singlenews :is_open="true" :news="currentnews"></Singlenews>
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
import Singlenews from '../components/Singlenews.vue';

export default {
  name: 'Thought',
  props: [],
  data() {
    return {
      currentnews: {},
    };
  },
  mounted() {
    const date = new Date();
    const t = date.getTime();
    const root = this;
    this.axios
      .get(`../coquelicot-posts/blog.json?t=${t}`)
      .then(
        (resp) => {
          const filtered = Object.values(resp.data.entries)
            .filter((el) => el.title === this.$route.params.title);

          if (filtered.length === 0) {
            this.$router.push({ name: '404' });
          } else {
            root.currentnews = {
              ...root.currentnews,
              ...filtered[0],
            };
          }
        },
      );
    this.axios
      .get(`../coquelicot-posts/thoughts/${this.$route.params.title}.md`)
      .then((resp) => {
        /* ./coquelicot-posts/images/ */
        const el = document.createElement('html');
        el.innerHTML = root.md.render(resp.data);
        // const images = el.getElementsByTagName('img');
        // for (let img = 0; img < images.length; img += 1) {
        //   images[img].src = `/coquelicot-posts/images/${images[img]
        // .src.match(/.*\/(.*)/)[1]}`;
        // }
        root.$set(root.currentnews, 'html', el.innerHTML);
      })
      .catch(() => {
        this.$router.push({ name: '404' });
      });
  },
  components: {
    Singlenews,
  },
};
</script>

<style lang="css" scoped>
</style>
