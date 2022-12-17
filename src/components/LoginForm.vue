<template>
    <form>
        <div class="container">
            <label>Username : </label>
            <input type="text" placeholder="Enter Username" name="username" required v-model="username">
            <label>Password : </label>
            <input type="password" placeholder="Enter Password" name="password" required v-model="password">
            <button type="submit" @click.prevent="login()" prevent>Login</button>
            <input type="checkbox" checked="checked"> Remember me
            <button type="button" class="cancelbtn"> Cancel</button>
            Forgot <a href="#"> password? </a>
        </div>
    </form>
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
        }
    },
    mounted() {
        console.log('elo')
        axios.get('http://localhost:8080/api/post/allPosts').then((res) => {
            console.log(res)
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