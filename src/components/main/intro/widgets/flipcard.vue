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
      <div class="flip-card-front card bg-base-100 image-full shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <figure>
          <img :src="image" class="w-full h-full object-cover" />
        </figure>
        <div class="card-body">
          <h2 class="card-title flex items-center justify-center h-full text-2xl font-semibold">
            {{ title }}
          </h2>
        </div>
      </div>
      <!-- Back Side -->
      <div class="flip-card-back card bg-base-200 shadow-lg flex items-center justify-center text-white transition-colors duration-500 ease-in-out">
        <div class="card-body h-full flex items-center justify-center">
          <p class="text-2xl text-center  p-4 text-primary font-semibold">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective {
  perspective: 1200px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s ease-in-out;
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