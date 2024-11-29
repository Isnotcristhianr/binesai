<template>
    <Vue3Marquee
      gradient-length="30%"
      speed="30"  
      class="sponsors-marquee"
    >
      <img
        v-for="img in imgArray"
        :key="img"
        :src="img"
        :alt="img"
        class="marquee-img"
      />
    </Vue3Marquee>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useColorMode } from '@vueuse/core'
  
  // Obtén el modo de color actual
  const colorMode = useColorMode()
  
  // Lista de URLs de imágenes
  const imgArray = [
    'https://sponsors.vuejs.org/images/vueschool.avif',
    'https://sponsors.vuejs.org/images/vehikl.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
  ]
  </script>
  
  <style scoped>
  .marquee-img {
    width: 150px; /* Ajusta el tamaño de las imágenes según prefieras */
    margin: 0 15px; /* Espacio entre imágenes */
  }
  </style>