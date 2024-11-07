<script setup lang="ts">
import Countdown from "../../components/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="/gifs/Cervantes loop.gif"
        class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <div>
        <div class="text-center space-y-4">
          <h1 class="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {{ $t("hero.title1") }}
          </h1>
          <h2
            class="text-6xl sm:text-8xl md:text-10xl font-extrabold tracking-tight"
          >
            {{ $t("hero.title2") }}
          </h2>
          <h2 class="text-2xl sm:text-3xl italic text-gray-500">
            {{ $t("hero.subtitle") }}
          </h2>
        </div>

        <div class="flex justify-center m-6">
          <Countdown />
        </div>
      </div>
    </div>
  </div>
</template>
