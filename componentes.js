const navbar = document.getElementById("navbar");
if (navbar) {
  navbar.innerHTML = `

      <nav
    class="absolute top-0 left-0 w-full bg-opacity-30 backdrop-blur-md p-4 z-10"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white text-lg font-bold logo">
        <a href="/index.html">QUDRAT STUDIO</a>
      </div>

      <!-- Desktop Menu (Hidden on Mobile) -->
      <ul class="hidden md:flex space-x-6 text-white text-lg">
        <li>
          <a href="./Pr.html" class="hover:text-gray-300">PR Services</a>
        </li>
        <li>
          <a href="./podcast.html" class="hover:text-gray-300">Podcast</a>
        </li>
        <li>
          <a href="./standup.html" class="hover:text-gray-300">Standup</a>
        </li>
        <li>
          <a href="./photoshoot.html" class="hover:text-gray-300"
            >Photoshoot</a
          >
        </li>
        <li><a href="./About.html" class="hover:text-gray-300">About</a></li>
        <li>
          <a href="./contact.html" class="hover:text-gray-300">Contact</a>
        </li>
      </ul>

      <!-- Social Icons (Always visible) -->
      <div class="hidden md:flex space-x-3">
        <a
          href="#"
          class="social-icon w-8 h-8 flex items-center justify-center  bg-gradient bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="social-icon w-8 h-8 flex items-center justify-center  bg-gradient bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
        >
          <i class="fab fa-dribbble"></i>
        </a>
        <a
          href="#"
          class="social-icon w-8 h-8 flex items-center justify-center  bg-gradient bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <!-- Hamburger Icon (Visible on Mobile) -->
      <div class="md:hidden">
        <button onclick="toggleMenu()" class="text-white text-2xl">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by default) -->
    <div id="mobile-menu" class="hidden md:hidden bg-zin-800 bg-opacity-90">
      <ul class="space-y-4 text-white text-sm p-4">
        <li>
          <a href="./Pr.html" class="block hover:text-gray-300"
            >PR Services</a
          >
        </li>
        <li>
          <a href="./podcast.html" class="block hover:text-gray-300"
            >Podcast</a
          >
        </li>

        <li>
          <a href="./standup.html" class="block hover:text-gray-300"
            >Standup</a
          >
        </li>
        <li>
          <a href="./photoshoot.html" class="block hover:text-gray-300"
            >Photoshoot</a
          >
        </li>
        <li><a href="./About.html" class="block hover:text-gray-300">About</a></li>
        <li><a href="./contact.html" class="block hover:text-gray-300">Contact</a></li>
        <!-- Social Icons (for mobile) -->
        <div class="flex space-x-3 pt-4">
          <a
            href="#"
            class="social-icon w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            class="social-icon w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
          >
            <i class="fab fa-dribbble"></i>
          </a>
          <a
            href="#"
            class="social-icon w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-30 rounded-full text-white hover:bg-opacity-50"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </ul>
    </div>
  </nav>

            `;
} else {
  console.log("Footer container not found!");
}
const footerContainer = document.getElementById("footer");
if (footerContainer) {
  footerContainer.innerHTML = `
    <div id="marq"></div>

        <div class="bg-black text-white relative">
    <h1 class="hidden md:block font-bold md:text-9xl scale-y-150 opacity-25 p-8 absolute bottom-16 left-8 z-0 data-gsap-bg-text">
        QUDRAT STUDIO
    </h1>

    <!-- Header Section (Work With Us) -->
    <div class="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 space-y-4 md:space-y-0 border-b border-gray-800 data-gsap-header">
        <h2 class="text-3xl md:text-4xl font-light">WORK WITH US</h2>
        <a href="mailto:qudratstudio@qudrat.org" class="text-lg md:text-2xl underline underline-offset-4">
            qudratstudio@qudrat.org
        </a>
    </div>

    <!-- Main Section with Background Image -->
    <div class="relative flex flex-col md:flex-row justify-between items-center min-h-[70vh] p-6 md:p-16 bg-cover bg-center gap-8"
         style="background-image: url('./img/studio2.jpg');">
        <div class="absolute inset-0 bg-black opacity-70 z-0"></div>

        <!-- Left Side Content -->
        <div class="relative z-10 text-center md:text-left w-full md:w-1/2 space-y-6 data-gsap-left">
            <h1 class="text-3xl md:text-5xl font-bold uppercase leading-tight ">
                I would <span class="text-sec md:text-9xl "> Love</span>  to hear from you.
            </h1>
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
                Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
            <div class="flex justify-center md:justify-start space-x-6">
                <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fa-brands fa-youtube"></i></a>
                <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <!-- Right Side Links -->
        <div class="relative z-10 w-full md:w-1/2 text-center md:text-right data-gsap-right">
            <ul class="space-y-4 md:space-y-2 text-lg">
                <li><a href="./Pr.html" class="hover:text-gray-400">PR Services</a></li>
                <li><a href="./Podcast.html" class="hover:text-gray-400">Podcast</a></li>
                <li><a href="./standup.html" class="hover:text-gray-400">Standup</a></li>
                <li><a href="./photoshoot.html" class="hover:text-gray-400">Photoshoot</a></li>
                <li><a href="./About.html" class="hover:text-gray-400">About</a></li>
                <li><a href="./contact.html" class="hover:text-gray-400">Contact</a></li>
            </ul>
        </div>

        <!-- Footer Bottom (Copyright & Terms) -->
        <div class="absolute bottom-3 left-4 md:left-8 text-gray-400 text-xs md:text-sm data-gsap-footer">
            <p>&copy; 2025 QUDRAT STUDIO, Inc. All Rights Reserved.</p>
        </div>
        <div class="absolute bottom-3 right-4 md:right-8 text-gray-400 text-xs md:text-sm space-x-3">
            <a href="#" class="hover:text-white">Privacy</a>
            <span class="hidden md:inline">&</span>
            <a href="#" class="hover:text-white">Terms</a>
        </div>
    </div>
</div>


            `;
} else {
  console.log("Footer container not found!");
}

const teamGroup = document.getElementById("team");
if (teamGroup) {
  teamGroup.innerHTML = `
            <section class="max-w-6xl mx-auto py-16 relative our_team">
  <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  <h2 class="text-4xl font-bold uppercase mb-8 pl-4">Our Team</h2>

  <!-- Mobile: column layout, Desktop: 8 columns -->
  <div class="grid grid-cols-1 sm:grid-cols-8 gap-4">

    <!-- Highlighted Image -->
    <div class="team-img w-full sm:col-span-2 flex flex-col items-center">
      <img
        src="./img/kayoub.png"
        class="w-full object-cover grayscale hover:grayscale-0 transition-all duration-300 "
      />
    </div>
    <div class="team-img w-full sm:col-span-2 flex flex-col items-center">
      <img
        src="./img/vikash.png"
        class="w-full object-cover grayscale hover:grayscale-0 transition-all duration-300 "
      />
    </div>

  </div>
</section>

            `;
} else {
  console.log("team container not found!");
}

const contactBar = document?.getElementById("contact");
if (contactBar) {
  contactBar.innerHTML = `
         <div class="max-w-6xl mx-auto min-h-screen relative our_contact p-4">
         <div class="absolute top-10 left-2/3 -z-3 opacity-50 hidden md:block"><svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_105_296)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M200 98.5234C196.477 99.4861 192.769 100 188.941 100H144.233C121.117 100 102.378 118.739 102.378 141.854V191.319C102.378 194.295 102.067 197.199 101.477 200C100.514 196.477 100 192.769 100 188.941V144.233C100 121.117 81.2612 102.378 58.1456 102.378H8.68122C5.70469 102.378 2.80073 102.067 0 101.477C3.52289 100.514 7.23105 100 11.0593 100H55.7675C78.8831 100 97.622 81.2611 97.622 58.1456L97.622 8.68118C97.622 5.70466 97.9327 2.80071 98.5234 0C99.4861 3.5229 100 7.23107 100 11.0593V55.7675C100 78.8831 118.739 97.622 141.855 97.622H191.319C194.295 97.622 197.199 97.9327 200 98.5234Z" fill="url(#paint0_linear_105_296)"/> </g> <defs> <linearGradient id="paint0_linear_105_296" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_105_296"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg></div>
    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

    <p class="text-xs sm:text-sm text-gray-400">
        Let's start a conversation! Fill out our contact form, and we'll get back to you as soon as possible.
    </p>

    <h1 class="text-4xl sm:text-6xl font-bold mt-6 contact-heading  ">
        Hello <span class="inline-block">&#9786;</span>
    </h1>

    <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6 form-group">

        <!-- Web3Forms Access Key -->
        <input type="hidden" name="access_key" value="ef7ed01a-5683-4904-a4b5-acc0b50046c5">

        <!-- Honeypot for spam protection (optional) -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

        <!-- Name Field -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4">
            <h2 class="text-2xl sm:text-5xl font-bold w-full sm:w-2/3">My name is</h2>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                class="bg-black border-b border-gray-500 w-full text-gray-400 text-base sm:text-lg p-2 focus:outline-none"
                required
            />
        </div>

        <!-- Company Field -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4">
            <h2 class="text-2xl sm:text-5xl font-bold w-full sm:w-2/3">I'm from</h2>
            <input
                type="text"
                name="company"
                placeholder="Enter your city"
                class="bg-black border-b border-gray-500 w-full text-gray-400 text-base sm:text-lg p-2 focus:outline-none"
            />
        </div>

        <!-- Email Field -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4">
            <h2 class="text-2xl sm:text-5xl font-bold w-full sm:w-2/3">Here is my email</h2>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                class="bg-black border-b border-gray-500 w-full text-gray-400 text-base sm:text-lg p-2 focus:outline-none"
                required
            />
        </div>

        <!-- Message Field -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4">
            <h2 class="text-2xl sm:text-5xl font-bold w-full sm:w-2/3">And message</h2>
            <input
                type="text"
                name="message"
                placeholder="Enter your message"
                class="bg-black border-b border-gray-500 w-full text-gray-400 text-base sm:text-lg p-2 focus:outline-none"
                required
            />
        </div>

        <!-- Submit Button -->
        <button
            type="submit"
            class="submit-btn bg-gray-200  text-xl sm:text-3xl font-bold px-10 py-4 sm:py-6 mt-8 rounded-full flex items-center justify-between w-full relative  transition-all duration-300  border  bg-gradient text-white group hover:bg-black hover:text-gradient"
        >
            Submit
            <div class="absolute right-2">
                <div
                    id="circleBtn"
                    class="w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center border-2 border-white rounded-full cursor-pointer text-white group-hover:text-gradient" "
                >
                    <i class="fas fa-arrow-right text-lg sm:text-xl" style="rotate: 40deg"></i>
                </div>
            </div>
        </button>
    </form>
</div>

            `;
} else {
  console.log("contact container not found!");
}

const fandq = document?.getElementById("feq");
if (fandq) {
  fandq.innerHTML = `
  <div class="flex justify-center items-center relative faq-container h-screen w-full">
  <div class="absolute top-10 left-36 z-1 hidden md:block">
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2">
            <path d="M32 2 C34 16, 48 30, 62 32 C48 34, 34 48, 32 62 C30 48, 16 34, 2 32 C16 30, 30 16, 32 2 Z" />
        </svg>

      </div>
  <div class="absolute top-10 left-2/3 opacity-50 z-1 hidden md:block"><svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1296)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z" fill="url(#paint0_linear_238_1296)"/> </g> <defs> <linearGradient id="paint0_linear_238_1296" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF"/> <stop offset="1" stop-color="#C0E8FF"/> </linearGradient> <clipPath id="clip0_238_1296"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg></div>
  <div class="absolute top-1/2 left-1 opacity-50 z-1 hidden md:block"><svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_235_983)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2557 174.653L43.2556 200L56.7444 200L56.7444 174.653C56.7444 164.762 64.7626 156.744 74.6535 156.744L74.7023 156.744L100 156.744L125.296 156.744L125.347 156.744C135.237 156.744 143.256 164.762 143.256 174.653L143.256 200L156.744 200L156.744 174.653C156.744 164.762 164.763 156.744 174.654 156.744L174.702 156.744L200 156.744L200 143.256L174.702 143.256L174.654 143.256C164.763 143.256 156.744 135.238 156.744 125.347L156.744 100L156.744 74.6534C156.744 64.7624 164.763 56.7442 174.654 56.7442L174.702 56.7443L200 56.7443L200 43.2557L174.702 43.2557L174.654 43.2557C164.763 43.2557 156.744 35.2375 156.744 25.3466L156.744 -6.85151e-06L143.256 -6.26191e-06L143.256 25.3466C143.256 35.2375 135.237 43.2557 125.347 43.2557L125.298 43.2557L100 43.2557L74.7022 43.2557L74.6535 43.2557C64.7626 43.2557 56.7444 35.2375 56.7444 25.3466L56.7444 -2.48038e-06L43.2556 -1.89076e-06L43.2556 25.3466C43.2556 35.2375 35.2374 43.2558 25.3465 43.2558L25.2978 43.2557L-1.96582e-06 43.2557L-1.89077e-06 56.7443L25.2964 56.7443L25.3465 56.7442C35.2374 56.7442 43.2557 64.7624 43.2557 74.6534L43.2556 100L43.2557 125.347C43.2557 135.238 35.2374 143.256 25.3465 143.256L25.2978 143.256L-1.96582e-06 143.256L-1.89077e-06 156.744L25.2964 156.744L25.3465 156.744C35.2374 156.744 43.2557 164.762 43.2557 174.653ZM143.256 100L143.256 74.6534C143.256 64.7624 135.237 56.7442 125.347 56.7442L125.296 56.7443L100 56.7443L74.7023 56.7443L74.6535 56.7442C64.7626 56.7442 56.7444 64.7624 56.7444 74.6534L56.7444 100L56.7444 125.347C56.7444 135.238 64.7626 143.256 74.6535 143.256L74.7022 143.256L100 143.256L125.298 143.256L125.347 143.256C135.237 143.256 143.256 135.238 143.256 125.347L143.256 100Z" fill="url(#paint0_linear_235_983)"/> </g> <defs> <linearGradient id="paint0_linear_235_983" x1="-4.37114e-06" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_235_983"> <rect width="200" height="200" fill="white" transform="translate(7.62939e-06 200) rotate(-90)"/> </clipPath> </defs> </svg></div>
    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:124px_124px] -z-10"></div>
    <div class="w-full md:w-2/3 text-white shadow-md rounded-lg p-6 z-10 mt-10 ">
        <h2 class="text-5xl font-bold mb-4"> <span class="text-[#0096ff] md:text-6xl">Frequently </span>Asked Questions</h2>

        <div class="space-y-4">
            <!-- Accordion Item 1 -->
            <div class="border-b faq-item faq-item-1">
                <button class="w-full text-left py-4 flex justify-between items-center font-semibold text-white">
                    What services does Qudrat Studio provide?
                    <span><i class="fa-solid fa-arrow-down"></i></span>
                </button>
                <div class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-white text-lg">
                    <div class="inner pb-4">We specialize in podcast production, stand-up comedy events, PR services, and professional photoshoots.</div>
                </div>
            </div>

            <!-- Accordion Item 2 -->
            <div class="border-b faq-item faq-item-2">
                <button class="w-full text-left py-4 flex justify-between items-center font-semibold text-white">
                    How can I book a photoshoot session?
                    <span><i class="fa-solid fa-arrow-down"></i></span>
                </button>
                <div class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-white text-lg">
                    <div class="inner pb-4">You can contact us via email or visit our website to schedule a session.</div>
                </div>
            </div>

            <!-- Accordion Item 3 -->
            <div class="border-b faq-item faq-item-3">
                <button class="w-full text-left py-4 flex justify-between items-center font-semibold text-white">
                    Do you offer stand-up comedy event hosting?
                    <span><i class="fa-solid fa-arrow-down"></i></span>
                </button>
                <div class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-white text-lg">
                    <div class="inner pb-4">Yes! We provide a platform for both upcoming and experienced comedians to perform.</div>
                </div>
            </div>

            <!-- Accordion Item 4 -->
            <div class="border-b faq-item faq-item-4">
                <button class="w-full text-left py-4 flex justify-between items-center font-semibold text-white">
                    Can Qudrat Studio handle PR campaigns?
                    <span><i class="fa-solid fa-arrow-down"></i></span>
                </button>
                <div class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-white text-lg">
                    <div class="inner pb-4">Absolutely! We design and execute PR campaigns tailored to your brand’s needs.</div>
                </div>
            </div>

            <!-- Accordion Item 5 -->
            <div class="border-b  faq-item faq-item-5">
                <button class="w-full text-left py-4 flex justify-between items-center font-semibold text-white">
                    Do you provide podcast recording and editing services?
                    <span><i class="fa-solid fa-arrow-down "></i></span>
                </button>
                <div class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-white text-lg">
                    <div class="inner pb-4">Yes, we offer end-to-end podcast production including recording, editing, and publishing.</div>
                </div>
            </div>
        </div>
    </div>
</div>
            `;
} else {
  console.log("feq container not found!");
}
const marqeeu = document?.getElementById("marq");
if (marqeeu) {
  marqeeu.innerHTML = `
  <style>
    /* Tilt effect */
        .marquee-wrapper {
            transform: rotate(-3deg);
            overflow: hidden;
            white-space: nowrap;
            background:linear-gradient(90deg, #6a00ff, #b400ff);
            padding:5px;
        }

        /* Marquee animation */
        .marquee-track {
            display: flex;
            width: fit-content;
            min-width: 100%;
            animation: marquee 15s linear infinite;
        }
            .marquee-track span {
                margin:0 50px;
            }

        @keyframes marquee {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-30%); /* Move only half because content is duplicated */
            }
        }
        </style>
  <div class="marquee-wrapper bg-white w-full py-4 my-10">
        <div class="marquee-track md:space-x-16 md:my-4 text-4xl  font-bold">
            <!-- First Set of Items -->
            <span class="">PR AGENCY </span>
            <span class="">✦</span>
            <span class="">PHOTOSHOOT </span>
            <span class="">✦</span>
            <span class="">PODCAST </span>
            <span class="">✦</span>
            <span class="">STANDUP</span>
            <span class="">✦</span>
            <span class="">STANDUP</span>
            <span class="">✦</span>

            <span class="">PR AGENCY </span>
            <span class="">✦</span>
            <span class="">PHOTOSHOOT </span>
            <span class="">✦</span>
            <span class="">PODCAST </span>
            <span class="">✦</span>
            <span class="">STANDUP</span>
            <span class="">✦</span>
            <span class="">STANDUP</span>
            <span class="">✦</span>

        </div>
    </div>

            `;
} else {
  console.log("marquee container not found!");
}

const soon = document.getElementById("soon");
if (soon) {
  soon.innerHTML = `
     <style>
      .gradient-text {
        background: linear-gradient(90deg, #00c6ff, #3b82f6, #8b5cf6, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    </style>
   <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
                <div
      class="text-center space-y-6 px-6 h-screen flex items-center justify-center"
    >
      <!-- Coming Soon Text -->
      <div>
        <h1
          class="text-5xl md:text-9xl my-8 font-extrabold gradient-text h-[40vh] leading-loose z-10"
        >
          Coming Soon
        </h1>
      </div>
    </div>
            `;
} else {
  console.log("soon container not found!");
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const inner = content.querySelector(".inner");

    const isOpen = content.classList.contains("open");

    if (isOpen) {
      content.style.maxHeight = "0px";
      content.classList.remove("open");
      button.querySelector(
        "span"
      ).innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
    } else {
      content.style.maxHeight = inner.scrollHeight + "px";
      content.classList.add("open");
      button.querySelector(
        "span"
      ).innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    }
  });
});
