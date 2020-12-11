<template>
    <div>
        <b-card style="height: 10rem;" class="mt-2 mb-2 ml-1" no-body>
            <b-card-title class="game-title">
                {{ name | translateTitle }}
                <hr />
            </b-card-title>
            <b-card-body class="scrollable">
                <div class="text-center">
                    <p
                        v-for="(keyValue, keyName) in stat.global"
                        :key="keyName"
                    >
                        <b-row cols="2">
                            <b-col
                                cols="8"
                                style="font-size: calc(3px + 1vmin);"
                            >
                                {{ keyName | translateKeyTitle }}
                            </b-col>
                            <b-col
                                cols="4"
                                style="font-size: calc(4px + 1vmin);"
                            >
                                {{ keyValue | translatePrisonBlocks }}
                            </b-col>
                        </b-row>
                    </p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import { translateTitle, translateKeyTitle } from '@/filters'
export default {
    props: {
        stat: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    filters: {
        translateTitle: value => translateTitle(value),
        translateKeyTitle: value => translateKeyTitle(value),
        translatePrisonBlocks: value => {
            if (typeof value === 'object') return 'soon'
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
    padding: 0;
    margin: 0;
    margin-top: 3px;
    margin-bottom: 5px;
}
.game-title {
    font-size: calc(6px + 1vmin);
    text-align: center;
    font-family: Roboto;
    font-weight: bold;
    color: #3c3c3c;
    padding-top: 5px;
}
</style>
