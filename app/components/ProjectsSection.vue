<template>
  <section id="projects" class="relative py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-anton font-black text-slate-900 mb-8 uppercase tracking-tighter">
          <HoverText label="Recent Projects" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-3xl bg-slate-100/50 hover:bg-slate-100 transition-colors duration-500"
        >
          <!-- Project Content -->
          <div class="p-8 md:p-12 flex flex-col h-full relative z-10">
             <!-- Number/ID -->
             <span class="text-xs font-mono text-slate-400 mb-4">0{{ index + 1 }}</span>
             
             <h3 class="text-2xl md:text-4xl font-anton font-bold text-slate-900 mb-2 group-hover:translate-x-2 transition-transform duration-300">
               <HoverText :label="project.title" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
             </h3>
             <div class="text-slate-600 mb-8 max-w-sm font-medium">
               <HoverText :label="project.description" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 600" />
             </div>

             <div class="mt-auto">
                <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        {{ tech }}
                    </span>
                </div>
                <div class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a :href="project.liveUrl" class="text-slate-900 font-bold hover:underline decoration-2 underline-offset-4">View Project</a>
                </div>
             </div>
          </div>

          <!-- Decorative Image/Icon (Background) -->
          <div class="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/4 translate-y-1/4 rotate-12 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
             <span class="text-[10rem] grayscale">{{ project.icon }}</span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HoverText from './HoverText.vue'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory and payment integration',
    icon: '🛒',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features',
    icon: '✅',
    technologies: ['React', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Generator',
    description: 'AI-powered portfolio website generator with customizable themes',
    icon: '🎨',
    technologies: ['Nuxt', 'OpenAI', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for multi-platform social media management',
    icon: '📊',
    technologies: ['Next.js', 'TypeScript', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
]
</script>

<style scoped>
</style>
