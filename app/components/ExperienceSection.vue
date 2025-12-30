<template>
  <section id="experience" class="relative py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="text-5xl md:text-7xl font-anton font-black text-slate-900 uppercase tracking-tighter mb-4">
          <HoverText label="Testimonials" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
        </h2>
        <div class="text-slate-600 font-medium max-w-lg mx-auto">
          <HoverText label="Kind words from clients and colleagues I've had the pleasure to work with." from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 600" />
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div v-for="item in testimonials" :key="item.author" class="bg-slate-50 p-8 rounded-3xl relative group hover:bg-slate-100 transition-colors duration-300">
            <!-- Quote Icon -->
            <div class="text-6xl font-serif text-orange-200 absolute top-4 left-6 opacity-50 group-hover:opacity-100 transition-opacity">
              &ldquo;
            </div>
            
            <div class="relative z-10 pt-8">
              <div class="text-slate-700 italic font-serif text-lg mb-6 leading-relaxed">
                <HoverText :label="item.text" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 600" />
              </div>
              
              <div class="flex items-center gap-4">
                 <div class="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <!-- Placeholder or actual image -->
                    <div class="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold">
                       {{ item.initials }}
                    </div>
                 </div>
                 <div>
                    <h4 class="font-bold text-slate-900">{{ item.author }}</h4>
                    <p class="text-xs text-slate-500 uppercase tracking-wider">{{ item.role }}</p>
                 </div>
              </div>
            </div>
         </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import HoverText from './HoverText.vue'

const testimonials = [
  {
    text: "Madison transformed our outdated website into a modern, high-converting platform. The attention to detail and design sensibility is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    initials: "SJ"
  },
  {
    text: "Working with Madison was a breeze. They understood our brand vision immediately and delivered a product that exceeded our expectations.",
    author: "Michael Chen",
    role: "Marketing Director",
    initials: "MC"
  },
  {
    text: "Reviewing the code was a pleasure. Clean, modular, and performant. A true professional who cares about both design and engineering.",
    author: "Alex Rivera",
    role: "CTO, StartBase",
    initials: "AR"
  }
]
</script>

<style scoped>
</style>
