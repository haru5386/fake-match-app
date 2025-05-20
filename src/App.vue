<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    <main class="pt-16">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
