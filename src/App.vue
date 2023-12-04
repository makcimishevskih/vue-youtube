<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheCategories from '@/components/TheCategories.vue'
</script>

<template>
  <the-header />
  <the-sidebar />

  <div class="view">
    <the-categories />
    <RouterView />
  </div>
</template>

<style scoped>
.view {
  /* display: flex; */
  padding-top: 80px;
  /* margin-left: 240px; */
  /* height: 100%; */
}

/* .container {
  max-width: 1440px;
  padding: 0 20px;
  min-height: 100%;
 } */
</style>
