<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="navbar bg-primary px-4">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <a
        class="btn btn-ghost text-xl sm:text-2xl lg:text-4xl text-white text-center"
      >
        {{ title }}
      </a>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>
