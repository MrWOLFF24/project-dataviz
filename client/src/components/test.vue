<template>
    <div class="test">
      <h1>Test data</h1>
      <div v-for="post in posts">
        <p>{{post[5]}}</p>
      </div>
    </div>
</template>

<script>
  import DataService from '@/services/dataService';
    export default {
      name: 'test',
      data () {
        return {
          posts: []
        }
      },
      mounted () {
        this.getPosts()
      },
      methods: {
        async getPosts () {
          const response = await DataService.fetchDatas();
          this.posts = response.data[0].rowSet;
          console.log(this.posts);
        }
      }
    }
</script>

<style scoped>
.test p {
  color: #0A246A;
}
</style>
