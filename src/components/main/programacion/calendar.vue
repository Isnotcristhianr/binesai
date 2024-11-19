<script setup lang="ts">
//components
import { createVuetify } from "vuetify";
import { VCalendar } from "vuetify/labs/VCalendar";
import { useDate } from "vuetify";
import { ref, onMounted } from "vue";

const vuetify = createVuetify({
  components: {
    VCalendar,
  },
});

const focus = ref("");
const today = ref(new Date());
const events = ref<
  { title: string; start: Date; end: Date; color: string; allDay: boolean }[]
>([]);
const colors = [
  "blue",
  "indigo",
  "deep-purple",
  "cyan",
  "green",
  "orange",
  "grey darken-1",
];
const names = [
  "Meeting",
  "Holiday",
  "PTO",
  "Travel",
  "Event",
  "Birthday",
  "Conference",
  "Party",
];

const getEventColor = (event: { color: string }) => {
  return event.color;
};

const fetchEvents = ({ start, end }: { start: Date; end: Date }) => {
  const eventList = [];

  const min = start;
  const max = end;
  const days = (max.getTime() - min.getTime()) / 86400000;
  const eventCount = rnd(days, days + 20);

  for (let i = 0; i < eventCount; i++) {
    const allDay = rnd(0, 3) === 0;
    const firstTimestamp = rnd(min.getTime(), max.getTime());
    const first = new Date(firstTimestamp - (firstTimestamp % 900000));
    const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000;
    const second = new Date(first.getTime() + secondTimestamp);

    eventList.push({
      title: names[rnd(0, names.length - 1)],
      start: first,
      end: second,
      color: colors[rnd(0, colors.length - 1)],
      allDay: !allDay,
    });
  }

  events.value = eventList;
};

const rnd = (a: number, b: number) => {
  return Math.floor((b - a + 1) * Math.random()) + a;
};

onMounted(() => {
  const adapter = useDate();
  fetchEvents({
    start: adapter.startOfDay(adapter.startOfMonth(new Date())) as Date,
    end: adapter.endOfDay(adapter.endOfMonth(new Date())) as Date,
  });
});
</script>
<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          :events="events"
          color="secondary"
          type="month"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<style scoped>
/* Cambiar el color del título de los días */
.v-calendar .v-calendar-daily__header {
  color: #ffffff; /* Color blanco */
  background-color: #b71c1c; /* Fondo rojo oscuro */
}

/* Cambiar el color de las letras del contenido del evento */
.v-calendar .v-calendar-event {
  color: #ffffff !important; /* Color de texto blanco */
  background-color: #4caf50 !important; /* Fondo verde */
  border-radius: 8px; /* Bordes redondeados */
  padding: 4px 8px;
}

/* Cambiar el fondo de las celdas del calendario */
.v-calendar .v-calendar-daily__day {
  background-color: #f5f5f5; /* Fondo gris claro */
  border: 1px solid #ddd; /* Bordes gris claro */
}

/* Resaltar el día actual */
.v-calendar .v-calendar-daily__day--today {
  background-color: #ffc107 !important; /* Fondo amarillo */
  border-color: #ff9800; /* Borde naranja */
}

/* Cambiar color de los números de los días */
.v-calendar .v-calendar-daily__day--outside {
  color: #9e9e9e; /* Días fuera del mes en gris */
}
</style>
