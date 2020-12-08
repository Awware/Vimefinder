<template>
    <b-col cols="12">
        <b-card no-body>
            <b-card-title class="text-center mt-1 mb-1">
                <h2>Информация о гильдии `{{guild.name}}`</h2>
                <h5>`{{guild.web_info}}`</h5>
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
                        <p>Уровень: {{guild.level}}</p>
                        <b-progress max="1" height="18px" class="ml-2 mr-2" variant="success" show-label>
                            <b-progress-bar striped animated :value="guild.levelPercentage" :label="`${(guild.levelPercentage * 100).toFixed(1)}%`"></b-progress-bar>
                        </b-progress>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>    
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