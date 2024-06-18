<template>
    <v-select
      v-model="locale"
      :items="locales"
      item-title="name"
      item-value="code"
      variant="outlined"
      density="compact"
      prepend-inner-icon="mdi-web"
      size="x-small"
      class="text-caption mt-5 mr-4"
    >
    <template v-slot:selection="{ item }">
        <span style="font-size: 10px;">{{ item.title }}</span>
    </template> 
    </v-select>
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