<template>
  <div class="relative">
    <NavigationHeader />
    
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <footer class="glass border-t border-white/10 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#home" class="text-gray-400 hover:text-white transition-colors text-sm">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>

    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500

  // Animate elements on scroll
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach(el => {
    const rect = el.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight - 100
    if (isVisible) {
      el.classList.add('visible')
    }
  })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
