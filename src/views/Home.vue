<template>
    <section class="hero is-coq is-fullheight" style="height:100vh;">
      <div class="hero-body" style="margin-top:70px;">
        <div class="container">
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
        </div>
      </div>
    </section>
</template>
<script>

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

  },
};
</script>
