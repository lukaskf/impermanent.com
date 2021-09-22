<template>
  <div class="post flex flex-column">
    <div class="row">
      <input type='text' class="comment" v-model="post.comment">
    </div>
    <div class="row">
      <span> - </span>
      <input type='text' class="author" v-model="post.author">
      <font-awesome-icon icon="angle-double-right" @click="createPost"/>
    </div>
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

.post {
  height: 700px;
  display: flex;
  flex-direction: column;
  width: 700px;
  position: absolute;
  left: 30%;
  top: 30%;
  color: grey;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.row {
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
}

input  {
  background: transparent;
  border: none;
}

</style>