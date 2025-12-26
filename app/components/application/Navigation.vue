<template>
  <ul class="flex gap-6 lg:w-[80%] w-[95%]">
    <li class="flex gap-2 cursor-pointer relative group">
      <span>
        <v-icon icon="mdi-menu"></v-icon>
      </span>
      <span>
        محصولات
      </span>
      <div class="flex gap-14 z-20 transition-all delay-100 duration-200 ease-in-out group-hover:visible  group-hover:scale-100  invisible  absolute scale-75  w-[40vw] h-[350px]  rounded-lg top-12 bg-white">
        <ul class="p-7">
          <li class="list-disc marker:text-logoColor">
            <p class="text-gray-500 hover:text-logoColor">قهوه</p>
          </li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه اسپرسو</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه ترک</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه دمی</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه فری</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه هورکا(هتل ، رستوران ، کافه)</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه عربیکا</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">قهوه روبوستا</li>
        </ul>
        <ul>
          <li class="list-disc marker:text-logoColor pt-7">
            <p class="text-gray-500 hover:text-logoColor">ابزار های تهیه قهوه</p>
          </li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">دستگاه قهوه دمی</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">اسپرسوساز خانگی</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">فرنچ پرس</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">موکاپات</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">لوازم جانبی قهوه</li>
        </ul>
        <ul>
          <li class="list-disc marker:text-logoColor pt-7">
            <p class="hover:text-logoColor">پودر‌های ترکیبی</p>
          </li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">پودرهای ترکیبی</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">کافی میکس</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">کافی میت</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">هات چاکلت</li>
          <li class="text-sm text-gray-500 hover:text-logoColor pt-3">چای ماسالا</li>
          <li class="list-disc marker:text-logoColor pt-3">
            <p>پودر‌های ترکیبی</p>
          </li>
        </ul>
      </div>
    </li>
    <li class="flex gap-5">
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">کاپریو</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">بلاگ</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">سوالات متداول</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">درباره‌ما</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">همکاری با ما</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">تماس با ما</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">آدرس شعبه‌ها</nuxt-link>
        <nuxt-link class="text-sm text-gray-500 hover:text-logoColor" to="#">طرز تهیه قهوه</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>

</script>

<style>

</style>