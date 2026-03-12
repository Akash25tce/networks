<template>
  <nav class="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center space-x-2 font-bold text-xl hover:text-blue-400 transition">
          <span>🏠 VR Network Hub</span>
        </router-link>
        
        <div class="hidden md:flex space-x-4 overflow-x-auto">
          <router-link 
            v-for="lesson in syllabus" 
            :key="lesson.id" 
            :to="'/lesson/' + lesson.id"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
            active-class="bg-blue-600"
          >
            {{ lesson.icon }} {{ lesson.title.split('.')[0] }} </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { syllabus } from '../data/syllabus.js';
</script>