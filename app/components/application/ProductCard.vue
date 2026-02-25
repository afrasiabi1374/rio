<template>
    <div 
    class=" 
    inline-flex 
    flex-col 
    items-center 
    justify-end
    gap-2 
    border-gray-300 
    h-[444px]  
    rounded-md
    shadow-[0px_2px_1px_rgba(0,0,0,0.1),0px_2px_6px_rgba(0,0,0,0.2)]
    ">
    <div 
    class="
    border
    rounded-md
    w-[90%]
    h-[272px]
    "
    >
      <img 
      class="
      w-[60%]
      h-[200px]  
      m-auto
      object-cover 
      object-center
      p-1
      " 
      draggable="false" 
      :src="cardVales.src" 
      />
      <v-icon class="cursor-pointer pr-3" :size="20" icon="mdi-cart-plus"></v-icon>
    </div>
    <div 
      class="
      flex
      flex-col
      gap-4
      h-[118px] 
      w-full
      "
    >
    <div class="
      flex 
      flex-col 
      h-full
      gap-3
      px-6
      "
    >
      <h6 
      class="
      text-sm
      font-medium
      text-right
      font-['vazir']
      ">
        {{ cardVales.alt }}
      </h6>
      <small 
      class="
      text-xs 
      font-['vazir'] 
      font-light
      "
      >
        {{ cardVales.fa_category }}
      </small>
    </div>
      <p 
      class="
      text-lg 
      font-['vazir'] 
      font-normal 
      text-left
      pl-2
      "
      >
        {{ formatToman(cardVales.price) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    cardVales: Record<string, any>
  }>(),
  {

  }
)
</script>

<style>

</style>