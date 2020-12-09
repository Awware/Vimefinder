<template>
    <b-card no-body>
        <b-card-title class="text-center mt-1 mb-1">
            <h2>Информация о гильдии `{{guild.name}}`</h2>
            <blockquote v-html="guild.web_info"></blockquote>
            <hr>
        </b-card-title>
        <b-card-body>
            <b-row class="text-center">
                <b-col cols="3">
                    <p>ID: {{guild.id}}</p>
                </b-col>
                <b-col cols="6">
                    <p>Дата создания: {{guild.created | toLocaleDate}}</p>
                </b-col>
                <b-col cols="3">
                    <b-progress max="1" height="18px" class="ml-2 mr-2" variant="success" show-label>
                        <b-progress-bar striped animated :value="guild.levelPercentage">
                            <p style="color: #2E4519;" class="justify-content-center d-flex position-absolute w-100">{{guild.level}}lvl | {{(guild.levelPercentage * 100).toFixed(0)}}%</p>
                        </b-progress-bar>
                    </b-progress>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<script>
import {toLocaleDate} from "@/filters"
export default {
    data() {
        return {
            levelBar:{
                value: 0
            }
        }
    },
    props:['guild'],
    filters:{
        toLocaleDate
    }
}
</script>

<style scoped>
    *{
        font-family: Roboto;
        margin:  0;
        padding: 0;
    }
    hr{
        margin-top: 3px;
        margin-bottom: 5px;
    }
</style>