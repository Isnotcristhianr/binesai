<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="navbar bg-primary px-4">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl sm:text-2xl lg:text-4xl text-white text-center">
        {{ title }}
      </a>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>
