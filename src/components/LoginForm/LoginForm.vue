<template>
    <div class="flex-col flex border-solid border border-white rounded p-8">
        <form @submit.prevent="log()">
            <div class="flex-col flex justify-center">
                <label class="text-base pb-2">Username : </label>
                <input class="rounded p-2" type="text" placeholder="Enter Username" name="username" required
                    v-model="state.username">
                <label class="text-base pb-2 pt-2">Password : </label>
                <input class="rounded p-2" type="password" placeholder="Enter Password" name="password" required
                    v-model="state.password">
                <button class="border-solid border border-blue rounded p-2 block w-24 font-bold self-center mt-8"
                    type="submit">Login</button>
                <input class="inline-block" type="checkbox" checked="checked"> Remember me
                <button type="button" class="cancelbtn"> Cancel</button>
                Forgot <a href="#"> password? </a>
            </div>
        </form>
        {{ greetings }}
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const state = reactive({
    username: '',
   password: ''
});

const log = () => {
    console.log(state.username, state.password)
}



</script>

<style>

</style>