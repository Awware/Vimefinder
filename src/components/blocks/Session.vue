<template>
<Loader v-if="loading" />
    <b-list-group v-else>
        <b-list-group-item>
            <div class="face">
                <b-skeleton-wrapper :loading="!preloadImage">
                    <template #loading>
                        <b-skeleton animation="fade" type="avatar" width="64px" height="64px"></b-skeleton>
                    </template>
                    <div class="profile-second-layer"
                        :style="{backgroundImage: `url(https://skin.vimeworld.ru/raw/skin/${user.username}.png?_=16057785)`}">
                    </div>
                    <img width="64px" :src="`https://skin.vimeworld.ru/head/${user.username}.png?_=16057785`"
                        alt="">
                </b-skeleton-wrapper>
            </div>
            <a class="vimetop_logo" :href="'https://vimetop.ru/player/' + user.username" target="_blank">
                <img src="https://vimetop.ru/favicon.ico" alt="Vimetop">
            </a>
            <span class="profile-rank font-weight-bold" :style="profile_rank_object">{{user.rank}}</span>
            <div class="text-center">
                <span class="profile-nick">{{user.username}} | {{user.level}}lvl</span>
                <b-progress max="1" height="18px" class="ml-2 mr-2" variant="secondary" show-label>
                    <b-progress-bar striped animated :value="user.lvlperc" :label="`${(user.lvlperc * 100).toFixed(0)}%`"></b-progress-bar>
                </b-progress>
            </div>
        </b-list-group-item>
        <b-list-group-item>
            ID: <span class="text-success">{{user.id}}</span>
        </b-list-group-item>
        <b-list-group-item>
            Статус:
            <span :style="{color: user.online ? '#4FBC66' : '#D35858'}">{{user.online_message}}</span>
        </b-list-group-item>
        <b-list-group-item>
            Друзей:
            <span class="text-muted">{{user.friends.length}}</span>
        </b-list-group-item>
        <b-list-group-item>
            Проведено времени в игре:
            <span class="text-muted">{{user.hours}}ч.</span>
        </b-list-group-item>
        <b-list-group-item>
            Последний вход:
            <span class="text-muted">{{user.last_seen | toLocaleDate}}</span>
        </b-list-group-item>
        <b-list-group-item>
            Гильдия:
            <span v-if="user.guild">
                <router-link :to="`/guild/${user.guild.id}`">{{user.guild.tag ? `[${user.guild.tag}] |` : ''}}
                    {{user.guild.name}}</router-link>
            </span>
            <span class="text-muted" v-else>
                Не состоит в гильдии
            </span>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
    import {
        GetColorByRank
    } from "@/coloring"
    import {preload} from "@/preload"
    import {toLocaleDate} from "@/filters"
    import Loader from "@/components/Loader"
    export default {
        components: {
            Loader
        },
        methods: {

        },
        filters:{
            toLocaleDate
        },
        data() {
            return {
                loading: true,
                profile_rank_object: {
                    color: '#7D7D7D',
                    display: 'block',
                    position: 'absolute',
                    top: '5px',
                    fontSize: '22px'
                },
                preloadImage: false
            }
        },
        mounted() {
            preload(`https://skin.vimeworld.ru/head/${this.user.username}.png?_=16057785`)
            preload(`https://skin.vimeworld.ru/raw/skin/${this.user.username}.png?_=16057785`, () => this.preloadImage = true)
            this.profile_rank_object = GetColorByRank(this.user.rank, this.profile_rank_object)
            this.loading = false
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .profile-nick {
        text-decoration: none;
        font-size: 18px;
    }

    .vimetop_logo {
        position: absolute;
        display: block;
        width: 24px;
        height: 24px;
        right: 5px;
        top: 5px;
    }

    .vimetop_logo img {
        width: 24px;
        height: 24px;
    }

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
        margin-bottom: 3px
    }
</style>