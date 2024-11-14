<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 min-h-screen">
    <!-- Objective title -->
    <h1
      class="text-7xl font-extrabold text-primary leading-tight md:leading-none md:text-right mb-8"
    >
      {{ $t("objectives.title1") }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Card 1 -->
      <div class="flip-card w-96 h-96 perspective">
        <div class="flip-card-inner">
          <!-- Front Side -->
          <div class="flip-card-front card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="/imgs/objective1_card.jpg" />
            </figure>
            <div class="card-body">
              <h2
                class="card-title flex items-center justify-center h-full text-2xl"
              >
                {{ $t("objectives.objective1.title") }}
              </h2>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
          <!-- Back Side -->
          <div class="flip-card-back card bg-base-200 shadow-xl">
            <div class="card-body flex items-center justify-center">
              <p>{{ $t("objectives.objective1.description") }}</p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="flip-card w-96 h-96 perspective">
        <div class="flip-card-inner">
          <div class="flip-card-front card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="/imgs/objective2_card.jpg" />
            </figure>
            <div class="card-body">
              <h2
                class="card-title flex items-center justify-center h-full text-2xl"
              >
                {{ $t("objectives.objective2.title") }}
              </h2>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
          <div class="flip-card-back card bg-base-200 shadow-xl">
            <div class="card-body flex items-center justify-center">
              <p>{{ $t("objectives.objective2.description") }}</p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="flip-card w-96 h-96 perspective">
        <div class="flip-card-inner">
          <div class="flip-card-front card bg-base-100 image-full shadow-xl">
            <figure>
              <img src="/imgs/objective3_card.jpg" />
            </figure>
            <div class="card-body">
              <h2
                class="card-title flex items-center justify-center h-full text-2xl"
              >
                {{ $t("objectives.objective3.title") }}
              </h2>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
          <div class="flip-card-back card bg-base-200 shadow-xl">
            <div class="card-body">
              <p>{{ $t("objectives.objective3.description") }}</p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Scroll Animation -->
    <div class="animate-bounce mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 text-black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.perspective {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
