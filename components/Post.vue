<template>
  <div class="post">
    <input type='text' class="comment" v-model="post.comment">
    <input type='text' class="author" v-model="post.author">
    <button @click="createPost">change</button>
  </div>
</template>

<script>
export default {
  async created() {
    const { data: posts, error } = await this.$supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
    this.post = posts[0]
    this.loaded = true
  },
  data() {
    return {
      loaded: false,
      post: {}
    }
  },
  methods: {
    async createPost() {
      const {comment, author} = this.post
      if (!comment || !author) return
      const user = this.$supabase.auth.user()
      const { data } = await this.$supabase
        .from('posts')
        .insert([
            { comment, author }
        ])
        .single()
    }
  }
}
</script>

<style>

</style>