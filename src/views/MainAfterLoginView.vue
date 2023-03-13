<template>
    <div class="flex">
        <div class="sidebar basis-2/6">
            <SideBar />
        </div>
        <div class="basis-4/6">
            <h3>{{ groupName }}</h3>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/GroupView/SideBar.vue';
import { ref, reactive } from 'vue'

const groupName = ref('Unknown group')
</script>

<style lang="scss" scoped></style>

