<template>
    <ul v-if="data && data.length">
        <RootCommentItem :data="item" v-for="item in data" />
        <ul class="sub-comment-list">
            <SubCommentItem :data="item" v-for="item in data"/>
        </ul>
    </ul>
    <div v-else>暂无评论</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RootCommentItem from './RootCommentItem.vue'
import SubCommentItem from './SubCommentItem.vue'

defineProps<{
    data: any[]
}>()
</script>