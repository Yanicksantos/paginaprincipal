<template>
    <div>
      <v-list class="bg-transparent">
        <v-list-item>
          <v-menu :close-on-content-click="false" aria-haspopup="true">
            <template #activator="{ props }">
              <v-icon icon="mdi-account" size="large" v-bind="props" aria-label="Conta do Usuário"></v-icon>
            </template>
            <v-list nav size="small">
                <v-list-item
                append-icon="mdi-account-hard-hat-outline"
                variant="tonal"
                density="compact"
                href="http://www.pred.com.br/sgv/login/index.asp"
                class="text-caption"
                size="small"
                aria-label="Acessar Intranet"
              >
                <v-list-item-title>
                  Intranet
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                append-icon="mdi-account-cog-outline"
                href="http://www.pred.com.br/salavip/manutencao/default.asp"
                variant="tonal"
                density="compact"
                class="text-caption"
                size="small"
                aria-label="Acessar Sala Vip"
              >
                <v-list-item-title>
                  Sala Vip
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </div>
  </template>
