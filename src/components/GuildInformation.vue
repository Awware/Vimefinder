<template>
    <b-card no-body>
        <b-card-title class="text-center mt-1 mb-1">
            <h2>Информация о гильдии `{{ guild.name }}`</h2>
            <!-- soon -->
            <!-- <div style="">
                <div style="width: 350px; heigth: 50px">
                    <b-progress max="1" height="25px" class="ml-2 mr-2" variant="secondary" show-label>
                        <b-progress-bar striped animated :value="guild.levelPercentage">
                            <p style="color: #F0F0F0; font-size: 16px" class="d-flex w-100">{{guild.level}}lvl | {{(guild.levelPercentage * 100).toFixed(0)}}%</p>
                        </b-progress-bar>
                    </b-progress>
                </div>
            </div> -->
            <hr />
        </b-card-title>
        <b-card-body>
            <b-row class="text-center">
                <b-col cols="3">
                    <p>ID: {{ guild.id }}</p>
                </b-col>
                <b-col cols="6">
                    <p>Дата создания: {{ guild.created | toLocaleDate }}</p>
                    <p>
                        Вложено $ в гильдию:
                        {{ Intl.NumberFormat().format(guild.totalCoins) }}
                    </p>
                    <p>
                        Заработано XP:
                        {{ Intl.NumberFormat().format(guild.totalExp) }}
                    </p>
                </b-col>
                <b-col cols="3"> </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<script>
import { toLocaleDate } from '@/filters'
export default {
    data() {
        return {
            levelBar: {
                value: 0
            }
        }
    },
    props: ['guild'],
    filters: {
        toLocaleDate,
        replaceShit: value => {
            return value
            //return value.replace('<br><br>','<br>').replace('<strong>', '').replace('</strong>', '')
        }
    }
}
</script>

<style scoped>
* {
    font-family: Roboto;
    margin: 0;
    padding: 0;
}
hr {
    margin-top: 3px;
    margin-bottom: 5px;
}
</style>
