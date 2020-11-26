<template>
    <div>
        <b-alert v-if="error" variant="danger" class="text-center" show>{{error}}</b-alert>
        <Loader v-else-if="loading" />
        <b-row v-else>
            <b-col cols="4">
                <Session :user="user" />
                <Partyfinder :user="user" />
            </b-col>
            <b-col cols="8">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab class="nav-tabs" title="Друзья" active>
                            <b-row cols="4" v-cloak>
                                <Person v-for="person in user.friends" :key="person.id" :person="person" />
                            </b-row>
                        </b-tab>
                        <b-tab class="nav-tabs" title="Матчи">
                            <MatchTab :matches="user.matches" :userId="user.id"/>
                        </b-tab>
                        <b-tab title="Статистика" >

                        </b-tab>
                        <b-tab title="Гильдия" :disabled="!user.guild">

                        </b-tab>
                        <b-tab title="Доп. информация" :disabled="!serverData.received">

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
    import Person from "@/components/Person"
    import MatchTab from "@/components/MatchTab"
    import {
        request
    } from "@/request"
    export default {
        components: {
            Loader,
            Session,
            Partyfinder,
            Person,
            MatchTab
        },
        data() {
            return {
                loading: true,
                error: '',
                username: '',
                user: {},
                serverData: {
                    received: false
                }
            }
        },
        computed: {
            getFullPath() {
                return this.$route.path
            }
        },
        methods: {
            async update() {
                // this.matchesLoading = true
                this.user.matches = []
                // this.mrd.count = 10
                // this.mrd.offset = 0

                this.loading = true
                this.error = ''
                let arrayOfPaths = window.location.pathname.split('/')
                this.username = arrayOfPaths[arrayOfPaths.length - 1]

                let rawUser = await request(`http://localhost:5000/api/user/${this.username}`)

                rawUser = rawUser[0]

                if (rawUser) {
                    this.user.rawUser = rawUser
                    this.user.username = rawUser.username
                    this.user.last_seen = rawUser.lastSeen
                    this.user.level = rawUser.level
                    this.user.id = rawUser.id

                    const session = await request(`http://localhost:5000/api/user/${this.user.id}/session`)
                    this.user.rawSession = session
                    this.user.online = session.online.value
                    this.user.online_message = session.online.message
                    this.user.rank = session.user.rank
                    this.user.hours = (session.user.playedSeconds / 60 / 60).toFixed(1)
                    this.user.guild = session.user.guild

                    const userFriends = await request(`http://localhost:5000/api/user/${this.user.id}/friends`)
                    this.user.friends = userFriends.friends

                    const matches = await request(`http://localhost:5000/api/user/${this.user.id}/matches?count=10&offset=0`)
                    if(matches.request.size){
                        this.user.matches = matches.matches
                    }

                } else {
                    this.error = 'Игрок не найден!'
                }
                this.loading = false
            }
            // async matchesLoad(){
            //     if(this.user.matches.length > 0){
            //         return
            //     }
            //     const matches = await request(`http://localhost:5000/api/user/${this.user.id}/matches?count=${this.mrd.count}&offset=${this.mrd.offset}`)
            //     if(matches.request.size){
            //         this.user.matches = matches.matches
            //         this.mrd.offset += 10
            //     }
            //     this.matchesLoading = false
            // },
            // async loadMoreMatches(){
            //     this.matchesLoading = true
            //     const recMatches = await request(`http://localhost:5000/api/user/${this.user.id}/matches?count=${this.mrd.count}&offset=${this.mrd.offset}`)
            //     if(recMatches.request.size){
            //         Array.prototype.push.apply(this.user.matches, recMatches.matches)
            //         this.mrd.offset += 10
            //     }
            //     this.matchesLoading = false
            // }
        },
        watch: {
            async getFullPath() {
                await this.update()
            }
        },
        async mounted() {
            await this.update()
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }

    .nav-tabs {
        flex-wrap: nowrap;
        white-space: nowrap;
        max-height: 810px;
        overflow: auto;
    }
</style>