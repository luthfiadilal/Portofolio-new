<template>
  <section id="about" class="relative py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Layout -->
      <div class="grid md:grid-cols-12 gap-12">
        
        <!-- Header / Left Col -->
        <div class="md:col-span-4">
           <h2 class="text-5xl md:text-6xl font-anton font-black text-slate-900 uppercase tracking-tighter leading-tight mb-8">
             <HoverText label="I CAN HELP YOU WITH" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
           </h2>
           <div class="w-16 h-2 bg-orange-500 mb-8"></div>
           <div class="text-slate-600 font-medium leading-relaxed max-w-xs">
             <HoverText label="I help brands simply and beautifully tell their story through modern digital products." from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 600" />
           </div>
        </div>

        <!-- Services / Right Col (Columns) -->
        <div class="md:col-span-8 grid md:grid-cols-3 gap-8">
           <!-- Service 1 -->
           <div class="space-y-4 group">
              <span class="text-6xl font-serif italic text-slate-200 group-hover:text-orange-200 transition-colors">01</span>
              <h3 class="text-xl font-bold text-slate-900">
                <HoverText label="Website Design" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 700" />
              </h3>
              <p class="text-sm text-slate-500 leading-relaxed">
                The full cycle of services to create and launch a website from scratch or redesign a live website along with modern trends.
              </p>
           </div>
           
           <!-- Service 2 -->
           <div class="space-y-4 group">
              <span class="text-6xl font-serif italic text-slate-200 group-hover:text-blue-200 transition-colors">02</span>
              <h3 class="text-xl font-bold text-slate-900">
                <HoverText label="Web Development" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 700" />
              </h3>
              <p class="text-sm text-slate-500 leading-relaxed">
                Developing high-performance, responsive websites using modern technologies like Vue, Nuxt, and Tailwind CSS.
              </p>
           </div>

           <!-- Service 3 -->
           <div class="space-y-4 group">
              <span class="text-6xl font-serif italic text-slate-200 group-hover:text-purple-200 transition-colors">03</span>
              <h3 class="text-xl font-bold text-slate-900">
                <HoverText label="The Full Package" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 700" />
              </h3>
              <p class="text-sm text-slate-500 leading-relaxed">
                From concept to launch, I handle design, development, and deployment to ensure a cohesive digital presence.
              </p>
           </div>
        </div>

      </div>

      <!-- Quote / Vision Section -->
      <div class="mt-32 border-t border-slate-100 pt-24 text-center">
         <h2 class="text-4xl md:text-5xl font-anton font-black text-slate-900 uppercase mb-8">
           <HoverText label="TURNING MY VISION" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
         </h2>
         <div class="relative max-w-4xl mx-auto h-96 rounded-3xl overflow-hidden bg-slate-900 flex items-center justify-center group">
            <!-- Background Image Placeholder (Can be a desk setup) -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
            <!-- Content -->
            <div class="relative z-10 text-center text-white p-8">
               <p class="text-2xl font-serif italic mb-6">"Good design is obvious. Great design is transparent."</p>
               <div class="flex gap-8 justify-center mt-8">
                  <div class="text-center">
                    <span class="block text-4xl font-bold text-orange-500">89+</span>
                    <span class="text-xs text-slate-400 uppercase tracking-widest">Completed Projects</span>
                  </div>
                  <div class="text-center">
                    <span class="block text-4xl font-bold text-blue-500">18+</span>
                    <span class="text-xs text-slate-400 uppercase tracking-widest">Countries Served</span>
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
</script>

<style scoped>
</style>
