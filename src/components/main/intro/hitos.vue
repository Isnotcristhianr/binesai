<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hitos = [
  {
    imagen: "/imgs/hitos/gallery_1.jpg",
    titulo: "Concurso Nacional de Escultura",
    descripcion: "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea."
  },
  {
    imagen: "/imgs/hitos/gallery_2.jpeg",
    titulo: "Primer Encuentro nacional de escultura para estudiantes",
    descripcion: "Espacio para que jóvenes talentos compartan sus proyectos escultóricos con el público."
  },
  {
    imagen: "/imgs/hitos/gallery_3.jpeg",
    titulo: "Mediación Cultural",
    descripcion: "Talleres especializados, diálogos y conversatorios para fomentar la reflexión en torno a la escultura y el arte contemporáneo."
  },
  {
    imagen: "/imgs/hitos/gallery_4.jpeg",
    titulo: "Exposición Itinerante del Histórico de la Bienal",
    descripcion: "Recorrido por las obras más destacadas de ediciones pasadas, llevando la escultura ecuatoriana a nuevos públicos."
  },
  {
    imagen: "/imgs/hitos/gallery_5.jpeg",
    titulo: "Rutas y Talleres Abiertos",
    descripcion: "Los talleres y casas culturales de San Antonio y del cantón Ibarra, abrirán sus puertas para que el público explore y viva el proceso de creación artística en su entorno natural."
  }
];

const hitoActivo = ref(0);
let intervalo: number | null = null;

const seleccionarHito = (index: number) => {
  hitoActivo.value = index;
  reiniciarIntervalo();
};

const siguienteHito = () => {
  hitoActivo.value = (hitoActivo.value + 1) % hitos.length;
};

const reiniciarIntervalo = () => {
  if (intervalo) {
    clearInterval(intervalo);
  }
  intervalo = setInterval(siguienteHito, 5000);
};

onMounted(() => {
  reiniciarIntervalo();
});

onUnmounted(() => {
  if (intervalo) {
    clearInterval(intervalo);
  }
});
</script>

<template>
  <div class="py-20 bg-white">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6">
      <!-- Título -->
      <h2 class="text-4xl font-light text-[#9B1C1F] mb-16 text-center">
        Hitos del evento
      </h2>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Línea de tiempo -->
        <div class="w-full lg:w-1/3">
          <div class="space-y-4">
            <button
              v-for="(hito, index) in hitos"
              :key="index"
              @click="seleccionarHito(index)"
              @mouseenter="seleccionarHito(index)"
              class="w-full text-left p-4 rounded-lg transition-all duration-300 border-l-4"
              :class="{
                'border-[#9B1C1F] bg-gray-50 shadow-sm': hitoActivo === index,
                'border-transparent hover:border-gray-200 hover:bg-gray-50': hitoActivo !== index
              }"
            >
              <span 
                class="block text-lg font-light"
                :class="hitoActivo === index ? 'text-[#9B1C1F]' : 'text-gray-600'"
              >
                {{ hito.titulo }}
              </span>
            </button>
          </div>
        </div>

        <!-- Contenido del hito -->
        <div class="w-full lg:w-2/3">
          <div class="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg shadow-lg">
            <img
              v-for="(hito, index) in hitos"
              :key="index"
              :src="hito.imagen"
              :alt="hito.titulo"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="{
                'opacity-100': hitoActivo === index,
                'opacity-0': hitoActivo !== index
              }"
            />
          </div>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-lg">
              {{ hitos[hitoActivo].descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optimizaciones de rendimiento */
img {
  will-change: transform, opacity;
}

.container {
  contain: content;
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Reducción de movimiento si el usuario lo prefiere */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
  
  img {
    transition: none !important;
  }
}
</style>
