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

    <div
      class="backdrop-blur-lg bg-opacity-20 bg-base-200 shadow-xl rounded-lg p-8 k mx-4 md:mx-0"
    >
      <div class="flex flex-col items-center w-full">
        <!-- Logo and Text Container -->
        <div class="flex items-center justify-center w-full mb-4">
          <img
            src="/imgs/Logo. Binesai transpaente.png"
            alt="Description"
            class="w-40 md:w-48"
          />

          <div class="text-container max-w-2xl mx-auto text-center space-y-2">
            <h1 class="text-xl md:text-3xl font-bold text-black">
              {{ $t("hero.title1") }}
            </h1>
            <h2
              class="text-5xl md:text-8xl font-extrabold text-black tracking-wider"
            >
              {{ $t("hero.title2") }}
            </h2>
            <h3 class="text-2xl md:text-4xl text-black w-full tracking-wider">
              {{ $t("hero.subtitle") }}
            </h3>
          </div>
        </div>
        <!-- Countdown -->
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@keyframes pulse-slow {
  0%,
  100% {
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
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
