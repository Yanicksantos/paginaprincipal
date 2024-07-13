<template>

  <v-list class="d-flex mr-4"
  variant="compact"
  >
    <v-list-item
    class="w-auto pa-0"
   
    >
      <v-btn
      variant="plain"
      block
      size="small"
      class="pa-0"
      @click="switchLocale('pt')"
      >
        <v-img src="/idioma/brasil.png" width="24" height="24" cover ></v-img>
      </v-btn>
    </v-list-item>

    <v-list-item
     class="w-auto pa-0"
    >
      <v-btn
      variant="plain"
      block
      size="small"
      class="px-1"
      @click="switchLocale('en')"
      >
        <v-img src="/idioma/eua.png" width="24" height="24" cover ></v-img>
      </v-btn>
    </v-list-item>

    <v-list-item
     class="w-auto pa-0"
    >
      <v-btn
      variant="plain"
      block
      size="small"
      class="pa-0"
      @click="switchLocale('es')"
      >
        <v-img src="/idioma/espanha.png" width="24" height="24" cover></v-img>
      </v-btn>
    </v-list-item>
  </v-list>

  <!--
    <v-select
      v-model="locale"
      :items="locales"
      item-title="name"
      item-value="code"
      variant="outlined"
      density="compact"
      prepend-inner-icon="mdi-web"
      size="x-small"
      class="text-caption mt-5 ml-4"
    >
    <template v-slot:selection="{ item }">
        <span style="font-size: 10px;">{{ item.title }}</span>
    </template> 
    </v-select>-->
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