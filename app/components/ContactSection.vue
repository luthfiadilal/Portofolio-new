<template>
  <footer id="contact" class="relative bg-black text-white pt-12 pb-0 overflow-hidden min-h-screen flex flex-col justify-between">
    
    <!-- Top Bar -->
    <div class="max-w-[1800px] w-full mx-auto px-6 md:px-12 flex justify-between items-start text-sm md:text-base font-light tracking-wide mb-16 md:mb-24">
      <div>
         <span class="font-serif text-2xl md:text-3xl tracking-widest">MADISON.</span>
      </div>
      <div class="text-right">
        <span class="uppercase tracking-widest text-xs md:text-sm">Contact</span>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="max-w-[1800px] w-full mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 relative z-10 flex-grow">
      
      <!-- Left Column: Information -->
      <div class="flex flex-col justify-between h-full">
         
         <!-- Info Grid -->
         <div class="grid grid-cols-2 gap-x-8 gap-y-12 text-xs md:text-sm tracking-widest leading-relaxed text-gray-300">
            
            <!-- Address -->
            <div>
               <h4 class="uppercase text-white mb-4">Studio</h4>
               <p>MADISON STUDIO</p>
               <p>JAKARTA, INDONESIA</p>
               <p>SOUTH JAKARTA 12430</p>
               <p>(+62) 812 3456 7890</p>
            </div>

            <!-- General Enquiries -->
            <div>
               <h4 class="uppercase text-white mb-4">General Enquiries</h4>
               <a href="mailto:info@madison.com" class="block hover:text-white transition-colors">
                 <HoverText label="INFO@MADISON.COM" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
               </a>
            </div>

            <!-- New Projects -->
            <div>
               <h4 class="uppercase text-white mb-4">New Projects</h4>
               <a href="mailto:project@madison.com" class="block hover:text-white transition-colors">
                 <HoverText label="PROJECT@MADISON.COM" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
               </a>
            </div>

            <!-- Follow -->
            <div>
               <h4 class="uppercase text-white mb-4">Follow</h4>
               <div class="flex flex-col gap-1">
                 <a href="#" class="hover:text-white transition-colors">
                    <HoverText label="INSTAGRAM" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
                 </a>
                 <a href="#" class="hover:text-white transition-colors">
                    <HoverText label="LINKEDIN" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
                 </a>
                 <a href="#" class="hover:text-white transition-colors">
                    <HoverText label="DRIBBBLE" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 500" />
                 </a>
               </div>
            </div>

         </div>

         <!-- Bottom Description (Left Col) -->
         <div class="mt-24 md:max-w-md text-[10px] md:text-xs text-gray-400 uppercase leading-relaxed tracking-widest">
            <p>
              AUTHORIAL, MULTI-REFERENTIAL, POLYTROPIC — THESE ARE THE HALLMARKS FOR WHICH MADISON IS INTERNATIONALLY RECOGNIZED. WHETHER DESIGNING STANDALONE OBJECTS OR PURSUING GRAND-SCALE PROJECTS.
            </p>
         </div>

      </div>

    </div>

    <!-- Massive Bottom Typography -->
    <div class="w-full overflow-hidden leading-none mt-auto">
      <h1 class="font-serif text-[18vw] md:text-[22vw] text-white text-center leading-[0.8] tracking-tighter uppercase mix-blend-difference select-none pointer-events-none">
        Contact
      </h1>
    </div>

  </footer>
</template>

<script setup>
import HoverText from './HoverText.vue'
</script>

<style scoped>
</style>
