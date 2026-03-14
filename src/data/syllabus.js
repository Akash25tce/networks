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
            While OSI is a 7-layer theoretical model, the <strong>TCP/IP Protocol Suite</strong> is the practical, 4-layer model (Application, Transport, Internet, Network Access) that the modern Internet is actually built upon.
          </p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Which OSI layer is responsible for logical addressing (IP)?",
        options: ["Transport Layer", "Data Link Layer", "Network Layer", "Session Layer"],
        answer: 2
      },
      {
        question: "How many layers does the practical TCP/IP model have?",
        options: ["4 Layers", "7 Layers", "5 Layers", "3 Layers"],
        answer: 0
      }
    ]
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
            In a circuit-switched network, a dedicated physical path is established between the sender and receiver for the entire duration of the communication. It guarantees bandwidth but wastes resources if no data is being sent.
          </p>
        </section>
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">2.2 Packet Switching & Switch Structure</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            In <strong>Packet Switching</strong>, messages are broken down into smaller pieces called packets. Each packet is transmitted individually and can take different routes to the destination, where they are reassembled.
          </p>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 class="font-bold text-lg mb-2">Structure of a Switch</h3>
            <p class="text-gray-700">
              A switch operates primarily at the Data Link Layer (Layer 2). It uses MAC addresses to forward data packets to specific devices on a network.
            </p>
          </div>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Which switching method breaks messages down into smaller pieces that can take different routes?",
        options: ["Circuit Switching", "Packet Switching", "Message Switching", "Path Switching"],
        answer: 1
      },
      {
        question: "At which OSI layer does a standard network switch primarily operate?",
        options: ["Physical Layer (Layer 1)", "Data Link Layer (Layer 2)", "Network Layer (Layer 3)", "Transport Layer (Layer 4)"],
        answer: 1
      }
    ]
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
              <p class="text-sm text-gray-600 mt-2">Covers a small geographic area, like a home or office.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h3 class="font-bold text-lg text-green-600">MAN (Metropolitan)</h3>
              <p class="text-sm text-gray-600 mt-2">Covers a larger geographic area, such as a city.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100">
              <h3 class="font-bold text-lg text-purple-600">WAN (Wide)</h3>
              <p class="text-sm text-gray-600 mt-2">Spans large geographical distances (e.g., the Internet).</p>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">3.2 WLAN</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Wireless Local Area Networks (WLANs) allow devices to connect wirelessly.</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Infrastructure Network:</strong> Devices communicate through a central Access Point (AP).</li>
            <li><strong>Ad hoc Network:</strong> Devices communicate directly with each other peer-to-peer.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Which type of network spans the largest geographical distance?",
        options: ["LAN", "MAN", "WAN", "PAN"],
        answer: 2
      },
      {
        question: "In a WLAN, what type of network allows devices to communicate directly peer-to-peer without a router?",
        options: ["Infrastructure Network", "Ad hoc Network", "Ethernet Network", "Token Ring Network"],
        answer: 1
      }
    ]
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
            The physical layer defines how raw bits (0s and 1s) are transmitted over a physical medium (copper wire, fiber optics, wireless).
          </p>
        </section>
        <section>
          <h2 class="text-2xl font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-4">4.2 Multiplexing: TDM, FDM, WDM</h2>
          <p class="text-gray-700 leading-relaxed mb-4">Multiplexing allows multiple signals to share a single data link.</p>
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <ul class="space-y-4 text-gray-800">
              <li><strong>TDM (Time-Division):</strong> Divides the channel into time slots.</li>
              <li><strong>FDM (Frequency-Division):</strong> Divides the channel bandwidth into different frequency bands.</li>
              <li><strong>WDM (Wavelength-Division):</strong> A type of FDM used in fiber optics using different colors of light.</li>
            </ul>
          </div>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Which multiplexing technique divides the channel into different time slots?",
        options: ["FDM", "WDM", "TDM", "CDM"],
        answer: 2
      },
      {
        question: "Which multiplexing technique is specifically used with fiber optic cables?",
        options: ["WDM", "TDM", "FDM", "SDM"],
        answer: 0
      }
    ]
  },
  {
    id: 'datalink-layer',
    title: '5. Datalink Layer',
    icon: '🔗',
    content: `
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-blue-800 mt-6">5.1 Framing & 5.2 Error Detection</h2>
        <p class="text-gray-700">Data is broken down into <strong>frames</strong>. To ensure integrity, techniques like <strong>Cyclic Redundancy Check (CRC)</strong> and <strong>Checksums</strong> are used to detect corrupted bits.</p>

        <h2 class="text-xl font-bold text-blue-800 mt-6">5.4 Media Access Control (MAC)</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>CSMA/CD (Ethernet):</strong> Collision Detection. Devices listen, and if a collision occurs, they stop and retry.</li>
          <li><strong>CSMA/CA (Wi-Fi):</strong> Collision Avoidance. Devices broadcast intent to avoid collisions.</li>
        </ul>

        <h2 class="text-xl font-bold text-blue-800 mt-6">5.5 Channelization</h2>
        <p class="text-gray-700">Methods like <strong>FDMA</strong> (frequency), <strong>TDMA</strong> (time), and <strong>CDMA</strong> (code) dictate how multiple access is handled.</p>
      </div>
    `,
    quiz: [
      {
        question: "Which Error Detection method uses a powerful polynomial mathematical algorithm?",
        options: ["Parity Check", "Checksum", "Cyclic Redundancy Check (CRC)", "Forward Error Correction"],
        answer: 2
      },
      {
        question: "Which Media Access Control protocol is primarily used for Wireless (Wi-Fi) networks?",
        options: ["CSMA/CD", "CSMA/CA", "Token Passing", "ALOHA"],
        answer: 1
      }
    ]
  },
  {
    id: 'network-layer',
    title: '6. Network Layer',
    icon: '🗺️',
    content: `
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-blue-800 mt-6">6.1 Connecting Devices & 6.2 Routing</h2>
        <p class="text-gray-700"><strong>Routers</strong> operate here. They use protocols like <strong>Distance-Vector</strong> (sharing full tables with neighbors) or <strong>Link-State</strong> (sharing neighbor info with everyone) to build maps.</p>

        <h2 class="text-xl font-bold text-blue-800 mt-6">6.4 Addressing</h2>
        <p class="text-gray-700"><strong>IPv4</strong> uses 32-bit addresses, while <strong>IPv6</strong> uses 128-bit addresses to solve IP exhaustion.</p>

        <h2 class="text-xl font-bold text-blue-800 mt-6">6.5 Essential Protocols</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li><strong>ICMP:</strong> Used for diagnostics (like 'ping').</li>
          <li><strong>ARP:</strong> Maps an IP address to a MAC address.</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "Which protocol is responsible for mapping a known IP address to an unknown MAC address?",
        options: ["ICMP", "DHCP", "ARP", "DNS"],
        answer: 2
      },
      {
        question: "How many bits make up an IPv6 address?",
        options: ["32 bits", "64 bits", "128 bits", "256 bits"],
        answer: 2
      }
    ]
  },
  {
    id: 'transport-layer',
    title: '7. Transport Layer',
    icon: '🚚',
    content: `
      <div class="space-y-8">
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 class="text-xl font-bold text-green-800 mb-3">7.1 TCP</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Connection-oriented:</strong> 3-way handshake.</li>
              <li><strong>Reliable:</strong> Guarantees delivery and order.</li>
              <li>Used for Web browsing, emails.</li>
            </ul>
          </div>
          
          <div class="flex-1 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 class="text-xl font-bold text-yellow-800 mb-3">7.2 UDP</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Connectionless:</strong> Just sends data.</li>
              <li><strong>Unreliable but Fast:</strong> No guarantees, no overhead.</li>
              <li>Used for Video streaming, VR Multiplayer.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which protocol establishes a reliable connection using a 3-way handshake?",
        options: ["UDP", "IP", "TCP", "ICMP"],
        answer: 2
      },
      {
        question: "If you are streaming real-time video or playing multiplayer VR, which protocol is preferred for speed?",
        options: ["TCP", "UDP", "FTP", "SSH"],
        answer: 1
      }
    ]
  },
  {
    id: 'presentation-layer',
    title: '8. Presentation Layer',
    icon: '🎭',
    content: `
      <div class="space-y-6">
        <p class="text-gray-700 text-lg">The Presentation Layer acts as the network's data translator.</p>
        
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
          <ul class="space-y-4 text-gray-700">
            <li><strong>Translation:</strong> Converts data into standard network formats.</li>
            <li><strong>Encryption/Decryption:</strong> Secures data using cryptographic keys.</li>
            <li><strong>Authentication:</strong> Verifies the identity of the sender and receiver.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is a primary responsibility of the Presentation Layer?",
        options: ["Routing packets", "Detecting physical collisions", "Data Encryption and Decryption", "Assigning MAC addresses"],
        answer: 2
      }
    ]
  },
  {
    id: 'application-layer',
    title: '9. Application Layer',
    icon: '📱',
    content: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-blue-100 p-5 rounded-lg bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.1 FTP</h3>
            <p class="text-sm text-gray-600">Standard protocol for the transfer of computer files.</p>
          </div>
          <div class="border border-blue-100 p-5 rounded-lg bg-white">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.3 HTTP & SSH</h3>
            <p class="text-sm text-gray-600"><strong>HTTP:</strong> Foundation of the World Wide Web.<br><strong>SSH:</strong> Secure channel for remote command execution.</p>
          </div>
          <div class="border border-blue-100 p-5 rounded-lg bg-white md:col-span-2">
            <h3 class="font-bold text-lg text-blue-700 mb-2">9.4 DNS (Domain Name System)</h3>
            <p class="text-sm text-gray-600">The phonebook of the Internet. Translates human-readable names to IP addresses.</p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which protocol translates human-readable web addresses (like google.com) into machine-readable IP addresses?",
        options: ["FTP", "HTTP", "DNS", "TELNET"],
        answer: 2
      },
      {
        question: "Which protocol is primarily used as a secure replacement for Telnet for remote login?",
        options: ["FTP", "HTTP", "SMTP", "SSH"],
        answer: 3
      }
    ]
  }
];