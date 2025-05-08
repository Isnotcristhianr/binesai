<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const Calendarevent = defineAsyncComponent(() => import("./calendarevent.vue"));

AOS.init({
  duration: 1000,
  once: true,
  disable: window.innerWidth < 768 // Deshabilitar animaciones en móvil
});

const events = [
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner con overlay -->
    <div class="relative h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
      <img
        src="/imgs/banner_programacion.jpg"
        alt="Banner de Programación BINESAI"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2 sm:mb-4">
            Programación
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Descubre los eventos y actividades de la Bienal Nacional de Escultura
          </p>
        </div>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
      <!-- Título de la sección -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl font-light text-[#9B1C1F] mb-3 sm:mb-4">
          Calendario de Eventos
        </h2>
        <div class="w-16 sm:w-20 h-1 bg-[#9B1C1F] mx-auto"></div>
      </div>

      <!-- Timeline de eventos -->
      <div class="relative">
        <!-- Línea central (oculta en móvil) -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        
        <!-- Lista de eventos -->
        <ul class="space-y-6 sm:space-y-8 md:space-y-12 relative">
          <li 
            v-for="(event, index) in events" 
            :key="index"
            class="relative"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-duration="1000"
          >
            <Calendarevent
              :date="event.date"
              :time="event.time"
              :title="event.title"
              :description="event.description"
              :index="index"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  transition: all 0.3s ease-in-out;
}

/* Optimizaciones de rendimiento */
img {
  contain: content;
}

/* Ajustes responsive para la línea de tiempo */
@media (max-width: 768px) {
  .timeline-line {
    left: 2rem;
  }
}

/* Reducción de movimiento si el usuario lo prefiere */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
