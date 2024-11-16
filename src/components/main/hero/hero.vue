<script setup lang="ts">
import Countdown from "../../main/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen relative overflow-hidden">
    <iframe
      src="https://my.spline.design/bganimation-26080c817b6783b6f0548930344e2b5e/"
      frameborder="0"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      style="pointer-events: none"
    ></iframe>

    <div class="hero-content relative z-10 shadow-xl rounded-lg p-8 bg-dark">
      <div class="flex flex-col items-center w-full">
        <!-- Logo and Text Container -->
        <div class="flex items-center justify-center w-full mb-12">
          <img
            src="/imgs/Logo. Binesai transpaente.png"
            alt="Description"
            class="w-40 md:w-48"
          />

          <div class="text-container max-w-2xl text-center">
            <h1 class="text-xl md:text-3xl font-bold text-white mb-2">
              {{ $t("hero.title1") }}
            </h1>

            <h2
              class="text-5xl md:text-8xl font-extrabold text-white mb-2 tracking-wider"
            >
              {{ $t("hero.title2") }}
            </h2>

            <h3 class="text-2xl md:text-4xl italic text-white">
              {{ $t("hero.subtitle") }}
            </h3>
          </div>
        </div>
        <!-- Centered Countdown -->
        <div class="w-full">
          <div class="">
            <Countdown class="flex justify-center items-center" />
            <div class="text-center my-3">
              <!-- fecha -->
              <h1 class="text-xl md:text font-semibold text-white mb-2">
                5 de Abril del 2025
              </h1>
            </div>
          </div>
        </div>
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

.hero-content {
  background: linear-gradient(
    to right,
    rgba(251, 0, 0, 0.887),
    rgba(220, 38, 38, 0.4)
  );
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1rem;
  }

  .text-container {
    max-width: 100%;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
