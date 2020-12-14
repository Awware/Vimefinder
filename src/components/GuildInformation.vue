<template>
    <b-card no-body>
        <b-card-title class="text-center mt-1 mb-1">
            <p style="word-wrap: break-word;">
                Информация о гильдии `{{ guild.name }}`
            </p>
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
