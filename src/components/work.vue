<template>
  <div class="content">
    <span v-html="html"></span>
  </div>
</template>

<script>
export default {
  name: 'work',
  props: ['type', 'name'],
  data() {
    return {
      html: '',
    };
  },
  mounted() {
    const root = this;
    this.axios
      .get(`./coquelicot-posts/${root.type}/${root.name}.md`)
      .then((resp) => {
        root.html = root.md.render(resp.data);
      });
  },
};
</script>
