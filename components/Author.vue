<template>
  <p v-if="$fetchState.error">
    Could not fetch Author
  </p>
  <p v-else>
    Written by {{ $fetchState.pending ? '...' : user.name }} <button @click="$fetch">
      Refresh
    </button>
  </p>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  async fetch () {
      console.log(this.userId);
    // this.user = await this.$http.$get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
    // this.posts = await this.$http.$get('https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json')
    //     .then(posts => posts.data)

    //   let i = 0, ln = this.posts.length;
    //   for (i; i<ln; i++) {
    //     this.posts[i].id = i+1;
    //   }

      console.log(this.posts);
  },
  data () {
    return {
      user: {}
    }
  },
  fetchOnServer: false
}
</script>