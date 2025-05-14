<script setup lang="ts">
const objetivos = [
  {
    titulo: 'Promover el Arte',
    descripcion: 'Impulsar y difundir el arte escultórico ecuatoriano, creando espacios de exhibición y reconocimiento para los artistas nacionales.',
    imagen: '/images/objetivos/promover.jpg'
  },
  {
    titulo: 'Preservar la Tradición',
    descripcion: 'Mantener viva la tradición escultórica de San Antonio de Ibarra, transmitiendo conocimientos y técnicas a las nuevas generaciones.',
    imagen: '/images/objetivos/preservar.jpg'
  },
  {
    titulo: 'Innovar y Crecer',
    descripcion: 'Fomentar la innovación en las técnicas escultóricas, combinando la tradición con nuevas formas de expresión artística.',
    imagen: '/images/objetivos/innovar.jpg'
  }
];
</script>

<template>
  <div class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-light text-[#9B1C1F] text-center mb-16">
        Nuestros Objetivos
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="(objetivo, index) in objetivos"
          :key="index"
          class="flex flex-col items-center text-center group"
        >
          <!-- Imagen con efecto hover -->
          <div class="relative w-full aspect-square mb-8 overflow-hidden rounded-lg">
            <img
              :src="objetivo.imagen"
              :alt="objetivo.titulo"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Contenido -->
          <h3 class="text-2xl font-light text-gray-900 mb-4">
            {{ objetivo.titulo }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ objetivo.descripcion }}
          </p>
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

img {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .group-hover\:scale-110 {
    transform: none !important;
  }
}
</style> 