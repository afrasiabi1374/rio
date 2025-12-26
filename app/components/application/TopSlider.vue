<template>
    <RSingleSwiper
        wrapperClass="h-[52vh] relative px-5 relative"
        swiperContainerClass="h-full w-full"
        :images="imagesForSlider"
        :pagination="{
          clickable: true,
        }"
    ></RSingleSwiper>
</template>

<script lang="ts" setup>
import RSingleSwiper from './swiper/RSingleSwiper.vue';

const imagesForSlider = [
  {
    src:  new URL("@/assets/images/index-slider/1.webp", import.meta.url).href,
    alt: "اسلایدر1"
  },
  {
    src:  new URL("@/assets/images/index-slider/2.webp", import.meta.url).href,
    alt: "اسلایدر2"
  }
]
</script>

<style>

</style>