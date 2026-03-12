<template>
  <div class="max-w-4xl mx-auto py-10 px-6">
    <div v-if="lesson" class="bg-white p-8 rounded-xl shadow-md prose max-w-none">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        {{ lesson.icon }} {{ lesson.title }}
      </h1>
      
      <div v-html="lesson.content" class="text-gray-700 leading-relaxed space-y-4"></div>
      
      <div v-if="lesson.id === 'network-models'" class="my-8">
        

[Image of OSI Model vs TCP/IP Protocol Suite]

      </div>
    </div>
    <div v-else class="text-center py-20 text-gray-500 text-xl">
      Lesson not found.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { syllabus } from '../data/syllabus.js';

const route = useRoute();

// Reactively find the correct lesson based on the URL parameter
const lesson = computed(() => {
  return syllabus.find(l => l.id === route.params.id);
});
</script>