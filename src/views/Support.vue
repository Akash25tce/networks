<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
    
    <div class="text-center mb-16">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl mb-6 shadow-inner">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Support & Troubleshooting</h1>
      <p class="text-xl text-gray-500 max-w-2xl mx-auto">Having trouble with SteamVR or the AI simulation? Check our common solutions or track recent updates.</p>
    </div>

    <section class="mb-20">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span>🛠️</span> Common Issues
      </h2>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button 
            @click="toggleFaq(index)" 
            class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
          >
            <span class="font-bold text-gray-800 text-lg">{{ faq.question }}</span>
            <svg class="w-6 h-6 text-blue-500 transition-transform duration-300" :class="{ 'rotate-180': activeFaq === index }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
          <div 
            v-show="activeFaq === index" 
            class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
          >
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <span>🚀</span> Application Release Notes
      </h2>
      
      <div class="relative border-l-4 border-blue-100 ml-4 md:ml-6 space-y-10">
        
        <div v-for="(release, index) in changelog" :key="index" class="relative pl-8 md:pl-10">
          <div class="absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md" :class="index === 0 ? 'bg-green-500 animate-pulse' : 'bg-blue-400'"></div>
          
          <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 class="text-xl font-bold text-gray-900">Version {{ release.version }}</h3>
              <span class="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{{ release.date }}</span>
            </div>
            
            <p class="text-gray-700 mb-4">{{ release.description }}</p>
            
            <ul class="space-y-2">
              <li v-for="(change, cIndex) in release.changes" :key="cIndex" class="flex items-start gap-2 text-sm text-gray-600">
                <span class="text-blue-500 mt-0.5">•</span> {{ change }}
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeFaq = ref(0); // Opens the first FAQ by default

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

// FAQ Data
const faqs = [
  {
    question: "SteamVR is not detecting my headset.",
    answer: "Ensure your headset is plugged directly into your dedicated GPU, not the motherboard. Restart SteamVR and check if your base stations (if applicable) are powered on and visible to the headset."
  },
  {
    question: "The AI Avatar isn't responding to my voice.",
    answer: "Check your Windows default microphone settings. The VR application utilizes the system's default input device. Also, ensure you have an active internet connection, as the AI processing requires backend connectivity."
  },
  {
    question: "How do I reset a packet flow simulation?",
    answer: "You can point your VR controller at the main terminal dashboard within the lab and select the red <strong>'Flush Topology'</strong> button. This will wipe all current dynamic IPs and stop running packets."
  },
  {
    question: "I'm getting high latency during the TCP handshake simulation.",
    answer: "This is intentional! The simulation artificially injects latency to visually demonstrate the 3-way handshake process (SYN, SYN-ACK, ACK) so you can clearly observe the data passing between nodes."
  }
];

// Changelog Data
const changelog = [
  {
    version: "1.2.0",
    date: "Current Build",
    description: "Major update introducing the interactive AI avatar and enhanced packet visualizers.",
    changes: [
      "Added voice-activated AI assistant to guide students through topologies.",
      "Implemented dynamic IP assignment for node-to-node simulations.",
      "Upgraded the particle effects for UDP vs TCP packet flows to clearly show reliability differences."
    ]
  },
  {
    version: "1.1.0",
    date: "Previous Build",
    description: "Expanded the hardware library and improved physics.",
    changes: [
      "Added interactive Router and Switch 3D models.",
      "Fixed a bug where cables would clip through the floor.",
      "Optimized SteamVR rendering for lower-end PC setups."
    ]
  },
  {
    version: "1.0.0",
    date: "Initial Release",
    description: "The foundational build of the VR NetHub learning platform.",
    changes: [
      "Basic LAN and WAN topologies implemented.",
      "Static IP reading functionality.",
      "Core integration with the web-based curriculum."
    ]
  }
];
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>