export const syllabus = [
  {
    id: 'network-models',
    title: '1. Network Models',
    icon: '🌐',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">1.1 The OSI Model & TCP/IP Protocol Suite</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The <strong>Open Systems Interconnection (OSI) model</strong> is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct abstract layers.
          </p>
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm mb-6">
            <h3 class="font-bold text-lg mb-3 text-blue-900">The 7 Layers of OSI:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>7. Application:</strong> Network process to application.</li>
              <li><strong>6. Presentation:</strong> Data representation and encryption.</li>
              <li><strong>5. Session:</strong> Interhost communication.</li>
              <li><strong>4. Transport:</strong> End-to-end connections and reliability.</li>
              <li><strong>3. Network:</strong> Path determination and logical addressing (IP).</li>
              <li><strong>2. Data Link:</strong> MAC and LLC (Physical addressing).</li>
              <li><strong>1. Physical:</strong> Media, signal, and binary transmission.</li>
            </ul>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">OSI versus TCP/IP</h3>
          <p class="text-gray-700 leading-relaxed">
            While OSI is a 7-layer theoretical model, the <strong>TCP/IP Protocol Suite</strong> is the practical, 4-layer model (Application, Transport, Internet, Network Access) that the modern Internet is actually built upon. TCP/IP combines the top three OSI layers into a single Application layer, and the bottom two into a Network Access layer.
          </p>
        </section>
      </div>
    `
  },
  {
    id: 'switching',
    title: '2. Switching',
    icon: '🔀',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">2.1 Circuit-Switched Networks</h2>
          <p class="text-gray-700 leading-relaxed">
            In a circuit-switched network, a dedicated physical path is established between the sender and receiver for the entire duration of the communication. Traditional telephone networks are the prime example. It guarantees bandwidth but wastes resources if no data is being sent.
          </p>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">2.2 Packet Switching & Switch Structure</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            In <strong>Packet Switching</strong>, messages are broken down into smaller pieces called packets. Each packet is transmitted individually and can take different routes to the destination, where they are reassembled. This is highly efficient and is the foundation of the internet.
          </p>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 class="font-bold text-lg mb-2">Structure of a Switch & TCP/IP Layers</h3>
            <p class="text-gray-700">
              A switch operates primarily at the Data Link Layer (Layer 2). It uses MAC addresses to forward data packets to specific devices on a network. Multi-layer switches can also operate at the Network Layer (Layer 3) to perform routing functions.
            </p>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'network-types',
    title: '3. Network Types',
    icon: '🏢',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">3.1 WAN, MAN, LAN</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h3 class="font-bold text-lg text-blue-600">LAN (Local)</h3>
              <p class="text-sm text-gray-600 mt-2">Covers a small geographic area, like a home, office, or building. High speed, low error rate.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h3 class="font-bold text-lg text-green-600">MAN (Metropolitan)</h3>
              <p class="text-sm text-gray-600 mt-2">Covers a larger geographic area, such as a city or a large campus.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h3 class="font-bold text-lg text-purple-600">WAN (Wide)</h3>
              <p class="text-sm text-gray-600 mt-2">Spans large geographical distances, connecting countries or continents (e.g., the Internet).</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">3.2 WLAN</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Wireless Local Area Networks (WLANs) allow devices to connect wirelessly using radio waves.</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Infrastructure Network:</strong> Devices communicate through a central Access Point (AP) or router.</li>
            <li><strong>Ad hoc Network:</strong> Devices communicate directly with each other peer-to-peer without a central AP.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'physical-layer',
    title: '4. Physical Layer',
    icon: '🔌',
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">4.1 Transmission Techniques</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The physical layer defines the electrical and physical specifications of the data connection. It dictates how raw bits (0s and 1s) are transmitted over a physical medium (copper wire, fiber optics, wireless).
          </p>
        </section>
        
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">4.2 Multiplexing: TDM, FDM, WDM</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Multiplexing allows multiple signals to share a single data link.</p>
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <ul class="space-y-4 text-gray-800">
              <li><strong>Time-Division Multiplexing (TDM):</strong> Divides the channel into time slots. Each user gets to use the full bandwidth for a brief period.</li>
              <li><strong>Frequency-Division Multiplexing (FDM):</strong> Divides the channel bandwidth into different frequency bands, assigning one to each user.</li>
              <li><strong>Wavelength-Division Multiplexing (WDM):</strong> A type of FDM used in fiber optics, where different colors of light (wavelengths) carry different signals simultaneously.</li>
            </ul>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'datalink-layer',
    title: '5. Datalink Layer',
    icon: '🔗',
    content: `
      <div class="space-y-6">
        <p class="text-gray-700 text-lg">The Data Link layer is responsible for node-to-node data transfer and error detection.</p>
        
        <h2 class="text-xl font-bold text-blue-800 mt-6">5.1 Framing</h2>
        <p class="text-gray-700">Data is broken down into manageable units called <strong>frames</strong>. Framing involves adding a header (source/destination addresses) and a trailer (error detection bits) to the raw data.</p>
        
        <h2 class="text-xl font-bold text-blue-800 mt-6">5.2 Error Detection and Correction</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Types of Errors:</strong> Single-bit errors or burst errors (multiple bits corrupted).</li>
          <li><strong>Cyclic Redundancy Check (CRC):</strong> A powerful mathematical algorithm used to detect accidental changes to raw data.</li>
          <li><strong>Checksum:</strong> A value calculated from data blocks to verify integrity.</li>
          <li><strong>Forward Error Correction (FEC):</strong> Adds redundant data so the receiver can correct minor errors without asking for retransmission.</li>
        </ul>

        <h2 class="text-xl font-bold text-blue-800 mt-6">5.3 & 5.4 MAC Protocols</h2>
        <p class="text-gray-700 mb-2">Media Access Control determines how devices share the channel:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>CSMA/CD (Ethernet):</strong> Carrier Sense Multiple Access with Collision Detection. Devices listen before talking; if a collision occurs, they stop, wait, and retry.</li>
          <li><strong>CSMA/CA (Wi-Fi):</strong> Collision Avoidance. Devices broadcast their intent to send data to avoid collisions in wireless environments.</li>
        </ul>

        <h2 class="text-xl font-bold text-blue-800 mt-6">5.5 Channelization</h2>
        <p class="text-gray-700">Methods for multiple access: <strong>FDMA</strong> (by frequency), <strong>TDMA</strong> (by time slot), and <strong>CDMA</strong> (by unique mathematical codes allowing simultaneous transmission on the same frequency).</p>
      </div>
    `
  },
  {
    id: 'network-layer',
    title: '6. Network Layer',
    icon: '🗺️',
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2">6.1 Connecting Devices & 6.2 Routing</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-gray-50 p-4 rounded-xl">
            <h3 class="font-bold text-lg mb-2">Devices</h3>
            <p class="text-sm text-gray-700"><strong>Hubs:</strong> Layer 1 (dumb broadcast).<br><strong>Switches:</strong> Layer 2 (smart MAC forwarding).<br><strong>Routers:</strong> Layer 3 (connects different networks via IP).</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-xl">
            <h3 class="font-bold text-lg mb-2">Routing Protocols</h3>
            <p class="text-sm text-gray-700"><strong>Distance-Vector:</strong> Routers share knowledge of the entire network with neighbors (e.g., RIP).<br><strong>Link-State:</strong> Routers share knowledge of their neighbors with the entire network to build a topological map (e.g., OSPF).</p>
          </div>
        </div>

        <h2 class="text-xl font-bold text-blue-800">6.3 Performance Metrics</h2>
        <p class="text-gray-700">Network quality is measured by <strong>Delay</strong> (latency), <strong>Throughput</strong> (actual data transferred per second), and <strong>Packet Loss</strong>. Congestion control mechanisms prevent the network from collapsing under heavy traffic.</p>

        <h2 class="text-xl font-bold text-blue-800 mt-6">6.4 Addressing (IPv4 vs IPv6)</h2>
        <p class="text-gray-700"><strong>IPv4</strong> uses 32-bit addresses (e.g., 192.168.1.1). Due to exhaustion, we use Classless Inter-Domain Routing (CIDR) to efficiently allocate blocks. <strong>IPv6</strong> uses 128-bit addresses, providing a nearly infinite supply.</p>

        <h2 class="text-xl font-bold text-blue-800 mt-6">6.5 Essential Protocols</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li><strong>ICMP:</strong> Used for diagnostics and error reporting (like the 'ping' command).</li>
          <li><strong>ARP:</strong> Maps a known IP address to an unknown MAC address.</li>
          <li><strong>RARP:</strong> Maps a known MAC address to an unknown IP address.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'transport-layer',
    title: '7. Transport Layer',
    icon: '🚚',
    content: `
      <div class="space-y-8">
        <p class="text-gray-700 text-lg">The Transport Layer provides transparent transfer of data between end users, providing reliable data transfer services to the upper layers.</p>
        
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 class="text-xl font-bold text-green-800 mb-3">7.1 TCP (Transmission Control Protocol)</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Connection-oriented:</strong> Establishes a 3-way handshake before sending data.</li>
              <li><strong>Reliable:</strong> Guarantees delivery. If a packet is lost, it is retransmitted.</li>
              <li><strong>Ordered:</strong> Packets are numbered and reassembled in the correct order.</li>
              <li><strong>Use case:</strong> Web browsing (HTTP), File transfer (FTP), Emails.</li>
            </ul>
          </div>
          
          <div class="flex-1 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 class="text-xl font-bold text-yellow-800 mb-3">7.2 UDP (User Datagram Protocol)</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Connectionless:</strong> Just sends data without establishing a connection.</li>
              <li><strong>Unreliable:</strong> No guarantee of delivery. No retransmissions.</li>
              <li><strong>Fast:</strong> Lacks the overhead of TCP, making it much quicker.</li>
              <li><strong>Use case:</strong> Streaming video, VoIP, and <strong>VR Multiplayer Data</strong> (where speed is more critical than a dropped frame).</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'presentation-layer',
    title: '8. Presentation Layer',
    icon: '🎭',
    content: `
      <div class="space-y-6">
        <p class="text-gray-700 text-lg">The Presentation Layer ensures that data transferred from the application layer of one system can be read by the application layer of another. It acts as the network's data translator.</p>
        
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
          <h2 class="text-xl font-bold text-blue-800 mb-3">8.1 & 8.2 Core Functions</h2>
          <ul class="space-y-4 text-gray-700">
            <li><strong><span class="font-bold text-gray-900">Translation:</span></strong> Converts data from a system-specific format into a standard network format (e.g., converting ASCII to EBCDIC).</li>
            <li><strong><span class="font-bold text-gray-900">Encryption/Decryption:</span></strong> Secures data by scrambling it at the source (Encryption) and unscrambling it at the destination (Decryption) using cryptographic keys.</li>
            <li><strong><span class="font-bold text-gray-900">Authentication:</span></strong> Verifies the identity of the sender and receiver to ensure data is only accessed by authorized parties.</li>
            <li><strong><span class="font-bold text-gray-900">Compression:</span></strong> Reduces the number of bits to be transmitted, which is crucial for multimedia data.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 'application-layer',
    title: '9. Application Layer',
    icon: '📱',
    content: `
      <div class="space-y-6">
        <p class="text-gray-700 text-lg mb-6">The Application Layer provides the interface between the software applications we use and the network.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-blue-100 p-5 rounded-lg hover:shadow-md transition bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.1 FTP (File Transfer Protocol)</h3>
            <p class="text-sm text-gray-600">A standard network protocol used for the transfer of computer files between a client and server on a computer network.</p>
          </div>
          
          <div class="border border-blue-100 p-5 rounded-lg hover:shadow-md transition bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.2 TELNET</h3>
            <p class="text-sm text-gray-600">An older protocol used to provide bidirectional, text-oriented communication via a virtual terminal connection. Largely replaced by SSH due to lack of security.</p>
          </div>
          
          <div class="border border-blue-100 p-5 rounded-lg hover:shadow-md transition bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.3 HTTP & SSH</h3>
            <p class="text-sm text-gray-600"><strong>HTTP:</strong> Hypertext Transfer Protocol. The foundation of data communication for the World Wide Web.<br><strong>SSH:</strong> Secure Shell. Provides a secure channel over an unsecured network for remote login and command execution.</p>
          </div>
          
          <div class="border border-blue-100 p-5 rounded-lg hover:shadow-md transition bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.4 DNS (Domain Name System)</h3>
            <p class="text-sm text-gray-600">The phonebook of the Internet. It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 142.250.190.46) so browsers can load internet resources.</p>
          </div>
        </div>
      </div>
    `
  }
];