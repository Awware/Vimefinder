<template>
    <div>
        <b-card :style="{height: pHeight, width: pWidth, margin: '5px', border}" style="box-shadow: 0px 5px 5px rgba(0,0,0,0.1);">
            <b-card-body style="padding: 0">
                <p :style="{color: getOnlineStatus()}" class="online-status">*</p>
                <div style="display:flex; justify-content: center; align-items:center; margin-bottom:3px">
                    <b-skeleton-wrapper :loading="!preloadImage">
                        <template #loading>
                            <b-skeleton animation="fade" type="avatar" width="32px" height="32px"></b-skeleton>
                        </template>
                        <img width="32px" :src="`https://skin.vimeworld.ru/head/${person.username}.png?_=16057785`" alt="">
                        <div class="profile-second-layer" :style="{backgroundImage: `url(https://skin.vimeworld.ru/raw/skin/${person.username}.png?_=16057785)`}"></div>
                    </b-skeleton-wrapper>
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
import {preload} from "@/preload"
export default {
    data(){
        return{
            style_color:{
                color: '#888888',
                fontSize:'12px'
            },
            preloadImage: false,
            border: ''
        }
    },
    props:{
        person:{
            type:Object,
            required:true
        },
        pWidth: {
            type: String,
            required: false,
            default: '10.5rem'
        },
        pHeight:{
            type: String,
            required: false,
            default: '6rem'
        },
        guildCompat:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods:{
        getOnlineStatus(){
            if(this.person.online.value) return '#8DCA4C'
            else return '#DB4C60'
        }
    },
    mounted() {
        preload(`https://skin.vimeworld.ru/head/${this.person.username}.png?_=16057785`)
        preload(`https://skin.vimeworld.ru/raw/skin/${this.person.username}.png?_=16057785`, () => this.preloadImage = true)
        
        if(this.person.username.length <= 13){
            this.style_color.fontSize = '14px';
        }
        this.style_color = GetColorByRank(this.person.rank, this.style_color)

        if(this.guildCompat){
            if(this.person.status == 'OFFICER') this.border = '2px dotted #4B60A3'
            else if(this.person.status == 'LEADER') this.border = '2px dotted #E14258'
        }
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
    .online-status{
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 5px;
        transform: rotate(-45deg);
        font-size:18px;
        transition: opacity 1s ease-in-out;
        animation: online_status_anim 1s ease-in-out infinite;
    }

    @keyframes leader {
        0% {
            transform: scale(5);
        }
        50% {
            transform: scale(4);
        }
        100% {
            transform: scale(3);
        }
    }

    @keyframes online_status_anim {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 0.6
        }
        75%{
            opacity: 0.8
        }
        100%{
            opacity: 1
        }
    }
</style>