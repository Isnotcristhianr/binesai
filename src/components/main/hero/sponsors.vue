<template>
    <Vue3Marquee
      gradient-length="50%"
      gradient-color="white"
      auto-fill="true"
      pause-on-hover="true"
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
    '/imgs/sponsors/1_prefectura.png',
    '/imgs/sponsors/2_ccmetropolitano.png',
    '/imgs/sponsors/3_bienalcuenca.png',
    '/imgs/sponsors/4_utn.png',
    '/imgs/sponsors/5_udla.png',
    '/imgs/sponsors/6_oui.png',
    '/imgs/sponsors/7_cctahuandos.png',
    '/imgs/sponsors/8_ccimbabura.png',
    '/imgs/sponsors/9_florap.png',
    '/imgs/sponsors/10_caran.png',
    '/imgs/sponsors/11_cerelectric.png',
  ]
  </script>
  
  <style scoped>
  .marquee-img {
    width: 100px; /* Ajusta el tamaño de las imágenes según prefieras */
    margin: 0 15px; /* Espacio entre imágenes */
  }
  </style>