<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="lesson" class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      
      <div class="bg-gradient-to-r from-gray-900 to-blue-900 px-8 py-10 text-white">
        <div class="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-2">
          Module {{ lesson.id.replace('-', ' ') }}
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold flex items-center gap-4">
          <span class="text-5xl bg-white/10 p-3 rounded-xl shadow-lg">{{ lesson.icon }}</span> 
          {{ lesson.title }}
        </h1>
      </div>
      
      <div class="p-8 md:p-12">
        <div 
          v-html="lesson.content" 
          class="prose prose-lg prose-blue max-w-none text-gray-700"
        ></div>
      </div>
      
      <div class="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center">
        <router-link to="/" class="text-blue-600 hover:text-blue-800 font-medium flex items-center transition">
          ← Back to VR Instructions
        </router-link>
      </div>

    </div>

    <div v-else class="text-center py-32 bg-white rounded-2xl shadow-xl">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Lesson not found</h2>
      <p class="text-gray-500 mb-6">The module you are looking for doesn't exist.</p>
      <router-link to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Return Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { syllabus } from '../data/syllabus.js';

const route = useRoute();

const lesson = computed(() => {
  return syllabus.find(l => l.id === route.params.id);
});
</script>

<style>
/* This fixes the styling of elements injected via v-html from syllabus.js */
.prose h2 { margin-top: 2rem; margin-bottom: 1rem; color: #1e3a8a; }
.prose p { margin-bottom: 1.25rem; line-height: 1.8; }
.prose ul { margin-bottom: 1.25rem; }
.prose li { margin-bottom: 0.5rem; }
</style>