<template >
    <div class="pt-14">
        <!-- BANNER PRINCIPAL -->
         <section aria-label="Banner Página Sobre - Pred Engenharia">
            <SobreBanner />
         </section>
       

        <!--conteudo-->
        <v-main class="pa-0">
            <section class="pa-4">
                <div class="d-flex mb-4 pa-2" style="max-height: 400px;">
                    <div style="width: 5px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4 d-sm-none"></div>
                    <p class="text-body-2 mx-auto my-4 font-weight-bold">{{ $t('main_content') }}
                        <span class="text-body-1">{{ $t('main_areas') }}</span>
                    </p>
                </div>
                <v-img src="/sobre/2.webp" class="rounded mx-auto" max-width="600" alt="Imagem representativa corporativa - Pred Engenharia"></v-img>
            </section>

            <section class="bg-indigo-darken-4 mt-2 py-2 rounded-ts-xl">
                <v-container>
                    <p class="text-body-2 text-md-body-1 py-2 px-4">{{ $t('intro_paragraph') }}</p>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-body-1">{{ $t('technical_services_area') }}</span> {{ $t('technical_services_description') }}
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-body-1">{{ $t('it_area') }}</span> {{ $t('it_description') }}
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class=" text-body-1">{{ $t('industrial_automation_area') }}</span> {{ $t('industrial_automation_description') }}
                    </v-list-item>
                </v-container>
            </section>

            <section class="bg-indigo-darken-4 d-flex align-center flex-column h-100" 
                style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;"
            >
                <aside style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                    <div class="w-100">
                        <v-container>
                            <div style="height: 1px; background-image: linear-gradient(to left, transparent,white, transparent);" class="mb-6 mx-auto w-75"></div>
                            <iframe class="w-100 rounded d-sm-none" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen aria-label="Vídeo do YouTube - Pred Engenharia"></iframe>
                            <iframe class="w-50 mx-auto rounded d-none d-sm-block" height="300" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen aria-label="Vídeo do YouTube - Pred Engenharia"></iframe>
                        </v-container>
                    </div>
                </aside>
            </section>
            <section aria-label="Formulário - Pred Engenharia">
                <FormularioFormulariopages />
            </section>
            
        </v-main>
    </div>
</template>

