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
                        <b-tab title="Матчи">
                            <b-alert show variant="warning" class="text-center">Soon</b-alert>
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
    import {
        request
    } from "@/request"
    export default {
        components: {
            Loader,
            Session,
            Partyfinder,
            Person
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
                this.loading = true
                this.error = ''
                let arrayOfPaths = window.location.pathname.split('/')
                this.username = arrayOfPaths[arrayOfPaths.length - 1]

                console.log(this.username);

                let rawUser = await request(`http://localhost:5000/api/user/${this.username}`)

                console.log(rawUser);

                rawUser = rawUser[0]

                console.log(rawUser);

                if (rawUser != undefined) {
                    this.user.rawUser = rawUser
                    this.user.username = rawUser['username']
                    this.user.last_seen = new Date(rawUser['lastSeen'] * 1000).toLocaleString();
                    this.user.level = rawUser['level']
                    this.user.id = rawUser['id']

                    const session = await request(`http://localhost:5000/api/user/${this.user.id}/session`)
                    this.user.rawSession = session
                    this.user.online = session.online.value
                    this.user.online_message = session.online.message
                    this.user.rank = session.user.rank
                    this.user.hours = (session.user.playedSeconds / 60 / 60).toFixed(1)
                    this.user.guild = session.user.guild

                    const userFriends = await request(`http://localhost:5000/api/user/${this.user.id}/friends`)
                    this.user.friends = userFriends.friends
                } else {
                    this.error = 'Игрок не найден!'
                }
                this.loading = false
            }
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