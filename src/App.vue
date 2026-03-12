<script setup>
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-900">
    <TopBar />
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* Since we are using Tailwind CSS, you generally won't need much custom CSS here. */
</style>