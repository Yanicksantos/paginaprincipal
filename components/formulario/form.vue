<template>
    <div>
        <form @submit.prevent="submit">
        <div>
            <div class="px-2 pb-2 d-flex">
             <v-img src="~/assets/partelogo.png" width="40"></v-img>  
             <span class="text-h6  text-indigo-darken-4 ml-4">Insira seus dados no formulário abaixo para agendar a sua demonstração.</span>
             
            </div>
            <div 
            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,#1A237E);" 
            class="mb-6 mx-2"></div>
        </div>
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="Nome"
          class="mb-2"
          variant="outlined"
          density="compact"
        ></v-text-field>
    
    
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
          type="email"
          required
          density="compact"
          variant="outlined"
          class="mb-2"
          hint="insira um email válido ou tente digitar novamente!"
        ></v-text-field>
    
        <v-text-field
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
          label="Celular"
          variant="outlined"
          type="text"
          class="mb-2"
          density="compact"
          
        ></v-text-field>

        <v-text-field
          v-model="Whatsapp.value.value"
          :error-messages="Whatsapp.errorMessage.value"
          label="Whatsapp"
          variant="outlined"
          type="text"
          class="mb-2"
          density="compact"
          
        ></v-text-field>

        <v-btn
        variant="flat"
    
        append-icon="mdi-arrow-top-right"
        color="indigo-darken-4"
        type="submit"
        width="100%"
        >Enviar</v-btn>
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
const name = useField('name')
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