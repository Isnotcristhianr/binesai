<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

const targetDate = new Date("2025-08-01T00:00:00"); // Fecha objetivo
</script>

<template>
  <vue-countdown
    :time="targetDate.getTime() - Date.now()"
    v-slot="{ days, hours, minutes, seconds }"
  >
    <div class="grid auto-cols-max grid-flow-col gap-3 text-center">
      <div
        class="bg-gray-300 text-primary shadow-lg rounded-box flex flex-col p-2"
      >
        <span class="font-mono text-3xl">
          {{ days }}
        </span>
        {{ $t("hero.time.days") }}
      </div>
      <div
        class="bg-gray-300 text-primary shadow-lg rounded-box flex flex-col p-2 items-center"
      >
        <span class="countdown font-mono text-3xl">
          {{ hours }}
        </span>
        {{ $t("hero.time.hours") }}
      </div>
      <div
        class="bg-gray-300 text-primary shadow-lg rounded-box flex flex-col p-2"
      >
        <span class="countdown font-mono text-3xl">
          {{ minutes }}
        </span>
        {{ $t("hero.time.minutes") }}
      </div>
      <div
        class="bg-gray-300 text-primary shadow-lg rounded-box flex flex-col p-2"
      >
        <span class="countdown font-mono text-3xl">
          {{ seconds }}
        </span>
        {{ $t("hero.time.seconds") }}
      </div>
    </div>
  </vue-countdown>
</template>
