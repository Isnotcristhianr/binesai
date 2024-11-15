<!-- FlipCard.vue -->
<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="flip-card w-96 h-96 perspective">
    <div class="flip-card-inner">
      <!-- Front Side -->
      <div class="flip-card-front card bg-base-100 image-full shadow-xl">
        <figure>
          <img :src="image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title flex items-center justify-center h-full text-2xl">
            {{ title }}
          </h2>
        </div>
      </div>
      <!-- Back Side -->
      <div class="flip-card-back card bg-base-200 shadow-xl">
        <div class="card-body flex justify-center h-full">
          <p class="text-2xl text-center">
            {{ description }}
          </p>
        </div>
      </div>
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