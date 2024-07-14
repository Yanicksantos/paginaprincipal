  <template>
  <v-app id="inspire">
     <SpeedInsights/>
    <v-app-bar scroll-behavior="hide" scroll-threshold="10000" >
      
      <v-app-bar-title><nuxt-link to="/"  aria-label="Home"><v-img src="/logo.webp" max-width="150" alt="Logo Pred Engenharia"></v-img></nuxt-link></v-app-bar-title>
      <template #append>
        <section class="d-flex align-center ">
            <NavNavoptions />
            <NavNavusers />
            <NavLanguage />
            
            
        </section>
        
      </template>
    </v-app-bar>
    <main>
      <slot />
    </main>
  

    <section style="position: fixed; width: 50px; height: 50px; right:50px; bottom: 10%; z-index: 100000; ">
            <v-tooltip :text="$t('contact_us')">
              <template v-slot:activator="{ props }">
                <v-icon
                v-bind="props"
                icon="mdi-whatsapp"
                color="green-darken-4"
                size="50"
                class="hover-whatsapp"
                aria-label="Contate-nos no WhatsApp"
                ></v-icon>
              </template>
            </v-tooltip>
    </section>
      <Footer />

  </v-app>
</template>
<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>


<style>
    .hover-whatsaap:hover{
      cursor: pointer;
    }
</style>