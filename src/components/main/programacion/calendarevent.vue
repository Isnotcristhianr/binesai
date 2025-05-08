<script setup lang="ts">
import { Icon } from '@iconify/vue';

//variables
const props = defineProps<{
  date: string;
  time: string;
  title: string;
  description: string;
  index: number;
}>();
</script>

<template>
  <div class="flex items-center group">
    <!-- Punto de la línea de tiempo -->
    <div 
      class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 
             rounded-full bg-[#9B1C1F] border-2 md:border-4 border-white shadow-lg z-10
             group-hover:scale-125 transition-transform duration-300"
    ></div>

    <!-- Contenido del evento -->
    <div 
      class="w-full md:w-5/12 pl-12 md:pl-0 md:pr-8"
      :class="{
        'md:ml-auto md:pl-8 md:pr-0': props.index % 2 !== 0
      }"
    >
      <div 
        class="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl 
               transition-all duration-300 transform hover:-translate-y-1"
      >
        <!-- Fecha y hora -->
        <div 
          class="flex items-center mb-3 text-gray-600"
          :class="{
            'justify-start md:justify-end': props.index % 2 === 0,
            'justify-start': props.index % 2 !== 0
          }"
        >
          <Icon icon="mdi:calendar" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <time class="font-mono text-xs sm:text-sm">{{ date }}</time>
          <Icon icon="mdi:clock" class="w-4 h-4 sm:w-5 sm:h-5 mx-2" />
          <span class="font-mono text-xs sm:text-sm">{{ time }}</span>
        </div>

        <!-- Título -->
        <h3 
          class="text-lg sm:text-xl font-light text-[#9B1C1F] mb-2"
          :class="{
            'text-left md:text-right': props.index % 2 === 0,
            'text-left': props.index % 2 !== 0
          }"
        >
          {{ title }}
        </h3>

        <!-- Descripción -->
        <p 
          class="text-gray-600 text-xs sm:text-sm leading-relaxed"
          :class="{
            'text-left md:text-right': props.index % 2 === 0,
            'text-left': props.index % 2 !== 0
          }"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Efecto hover en el punto de la línea de tiempo */
.group:hover .bg-[#9B1C1F] {
  box-shadow: 0 0 0 4px rgba(155, 28, 31, 0.2);
}

/* Línea vertical para móvil */
@media (max-width: 768px) {
  .flex::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e5e7eb;
  }
}

/* Optimizaciones de rendimiento */
.transform {
  will-change: transform;
}

/* Reducción de movimiento si el usuario lo prefiere */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
