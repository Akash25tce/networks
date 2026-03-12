<template>
  <div class="max-w-5xl mx-auto py-12 px-6">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      <div class="bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Network Concepts VR Training</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">Immerse yourself in computer networks using our interactive Steam VR experience.</p>
      </div>
      
      <div class="p-8 md:p-12">
        <h2 class="text-2xl font-bold border-b-2 border-gray-100 pb-2 mb-6 text-gray-800">Setup Instructions</h2>
        
        <ol class="list-decimal list-inside space-y-4 text-gray-700 text-lg mb-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <li>Ensure you have a compatible VR headset connected to your PC.</li>
          <li>Install and launch <strong>SteamVR</strong>. Ensure your headset is tracking correctly.</li>
          <li>Download the APK file using the button below.</li>
          <li>Install the application onto your target device.</li>
          <li>Launch the application while SteamVR is running to begin the training modules.</li>
        </ol>

        <div class="flex justify-center mb-16">
          <a 
            href="/vr-project.apk" 
            download
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 flex items-center space-x-3"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span class="text-lg">Download VR APK</span>
          </a>
        </div>

        <div class="text-center border-t border-gray-200 pt-12 mb-16">
          <h3 class="text-3xl font-extrabold text-gray-800 mb-3">No VR kit? No Steam? No problem!</h3>
          <p class="text-xl text-gray-600 mb-8">You can still see a glimpse of our project in action right here.</p>

          <button 
            v-if="!showVideo" 
            @click="showVideo = true" 
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition flex items-center justify-center mx-auto space-x-2"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            <span>Watch Demo Video</span>
          </button>

          <div v-if="showVideo" class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-900 bg-black animate-fade-in">
            <iframe 
              class="absolute top-0 left-0 w-full h-full"
               src="https://www.youtube.com/embed/eAGJMq7t1b4?autoplay=1" 
              title="Project Demo Video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-12">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">System Architecture</h2>
          
          <div class="bg-gray-50 p-4 rounded-2xl shadow-inner border border-gray-200 mb-8 flex justify-center items-center min-h-[300px]">
  <img src="/system-design.png" alt="System Architecture Design" class="max-w-full h-auto rounded-lg shadow-md">
</div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center">
              <div class="text-3xl mb-3">🥽</div>
              <h4 class="font-bold text-lg text-gray-800 mb-2">VR Client</h4>
              <p class="text-sm text-gray-600">Built for SteamVR to provide an immersive, hands-on learning environment for network topologies.</p>
            </div>
            <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center">
              <div class="text-3xl mb-3">🌐</div>
              <h4 class="font-bold text-lg text-gray-800 mb-2">Web Hub</h4>
              <p class="text-sm text-gray-600">A Vue.js & Vite Single Page Application acting as the central curriculum guide and application distributor.</p>
            </div>
            <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center">
              <div class="text-3xl mb-3">☁️</div>
              <h4 class="font-bold text-lg text-gray-800 mb-2">Vercel Edge</h4>
              <p class="text-sm text-gray-600">Lightning-fast global delivery network hosting the static assets and APK binaries for instant access.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// This variable controls whether the video is hidden or visible
const showVideo = ref(false);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>