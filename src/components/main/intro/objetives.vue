<script setup lang="ts">
import { Icon } from "@iconify/vue";
//widgets
import FlipCard from "./widgets/flipcard.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 min-h-screen">
    <!-- Objective title -->
    <h2
      class="text-7xl font-extrabold text-primary leading-tight md:leading-none md:text-right mb-8"
    >
      {{ $t("objectives.title1") }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Cards -->
      <FlipCard
        image="/imgs/objective1_card.jpg"
        :title="$t('objectives.objective1.title')"
        :description="$t('objectives.objective1.description')"
      />
      <FlipCard
        image="/imgs/objective2_card.jpg"
        :title="$t('objectives.objective2.title')"
        :description="$t('objectives.objective2.description')"
      />
      <FlipCard
        image="/imgs/objective3_card.jpg"
        :title="$t('objectives.objective3.title')"
        :description="$t('objectives.objective3.description')"
      />
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