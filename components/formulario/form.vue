<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <div class="px-2 pb-2 d-flex align-center">
          <v-img src="/partelogo.webp" max-width="20" height="20"></v-img>
          <p class="text-h6  text-indigo-darken-4 ml-2">{{ $t('contact_us') }}</p>
        </div>
        <div
          style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,#1A237E);"
          class="mb-6 mx-2"
        ></div>
      </div>

      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        :label="$t('name')"
        class="mb-2"
        variant="outlined"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        :label="$t('email')"
        type="email"
        required
        density="compact"
        variant="outlined"
        class="mb-2"
        :hint="$t('email_hint')"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :error-messages="phone.errorMessage.value"
        :label="$t('phone')"
        variant="outlined"
        type="text"
        class="mb-2"
        density="compact"
        :hint="$t('phone_hint')"
      ></v-text-field>

      <v-text-field
        v-model="Whatsapp.value.value"
        :error-messages="Whatsapp.errorMessage.value"
        :label="$t('whatsapp')"
        variant="outlined"
        type="text"
        class="mb-2"
        density="compact"
        :hint="$t('whatsapp_hint')"
      ></v-text-field>

      <v-btn
        variant="flat"
        append-icon="mdi-arrow-top-right"
        color="indigo-darken-4"
        type="submit"
        width="100%"
      >{{ $t('send') }}</v-btn>
    </form>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
let cont = 0
const { handleSubmit } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true
      return ''
    },
    phone (value) {
      if (/^[0-9]{7,}$/.test(value) || cont>0) {
        cont = 0
        return true
      }
      return 'Digite um numero válido. Apenas numeros!'
    },
    email (value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
      return ''
    },
    Whatsapp (value) {
      if (/^[0-9]{7,}$/.test(value) || cont>0) {
        cont = 0
        return true
      }
      return ''
    }
  },
})
const name = useField('nome')
const phone = useField('phone')
const email = useField('email')
const Whatsapp = useField('Whatsapp')

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
  name.value.value =''
  phone.value.value = ''
  email.value.value = ''
  Whatsapp.value.value = ''
  cont++
})
</script>
