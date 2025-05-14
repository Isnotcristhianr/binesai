<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const impactos = [
  {
    icono: "mdi:city-variant",
    titulo: "Desarrollo Cultural y Económico",
    descripcion: "El evento fortalece la identidad local y promueve el turismo cultural en San Antonio de Ibarra."
  },
  {
    icono: "mdi:school",
    titulo: "Formación y Promoción de Jóvenes Talentos",
    descripcion: "Fomenta el diálogo intergeneracional entre artistas consagrados y emergentes."
  },
  {
    icono: "mdi:earth",
    titulo: "Visibilización Internacional",
    descripcion: "La BINESAI posiciona a Ecuador como un referente de la escultura contemporánea en el ámbito global."
  }
];

const impactoActivo = ref(0);

const seleccionarImpacto = (index: number) => {
  impactoActivo.value = index;
};
</script>

<template>
  <div class="py-20 bg-gray-50">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6">
      <h2 class="text-4xl font-medium text-[#9B1C1F] mb-16 text-center">
        Impactos Clave
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(impacto, index) in impactos"
          :key="index"
          class="group relative bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg"
          @mouseenter="seleccionarImpacto(index)"
          :class="{ 'ring-2 ring-[#9B1C1F] ring-opacity-50': impactoActivo === index }"
        >
          <div class="flex flex-col h-full">
            <!-- Icono -->
            <div 
              class="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#9B1C1F] bg-opacity-10 text-[#9B1C1F] transition-all duration-300 group-hover:bg-opacity-20"
            >
              <Icon 
                :icon="impacto.icono" 
                class="w-6 h-6"
              />
            </div>

            <!-- Título -->
            <h3 class="text-xl font-medium text-gray-900 mb-3">
              {{ impacto.titulo }}
            </h3>

            <!-- Descripción -->
            <p class="text-gray-600 leading-relaxed flex-grow">
              {{ impacto.descripcion }}
            </p>

            <!-- Indicador visual -->
            <div 
              class="absolute bottom-0 left-0 w-full h-1 bg-[#9B1C1F] transform scale-x-0 transition-transform duration-300 origin-left"
              :class="{ 'scale-x-100': impactoActivo === index }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optimizaciones de rendimiento */
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
}
</style>
