<script setup lang="ts">
import Countdown from "../../components/hero/countdown.vue";
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="/gifs/Cervantes loop.gif"
        class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
      />
      <div>
        <div class="text-center">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold">
            {{ $t("hero.title1") }}
          </h1>
          <h2 class="text-5xl sm:text-7xl md:text-9xl font-bold">
            {{ $t("hero.title2") }}
          </h2>
          <h2 class="text-xl sm:text-2xl">
            {{ $t("hero.subtitle") }}
          </h2>
        </div>

        <div class="flex justify-center">
          <Countdown />
        </div>
      </div>
    </div>
  </div>
</template>
