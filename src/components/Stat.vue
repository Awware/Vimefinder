<template>
    <div>
        <b-card style="height: 9rem; width:13rem;" class="mt-2 mb-2 ml-3" no-body>
            <b-card-body>
                <b-card-title class="game-title">
                    {{match.game | translateTitle}}
                    <span class="state-deg" :style="{color: getStatusColor()}" v-b-tooltip.hover :title="getStatusTitle"> *</span>
                    <hr>
                </b-card-title>
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
export default {

}
</script>

<style scoped>

</style>