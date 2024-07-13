<template>
  <v-list class="d-flex mr-4" variant="compact">
    <v-list-item class="w-auto pa-0">
      <v-btn
        variant="plain"
        block
        size="small"
        class="pa-0"
        @click="switchLocale('pt')"
        aria-label="trocar para Português"
      >
        <v-img src="/idioma/brasil.png" width="24" height="24" cover alt="Brazil flag"></v-img>
      </v-btn>
    </v-list-item>

    <v-list-item class="w-auto pa-0">
      <v-btn
        variant="plain"
        block
        size="small"
        class="px-1"
        @click="switchLocale('en')"
        aria-label="trocar para inglês"
      >
        <v-img src="/idioma/eua.png" width="24" height="24" cover alt="USA flag"></v-img>
      </v-btn>
    </v-list-item>

    <v-list-item class="w-auto pa-0">
      <v-btn
        variant="plain"
        block
        size="small"
        class="pa-0"
        @click="switchLocale('es')"
        aria-label="trocar para Espanhol"
      >
        <v-img src="/idioma/espanha.png" width="24" height="24" cover alt="Spain flag"></v-img>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale } = useI18n();
const locales = ref([
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
]);

const switchLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>
