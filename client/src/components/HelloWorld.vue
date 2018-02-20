<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/dataService';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your app',
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await DataService.fetchDatas();
      this.posts = response.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
