<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 gap-4">
        
        <router-link to="/" class="flex items-center gap-3 group shrink-0">
          <div class="w-10 h-10 md:w-14 md:h-14 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <img src="/vrskill.svg" alt="VR NetHub Logo" class="w-full h-full object-cover rounded-xl" />
          </div>
          <span class="font-extrabold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight hidden sm:block">
            VR NetHub
          </span>
        </router-link>

        <div class="flex-1 max-w-md relative hidden sm:block">
          <div class="relative group/search">
            <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/search:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search concepts (e.g., OSI, TCP...)" 
              class="w-full bg-gray-100 hover:bg-gray-200 focus:bg-white text-gray-800 text-sm rounded-full pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
            >
          </div>
          
          <div v-if="searchQuery" class="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden z-50">
            <div v-if="searchResults.length > 0" class="max-h-64 overflow-y-auto">
              <router-link 
                v-for="result in searchResults" 
                :key="result.id" 
                :to="'/lesson/' + result.id"
                @click="searchQuery = ''"
                class="block px-4 py-3 hover:bg-blue-50 border-b border-gray-50 last:border-0 transition-colors"
              >
                <div class="font-bold text-blue-700 text-sm">{{ result.icon }} {{ result.title }}</div>
                <div class="text-xs text-gray-500 truncate mt-1">Found match in module...</div>
              </router-link>
            </div>
            <div v-else class="px-4 py-6 text-center text-gray-500 text-sm">
              No results found for "{{ searchQuery }}"
            </div>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-6 shrink-0">
          <router-link to="/" class="text-gray-600 hover:text-blue-600 font-semibold transition-colors">Home</router-link>
          
          <router-link to="/support" class="text-gray-600 hover:text-blue-600 font-semibold transition-colors">Support & FAQ</router-link>
          
          <div class="relative group" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
            <button class="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-semibold transition-colors py-2">
              Modules
              <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180 text-blue-600': isDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <transition name="dropdown">
              <div v-show="isDropdownOpen" class="absolute right-0 top-full w-[350px] bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 mt-2">
                <div class="px-5 pb-2 mb-2 border-b border-gray-100 flex justify-between items-center">
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Curriculum</span>
                  <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-md">{{ completedModules.length }} / {{ syllabus.length }} Done</span>
                </div>
                <div class="max-h-[60vh] overflow-y-auto custom-scrollbar px-2">
                  <router-link v-for="lesson in syllabus" :key="lesson.id" :to="'/lesson/' + lesson.id" class="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group/item" active-class="bg-blue-50 border-l-4 border-blue-600 shadow-sm" @click="isDropdownOpen = false">
                    <span class="text-2xl group-hover/item:scale-110 transition-transform">{{ lesson.icon }}</span>
                    <span class="text-sm font-medium text-gray-700 group-hover/item:text-blue-700 flex-1">{{ lesson.title }}</span>
                    <span v-if="completedModules.includes(lesson.id)" class="text-green-500 text-lg font-bold ml-auto" title="Completed">✅</span>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="md:hidden flex items-center shrink-0">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="mobile-slide">
      <div v-show="isMobileMenuOpen" class="md:hidden absolute w-full left-0 top-[65px] bg-white border-b border-gray-200 shadow-2xl">
        <div class="px-4 py-6 space-y-2 max-h-[85vh] overflow-y-auto">
          
          <div class="relative mb-6">
            <input v-model="searchQuery" type="text" placeholder="Search..." class="w-full bg-gray-100 text-gray-800 text-sm rounded-xl pl-4 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
            <div v-if="searchQuery" class="absolute top-full left-0 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
               <router-link v-for="result in searchResults" :key="result.id" :to="'/lesson/' + result.id" @click="searchQuery = ''; isMobileMenuOpen = false" class="block px-4 py-3 border-b border-gray-50 text-sm font-medium text-blue-600">
                 {{ result.title }}
               </router-link>
            </div>
          </div>

          <router-link to="/" class="block px-4 py-3 rounded-xl text-gray-700 font-bold hover:bg-gray-50" @click="isMobileMenuOpen = false">🏠 Home</router-link>
          
          <router-link to="/support" class="block px-4 py-3 rounded-xl text-gray-700 font-bold hover:bg-gray-50" @click="isMobileMenuOpen = false">🛠️ Support & FAQ</router-link>

          <div class="flex justify-between items-center mb-2 mt-6 px-4">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Curriculum Modules</span>
          </div>
          
          <router-link v-for="lesson in syllabus" :key="lesson.id" :to="'/lesson/' + lesson.id" class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors" active-class="bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600" @click="isMobileMenuOpen = false">
            <span class="text-xl">{{ lesson.icon }}</span>
            <span class="text-base font-medium text-gray-700 flex-1">{{ lesson.title }}</span>
            <span v-if="completedModules.includes(lesson.id)" class="text-green-500 text-lg font-bold ml-auto">✅</span>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { syllabus } from '../data/syllabus.js';

const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const completedModules = ref([]);
const searchQuery = ref('');

// Search Logic
const searchResults = computed(() => {
  if (!searchQuery.value) return [];
  const query = searchQuery.value.toLowerCase();
  return syllabus.filter(lesson => 
    lesson.title.toLowerCase().includes(query) || 
    lesson.content.toLowerCase().includes(query)
  );
});

// Gamified Progress Logic
const loadProgress = () => {
  const saved = localStorage.getItem('completedModules');
  if (saved) completedModules.value = JSON.parse(saved);
};

onMounted(() => {
  loadProgress();
  window.addEventListener('lesson-completed', loadProgress);
});
onUnmounted(() => window.removeEventListener('lesson-completed', loadProgress));
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); transform-origin: top right; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: scale(0.95) translateY(-10px); }
.mobile-slide-enter-active, .mobile-slide-leave-active { transition: all 0.3s ease-out; }
.mobile-slide-enter-from, .mobile-slide-leave-to { opacity: 0; transform: translateY(-20px); }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
.custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #94a3b8; }
</style>