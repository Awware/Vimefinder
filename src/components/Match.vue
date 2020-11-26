<template>
    <div>
        <b-card style="height: 8rem; width:13rem;" class="mt-3 mb-2" no-body>
            <b-card-body class="position: relative;">
                <b-card-title class="game-title">
                    {{match.game | translateTitle}}
                    <span class="state-deg" :style="{color: getStatusColor()}" v-b-tooltip.hover :title="getStatusTitle"> *</span>
                    <hr>
                </b-card-title>
                <div class="text-center">
                    <p><span class="text-muted">Карта: </span> {{match.map.name}}</p>
                    <p><span class="text-muted">Игроков: </span> {{match.players}}</p>
                    <p><span class="text-muted">Длительность: </span> {{match.duration | normalDate}}</p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    props:{
        match:{
            type: Object,
            required:true
        }
    },
    methods:{
        getStatusColor(){
            if(this.match.state === 1) return '#7BBD4F'
            else if (this.match.state === 0) return '#D15252'
            else return '#CAC959'
        },
        getStatusTitle(){
            if(this.match.state === 1) return 'Победа'
            else if (this.match.state === 0) return 'Поражение'
            else return 'Ничья'
        }
    },
    filters:{
        normalDate : function(value){
            if(!value) return '<1сек.';
            const minutes = Math.round(value / 60)
            if(minutes >= 1){
                return `${minutes}мин.`
            }
            else return `${value}сек.`
        },
        translateTitle: function(value){
            switch(value){
                case 'BWH':
                    return 'Bed Wars'
                case 'LUCKYWARS':
                    return 'Lucky Wars'
                case 'HGL':
                    return 'Hunger Games Lucky'
                case 'DUELS':
                    return 'Duels'
                default:
                    return value
            }
        }
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
        margin-top: 5px;
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