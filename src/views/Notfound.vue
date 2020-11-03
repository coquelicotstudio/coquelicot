<template lang="html">
  <section class="hero is-fullheight">
    <div class="hero-body" style="margin-top: 70px;align-items: flex-start;">
      <div class="container">
          <div class="columns is-centered animated fadeInUp">
              <!-- <div class="column is-3">
                  <figure class="image">
                      <img src="./../assets/images/COQ_LOGO_C.jpg" alt="">
                  </figure>
              </div> -->
              <div class="column is-half has-text-centered">
                  <p class="is-size-1">404</p>
                  <p>The page you are looking for does not exist!
                    <span><router-link
                      to="/"
                      exact-active-class="has-text-dark is-underlined"
                      class="has-text-grey">
                      <img
                        src="./../assets/images/not.png"
                        class="magic-title"
                        style="height:50px; margin-bottom: -16px;"
                      >
                    </router-link>
                  </span>
                </p>
              </div>
          </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
</style>
