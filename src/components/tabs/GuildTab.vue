<template>
    <b-row>
        <b-col cols="12">
            <GuildInformation :guild="GuildFull"/>
        </b-col>
    </b-row>
</template>

<script>
import GuildInformation from "@/components/GuildInformation"
import {
    request
} from "@/request"
export default {
    components:{
        GuildInformation
    },
    data() {
        return {
            GuildFull: {}
        }
    },
    async mounted() {
        const gettedGuild = await request(`http://localhost:5000/api/guild/${this.guild.id}`)
        if(gettedGuild) this.GuildFull = gettedGuild
        else console.error("Guild is null") 
    },
    props:['guild']
}
</script>

<style scoped>
    *{
        font-family: Roboto;
        margin:0;
        padding:0;
    }
    hr{
        padding: 0;
        margin: 0;
        margin-top: 3px;
        margin-bottom: 5px;
    }
</style>