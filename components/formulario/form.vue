<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div>
        <div class="px-2 pb-2 d-flex align-center">
          <v-img src="/partelogo.webp" max-width="20" height="20"></v-img>
          <p class="text-h6 text-indigo-darken-4 ml-2">{{ $t('contact_us') }}</p>
        </div>
        <div
          style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E);"
          class="mb-6 mx-2"
        ></div>
      </div>
      <div class="bg-green-lighten-1 w-75 mx-auto rounded my-2 pa-2 text-center text-caption" v-if="progress" style="position: relative; transition: all ease-in 2s;">
        <p >E-mail encaminhado com sucesso!</p>
        <v-progress-linear
        :active="progress"
        :indeterminate="progress"
        color="deep-purple-accent-4"
        absolute
        location="bottom"
      ></v-progress-linear>
      </div>
      <v-text-field
        v-model="name"
        :error-messages="nameError"
        :label="$t('name')"
        class="mb-2"
        variant="outlined"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :error-messages="emailError"
        :label="$t('email')"
        type="email"
        required
        density="compact"
        variant="outlined"
        class="mb-2"
        :hint="$t('email_hint')"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        :error-messages="phoneError"
        :label="$t('phone')"
        variant="outlined"
        type="text"
        class="mb-2"
        density="compact"
        :hint="$t('phone_hint')"
      ></v-text-field>

      <v-text-field
        v-model="whatsapp"
        :error-messages="whatsappError"
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
        @click="sendEmail"
        width="100%"
        :disabled="!isFormValid"
        :loading="loading"
      >{{ $t('send') }}</v-btn>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const name = ref('');
const phone = ref('');
const email = ref('');
const whatsapp = ref('');
const nameError = ref('');
const phoneError = ref('');
const emailError = ref('');
const whatsappError = ref('');
const loading = ref(false)
const progress = ref (false)


const validateName = () => {
  if (name.value.length >= 3) {
    nameError.value = '';
    return true;
  } else {
    nameError.value = '';
    return false;
  }
};

const validatePhone = () => {
  if (/^[0-9]{7,}$/.test(phone.value)) {
    phoneError.value = '';
    return true;
  } else {
    phoneError.value = '';
    return false;
  }
};

const validateEmail = () => {
  if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email.value)) {
    emailError.value = '';
    return true;
  } else {
    emailError.value = 'Digite um email válido.';
    return false;
  }
};


const isFormValid = computed(() => {
  return validateName() && validatePhone() && validateEmail()
});

const sendEmail = async () => {
  if (!isFormValid.value) {
    validateName();
    validatePhone();
    validateEmail();
    return;
  }

  try {
    loading.value = true;
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        whatsapp: whatsapp.value
      })
    });
    if (!response.ok) throw new Error('Erro ao enviar email');
    loading.value = false;
    progress.value = true;
    name.value = '';
    phone.value = '';
    whatsapp.value = '';
    email.value = '';
  } catch (error) {
    alert('Erro ao enviar email: ' + error.message);
    loading.value = false
  }
};

watch(progress, (val) => {
  if (!val) return

  setTimeout(() => ( progress.value= false), 4000)
});

</script>
