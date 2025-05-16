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
  { nombre: 'GAD Provincial de Imbabura', imagen: '/imgs/sponsors/LOGO WEB GAD PROVINCIAL.png' },
  { nombre: 'GAD San Antonio', imagen: '/imgs/sponsors/LOGO WEB GAD SAN ANTONIO.png' },
  { nombre: 'Alcaldía de Ibarra', imagen: '/imgs/sponsors/LOGO WEB ALCALDIA IBARRA.png' },
  { nombre: 'Alcaldía de Cuenca', imagen: '/imgs/sponsors/LOGO WEB ALCALDIA CUENCA.png' },
  { nombre: 'Instituto Superior Daniel Reyes', imagen: '/imgs/sponsors/LOGO WEB DANIEL REYES.png' },
  { nombre: 'Universidad Técnica del Norte', imagen: '/imgs/sponsors/LOGO WEB UTN.png' },
  { nombre: 'Universidad de Las Américas', imagen: '/imgs/sponsors/LOGO WEB UDLA.png' },
  { nombre: 'UNIR', imagen: '/imgs/sponsors/LOGO WEB UNIR.png' },
  { nombre: 'Centro Cultural Metropolitano', imagen: '/imgs/sponsors/LOGO WEB CENTRO CULTURAL METROPOLITANO.png' },
  { nombre: 'Casa de la Cultura Ecuatoriana - Imbabura', imagen: '/imgs/sponsors/LOGO WEB CCE IMBABURA.png' },
  { nombre: 'Centro Cultural El Cuartel', imagen: '/imgs/sponsors/LOGO WEB CCT.png' },
  { nombre: 'Floralp', imagen: '/imgs/sponsors/LOGO WEB FLORALP.png' },
  { nombre: 'Caran', imagen: '/imgs/sponsors/LOGO WEB CARAN.png' },
  { nombre: 'Agencia OUI', imagen: '/imgs/sponsors/LOGO WEB AGENCIA OUI.png' },
  { nombre: 'BINESAI', imagen: '/imgs/sponsors/LOGO WEB BINESAI.png' }
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

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          <div
            v-for="aus in auspiciantes"
            :key="aus.nombre"
            class="group"
          >
            <div class="w-full aspect-square flex items-center justify-center p-6 bg-white rounded-lg transition-all duration-300 hover:shadow-lg">
              <img
                :src="aus.imagen"
                :alt="aus.nombre"
                class=" object-contain opacity-90 transition-opacity group-hover:opacity-100"
                loading="lazy"
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