<template>
  <section id="home" class="relative min-h-screen w-full overflow-hidden pt-24">
    
    <!-- Aurora Background -->
    <Aurora 
      :color-stops="['#f59e0b', '#fffbeb', '#fcd34d']"
      :speed="0.5" 
      :amplitude="1.2" 
      class="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
    
    <!-- Background Typography -->
    <div class="absolute top-[10%] left-0 z-0 pointer-events-none fade-in-up w-full text-center">
      <HoverText 
        label="Hey, there" 
        from-font-variation-settings="'wght' 400" 
        to-font-variation-settings="'wght' 700"
        class-name="font-serif italic text-6xl md:text-9xl text-slate-900 opacity-90"
      />
    </div>

    <!-- Main Image -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90vh] w-full max-w-[700px] z-10 flex items-end justify-center pointer-events-none">
      <!-- Gradient Mask at bottom to blend with next section if needed, or just let it cut -->
      <img src="/images/profile.png" alt="Madison Profile" class="h-full w-full object-cover object-top md:object-center" />
      <!-- Overlay Gradient for bottom fade -->
      <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </div>

    <!-- Foreground Elements -->
    
    <!-- Available Badge -->
    <div class="absolute top-[40%] left-6 md:left-20 z-20 animate-fade-in">
      <div class="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-lg border border-white/40 hover:scale-105 transition-transform cursor-default">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
        <HoverText 
          label="Available for new opportunities"
          from-font-variation-settings="'wght' 400" 
          to-font-variation-settings="'wght' 600"
          class-name="text-sm font-medium text-slate-900"
        />
      </div>
    </div>

    <!-- Name Big Typography -->
    <div class="absolute bottom-[15%] left-6 md:left-20 z-20 flex flex-col leading-none pointer-events-none">
      <!-- Note: Anton is usually static 400, but we can try applying HoverText anyway, or stick to static if preferred. 
           Wait, user asked for HoverText on ALL text. I will apply it. -->
      <div class="animate-slide-right">
        <HoverText 
          label="I AM"
          from-font-variation-settings="'wght' 400" 
          to-font-variation-settings="'wght' 400"
          class-name="font-anton font-black text-6xl md:text-8xl lg:text-[10rem] text-slate-900 tracking-tighter uppercase whitespace-nowrap"
        />
      </div>
      <div class="animate-slide-right delay-200">
         <HoverText 
          label="MADISON"
          from-font-variation-settings="'wght' 400" 
          to-font-variation-settings="'wght' 400"
          class-name="font-anton font-black text-6xl md:text-8xl lg:text-[12rem] text-slate-900 tracking-tighter uppercase whitespace-nowrap"
        />
      </div>
    </div>

    <!-- Role Description -->
    <div class="absolute bottom-[35%] right-6 md:right-20 z-20 text-right max-w-xs md:max-w-sm animate-slide-left">
      <h2 class="text-3xl md:text-5xl font-anton font-bold text-slate-900 uppercase leading-none mb-4">
        <HoverText label="DIGITAL PRODUCT DESIGNER" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
      </h2>
      <div class="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
         <HoverText label="Specialized in Web Design, UX / UI, Webflow, and Front End Development." from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
      </div>
    </div>

  </section>
</template>

<script setup>
import Aurora from './Aurora.vue'
import HoverText from './HoverText.vue'
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 0.2s; }
.delay-200 { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-right {
  animation: slideRight 1s ease-out forwards;
  opacity: 0;
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-left {
  animation: slideLeft 1s ease-out forwards;
  opacity: 0;
}

@keyframes slideLeft {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>
