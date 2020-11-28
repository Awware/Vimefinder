<template>
    <div>
        <b-card style="height: 10rem; width:14rem;" class="mt-2 mb-2 ml-2" no-body>
            <b-card-title class="game-title">
                {{name | translateTitle}}
                <hr>
            </b-card-title>
            <b-card-body class="scrollable">
                <div class="text-center">
                    <p v-for="(keyValue, keyName) in stat.global" :key="keyName">
                            <b-row cols="2">
                                <b-col cols="8" style="font-size: 13px;">
                                    {{keyName | translateKeyTitle}}
                                </b-col>
                                <b-col cols="4" style="font-size: 14px;">
                                    {{keyValue | translatePrisonBlocks}}
                                </b-col>
                            </b-row>
                        </p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import {translateTitle, translateKeyTitle} from "@/filters"
export default {
    props:{
        stat:{
            type: Object,
            required: true
        },
        name:{
            type: String,
            required: true
        }
    },
    filters:{
        translateTitle: value => translateTitle(value),
        translateKeyTitle: value => translateKeyTitle(value),
        translatePrisonBlocks: value =>{
            console.log(value.toString());
            if(typeof value === "object"){
                return "soon"
            }
            return value
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
    .scrollable {
        flex-wrap: nowrap;
        white-space: nowrap;
        max-height: 810px;
        overflow-y: auto;
        /* Scrollbar */
        overflow-x: none;
        scrollbar-width: thin;
        scrollbar-color: #BEBEBE #F2F2F2;
    }
</style>