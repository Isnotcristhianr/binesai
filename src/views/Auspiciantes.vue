<script setup lang="ts">
const organizadores = [
  {
    nombre: 'GAD San Antonio',
    imagen: '/icons/organizadores/gad.png',
    descripcion: 'Gobierno Autónomo Descentralizado de San Antonio de Ibarra'
  },
  {
    nombre: 'Alcaldía de Ibarra',
    imagen: '/icons/organizadores/alcaldia.png',
    descripcion: 'Gobierno Autónomo Descentralizado Municipal de San Miguel de Ibarra'
  },
  {
    nombre: 'Instituto Daniel Reyes',
    imagen: '/icons/organizadores/danielreyes.png',
    descripcion: 'Instituto Superior Tecnológico de Artes Plásticas Daniel Reyes'
  }
];

const auspiciantes = [
  { nombre: 'Prefectura de Imbabura', imagen: '/imgs/sponsors/1_prefectura.png' },
  { nombre: 'Centro Cultural Metropolitano', imagen: '/imgs/sponsors/2_ccmetropolitano.png' },
  { nombre: 'Bienal de Cuenca', imagen: '/imgs/sponsors/3_bienalcuenca.png' },
  { nombre: 'Universidad Técnica del Norte', imagen: '/imgs/sponsors/4_utn.png' },
  { nombre: 'Universidad de las Américas', imagen: '/imgs/sponsors/5_udla.png' },
  { nombre: 'OUI', imagen: '/imgs/sponsors/6_oui.png' },
  { nombre: 'CC Tahuandos', imagen: '/imgs/sponsors/7_cctahuandos.png' },
  { nombre: 'CC Imbabura', imagen: '/imgs/sponsors/8_ccimbabura.png' },
  { nombre: 'Flora P', imagen: '/imgs/sponsors/9_florap.png' },
  { nombre: 'Caran', imagen: '/imgs/sponsors/10_caran.png' }
];
</script>

<template>
  <div class="min-h-screen bg-white pt-20">
    <!-- Organizadores -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-light text-[#9B1C1F] text-center mb-16">
          Organizadores
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="org in organizadores"
            :key="org.nombre"
            class="flex flex-col items-center text-center group"
          >
            <div class="w-48 h-48 mb-6 flex items-center justify-center p-6 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
              <img
                :src="org.imagen"
                :alt="org.nombre"
                class="w-full h-full object-contain"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-3">{{ org.nombre }}</h3>
            <p class="text-gray-600 font-light">{{ org.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Auspiciantes -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-light text-[#9B1C1F] text-center mb-16">
          Auspiciantes
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          <div
            v-for="aus in auspiciantes"
            :key="aus.nombre"
            class="group"
          >
            <div class="w-full aspect-square flex items-center justify-center p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-lg">
              <img
                :src="aus.imagen"
                :alt="aus.nombre"
                class="w-full h-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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

@media (prefers-reduced-motion: reduce) {
  .group:hover {
    transform: none !important;
  }
}
</style>