<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div v-if="lesson" class="lg:grid lg:grid-cols-4 lg:gap-8 relative items-start">
      
      <div class="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="bg-gradient-to-r from-gray-900 to-blue-900 px-8 py-10 text-white relative">
          <div class="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Module Active
          </div>
          <div class="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-2">
            Module {{ lesson.id.replace(/-/g, ' ') }}
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold flex items-center gap-4">
            <span class="text-5xl bg-white/10 p-3 rounded-xl shadow-lg">{{ lesson.icon }}</span> 
            {{ lesson.title }}
          </h1>
        </div>
        
        <div class="p-8 md:p-12">
          <div v-html="lesson.content" class="prose prose-lg prose-blue max-w-none text-gray-700 mb-12" id="lesson-content"></div>
          
          <div v-if="lesson.quiz && lesson.quiz.length > 0" class="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-12 mb-12">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🧠 Knowledge Check</h3>
            <div v-for="(q, qIndex) in lesson.quiz" :key="qIndex" class="mb-8 last:mb-0">
              <p class="font-semibold text-lg text-gray-800 mb-4">{{ qIndex + 1 }}. {{ q.question }}</p>
              <div class="space-y-3">
                <label v-for="(option, oIndex) in q.options" :key="oIndex" class="flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200" :class="{'border-blue-500 bg-blue-50': selectedAnswers[qIndex] === oIndex && !isSubmitted, 'border-gray-200 hover:bg-gray-100': selectedAnswers[qIndex] !== oIndex && !isSubmitted, 'border-green-500 bg-green-50': isSubmitted && oIndex === q.answer, 'border-red-500 bg-red-50': isSubmitted && selectedAnswers[qIndex] === oIndex && oIndex !== q.answer, 'opacity-50 cursor-not-allowed': isSubmitted && oIndex !== q.answer && selectedAnswers[qIndex] !== oIndex}">
                  <input type="radio" :name="'question-' + qIndex" :value="oIndex" v-model="selectedAnswers[qIndex]" :disabled="isSubmitted" class="w-5 h-5 text-blue-600 focus:ring-blue-500 disabled:opacity-50">
                  <span class="ml-3 text-gray-700 font-medium" :class="{'text-green-700 font-bold': isSubmitted && oIndex === q.answer}">{{ option }}</span>
                  <span v-if="isSubmitted && oIndex === q.answer" class="ml-auto text-green-500 text-xl">✅</span>
                  <span v-if="isSubmitted && selectedAnswers[qIndex] === oIndex && oIndex !== q.answer" class="ml-auto text-red-500 text-xl">❌</span>
                </label>
              </div>
            </div>
            <div class="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              <button v-if="!isSubmitted" @click="submitQuiz" :disabled="Object.keys(selectedAnswers).length < lesson.quiz.length" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold rounded-xl transition-colors shadow-md">Submit Answers</button>
              <button v-else @click="resetQuiz" class="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl transition-colors shadow-md">Try Again</button>
              <div v-if="isSubmitted" class="text-xl font-bold animate-fade-in" :class="score === lesson.quiz.length ? 'text-green-600' : 'text-orange-500'">Score: {{ score }} / {{ lesson.quiz.length }}</div>
            </div>
          </div>

          <div class="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <router-link v-if="previousLesson" :to="'/lesson/' + previousLesson.id" class="px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl font-semibold transition-all flex items-center gap-3 w-full sm:w-auto justify-center group"><span class="group-hover:-translate-x-1 transition-transform">←</span> Previous: {{ previousLesson.title.split('.')[0] }}</router-link>
            <div v-else class="hidden sm:block"></div>
            <router-link v-if="nextLesson" :to="'/lesson/' + nextLesson.id" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center group transform hover:-translate-y-1">Next: {{ nextLesson.title.split('.')[0] }} <span class="group-hover:translate-x-1 transition-transform">→</span></router-link>
            <router-link v-else to="/" class="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center group transform hover:-translate-y-1">Return to Dashboard 🏠</router-link>
          </div>
        </div>
      </div>

      <div class="hidden lg:block lg:col-span-1 sticky top-24">
        <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h3 class="text-lg font-extrabold text-gray-900 mb-4 border-b pb-2 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
            In this Module
          </h3>
          <ul class="space-y-3">
            <li v-for="heading in tableOfContents" :key="heading.id">
              <a :href="'#' + heading.id" class="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors hover:translate-x-1 inline-block transform duration-200">
                {{ heading.text }}
              </a>
            </li>
            <li v-if="lesson.quiz && lesson.quiz.length > 0" class="pt-3 border-t border-gray-100 mt-3">
               <span class="text-green-600 text-sm font-bold flex items-center gap-2">🧠 Knowledge Check</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { syllabus } from '../data/syllabus.js';

const route = useRoute();

const currentIndex = computed(() => syllabus.findIndex(l => l.id === route.params.id));
const lesson = computed(() => syllabus[currentIndex.value]);
const previousLesson = computed(() => currentIndex.value > 0 ? syllabus[currentIndex.value - 1] : null);
const nextLesson = computed(() => currentIndex.value < syllabus.length - 1 ? syllabus[currentIndex.value + 1] : null);

const markAsCompleted = () => {
  if (!lesson.value) return;
  const saved = localStorage.getItem('completedModules');
  let completed = saved ? JSON.parse(saved) : [];
  if (!completed.includes(lesson.value.id)) {
    completed.push(lesson.value.id);
    localStorage.setItem('completedModules', JSON.stringify(completed));
    window.dispatchEvent(new Event('lesson-completed'));
  }
};

// Quiz Logic
const selectedAnswers = ref({});
const isSubmitted = ref(false);
const score = ref(0);

const submitQuiz = () => {
  let currentScore = 0;
  lesson.value.quiz.forEach((q, index) => {
    if (selectedAnswers.value[index] === q.answer) currentScore++;
  });
  score.value = currentScore;
  isSubmitted.value = true;
};

const resetQuiz = () => {
  selectedAnswers.value = {};
  isSubmitted.value = false;
  score.value = 0;
};

// NEW: Dynamic Table of Contents Generator
const tableOfContents = ref([]);

const generateTOC = async () => {
  tableOfContents.value = [];
  // Wait for the DOM to update with the new v-html content
  await nextTick(); 
  setTimeout(() => {
    const contentDiv = document.getElementById('lesson-content');
    if (!contentDiv) return;
    
    // Find all h2 tags inside the lesson content
    const headings = contentDiv.querySelectorAll('h2');
    headings.forEach((heading, index) => {
      // Assign an ID to the h2 so the anchor links can jump to it
      const id = `section-${index}`;
      heading.id = id;
      heading.classList.add('scroll-mt-24'); // Prevents the fixed top bar from covering the heading
      
      tableOfContents.value.push({ id, text: heading.innerText });
    });
  }, 100);
};

watch(() => route.params.id, () => {
  markAsCompleted();
  resetQuiz();
  generateTOC();
});

onMounted(() => {
  markAsCompleted();
  generateTOC();
});
</script>

<style>
/* Smooth scrolling for TOC anchor links */
html { scroll-behavior: smooth; }

.prose h2 { margin-top: 2rem; margin-bottom: 1rem; color: #1e3a8a; transition: all 0.3s ease; }
.prose p { margin-bottom: 1.25rem; line-height: 1.8; }
.prose ul { margin-bottom: 1.25rem; }
.prose li { margin-bottom: 0.5rem; }
.animate-fade-in { animation: fadeIn 0.4s ease-in forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>