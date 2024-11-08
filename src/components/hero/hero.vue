<script setup lang="ts">
import Countdown from "../../components/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen bg-base-100 relative overflow-hidden">
    <!-- Ambient glow effects -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 dark:bg-gradient-to-r dark:from-amber-200/20 dark:to-transparent bg-gradient-to-r from-amber-500/20 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-gradient-to-l dark:from-amber-200/20 dark:to-transparent bg-gradient-to-l from-amber-500/20 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center space-y-8 max-w-2xl">
        <!-- Título principal con efecto de brillo -->
        <h1
          class="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight text-base-content/90 [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]"
        >
          {{ $t("hero.title1") }}
        </h1>

        <!-- BINESAI con efecto de brillo intenso -->
        <h2
          class="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-base-content [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] animate-pulse-slow"
        >
          {{ $t("hero.title2") }}
        </h2>

        <!-- Subtítulo con brillo medio -->
        <h2
          class="text-2xl sm:text-3xl italic text-base-content/70 [text-shadow:_0_0_15px_rgba(255,255,255,0.3)]"
        >
          {{ $t("hero.subtitle") }}
        </h2>

        <!-- Contador -->
        <div class="flex justify-center mt-8">
          <Countdown />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 50px rgba(255, 255, 255, 0.8);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Ajustes específicos para modo claro */
:global(.light) .animate-pulse-slow {
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

@keyframes pulse-slow-light {
  0%,
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  }
}
</style>
