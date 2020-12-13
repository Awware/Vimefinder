<template>
    <b-row class="justify-content-center">
        <Stat
            v-for="(stat, name) in stats"
            :key="stat.id"
            :stat="stat"
            :name="name"
        />
    </b-row>
</template>

<script>
import Stat from '@/components/Stat'
import { request } from '@/request'
export default {
    components: {
        Stat
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            stats: {}
        }
    },
    async mounted() {
        let rawStats = await request(
            `http://localhost:5000/api/user/${this.user.id}/stats`
        )
        if (rawStats.stats) this.stats = rawStats.stats
    }
}
</script>

<style scoped></style>
