<template>
    <CommentInput />
    <ul v-if="data && data.length" class="comment-list">
        <CommentItem :data="item" v-for="item in data" />
        <ul class="child-comment-list">
            <CommentItem :data="item" v-for="item in data"/>
        </ul>
    </ul>
    <div v-else>暂无评论</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CommentInput from './CommentInput.vue'
import CommentItem from './CommentItem.vue'

defineProps<{
    data: any[]
}>()
</script>

<style lang="css">
.comment-list {
    padding-left: 0;
    list-style: none;
}

.child-comment-list {
    padding: 6px 0 6px 1.2em;
    list-style: none;
}

</style>