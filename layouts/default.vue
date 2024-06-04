  <template>
  <v-app id="inspire">
    <v-app-bar scroll-behavior="hide" scroll-threshold="10000" >
      
      <v-app-bar-title><nuxt-link to="/"><v-img src="/logo.webp" width="100"></v-img></nuxt-link></v-app-bar-title>
      <template #append>
        <div class="d-flex">
            <NavNavoptions />
            <NavNavusers />
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none align-self-center" v-if="false"></v-app-bar-nav-icon>
        </div>
        
      </template>
    </v-app-bar>
   <slot />

    <div style="position: fixed; width: 50px; height: 50px; right:50px; bottom: 10%; z-index: 100000; ">
            <v-tooltip text="Fale conosco">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" icon="mdi-whatsapp"  color="green-darken-4" size="50" class="hover-whatsaap"></v-icon>
              </template>
            </v-tooltip>
      </div>
      <Footer />

  </v-app>
</template>



<style>
    .hover-whatsaap:hover{
      cursor: pointer;
    }
</style>