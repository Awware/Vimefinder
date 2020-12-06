<template>
    <div>
        <b-card style="height: 9rem; width:13rem;" class="mt-2 mb-2 ml-3" no-body>
            <b-card-title class="game-title">
                {{match.game | translateTitle}}
                <span class="state-deg" :style="{color: getStatusColor()}" v-b-tooltip.hover :title="getStatusTitle"> *</span>
                <hr>
            </b-card-title>
            <b-card-body>
                <div class="text-center">
                    <p v-if="match.map"><span class="text-muted">Карта: </span> <span :style="{fontSize: (match.map.name.length > 14 ? '14px' : '16px')}">{{match.map.name}}</span></p>
                    <p v-else>Карта: неизвестно</p>
                    <p><span class="text-muted">Игроков: </span> {{match.players}}</p>
                    <p><span class="text-muted">Длительность: </span> {{match.duration | normalDate}}</p>
                    <hr>
                    <p class="text-muted">{{match.date | toLocaleDate}}</p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import {normalDate, translateTitle, toLocaleDate} from "@/filters"
export default {
    props:{
        match:{
            type: Object,
            required: true
        }
    },
    methods:{
        getStatusColor(){
            if(this.match.state){
                if(this.match.state === 1) return '#7BBD4F'
                else if (this.match.state === 0) return '#D15252'
                else return '#CAC959'
            }
            else{
                if(this.match.win) return '#7BBD4F'
                else return '#D15252'
            }
        },
        getStatusTitle(){
            if(this.match.state){
                if(this.match.state === 1) return 'Победа'
                else if (this.match.state === 0) return 'Поражение'
                else return 'Ничья'
            }
            else{
                if(this.match.win) return 'Победа'
                else return 'Поражение'
            }
        }
    },
    filters:{
        normalDate,
        translateTitle,
        toLocaleDate
    }
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
    .game-title{
        font-size: 16px;
        text-align:center;
        font-family: Roboto;
        font-weight: bold;
        color: #3c3c3c;
        padding-top: 5px;
    }
    .state-deg{
        position: absolute;
        margin-left: 4px;
        top: -2px;
        transform: rotate(-45deg);
        font-size:24px;
    }
</style>