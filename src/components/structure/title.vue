<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="navbar bg-primary">
    <div class="navbar-start">
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-4xl text-white">{{ title }}</a>
    </div>
    <div class="navbar-end">
    </div>
  </div>   
</template>
