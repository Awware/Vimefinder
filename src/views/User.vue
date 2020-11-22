<template>
    <div>
        <b-alert v-if="error" variant="danger" class="text-center" show>{{error}}</b-alert>
        <Loader v-else-if="loading"/>
        <b-row v-else>
            <b-col cols="4">
                <Session :user="user"/>
                <Partyfinder :user="user"/>
            </b-col>
            <b-col cols="8">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab class="nav-tabs" title="Друзья" active>
                            <b-row cols="4" v-cloak>
                                <Friend v-for="friend in user.friends" :key="friend.id" :friend="friend"/>
                            </b-row>
                        </b-tab>
                        <b-tab title="Матчи">

                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Session from "@/components/Session"
import Loader from "@/components/Loader"
import Partyfinder from "@/components/Partyfinder"
import Friend from "@/components/Friend"
import {request} from "@/request"
export default {
    components:{
        Loader,
        Session,
        Partyfinder,
        Friend
    },
    data(){
        return{
            loading: true,
            error: '',
            username: '',
            user: {}
        }
    },
    computed:{
        getFullPath () {
            return this.$route.path
        }
    },
    methods:{
        async update(){
            this.loading = true
            this.error = ''
            let arrayOfPaths = window.location.pathname.split('/')
            this.username = arrayOfPaths[arrayOfPaths.length - 1]
            
            console.log(this.username);

            let rawUser = await request(`https://api.vimeworld.ru/user/name/${this.username}`)

            rawUser = rawUser[0]

            if(rawUser != undefined){
                this.user.rawUser = rawUser
                this.user.username = rawUser['username']
                this.user.last_seen = new Date(rawUser['lastSeen'] * 1000).toLocaleString();
                this.user.level = rawUser['level']
                this.user.id = rawUser['id']

                const session = await request(`https://api.vimeworld.ru/user/${this.user.id}/session`)
                this.user.rawSession = session
                this.user.online = session.online.value
                this.user.online_message = session.online.message
                this.user.rank = session.user.rank
                this.user.hours = (session.user.playedSeconds / 60 / 60).toFixed(1)
                this.user.guild = session.user.guild

                const userFriends = await request(`https://api.vimeworld.ru/user/${this.user.id}/friends`)
                this.user.friends = userFriends.friends
            }
            else
            {
                this.error = 'Игрок не найден!'
            }
            this.loading = false
        }
    },
    watch:{
        getFullPath() {
            this.update()
        }
    },
    mounted(){
        this.update()
    }
}
</script>

<style scoped>
    [v-cloak]{
        display: none;
    }
    .nav-tabs {
        flex-wrap: nowrap;
        white-space: nowrap;
        max-height: 810px;
        overflow: auto;
    }
</style>