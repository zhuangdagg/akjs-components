<template>
    <li class="comment-item">
        <div class="row">
            <img class="avatar" src="/favicon.ico" />
            <span class="nickname">{{ data.from_user_id }}</span>
        </div>
        <div class="comment-content">{{ data.content }}</div>
        <div class="row">
            <span class="tag">{{ new Date(+data.createdAt).toISOString() }}</span>
            <span class="tag" v-if="data.place">地点</span>
            <div class="operate">
                <button @click="flag.showInput = !flag.showInput">回复</button>
                <button>点赞 {{ data.likeCount || 0 }}</button>
            </div>
        </div>
        <div class="row" v-show="flag.showInput">
            <CommentInput />
        </div>
    </li>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CommentInput from './CommentInput.vue'

export interface RootCommentData {
    from_user_id: string,
    content: string,
    createdAt: string,
    place?: any
    likeCount: number
}

defineProps<{
    data: RootCommentData
}>()

const flag = reactive({
    showInput: false,
    content: ''
})
</script>

<style lang="css">
.comment-item {
    position: relative;
    padding-left: 1.4em;
    & .row {
        display: flex;
        align-items: center;
        & .avatar {
            position: absolute;
            left: 2px; top: 2px;
            width: 1.2em;
            border-radius: 3px;
        }
        & .nickname {
            padding: 0 4px;
            font-size: 15px;
            font-weight: bold;
            text-decoration: none;
            color: rgb(55, 58, 64);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        & .tag {
            margin-right: 4px;
            font-size: 14px;
            color: rgb(145, 150, 161)
        }

        & .operate {
            margin-left: auto;

            & button {
                border: none;
                color: rgb(132, 145, 165);

                &:hover {
                    cursor: pointer;
                    color: #758195;
                }
            }
        }
    }
    & .comment-content {
        margin-top: 4px;
        overflow: hidden;
        color: rgb(55, 58, 64);
        overflow-wrap: break-word;
        font-size: 15px;
        line-height: 21px;
    }
    

}
</style>