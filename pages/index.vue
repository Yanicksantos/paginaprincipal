<template>
    <div class="h-100  " style="overflow-x: hidden; background-color: #838595; ">
        <main
        style="position: relative;"
        >
            <section aria-labelledby="Marca D'água - Pred engenharia">
                <MarcaPred /> 
            </section>
            <section aria-labelledby="banner - Pred Engenharia">
                <Banner />
            </section>
            <section aria-labelledby="MCI - Pred Engenharia">
                <MciPrincipal /> 
            </section>
            <section aria-labelledby="Serviços - Pred Engenharia">
                <ServicosPrincipal />
            </section>
            <section aria-labelledby="Visão - Pred Engenharia">
                <VisaoPrincipal />
            </section>
            <section aria-labelledby="Parcerias - Pred Engenharia">
                <ParceriasPrincipal />
            </section>               
            <section
            aria-labelledby="História e Sobre - Pred Engenharia"
            style=" background-image: url('/pred_site_04.webp'); background-size: cover; background-position: center center;"
            >
                <historia  style="position: relative; z-index: 10;"/>
                <SobrePagePrincipal style="position: relative; z-index: 10;"/>
            </section>
            <section aria-labelledby="História e Sobre - Pred Engenharia">
                <FormularioPrincipal />
            </section>
            
        </main>
    </div>
</template>

<style>
    .montserrat-font {
    font-family: 'Montserrat', sans-serif;
    }

    .Roboto-font {
        font-family: 'Roboto', sans-serif;
    }

    .gradiente{
        background-image: linear-gradient(to right, rgba(0,0,128,1),rgba(0,0,128,1), rgba(29,35,93,1), rgba(29,35,93,.8), transparent, transparent);
    }
</style>