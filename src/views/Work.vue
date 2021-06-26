<template>
    <section class="hero is-coq" style="height:100vh;">
      <div class="hero-body" style="margin-top:70px;">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-8">
                  <div v-html="html" class="content special-title animated fadeInUp">
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
export default {
  name: 'Work',
  props: [],
  data() {
    return {
      html: '',
    };
  },
  mounted() {
    const root = this;
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
      })
      .catch(() => {
        this.$router.push({ name: '404' });
      });
  },
};
</script>

<style lang="css">

div.special-title h1 {
  text-align: center;
  text-transform: uppercase;
}

</style>
