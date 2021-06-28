<template>
    <section class="hero is-coq" style="height:100vh;">
      <div v-if="html !== ''" class="hero-body has-background-coq" style="margin-top:70px;">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-8">
                  <div v-html="html" class="content special-title animated fadeInUp">
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div class="loader-container" v-else>
        <div class="half">
          <div class="custom-loader top-right top-right-an"></div>
          <div class="custom-loader top-left"></div>
        </div>
        <div class="half">
          <div class="custom-loader bottom-left"></div>
          <div class="custom-loader bottom-right"></div>
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

.loader-container{
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
}

.custom-loader{
  height: 20px;
  width: 20px;
  background: #1a1a1a;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.top-right{
  border-radius: 50px 0 0 0;
  animation-name: top-right-an;
}

.top-left{
  border-radius: 0 50px 0 0;
  animation-name: top-left-an;
}

.bottom-right{
  border-radius: 0 0 50px 0;
  animation-name: bottom-right-an;
}

.bottom-left{
  border-radius: 0 0 0 50px;
  animation-name: bottom-left-an;
}

.half{
  display: flex;
}

@keyframes top-right-an {
  0% {transform: scaleX(1); transform-origin: right;}
  12.5% {transform: scaleX(0); transform-origin: right;}
  25% {transform: scaleX(0) scaleY(0); transform-origin: right;}
  37.5% {transform: scaleX(1) scaleY(0); transform-origin: bottom;}
  50% {transform: scaleX(1) scaleY(1); transform-origin: bottom;}
}
@keyframes top-left-an {
  0% {transform: scaleY(1); transform-origin: bottom;}
  12.5% {transform: scaleY(1); transform-origin: bottom;}
  25% {transform: scaleY(0); transform-origin: bottom;}
  37.5% {transform: scaleY(0) scaleX(0); transform-origin: bottom;}
  50% {transform: scaleY(1) scaleX(0); transform-origin: left;}
  62.5% {transform: scaleX(1) scaleY(1); transform-origin: left;}
}

@keyframes bottom-right-an {
  0% {transform: scaleX(1); transform-origin: left;}
  12.5% {transform: scaleX(1); transform-origin: left;}
  25% {transform: scaleX(1); transform-origin: left;}
  37.5% {transform: scaleX(0); transform-origin: left;}
  50% {transform: scaleX(0) scaleY(0); transform-origin: top;}
  62.5% {transform: scaleX(1) scaleY(0); transform-origin: top;}
  75% {transform: scaleX(1) scaleY(1); transform-origin: top;}
}

@keyframes bottom-left-an {
  0% {transform: scaleY(1) scaleX(1); transform-origin: right;}
  12.5% {transform: scaleX(1) scaleY(1); transform-origin: right;}
  25% {transform: scaleY(1); transform-origin: top;}
  37.5% {transform: scaleY(1); transform-origin: top;}
  50% {transform: scaleY(0); transform-origin: top;}
  62.5% {transform: scaleY(0) scaleX(0); transform-origin: right;}
  75% {transform: scaleY(1) scaleX(0); transform-origin: right;}
  87.5% {transform: scaleY(1) scaleX(1); transform-origin: right;}
  100% {transform: scaleY(1) scaleX(1); transform-origin: right;}
}

</style>
