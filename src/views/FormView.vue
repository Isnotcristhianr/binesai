<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

const Footer = defineAsyncComponent(() => import("../components/structure/footer.vue"));
const Title = defineAsyncComponent(() => import("../components/structure/title.vue"));

// Definir una interfaz para el formulario
interface FormData {
  nombre: string;
  apellido: string;
  documento: string;
  nacionalidad: string;
  direccion: string;
  telefono: string;
  email: string;
  tituloObra: string;
  tecnica: string;
  dimensiones: string;
  peso: string;
  volumen: string;
  material: string;
  imagenObra: File | null;
  portafolio: File | null;
  cv: File | null;
  [key: string]: string | File | null; // Añadir índice de firma
}

const form = ref<FormData>({
  nombre: "",
  apellido: "",
  documento: "",
  nacionalidad: "",
  direccion: "",
  telefono: "",
  email: "",
  tituloObra: "",
  tecnica: "",
  dimensiones: "",
  peso: "",
  volumen: "",
  material: "",
  imagenObra: null,
  portafolio: null,
  cv: null,
});

const handleFileChange = (event: Event, key: string) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    form.value[key] = target.files[0];
  }
};

const handleSubmit = () => {
  // Validaciones y lógica para el envío del formulario
  console.log(form.value);
};
</script>

<template>
  <Title :title="'FORMULARIO DE INSCRIPCIÓN'" />
  <div class="container mx-auto px-4 py-8 h-screen">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">
        {{ $t("form.title") }}
      </h1>
      <!-- Bases del concurso -->
      <div class="flex justify-center">
        <a
          href="/docs/Bases Concurso 8va BINESAI.pdf"
          download="Bases Concurso 8va BINESAI.pdf"
          class="btn btn-primary"
          >Bases del concurso</a
        >
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Información personal -->
        <h2 class="text-2xl font-semibold mb-4">Información Personal</h2>
        <div>
          <label class="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            v-model="form.nombre"
            placeholder="Ingresa tu nombre"
            class="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Apellido</label>
          <input
            type="text"
            v-model="form.apellido"
            placeholder="Ingresa tu apellido"
            class="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <!-- Continuar con otros campos similares... -->

        <!-- Detalles de la obra -->
        <h2 class="text-2xl font-semibold mb-4">Detalles de la Obra</h2>
        <div>
          <label class="block text-sm font-medium mb-2">Título</label>
          <input
            type="text"
            v-model="form.tituloObra"
            placeholder="Título de la obra"
            class="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Imagen</label>
          <input
            type="file"
            @change="(event) => handleFileChange(event, 'imagenObra')"
            accept="image/*"
            class="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <!-- Continuar con otros campos similares... -->

        <!-- Botón de envío -->
        <button
          type="submit"
          class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {{ $t("form.button") }}
        </button>
      </form>
    </div>
  </div>
  <Footer />
</template>
