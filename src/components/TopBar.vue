<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-14 h-14 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <img src="/vrskill.svg" alt="VR NetHub Logo" class="w-full h-full object-cover rounded-xl" />
          </div>
          <span class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
            VR NetHub
          </span>
        </router-link>

        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-600 hover:text-blue-600 font-semibold transition-colors">
            Home
          </router-link>
          
          <div class="relative group" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
            <button class="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-semibold transition-colors py-2">
              Curriculum Modules
              <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180 text-blue-600': isDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-show="isDropdownOpen" class="absolute right-0 top-full w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 mt-2">
                <div class="px-5 pb-2 mb-2 border-b border-gray-100">
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Select a Topic</span>
                </div>
                <div class="max-h-[60vh] overflow-y-auto custom-scrollbar px-2">
                  <router-link
                    v-for="lesson in syllabus"
                    :key="lesson.id"
                    :to="'/lesson/' + lesson.id"
                    class="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group/item"
                    active-class="bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                    @click="isDropdownOpen = false"
                  >
                    <span class="text-2xl group-hover/item:scale-110 transition-transform">{{ lesson.icon }}</span>
                    <span class="text-sm font-medium text-gray-700 group-hover/item:text-blue-700">{{ lesson.title }}</span>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="md:hidden flex items-center">
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
          <router-link to="/" class="block px-4 py-3 rounded-xl text-gray-700 font-bold hover:bg-gray-50" @click="isMobileMenuOpen = false">🏠 Home</router-link>
          <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-4">Curriculum Modules</div>
          <router-link v-for="lesson in syllabus" :key="lesson.id" :to="'/lesson/' + lesson.id" class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors" active-class="bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600" @click="isMobileMenuOpen = false">
            <span class="text-xl">{{ lesson.icon }}</span>
            <span class="text-base font-medium text-gray-700">{{ lesson.title }}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { syllabus } from '../data/syllabus.js';

const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
</script>

<style scoped>
/* Smooth Dropdown Animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top right;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* Mobile Menu Slide Animation */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.3s ease-out;
}
.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Custom sleek scrollbar for the dropdown */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #94a3b8;
}
</style>