<template>
    <b-row cols="4" v-cloak>
        <Person v-for="person in friends" :key="person.id" :person="person"/>
    </b-row>
</template>

<script>
import Person from "@/components/Person"
export default {
    props:{
        friends:{
            type: Array,
            required: true
        }
    },
    components:{
        Person
    }
}
</script>

<style scoped>
    [v-cloak]{
        display: none;
    }
</style>