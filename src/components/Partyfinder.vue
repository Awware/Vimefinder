<template>
    <div>
        <div class="card mt-2" style="width: 23rem;">
            <div class="card-header">
               Partyfinder
            </div>
            <Loader v-if="loading" />
            <div v-else>
                    <div v-if="parties.users.length && !error">
                        <PlayerInParty v-for="party in parties.users" :key="party.id" :party="party"/>
                    </div>
                    <ul v-else-if="error" class="list-group list-group-flush"><li class="list-group-item text-center"><p style="color: #9A5364">{{error ? error : 'Неизвестная ошибка!'}}</p></li></ul>
                    <ul v-else class="list-group list-group-flush"><li class="list-group-item text-center"><p style="color: #6894dd">Тыкни на кнопку!</p></li></ul>
                <div class="card-footer text-center">
                    <button class="btn btn-outline-secondary p-1" @click="update"
                        :disabled="loading">Обновить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "@/components/Loader"
    import PlayerInParty from "@/components/PlayerInParty"
    import {request} from "@/request"
    export default {
        data() {
            return {
                loading: false,
                parties: {
                    users: []
                },
                error: ''
                
            }
        },
        components: {
            Loader,
            PlayerInParty
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        methods: {
            async update() {
                this.loading = true
                const rawResponse = await request(`http://localhost:5000/api/user/${this.user.id}`, 'POST')
                if(rawResponse.message){
                    this.error = rawResponse.message
                }
                else{
                    this.parties.users = rawResponse
                }
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    p{
        padding: 0;
        margin: 0;
    }
</style>