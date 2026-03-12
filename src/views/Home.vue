<template>
  <div class="max-w-4xl mx-auto py-12 px-6">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="bg-blue-600 p-8 text-center text-white">
        <h1 class="text-4xl font-extrabold mb-4">Network Concepts VR Training</h1>
        <p class="text-lg opacity-90">Immerse yourself in computer networks using our interactive Steam VR experience.</p>
      </div>
      
      <div class="p-8">
        <h2 class="text-2xl font-bold border-b-2 border-gray-100 pb-2 mb-6">Setup Instructions</h2>
        
        <ol class="list-decimal list-inside space-y-4 text-gray-700 text-lg mb-8">
          <li>Ensure you have a compatible VR headset connected to your PC.</li>
          <li>Install and launch <strong>SteamVR</strong>. Ensure your headset is tracking correctly.</li>
          <li>Download the APK file using the button below.</li>
          <li>Install the application onto your target device (e.g., via SideQuest if using a standalone Quest headset, or run directly if PCVR).</li>
          <li>Launch the application while SteamVR is running to begin the training modules.</li>
        </ol>

        <div class="flex justify-center mt-8 border-t-2 border-gray-100 pt-8">
          <a 
            href="/vr-project.apk" 
            download
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center space-x-3"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span>Download VR APK</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>