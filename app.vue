import { NuxtLoadingIndicator } from '#build/components';
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
  .testeover{
    overflow-x: hidden;
  }

  .template,
.page-leave-active {
  transition: all 5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
