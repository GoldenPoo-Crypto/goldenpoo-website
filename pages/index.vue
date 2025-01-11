<template>
  <div>
    <!-- Navigation Menu -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300',
        isScrolled ? 'bg-yellow-400 py-2' : 'bg-yellow-500 py-4',
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div class="text-3xl font-bold text-yellow-50">GoldenPoo</div>
        <button @click="toggleMenu" class="text-yellow-50 text-2xl lg:hidden">
          ☰
        </button>
        <ul
          :class="[
            'lg:flex lg:space-x-6 text-xl',
            menuOpen ? 'block' : 'hidden',
            isScrolled ? 'bg-yellow-400 top-12': 'bg-yellow-500 top-14'
          ]"
          class="absolute lg:static left-0 lg:bg-transparent w-full lg:w-auto text-center"
        >
          <li>
            <a
              href="#about"
              class="block py-2 text-gray-900 hover:text-yellow-50"
              >About</a
            >
          </li>
          <li>
            <a
              href="#roadmap"
              class="block py-2 text-gray-900 hover:text-yellow-50"
              >Roadmap</a
            >
          </li>
          <li>
            <a
              href="#tokenomics"
              class="block py-2 text-gray-900 hover:text-yellow-50"
              >Tokenomics</a
            >
          </li>
          <li>
            <a href="#faq" class="block py-2 text-gray-900 hover:text-yellow-50"
              >FAQ</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-16">
      <!-- Hero Section -->
      <section
        class="text-center py-16 bg-yellow-500 flex flex-col md:flex-row md:space-x-20 justify-center items-center"
      >
        <img
          src="/img/goldenpoo-logo.png"
          alt="GoldenPoo Logo"
          class="hero-logo w-48 h-48 md:w-96 md:h-96"
        />
        <div class="flex flex-col py-auto justify-center mt-6 md:mt-0">
          <h1 class="text-3xl md:text-4xl font-bold text-yellow-50">
            Welcome to GoldenPoo!
          </h1>
          <p class="text-lg md:text-xl text-gray-900 mt-2">
            Shit is finally worth gold 💩✨
          </p>
          <!-- <button
            class="mt-6 px-6 py-3 bg-yellow-50 text-yellow-500 font-bold rounded-lg hover:bg-yellow-800"
          >
            Buy GoldenPoo on Raydium
          </button> -->
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 px-4 md:px-8 bg-white">
        <div class="w-full md:w-1/2 mx-auto">
          <h2
            class="text-2xl md:text-3xl mb-20 text-center font-bold text-yellow-500"
          >
            About GoldenPoo
          </h2>
          <p class="mt-4 text-gray-900 text-base md:text-lg">
            Humans defecate <b>between 3 and 21 times</b> a week.
          </p>
          <p class="mt-4 text-gray-900 text-base md:text-lg">
            There are 8 billion of us on Earth. <u>That's a lot of poo!</u>
          </p>
          <p class="mt-4 text-gray-900 text-base md:text-lg">
            This cryptocurrency was created to monetise all this faecal matter.
            GoldenPoo is a <b>memecoin</b>, but first and foremost
            <i
              >an attempt to contribute to the personal enrichment of all human
              beings</i
            >, whatever their social status.
          </p>
        </div>
      </section>

      <!-- Roadmap Section -->
      <section id="roadmap" class="py-16 px-4 md:px-8 bg-yellow-50">
        <div class="w-full md:w-1/2 mx-auto">
          <h2
            class="text-xl md:text-2xl md:text-3xl mb-20 text-center font-bold text-yellow-800"
          >
            Roadmap
          </h2>
          <ul class="mt-4 space-y-3 text-base md:text-lg">
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Creation of the website and branding
            </li>
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Deployment of the GoldenPoo cryptocurrency
            </li>
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Marketing and listing on decentralised exchanges
            </li>
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Airdrop for the community
            </li>
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Development of the mobile application
            </li>
            <li class="text-gray-900 flex items-center">
              <img
                src="/img/goldenpoo-logo.svg"
                class="h-10 w-10 bg-yellow-400 rounded-3xl p-1 mr-2 hero-logo"
              />
              Integration of Proof-of-Stake (PoS)
            </li>
          </ul>
        </div>
      </section>

      <!-- Tokenomics Section -->
      <section id="tokenomics" class="py-16 px-4 md:px-8 bg-white">
        <div class="w-full md:w-1/2 mx-auto">
          <h2
            class="text-xl md:text-2xl md:text-3xl mb-4 text-center font-bold text-yellow-500"
          >
            Tokenomics
          </h2>
          <p class="text-center mb-20 text-gray-900 text-base md:text-lg">
            Initial supply: <b>5 trillion GPOO (5 x 10¹²)</b>
          </p>

          <!-- Graphique -->
          <TokenomicsChart />

          <div class="mt-16">
            <h3
              class="text-lg md:text-xl font-bold text-center text-yellow-800"
            >
              Distribution:
            </h3>

            <ul
              class="list-disc list-inside mt-4 text-base md:text-lg text-gray-900"
            >
              <li>50% - Community Rewards</li>
              <li>20% - Liquidity Pool</li>
              <li>15% - Development Team</li>
              <li>10% - Marketing & Partnerships</li>
              <li>5% - Reserve for Future Initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="py-16 px-4 md:px-8 bg-yellow-50">
        <div class="w-full md:w-1/2 mx-auto">
          <h2
            class="text-2xl md:text-3xl mb-20 text-center font-bold text-yellow-800"
          >
            FAQ
          </h2>
          <div class="mt-4 space-y-6">
            <div>
              <h3 class="text-xl md:text-2xl font-semibold">
                What is GoldenPoo?
              </h3>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                GoldenPoo is a humorous memecoin that aims to provide a new
                source of income for everyone.
              </p>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                Everyone poops, so <b>poo deserves to be monetised</b>.
              </p>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-semibold">
                Why 5 trillion tokens?
              </h3>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                This figure is based on a humorous but coherent analysis of
                "human potential".
              </p>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                Here's how it's calculated:
              </p>
              <ul
                class="list-disc text-base md:text-lg list-inside mt-4 text-gray-900"
              >
                <li>
                  Average poo per human: between 3 and 21 times/week → average =
                  (3 + 21) / 2 = 12 times/week
                </li>
                <li>Duration in the year : 52 weeks/year</li>
                <li>Estimated human population : 8 billion</li>
              </ul>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                Number of poops in a year for the whole of humanity: 12 x 52 x 8
                x 10⁹ = 4.992 x 10¹²
              </p>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                Rounded up: <b>5 x 10¹² GPOO (5 trillion tokens)</b>
              </p>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-semibold">
                What is the aim of the future mobile application?
              </h3>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                The mobile application will enable anyone to monetise their
                faeces in a simple, decentralised and secure way.
              </p>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-semibold">
                How can I buy GPOO?
              </h3>
              <p class="text-gray-900 mt-2 text-base md:text-lg">
                Purchases will be available via a decentralised exchange once
                the token has been launched. A link will be available on this
                site to redirect to it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="mb-4">Follow us:</p>
        <div class="flex justify-center space-x-6">
          <a href="#" class="hover:text-yellow-50"><IconTwitter class="h-6 w-6"/></a>
          <a href="#" class="hover:text-yellow-50"><IconDiscord class="h-6 w-6"/></a>
          <a href="#" class="hover:text-yellow-50"><IconFileCode class="h-6 w-6"/></a>
        </div>
        <p class="mt-4 text-gray-400">
          Contact us:
          <a href="mailto:contact@goldenpoo.xyz" class="hover:text-yellow-50">contact@goldenpoo.xyz</a>
        </p>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Change `isScrolled` when the user scrolls
      this.isScrolled = window.scrollY > 50; // Trigger when scrolling past 50px
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Animation */
.hero-logo {
  transition: transform 0.5s ease-in-out; /* Smooth transition for the animation */
}

.hero-logo:hover {
  transform: scale(1.2) rotate(360deg); /* Scale up to 1.2x and rotate 360 degrees */
}
</style>