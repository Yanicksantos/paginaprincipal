<template>
    <div class="mt-16 pt-16">
      <form @submit.prevent="sendEmail">
        <input v-model="name" type="text" placeholder="Nome" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <textarea v-model="message" placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const sendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
      });
      if (!response.ok) throw new Error('Erro ao enviar email');
      alert('Email enviado com sucesso!');
    } catch (error) {
      alert('Erro ao enviar email: ' + error.message);
    }
  };
  </script>
  