<script setup>
import HomeContent from '../components/HomeContent.vue'
import LoginForm from '@/components/LoginForm/LoginForm.vue'
</script>

<template>
  <main>
    <div class="flex justify-around">
      <div class="basis-1/2">
        <HomeContent />
      </div>
      <div class="basis-1/4">
        <LoginForm />
      </div>


    </div>
  </main>
</template>
