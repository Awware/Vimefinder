<template>
    <div>
        <b-card style="height: 6rem; width:10.5rem; margin: 5px;">
            <b-card-body style="padding: 0;">
                <div style="display:flex; justify-content: center; align-items:center; margin-bottom:3px">
                    <img width="32px" :src="`https://skin.vimeworld.ru/head/${person.username}.png?_=16057785`" alt="">
                    <div class="profile-second-layer" :style="{backgroundImage: `url(https://skin.vimeworld.ru/raw/skin/${person.username}.png?_=16057785)`}"></div>
                </div>
                <div style="text-align:center;">
                    <router-link class="font-weight-bold" :style="style_color" :to="`/user/${person.username}`">
                    {{person.username}}</router-link>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import {GetColorByRank} from "@/coloring"
export default {
    data(){
        return{
            style_color:{
                color: '#888888',
                fontSize:'12px'
            }
        }
    },
    props:{
        person:{
            type:Object,
            required:true
        }
    },
    mounted() {
        if(this.person.username.length <= 13){
            this.style_color.fontSize = '14px';
        }
        this.style_color = GetColorByRank(this.person.rank, this.style_color)
    }
}
</script>

<style scoped>
    .url_nickname{
        text-align: center;
        color: #888888;
        font-weight: bold;
    }
    .profile-second-layer{
        background-position: -40px -8px;
        position: absolute;
        width: 8px;
        height: 8px;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: pixelated;
        transform: scale(5);
    }
</style>