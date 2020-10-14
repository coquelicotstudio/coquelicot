<template>
    <section class="hero" style="height:100vh;">
      <div class="hero-body">
        <div class="container">
            <div class="columns is-centered animated fadeInUp">
                <div class="column">
                    <figure class="image">
                        <img src="./../assets/images/pietraligure-VWTMP.jpg" alt="">
                    </figure>
                </div>
            </div>
            <work :type="'posts'" :name="'post'"></work>

        </div>
      </div>
    </section>
</template>
<script>
import work from '@/components/work.vue';

export default {
  name: 'Home',
  props: [],
  data() {
    return {
    };
  },
  mounted() {

  },
  components: {
    work,
  },
};
</script>
