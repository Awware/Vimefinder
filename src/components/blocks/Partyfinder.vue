<template>
    <b-card header="Partyfinder" footer-tag="footer" class="mt-2">
        <template #footer>
            <div class="text-center">
            <button class="btn btn-outline-secondary p-1" @click="update"
                    :disabled="loading">Получить</button>
                    </div>
        </template>
        <Loader v-if="loading" />
        <div v-else>
            <div v-if="parties.users.length && !error">
                <PlayerInParty v-for="party in parties.users" :key="party.id" :party="party" />
            </div>
            <p v-else-if="error" class="text-center" style="color: #9A5364">{{error ? error : 'Неизвестная ошибка!'}}</p>
            <p v-else class="text-center" style="color: #6894dd">Нажми на кнопку ниже</p>
        </div>
    </b-card>
</template>

<script>
    import Loader from "@/components/Loader"
    import PlayerInParty from "@/components/PlayerInParty"
    import {
        request
    } from "@/request"
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
                const rawResponse = await request(`http://localhost:5000/api/user/${this.user.id}/party`)
                if (rawResponse.message) this.error = rawResponse.message 
                else this.parties.users = rawResponse
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    p {
        padding: 0;
        margin: 0;
    }
</style>