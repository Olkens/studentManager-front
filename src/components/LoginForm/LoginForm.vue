<template>
    <div class="flex-col flex">
        <form @submit.prevent="login()">
            <div class="flex-col flex">
                <label class=" text-base ">Username : </label>
                <input class="rounded" type="text" placeholder="Enter Username" name="username" required v-model="username">
                <label>Password : </label>
                <input type="password" placeholder="Enter Password" name="password" required v-model="password">
                <button type="submit" @click.prevent="login()">Login</button>
                <input type="checkbox" checked="checked"> Remember me
                <button type="button" class="cancelbtn"> Cancel</button>
                Forgot <a href="#"> password? </a>
            </div>
        </form>
        {{ greetings }}
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            auth: useAuthStore(),
            greetings: '',
            token: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidGVzdCIsImV4cCI6MTY3NTQxMzcwMywiaWF0IjoxNjc1MzcwNTAzLCJzY29wZSI6InJlYWQifQ.C5qevjb2Zwbn0wQYi0vkGkzHJJHvUqBYvDR0L-NW_LfysekferWc4iKePrIv8FIdZwtZvXM5AKDiDr1nlaYgMKAAlygd8xYCoejWtWovKnnp5ixaUShpHpzVSU1cwXmC_Q5x6zn061SwxoH0S1ayq0UmvV4RKFF_2sgxExs5tu2Y8javGF6Do04p8D8S2y2rBQ3qGZ0O59oVhA0dMJY8yKYVEfz9Ez-5B9z9C_D4lfP6h0zQNSs2lVBJW4YXnmqhz7lmbHVUNFjOtOQxUl2Yr1z3F-3pgniRaq-JQcC4303TP1JcDnhWcqE12TtC_98lg6bbN_oVVC6KSzTyrXk57Q'
        }
    },
    mounted() {
        console.log('elo')
        axios.get('http://localhost:8080/api/greetings', {
            headers: {
                'Authorization': 'Bearer ' + this.token}
        }).then((res) => {
            this.greetings = res.data
        })
    },
    // methods: {
    //     login() {
    //         if (this.username != "" && this.password != "") {
    //             this.auth.login(this.username, this.password)
    //         }
    //     }
    // }
}
</script>

<style>

</style>