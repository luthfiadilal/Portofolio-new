<template>
  <section id="skills" class="relative py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-5xl md:text-7xl font-anton font-black text-slate-900 uppercase tracking-tighter mb-12">
          <HoverText label="Experience & Skills" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
        </h2>
      </div>

      <!-- Skills List -->
      <div class="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
        <div 
          v-for="(item, index) in skillsList" 
          :key="index"
          class="group py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white transition-colors duration-300"
        >
          <!-- Year -->
          <div class="md:col-span-2">
            <span class="text-sm font-bold text-slate-400 font-mono">{{ item.period }}</span>
          </div>
          
          <!-- Category/Role -->
          <div class="md:col-span-4">
            <h3 class="text-3xl font-anton font-bold text-slate-900 uppercase">
              <HoverText :label="item.category" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
            </h3>
            <div class="text-slate-500 mt-2 text-sm max-w-xs">
              <HoverText :label="item.description" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 600" />
            </div>
          </div>

          <!-- Tools/Technologies -->
          <div class="md:col-span-6">
             <div class="flex flex-col gap-4">
               <div v-for="group in item.techGroups" :key="group.name">
                  <span class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 block">{{ group.name }}</span>
                  <div class="flex flex-wrap gap-x-6 gap-y-2">
                     <span v-for="tech in group.items" :key="tech" class="text-slate-600 text-sm hover:text-orange-500 transition-colors cursor-default">
                       <HoverText :label="'• ' + tech" from-font-variation-settings="'wght' 300" to-font-variation-settings="'wght' 600" />
                     </span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Workstation Section (As seen in reference default) -->
      <div class="mt-32">
        <h2 class="text-4xl md:text-5xl font-anton font-black text-slate-900 uppercase tracking-tighter mb-12">
          <HoverText label="My Workstation" from-font-variation-settings="'wght' 400" to-font-variation-settings="'wght' 400" />
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
           <div class="bg-slate-200 rounded-2xl overflow-hidden relative group h-full">
              <div class="absolute inset-0 bg-gradient-to-tr from-orange-100 to-amber-50"></div>
              <span class="absolute bottom-4 left-4 font-bold text-slate-900">Laptop</span>
           </div>
           <div class="bg-slate-200 rounded-2xl overflow-hidden relative group h-full mt-8 md:mt-12">
              <div class="absolute inset-0 bg-gradient-to-bl from-blue-50 to-slate-100"></div>
              <span class="absolute bottom-4 left-4 font-bold text-slate-900">Monitor</span>
           </div>
           <div class="bg-slate-200 rounded-2xl overflow-hidden relative group h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
              <span class="absolute bottom-4 left-4 font-bold text-slate-900">Keyboard</span>
           </div>
           <div class="bg-slate-200 rounded-2xl overflow-hidden relative group h-full mt-8 md:mt-12">
              <div class="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-teal-50"></div>
              <span class="absolute bottom-4 left-4 font-bold text-slate-900">Audio</span>
           </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import HoverText from './HoverText.vue'

const skillsList = [
  {
    period: '2020-24',
    category: 'Development',
    description: 'Building scalable web applications and interactive experiences.',
    techGroups: [
      { name: 'Frontend', items: ['Vue.js', 'Nuxt', 'React', 'Tailwind CSS', 'TypeScript'] },
      { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Firebase'] }
    ]
  },
  {
    period: '2018-24',
    category: 'Visual Design',
    description: 'Crafting pixel-perfect interfaces and design systems.',
    techGroups: [
      { name: 'Design Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
      { name: 'Prototyping', items: ['Protopie', 'After Effects'] }
    ]
  },
  {
    period: '2021-24',
    category: 'Project Management',
    description: 'Leading teams and managing digital product lifecycles.',
    techGroups: [
      { name: 'Methodologies', items: ['Agile', 'Scrum', 'Kanban'] },
      { name: 'Tools', items: ['Jira', 'Notion', 'Linear', 'Trello'] }
    ]
  }
]
</script>

<style scoped>
</style>
