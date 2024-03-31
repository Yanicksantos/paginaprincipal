  <template>
  <v-app id="inspire">
    <v-app-bar scroll-behavior="hide" scroll-threshold="10000" >
      
      <v-app-bar-title><nuxt-link to="/"><v-img src="~/assets/logo.png" width="100"></v-img></nuxt-link></v-app-bar-title>
      <template #append>
        <div class="d-flex">
            <NavNavoptions />
            <navusers />
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none align-self-center"></v-app-bar-nav-icon>
        </div>
        
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    
    >
      <!--  -->
    </v-navigation-drawer>

    <slot />

    <div style="position: fixed; max-width: 50px; max-height: 20%; right:10px; bottom: 5%; z-index: 100000;">
            <v-tooltip text="Fale connosco">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-chat"  color="green-darken-4"></v-btn>
              </template>
            </v-tooltip>
      </div>
      <Footer />

  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
import navoptions from '~/components/Nav/navoptions.vue'
import Navusers from '~/components/Nav/Navusers.vue'

  const drawer = ref(false)
</script>

  components: { navoptions },
  components: { Navusers },