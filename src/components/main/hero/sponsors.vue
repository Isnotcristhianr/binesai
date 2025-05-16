<template>
    <Vue3Marquee
      auto-fill="true"
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
  import { useColorMode } from '@vueuse/core'
  
  // Obtén el modo de color actual
  const colorMode = useColorMode()
  
  // Lista de URLs de imágenes
  const imgArray = [
    '/imgs/sponsors/LOGO WEB AGENCIA OUI.png',
    '/imgs/sponsors/LOGO WEB ALCALDIA CUENCA.png',
    '/imgs/sponsors/LOGO WEB ALCALDIA IBARRA.png',
    '/imgs/sponsors/LOGO WEB BINESAI.png',
    '/imgs/sponsors/LOGO WEB CARAN.png',
    '/imgs/sponsors/LOGO WEB CCE IMBABURA.png',
    '/imgs/sponsors/LOGO WEB CCT.png',
    '/imgs/sponsors/LOGO WEB CENTRO CULTURAL METROPOLITANO.png',
    '/imgs/sponsors/LOGO WEB DANIEL REYES.png',
    '/imgs/sponsors/LOGO WEB FLORALP.png',
    '/imgs/sponsors/LOGO WEB GAD SAN ANTONIO.png',
    '/imgs/sponsors/LOGO WEB UDLA.png',
    '/imgs/sponsors/LOGO WEB UNIR.png',
    '/imgs/sponsors/LOGO WEB UTN.png',
  ]
  </script>
  
  <style scoped>
  .marquee-img {
    width: 100px; /* Ajusta el tamaño de las imágenes según prefieras */
    margin: 0 15px; /* Espacio entre imágenes */
  }
  </style>