<template>
  <div :class="wrapperClass">
    <ClientOnly>
      <swiper-container :class="[swiperContainerClass, 'h-full w-full']" ref="containerRef" :init="false">
        <swiper-slide>
          <img draggable="false" class="w-full rounded-xl p-1 h-[99%] object-cover" src="@\assets\images\index-slider\1.webp" alt="اسلایدر1">
        </swiper-slide>
        <swiper-slide>
          <img draggable="false" class="w-full rounded-xl p-1 h-[99%] object-cover" src="@\assets\images\index-slider\2.webp" alt="اسلایدر2">
        </swiper-slide>
      </swiper-container>
      <div class="w-full flex justify-between items-center absolute top-[46%]  px-2">
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
    wrapperClass?: string
    swiperContainerClass?: string
  }>(),
  {
    wrapperClass: 'h-[52vh] relative',
  }
)
const { wrapperClass, swiperContainerClass } = toRefs(props)
// data
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 5000,
  },
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
swiper-container{
  width: 100%;
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