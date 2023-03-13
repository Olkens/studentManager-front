<template>
    <div class="flex-col flex border-solid border border-white rounded p-8">
        <div>
            <h3>{{ sideBarTitle }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sideBarTitle = ref('Classes:')
</script>

<style lang="scss" scoped>

</style>