<script setup lang="ts">

import { Icon } from '@iconify/vue';

interface Mencion {
  posicion: string;
  nombre: string;
}

interface Categoria {
  categoria: string;
  artistas: string[] | Mencion[];
}

const ganadores: Categoria[] = [
  {
    categoria: 'PREMIO BIENAL NACIONAL DE ESCULTURA DE SAN ANTONIO DE IBARRA',
    artistas: [
      'CARLOS JAVIER CABASCANGO MANRIQUE',
      'FREDDY DAMIÁN SINCHI QUINDE',
      'BORIS ANTONIO ORDOÑEZ PETROFF'
    ]
  },
  {
    categoria: 'MENCIONES DE HONOR',
    artistas: [
      {
        posicion: 'PRIMERA',
        nombre: 'HÉCTOR DAVID CELI ECHEVERRÍA'
      },
      {
        posicion: 'SEGUNDA',
        nombre: 'NOÉ ROLANDO MAYORGA ORTIZ'
      },
      {
        posicion: 'TERCERA',
        nombre: 'MILTON RAMÓN ESTRELLA GAVIDIA'
      }
    ] as Mencion[]
  }
];
</script>

<template>
  <div class="min-h-screen bg-white pt-32 pb-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <header class="text-center space-y-6 mb-20">
        <h1 class="text-5xl font-light text-gray-900">Ganadores</h1>
        <div class="w-24 h-1 bg-red-600 mx-auto"></div>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">
          Celebramos el talento y la excelencia artística de los ganadores de la 8va Bienal Nacional de Escultura
        </p>
      </header>

      <!-- Contenido Principal -->
      <div class="space-y-24">
        <!-- Premios Principales -->
        <section class="space-y-12">
          <h2 class="text-3xl font-light text-center text-gray-900">
            {{ ganadores[0].categoria }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(artista, index) in ganadores[0].artistas" 
                 :key="index"
                 class="group bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center space-y-4"
                 data-aos="fade-up"
                 :data-aos-delay="index * 100">
              <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl text-red-600">
                    <Icon icon="mdi:trophy" />
                </span>
              </div>
              <h3 class="text-xl font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {{ artista }}
              </h3>
            </div>
          </div>
        </section>

        <!-- Menciones de Honor -->
        <section class="space-y-12">
          <h2 class="text-3xl font-light text-center text-gray-900">
            {{ ganadores[1].categoria }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(mencion, index) in ganadores[1].artistas" 
                 :key="index"
                 class="group bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center space-y-4"
                 data-aos="fade-up"
                 :data-aos-delay="index * 100">
              <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-sm font-medium text-red-600">{{ (mencion as Mencion).posicion }}</span>
              </div>
              <h3 class="text-xl font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {{ (mencion as Mencion).nombre }}
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Asegúrate de que AOS esté importado en tu main.ts o App.vue */
</style>
