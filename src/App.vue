<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div >
        Hello World
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
