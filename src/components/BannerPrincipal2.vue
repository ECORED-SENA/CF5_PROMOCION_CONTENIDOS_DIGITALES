<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal")
        .imagen_flotante_1: img(src="@/assets/curso/portada/1.svg")
        .imagen_flotante_2: img(src="@/assets/curso/portada/2.svg")
        .imagen_flotante_3: img(src="@/assets/curso/portada/3.svg")
        .imagen_flotante_4: img(src="@/assets/curso/portada/4.svg")
        .imagen_flotante_5: img(src="@/assets/curso/portada/5.svg")
        .imagen_flotante_6: img(src="@/assets/curso/portada/6.svg")
        .imagen_flotante_7: img(src="@/assets/curso/portada/7.svg")


</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px !important
  z-index: 3
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center
  &__info
    display: flex
    flex-direction: column
    justify-content: center
  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em
      @media (max-width: $bp-max-xs)
        font-size: 2em
  &__descripcion
    margin-bottom: 20px
  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 4rem!important
  &__img
    //animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.imagen_flotante
  &_1
    animation: float3 3s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: 30%
    right: 34% !important
    z-index: 0

  &_2
    animation: float3 3.5s ease-in-out infinite alternate
    position: absolute
    width: 77px
    top: 43.3% !important
    right: 28.4%


  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: 50%
    right: 38.5% !important
    z-index: 0

  &_4
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 73px
    top: 66%
    right: 29.9% !important
    z-index: 0

  &_5
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 100px
    top: 42%
    right: 10% !important
    z-index: 0

  &_6
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 61px
    top: 26%
    right: 5% !important
    z-index: 0

  &_7
    animation: float3 3s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: 80%
    right: 14.5% !important
    z-index: 0

@keyframes float1
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0px)
@keyframes float2
  0%
    opacity: 0
  100%
    opacity: 1
@keyframes float3
  0%
    transform: translatex(20px)
  100%
    transform: translatex(0px)

@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
  .banner-principal__info
    padding-left: 15px  !important
  .imagen_flotante
    &_1, &_2, &_3, &_4, &_5, &_6, &_7
      display: none

@media (max-width: 1300px)
  .imagen_flotante
    &_1, &_2, &_3, &_4, &_5, &_6, &_7,
      margin-right: -4em
</style>
