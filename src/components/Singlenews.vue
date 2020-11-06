<template lang="html">
  <div class="box">
    <article class="media animated fadeIn"
      :style="expand"
      >
      <figure class="media-left">
        <p v-if="news.preview" class="image is-128x128">
          <img :src="'/coquelicot-posts/images/'+news.preview">
        </p>
        <p v-else class="image is-128x128">
          <img src="./../assets/images/square-logo.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="" style="float: right;" @click="expanded = !expanded">
          <template v-if="!is_open">
            <a v-if="!expanded">Read More</a>
            <a v-else>Less</a>
          </template>
        </div>
        <div class="content">
          <h2 class="is-size-3" style="margin-bottom:0;">{{news.title}}</h2>
          <p>
            <small><i>posted</i> <i class="has-text-info">{{when}}</i></small>
            <span v-html="news.html"></span>
          </p>
        </div>
      </div>
      <div class="media-right">
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Singlenews',
  props: ['news', 'is_open'],
  data() {
    return {
      expanded: false,
    };
  },
  created() {
    if (this.is_open) {
      this.expanded = this.is_open;
    }
  },
  computed: {
    expand() {
      let res = {
        transition: 'all 0.4s ease',
        'max-height': '100rem',
      };
      if (!this.expanded) {
        res = {
          transition: 'all 0.4s ease',
          'max-height': '7rem',
          overflow: 'hidden',
        };
      }
      return res;
    },
    when() {
      const d = this.news.created;
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
  },
};
</script>

<style lang="css" scoped>
</style>
