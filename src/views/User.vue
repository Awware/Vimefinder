<template>
    <div>
        <b-alert v-if="error" variant="danger" class="text-center" show>{{
            error
        }}</b-alert>
        <Loader v-else-if="loading" />
        <b-row v-else>
            <b-col col lg="4">
                <Session :user="user" />
                <Partyfinder :user="user" />
            </b-col>
            <b-col col lg="8">
                <b-card no-body>
                    <b-tabs fill card>
                        <b-tab class="scrollable" title="Друзья" active>
                            <FriendsTab :friends="user.friendSessions" />
                        </b-tab>
                        <b-tab class="scrollable" title="Матчи">
                            <MatchTab
                                :matches="user.matches"
                                :userId="user.id"
                            />
                        </b-tab>
                        <b-tab class="scrollable" title="Статистика">
                            <StatisticTab :user="user" />
                        </b-tab>
                        <b-tab
                            class="scrollable"
                            title="Гильдия"
                            :disabled="!user.guild"
                        >
                            <GuildTab v-if="user.guild" :guild="user.guild" />
                        </b-tab>
                        <b-tab
                            title="Доп. информация"
                            :disabled="!serverData.received"
                        >
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
//Blocks
import Session from '@/components/blocks/Session'
import Partyfinder from '@/components/blocks/Partyfinder'

//Other components
import Loader from '@/components/Loader'

//Tabs
import MatchTab from '@/components/tabs/MatchTab'
import FriendsTab from '@/components/tabs/FriendsTab'
import StatisticTab from '@/components/tabs/StatisticTab'
import GuildTab from '@/components/tabs/GuildTab'

//JS
import { request } from '@/request'
import { getSessionsByIds } from '@/vimerequests'
export default {
    components: {
        Loader,
        Session,
        Partyfinder,
        MatchTab,
        FriendsTab,
        StatisticTab,
        GuildTab
    },
    data() {
        return {
            loading: true,
            error: '',
            username: '',
            user: {},
            //todo, additional information
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
            this.user.matches = []

            this.loading = true
            this.error = ''
            let arrayOfPaths = window.location.pathname.split('/')
            this.username = arrayOfPaths[arrayOfPaths.length - 1]

            let rawUser = await request(
                `http://localhost:5000/api/user/${this.username}`
            )

            rawUser = rawUser[0]

            if (rawUser) {
                this.user.rawUser = rawUser
                this.user.username = rawUser.username
                this.user.last_seen = rawUser.lastSeen
                this.user.level = rawUser.level
                this.user.id = rawUser.id
                this.user.lvlperc = rawUser.levelPercentage

                const session = await request(
                    `http://localhost:5000/api/user/${this.user.id}/session`
                )
                this.user.rawSession = session
                this.user.online = session.online.value
                this.user.online_message = session.online.message
                this.user.rank = session.user.rank
                this.user.hours = (
                    session.user.playedSeconds /
                    60 /
                    60
                ).toFixed(1)
                this.user.guild = session.user.guild

                const userFriends = await request(
                    `http://localhost:5000/api/user/${this.user.id}/friends`
                )
                this.user.friends = userFriends.friends

                this.user.friendSessions = []

                let fIds = []
                this.user.friends.map(friend => fIds.push(friend.id))
                //for(const friend in this.user.friends) fIds.push(this.user.friends[friend].id)

                this.user.friendSessions = await getSessionsByIds(fIds)

                const matches = await request(
                    `http://localhost:5000/api/user/${this.user.id}/matches?count=10&offset=0`
                )
                if (matches.request.size) this.user.matches = matches.matches
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
</style>
