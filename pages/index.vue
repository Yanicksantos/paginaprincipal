<template>
    <div class="h-100  " style="overflow-x: hidden; background-color: #838595; ">
        <div  
        style="position: relative;"
        >
            <MarcaPred />          
            <Banner />
            <MciPrincipal /> 
            <ServicosPrincipal />
            <VisaoPrincipal />
            <ParceriasPrincipal />
            <div
            style=" background-image: url('/pred_site_04.webp'); background-size: cover; background-position: center center;"
            >
                <historia  style="position: relative; z-index: 10;"/>
                <SobrePagePrincipal style="position: relative; z-index: 10;"/>
            </div>
            <FormularioPrincipal />
        </div>
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