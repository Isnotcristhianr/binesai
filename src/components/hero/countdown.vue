<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2025-04-01T00:00:00"); // Fecha objetivo

// Variables reactivas para días, horas, minutos y segundos
const daysRef = ref(0);
const hoursRef = ref(0);
const minutesRef = ref(0);
const secondsRef = ref(0);

// Función para actualizar el tiempo restante
const updateTime = () => {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();

  // Cálculo de los días, horas, minutos y segundos restantes
  daysRef.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hoursRef.value = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutesRef.value = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondsRef.value = Math.floor((timeDifference % (1000 * 60)) / 1000);
};

let countdownInterval: ReturnType<typeof setInterval>;

// Al montar el componente, inicia el intervalo para actualizar cada segundo
onMounted(() => {
  updateTime(); // Llama la primera vez para que se muestren los valores iniciales
  countdownInterval = setInterval(updateTime, 1000);
});

// Limpia el intervalo al desmontar el componente
onUnmounted(() => {
  clearInterval(countdownInterval);
});
</script>

<template>
  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <!-- Mostrar solo los 2 primeros dígitos de los días -->
        <span :style="`--value:${Math.min(daysRef, 99)}`"></span>
      </span>
      days
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span :style="`--value:${hoursRef}`"></span>
      </span>
      hours
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span :style="`--value:${minutesRef}`"></span>
      </span>
      min
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span :style="`--value:${secondsRef}`"></span>
      </span>
      sec
    </div>
  </div>
</template>
