<script setup lang="ts">
//components
import Calendarevent from "../intro/widgets/calendarevent.vue";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div class="w-full h-[20vh] mb-10">
      <img
        src="/imgs/banner_programacion.jpg"
        alt="Descripción del banner"
        class="w-full h-full object-cover"
      />
    </div>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
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
