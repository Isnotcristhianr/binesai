<script setup lang="ts">
</script>

<template>
  <div class="hero min-h-screen bg-white relative">

    <!-- Contenido principal -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
      <!-- Logo y título centrados -->
      <div class="flex-grow flex items-center justify-center">
        <div class="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full">
          <!-- Logo -->
          <div class="w-full md:w-auto mb-8 md:mb-0 flex justify-center md:justify-start">
            <img
              src="/icons/BINESAI_hero.png"
              alt="Logo Binesai"
              class="w-32 sm:w-40 md:w-48 lg:w-56 transition-all"
              loading="eager"
            />
          </div>

          <!-- Textos principales -->
          <div class="text-center md:text-left md:ml-8 lg:ml-12">
            <h2 class="text-lg sm:text-xl md:text-2xl text-[#1E1E1E]">Bienal Nacional de Escultura</h2>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] my-2">BINESAI</h1>
            <h3 class="text-xl sm:text-2xl md:text-3xl text-[#1E1E1E]">San Antonio de Ibarra</h3>
            <br>
            <h5 class="text-xs font-semibold sm:text-xs md:text-lg text-[#1E1E1E]">Del 03 al 31 de mayo</h5>
          </div>
        </div>
      </div>

      <!-- Organizadores -->
      <div class="w-full max-w-xl mx-auto mb-8 px-4">
        <h2 class="text-center text-lg sm:text-xl md:text-2xl text-[#1E1E1E] mb-6">Organizadores:</h2>
        <div class="flex flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12">
          <!-- Organizador 1 -->
          <div class="flex items-center justify-center w-1/3">
            <img
              src="/icons/organizadores/gad.png"
              alt="Organizador 1"
              class="w-12 sm:w-16 md:w-20 h-auto object-contain"
            />
          </div>

          <!-- Organizador 2 -->
          <div class="flex items-center justify-center w-1/3">
            <img
              src="/icons/organizadores/alcaldia.png"
              alt="Organizador 2"
              class="  object-contain"
            />
          </div>

          <!-- Organizador 3 -->
          <div class="flex items-center justify-center w-1/3">
            <img
              src="/icons/organizadores/danielreyes.png"
              alt="Organizador 3"
              class="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-color: #ffffff;
}

/* Optimización de rendimiento */
.container {
  contain: content;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Ajustes responsive adicionales */
@media (max-width: 768px) {
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
