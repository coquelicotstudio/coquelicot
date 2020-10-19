<template>
    <section class="hero" style="height:100vh;">
      <div class="hero-body">
        <div class="container">
            <div class="columns is-centered animated fadeInUp">
                <div class="column">
                    <div v-if="$route.params.title !== 'all'" class="content animated fadeIn">
                      <span v-html="html"></span>
                    </div>
                    <div v-else class="">
                      <div class="columns is-multiline is-marginless">
                        <router-link
                          v-for="w in works"
                          :key="w.title"
                          :to="'/works/'+w.title"
                          class="column">{{w.title}}
                          </router-link>
                      </div>
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
            console.log(resp.data);
            root.html = root.md.render(resp.data);
          });
      } else {
        this.axios
          .get('../coquelicot-posts/blog.json')
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
