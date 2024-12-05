<script setup lang="ts">
import { ref } from 'vue';
import Footer from '../components/structure/footer.vue';

const nombre = ref('');
const email = ref('');
const mensaje = ref('');
const imagen = ref(null);

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log({
    nombre: nombre.value,
    email: email.value,
    mensaje: mensaje.value,
    imagen: imagen.value
  });
}

const handleImagenChange = (event: any) => {
  imagen.value = event.target.files[0];
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">{{ $t("form.title") }}</h1>
      <p class="text-xl text-center mb-8">{{ $t("form.description") }}</p>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">{{ $t("contacto.form.name.label") }}</label>
          <input 
            type="text" 
            v-model="nombre"
            :placeholder="$t('contacto.form.name.placeholder')"
            class="w-full p-3 border rounded-lg"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">{{ $t("contacto.form.email.label") }}</label>
          <input 
            type="email" 
            v-model="email"
            :placeholder="$t('contacto.form.email.placeholder')"
            class="w-full p-3 border rounded-lg"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">{{ $t("contacto.form.message.label") }}</label>
          <textarea
            v-model="mensaje"
            :placeholder="$t('contacto.form.message.placeholder')"
            class="w-full p-3 border rounded-lg h-32"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Imagen de la Obra</label>
          <input
            type="file"
            @change="handleImagenChange"
            accept="image/*"
            class="w-full p-3 border rounded-lg"
            required
          >
        </div>

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
