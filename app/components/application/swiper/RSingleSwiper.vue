<template>
  <div :class="wrapperClass" >
    <ClientOnly>
      <swiper-container
        :grabCursor="grabCursor"
        :pagination="pagination"
        :class="swiperContainerClass"
        ref="containerRef"
        :init="init"
        :initialSlide="initialSlide"
        :autoplay="autoPlay"
        :loop="loop"
      >
        <template v-for="(image, i) in images">
          <swiper-slide :class="swiperItemClass">
            <slot name="swipper_item" :objectValue="image" :index="i">
              <img draggable="false" class="w-full h-full rounded-xl p-1 object-cover" :src="image.src" :alt="image.alt">
            </slot>
          </swiper-slide>
        </template>
      </swiper-container>
      <div v-if="hasControllersBtn" class="w-[98%] flex justify-between items-center absolute top-[46%] z-[2] px-4 left-[1%]">
        <button @click="swiper.next()" class="flex justify-center items-center w-10 h-10 bg-white rounded-full">
          <v-icon icon="mdi-chevron-right" class="w-6 h-6"></v-icon>
        </button>
        <!-- Go back one slide -->
        <button @click="swiper.prev()" class="flex justify-center items-center w-10 h-10 bg-white rounded-full">
          <v-icon icon="mdi-chevron-left" class="w-6 h-6"></v-icon>
        </button>
        <!-- Go forward one slide -->
      </div>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
// props
const props = withDefaults(
  defineProps<{
    wrapperClass?: string;
    swiperContainerClass?: string;
    images?: Record<string, any>[];
    slidesPerView?: number;
    centeredSlides?: boolean;
    spaceBetween?: number;
    initialSlide?: number;
    grabCursor?: boolean;
    hasControllersBtn?: boolean;
    pagination?: Record<string, any> | boolean;
    breakPoints?: Record<string, any>
    autoPlay?: Record<string, any>
    swiperItemClass?: string
    freeMode?: boolean
    init?: boolean
    loop?: boolean
  }>(),
  {
    hasControllersBtn: true
  }
)
const { wrapperClass, swiperContainerClass, breakPoints, loop, grabCursor, freeMode, spaceBetween } = toRefs(props)
// data
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  resistance: true,     // فعال کردن مقاومت (محدودیت کشیدن)
  resistanceRatio: 0.85, // نسبت مقاومت برای جلوگیری از حرکت زیاد
  freeMode: freeMode.value,

  breakpoints: breakPoints.value
  ,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
    
  },

})

onMounted(() => {
  console.log(swiper.instance)
})
</script>
<style lang="css">
swiper-container {
  width: 100%;
    direction: rtl;

}
swiper-slide {
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>