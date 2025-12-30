<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between transition-all duration-300" :class="[isScrolled ? 'h-16' : 'h-24']">
        <!-- Logo -->
        <a href="#home" class="text-3xl font-serif text-slate-900 font-bold z-50">
          Madison.
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors duration-300"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Right Button -->
         <div class="hidden md:flex items-center">
            <a
                href="#contact"
                class="px-8 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition-colors duration-300"
            >
                Contact
            </a>
         </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-slate-900 z-50"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden glass border-t border-white/10"
      >
        <div class="px-4 py-6 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="toggleMobileMenu"
            class="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </a>
          <a
            href="#contact"
            @click="toggleMobileMenu"
            class="block w-full text-center btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#skills' },
  { label: 'Testimonial', href: '#contact' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
