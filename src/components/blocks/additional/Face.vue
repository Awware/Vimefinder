<template>
    <div class="face">
        <b-skeleton-wrapper :loading="!preloadImage">
            <template #loading>
                <b-skeleton
                    animation="fade"
                    type="avatar"
                    width="64px"
                    height="64px"
                ></b-skeleton>
            </template>
            <div
                class="profile-second-layer"
                :style="{
                    backgroundImage: `url(${backURL})`
                }"
            ></div>
            <img width="64px" :src="faceURL" alt="" />
        </b-skeleton-wrapper>
    </div>
</template>

<script>
import { preload } from '@/preload'
export default {
    data() {
        return {
            preloadImage: false
        }
    },
    props: {
        faceURL: {
            required: true,
            type: String
        },
        backURL: {
            required: true,
            type: String
        }
    },
    mounted() {
        preload(this.faceURL)
        preload(this.backURL, () => (this.preloadImage = true))
    }
}
</script>

<style scoped>
.profile-second-layer {
    background-position: -40px -8px;
    position: absolute;
    width: 8px;
    height: 8px;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    transform: scale(9);
}

.face {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
}
</style>
