<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center">
    <div class="card w-full bg-primary text-primary-content shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-4xl">{{ $t("form.title") }}</h2>
        <p class="text-xl">{{ $t("form.description") }}</p>
        <div class="card-actions">
          <a href="/inscripcion" class="btn btn-white animate-bounce hover:animate-none mt-4">
            {{ $t("form.button") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
