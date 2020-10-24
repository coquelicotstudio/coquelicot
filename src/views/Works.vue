<template>
    <section class="hero" style="height:100vh;">
      <div class="hero-body" style="margin-top:70px;">
        <div class="container">
            <div class="columns is-centered">
                  <div v-if="$route.params.title !== 'all'"
                  class="column is-8 has-background-white"
                  >
                    <div class="content animated fadeInUp">
                    <span v-html="html"></span>
                    </div>
                  </div>
                  <div v-else class="column">
                      <div class="columns is-multiline is-marginless">
                        <router-link
                          v-for="w in works"
                          :key="w.title"
                          :to="'/works/'+w.title"
                          class="column is-3">
                          <div class="image has-shadow">
                            <img :src="'/coquelicot-posts/images/'+w.preview" alt="">
                            <span class="prev-label is-size-4">{{w.title}}</span>
                          </div>
                          </router-link>
                      </div>
                  </div>
            </div>
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
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      const root = this;
      if (this.$route.params.title !== 'all') {
        this.axios
          .get(`../coquelicot-posts/works/${root.$route.params.title}.md`)
          .then((resp) => {
            /* ./coquelicot-posts/images/ */
            const el = document.createElement('html');
            el.innerHTML = root.md.render(resp.data);
            const images = el.getElementsByTagName('img');
            for (let img = 0; img < images.length; img += 1) {
              images[img].src = `/coquelicot-posts/images/${images[img].src.match(/.*\/(.*)/)[1]}`;
            }
            root.html = el.innerHTML;
          });
      } else {
        const date = new Date();
        const t = date.getTime();
        this.axios
          .get(`../coquelicot-posts/blog.json?t=${t}`)
          .then((resp) => {
            root.works = Object.values(resp.data.entries).filter((el) => el.type === 'works');
          });
      }
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

  div.content h1 {
    text-align: center;
    text-transform: uppercase;
  }

  .has-shadow img {
    box-shadow: 2px 3px 3px 0px #00000057;
  }
</style>
