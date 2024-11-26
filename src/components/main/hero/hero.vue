<script setup lang="ts">
import Countdown from "../../main/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen relative overflow-hidden">
    <!-- img fondo -->
    <div class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <img
        src="../../../assets/imgs/bg.png"
        alt="background hero"
        class="w-full h-full object-cover z-0"
      />
    </div>

    <!-- Contenido principal centrado -->
    <div class="relative z-10 flex flex-col items-center justify-between h-full py-12">
      <!-- Contenedor central para logo y texto -->
      <div class="flex flex-col items-center justify-center flex-grow">
        <img
          src="/imgs/Logo. Binesai transpaente.png"
          alt="Description"
          class="w-40 md:w-48 mb-6"
        />

        <div class="text-container text-center space-y-4">
          <h2 class="text-xl md:text-3xl text-white">
            {{ $t("hero.title1") }}
          </h2>
          <h2
            class="text-5xl md:text-8xl font-extrabold text-white tracking-wider animate-pulse-slow"
          >
            {{ $t("hero.title2") }}
          </h2>
          <h3 class="text-2xl md:text-4xl text-white tracking-wider">
            {{ $t("hero.subtitle") }}
          </h3>
        </div>
      </div>

      <!-- Countdown al final -->
      <div class="mt-auto px-8 py-4 rounded-lg">
        <Countdown class="flex justify-center items-center" />
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
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 50px rgba(0, 0, 0, 1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

:global(.light) .animate-pulse-slow {
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
</style>
