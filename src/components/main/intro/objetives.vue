<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const FlipCard = defineAsyncComponent(() => import("./widgets/flipcard.vue"));
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-16">
    <div class="max-w-[1000px] w-full">
      <!-- Título de Objetivos -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium text-[#9B1C1F] mb-16">
        Objetivos de la Bienal
      </h2>

      <!-- Grid de objetivos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Objetivo 1 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-lg mb-6">
            <img 
              src="/imgs/objective1_card.jpg" 
              alt="Visibilizar el trabajo artístico" 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-xl font-medium mb-4">
            Visibilizar el trabajo artístico ecuatoriano:
          </h3>
          <p class="text-lg font-light leading-relaxed">
            Difundir las propuestas escultóricas contemporáneas de creadores nacionales, fortaleciendo su presencia a nivel local y nacional.
          </p>
        </div>

        <!-- Objetivo 2 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-lg mb-6">
            <img 
              src="/imgs/objective2_card.jpg" 
              alt="Fomentar la educación" 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-xl font-medium mb-4">
            Fomentar la educación y el intercambio cultural:
          </h3>
          <p class="text-lg font-light leading-relaxed">
            Crear un espacio de encuentro y aprendizaje entre estudiantes, maestros artesanos y artistas consolidados, promoviendo la transmisión de saberes y experiencias entre generaciones.
          </p>
        </div>

        <!-- Objetivo 3 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-lg mb-6">
            <img 
              src="/imgs/objective3_card.jpg" 
              alt="Promover el patrimonio" 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-xl font-medium mb-4">
            Promover el patrimonio cultural de San Antonio de Ibarra:
          </h3>
          <p class="text-lg font-light leading-relaxed">
            Poner en valor las tradiciones artesanales y artísticas de la región, vinculando a la comunidad y atrayendo turismo cultural mediante rutas y talleres abiertos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optimizaciones de rendimiento */
img {
  contain: content;
}
</style>