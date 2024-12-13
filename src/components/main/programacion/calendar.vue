<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const Calendarevent = defineAsyncComponent(() => import("./calendarevent.vue"));

AOS.init();

const events = [
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
  {
    date: "19/11/2024",
    time: "8:00",
    title: "Concurso Nacional de escultura",
    description:
      "Los creadores ecuatorianos competirán para mostrar sus mejores propuestas en el campo de la escultura contemporánea.",
  },
];
</script>
<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Banner -->
    <div class="w-full h-[20vh] md:h-[30vh] mb-10">
      <img
        src="/imgs/banner_programacion.jpg"
        alt="Descripción del banner"
        class="w-full h-full object-cover"
      />
    </div>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical space-y-4"
      data-aos="fade-up-right"
    >
      <!-- Renderiza cada evento -->
      <li v-for="(event, index) in events" :key="index">
        <Calendarevent
          :date="event.date"
          :time="event.time"
          :title="event.title"
          :description="event.description"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
