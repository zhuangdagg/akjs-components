<template>
    <li>
        {{ data }}
        
    </li>
</template>

<script setup lang="ts">
import {} from 'vue'

export interface RootCommentData {

}

defineProps<{
    data: RootCommentData
}>()
</script>