
<template>
  <div class="test-app">
    <h3>评论组件：</h3>
    <Comment :data="comment" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Comment, useComment } from '../src'
  import useApi from './api/comment'

  const api = useApi()

  const comment = ref<any>([])

  const commentApi = useComment({ api })

  onMounted(async() => {
    const { data: { getComment }} = await api.query.list()
    comment.value = getComment
  })

</script>
<style>
.test-app {
  max-width: 50%;
  background: rgba(0, 0, 0, .05);
}
</style>
