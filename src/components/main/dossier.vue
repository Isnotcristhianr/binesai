<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-light text-gray-900 mb-8">
          Descarga nuestro dossier
        </h2>
        <p class="text-lg text-gray-600 mb-12">
          Conoce todos los detalles sobre la Bienal Nacional de Escultura San Antonio de Ibarra
        </p>
        
        <!-- Botón de descarga minimalista -->
        <a
          href="/docs/Dossier_BINESAI.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 border border-gray-900 text-base font-light text-gray-900 bg-transparent hover:bg-[#9B1C1F] hover:text-white hover:border-[#9B1C1F] transition-all duration-300 ease-in-out group"
        >
          <span class="mr-3">Descargar Dossier</span>
          <Icon
            icon="mdi:download"
            class="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones suaves */
.group:hover .group-hover\:translate-y-0\.5 {
  transform: translateY(2px);
}
</style> 