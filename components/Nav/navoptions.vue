<template>
    <div class="d-none d-md-flex">
        <v-list class="d-flex">
            <v-list-item>
                <v-btn
                    variant="outlined"
                    width="100%"
                    to="/sobre"
                    class="text-caption"
                >
                    {{ $t('about_us') }}
                </v-btn>
            </v-list-item>

            <v-menu>
                <template #activator="{ props:menu }">
                    <v-list-item>
                        <v-btn
                            variant="outlined"
                            width="100%"
                            v-bind="menu"
                            append-icon="mdi-chevron-down"
                            class="text-caption"
                        >
                            {{ $t('our_services') }}
                        </v-btn>
                    </v-list-item>
                </template>

                <v-list density="compact">
                    <v-list-item>
                        <v-btn
                            to="/servicos/engenharia-manutencao-e-confiabilidade"
                            class="w-100 text-caption"
                            variant="tonal"
                            size="small"
                        >
                            {{ $t('engineering_maintenance_reliability_services') }}
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                            to="/servicos/inspecoes"
                            class="w-100 text-caption"
                            variant="tonal"
                            size="small"
                        >
                            {{ $t('technical_inspection_services') }}
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                            to="/servicos/s3i"
                            class="w-100 text-caption"
                            variant="tonal"
                            size="small"
                        >
                            {{ $t('s3i_system') }}
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                            to="/servicos/sft"
                            class="w-100 text-caption"
                            variant="tonal"
                            size="small"
                        >
                            {{ $t('sft_system') }}
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-list-item>
                <v-btn
                    variant="outlined"
                    width="100%"
                    href="https://suporte.s3i.com.br/blog/"
                    class="text-caption"
                >
                    {{ $t('blog') }}
                </v-btn>
            </v-list-item>

            <v-list-item>
                <NavContato/>
            </v-list-item>
        </v-list>
    </div>
</template>
