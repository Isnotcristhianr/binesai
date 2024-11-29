<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

// Carga diferida del componente Countdown
const Countdown = defineAsyncComponent(() => 
  import('../../main/hero/countdown.vue')
);
</script>

<template>
  <div class="hero min-h-screen relative overflow-hidden">
    <!-- img fondo optimizada -->
    <div class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <img
        src="../../../assets/imgs/bg.webp"
        alt="background hero"
        class="w-full h-full object-cover z-0"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
    </div>

    <!-- Contenido principal centrado -->
    <div class="relative z-10 flex flex-col items-center justify-between h-full py-12">
      <div class="flex flex-col items-center justify-center flex-grow">
        <img
          src="/imgs/Logo. Binesai transpaente.png"
          alt="Logo Binesai"
          class="w-40 md:w-48 mb-6"
          loading="eager"
          width="192"
          height="192"
        />

        <!-- Texto optimizado para renderizado -->
        <div class="text-container text-center space-y-4">
          <h2 
            class="text-xl md:text-3xl text-white"
            v-once
          >
            {{ $t("hero.title1") }}
          </h2>
          <h2
            class="text-5xl md:text-8xl font-extrabold text-white tracking-wider animate-pulse-slow will-change-opacity"
            v-once
          >
            {{ $t("hero.title2") }}
          </h2>
          <h3 
            class="text-2xl md:text-4xl text-white tracking-wider"
            v-once
          >
            {{ $t("hero.subtitle") }}
          </h3>
        </div>
      </div>

      <!-- Countdown cargado de forma diferida -->
      <div class="mt-auto px-8 py-4 rounded-lg">
        <Suspense>
          <template #default>
            <Countdown class="flex justify-center items-center" />
          </template>
          <template #fallback>
            <div class="h-20 flex items-center justify-center">
              <div class="animate-pulse">Cargando...</div>
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  contain: content;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
  will-change: opacity;
}

/* Optimización de la animación */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow {
    animation: none;
  }
}
</style>
