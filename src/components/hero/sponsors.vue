<template>
    <Vue3Marquee
      :gradient="true"
      :gradient-color="colorMode === 'light' ? [255, 255, 255] : [0, 0, 0]"
      gradient-length="30%"
      speed="30"  <!-- Ajusta la velocidad del marquee según prefieras -->
      pauseOnHover="true" <!-- Opcional: Pausa el marquee al pasar el cursor -->
    >
      <img
        v-for="img in imgArray"
        :key="img"
        :src="img"
        class="marquee-img"
      />
    </Vue3Marquee>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useColorMode } from '@vueuse/core' // Asegúrate de tener vueuse/core instalado para el colorMode
  
  // Obtén el modo de color actual
  const colorMode = useColorMode()
  
  // Lista de URLs de imágenes
  const imgArray = [
    'https://sponsors.vuejs.org/images/vueschool.avif',
    'https://sponsors.vuejs.org/images/vehikl.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    // Agrega más imágenes aquí si es necesario
  ]
  </script>
  
  <style scoped>
  .marquee-img {
    width: 150px; /* Ajusta el tamaño de las imágenes según prefieras */
    margin: 0 15px; /* Espacio entre imágenes */
  }
  </style>