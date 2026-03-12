<template>
  <div class="w-full pb-20 animate-fade-in">
    
    <header class="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white overflow-hidden py-24 md:py-32 px-6 shadow-2xl">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      
      <div class="relative max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-blue-200 text-sm font-semibold tracking-wide uppercase mb-4">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Next-Gen Learning
        </div>
        
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
          Master Networks in <br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Virtual Reality</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Step inside your network. An immersive SteamVR training platform bridging theoretical concepts with interactive, hands-on topologies.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
          <a 
            href="/vr-project.apk" 
            download
            class="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)] flex items-center justify-center gap-3"
          >
            <svg class="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download VR APK
          </a>
          <button 
            @click="scrollToVideo" 
            class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/15 border border-white/20 text-white text-lg font-bold rounded-full backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3"
          >
            <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            Watch Demo
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-6 space-y-24 mt-16">
      
      <section class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 transform transition-all hover:shadow-2xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Get Started in Minutes</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <div class="absolute -top-6 left-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-blue-600 transition-colors shadow-lg">1</div>
            <h3 class="text-xl font-bold text-gray-800 mt-4 mb-3">Prepare Hardware</h3>
            <p class="text-gray-600">Ensure your compatible VR headset is connected to your PC and tracking is properly configured.</p>
          </div>
          <div class="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <div class="absolute -top-6 left-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-blue-600 transition-colors shadow-lg">2</div>
            <h3 class="text-xl font-bold text-gray-800 mt-4 mb-3">Launch SteamVR</h3>
            <p class="text-gray-600">Install and open <strong>SteamVR</strong>. Keep it running in the background to bridge the connection.</p>
          </div>
          <div class="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <div class="absolute -top-6 left-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-blue-600 transition-colors shadow-lg">3</div>
            <h3 class="text-xl font-bold text-gray-800 mt-4 mb-3">Install & Play</h3>
            <p class="text-gray-600">Download our APK, install it onto your target device, and launch the application to begin training.</p>
          </div>
        </div>
      </section>

      <section id="demo-video" class="scroll-mt-24 text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4">No VR kit? No problem.</h2>
        <p class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Experience a high-definition glimpse of the project in action right from your browser.</p>

        <div v-if="!showVideo" class="relative max-w-4xl mx-auto aspect-video bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer border-4 border-gray-800" @click="showVideo = true">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1626379961798-54f819ee896a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
          
          <div class="relative z-20 flex flex-col items-center transform group-hover:scale-110 transition-transform duration-300">
            <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] mb-4">
              <svg class="w-10 h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="text-white font-bold text-xl tracking-wider uppercase">Play Demo</span>
          </div>
        </div>

        <div v-else class="max-w-4xl mx-auto relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 bg-black animate-scale-in">
          <iframe 
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/eAGJMq7t1b4?autoplay=1" 
            title="Project Demo Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </section>

     <section class="pb-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">System Flow</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">A seamless journey from web-based theory to an AI-guided, interactive network simulation.</p>
        </div>
        
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-12 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 -translate-y-1/2 z-0"></div>

          <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative z-10">
            
            <div class="flex flex-col items-center text-center w-full md:w-1/3 group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-4 group-hover:scale-110 group-hover:border-blue-300 transition-all duration-300">
                <span class="text-4xl">🌐</span>
              </div>
              <h4 class="font-bold text-gray-800 text-xl mb-2">1. Web Portal</h4>
              <p class="text-sm text-gray-500 px-6">Students review the theoretical network curriculum and download the application.</p>
            </div>

            <div class="flex items-center justify-center text-blue-400">
              <svg class="w-8 h-8 md:rotate-0 rotate-90 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>

            <div class="flex flex-col items-center text-center w-full md:w-1/3 group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-indigo-100 shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-4 group-hover:scale-110 group-hover:border-indigo-300 transition-all duration-300 relative">
                <span class="text-4xl">🥽</span>
                <div class="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-bounce"></div>
              </div>
              <h4 class="font-bold text-gray-800 text-xl mb-2">2. VR Interactive Lab</h4>
              <p class="text-sm text-gray-500 px-6">Users step into the lab, greeted by an AI Avatar that actively guides them through the modules.</p>
            </div>

            <div class="flex items-center justify-center text-indigo-400">
              <svg class="w-8 h-8 md:rotate-0 rotate-90 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>

            <div class="flex flex-col items-center text-center w-full md:w-1/3 group">
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.2)] mb-4 group-hover:scale-110 group-hover:border-purple-300 transition-all duration-300">
                <span class="text-4xl">⚡</span>
              </div>
              <h4 class="font-bold text-gray-800 text-xl mb-2">3. Network Simulation</h4>
              <p class="text-sm text-gray-500 px-6">The system visualizes real-time packet flow between isolated systems with specific IP addresses.</p>
            </div>

          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-12 transition-transform">📱</div>
            <h4 class="font-bold text-xl text-gray-900 mb-3">Frontend Hub</h4>
            <p class="text-gray-600 leading-relaxed">Built with Vue.js and Tailwind CSS, providing a lightning-fast, modular curriculum guide for students to master theoretical concepts first.</p>
          </div>
          
          <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-12 transition-transform">🤖</div>
            <h4 class="font-bold text-xl text-gray-900 mb-3">AI-Guided VR</h4>
            <p class="text-gray-600 leading-relaxed">An immersive SteamVR environment where a built-in AI avatar converses with students, answering questions and directing their practical learning.</p>
          </div>
          
          <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-12 transition-transform">🔄</div>
            <h4 class="font-bold text-xl text-gray-900 mb-3">Packet Flow Engine</h4>
            <p class="text-gray-600 leading-relaxed">A specialized simulation backend that establishes distinct virtual IPs, allowing students to visually trace data packets moving across the network topology.</p>
          </div>
        </div>
      </section>

    </div> 
  </div> 
</template>

<script setup>
import { ref } from 'vue';

const showVideo = ref(false);

const scrollToVideo = () => {
  const element = document.getElementById('demo-video');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out 0.2s forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>