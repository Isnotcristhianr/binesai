<script setup lang="ts">
//components
import Countdown from "../../components/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen relative overflow-hidden">
    <!-- Agregar Spline como fondo con un iframe -->
    <iframe
      src="https://my.spline.design/bganimation-26080c817b6783b6f0548930344e2b5e/"
      frameborder="0"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      style="pointer-events: none"
    ></iframe>

    <div
      class="hero-content flex-col lg:flex-row-reverse relative z-10 backdrop-blur-lg shadow-2xl rounded-lg p-8 bg-dark"
    >
      <div class="text-center space-y-10 max-w-3xl">
        <!-- Título principal con efecto de brillo -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-base-content/90 [text-shadow:_0_0_25px_rgba(255,255,255,0.4)]"
        >
          {{ $t("hero.title1") }}
        </h1>

        <!-- BINESAI con efecto de brillo intenso -->
        <h2
          class="text-7xl sm:text-9xl md:text-10xl font-extrabold tracking-tighter text-base-content [text-shadow:_0_0_35px_rgba(255,255,255,0.6)] animate-pulse-slow"
        >
          {{ $t("hero.title2") }}
        </h2>

        <!-- Subtítulo con brillo moderado -->
        <h2
          class="text-3xl sm:text-4xl italic font-medium text-base-content/80 [text-shadow:_0_0_18px_rgba(255,255,255,0.35)]"
        >
          {{ $t("hero.subtitle") }}
        </h2>

        <!-- Contador -->
        <div class="flex justify-center mt-10">
          <Countdown />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animación de brillo */
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

/* Asegura que el contenido esté por encima del iframe de Spline */
.hero-content {
  position: relative;
  z-index: 10;
}
</style>
