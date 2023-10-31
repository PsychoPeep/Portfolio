<template>
  <div
    class="bg-c_white rounded-c_br shadow-c_shadow flex justify-center items-center w-16 h-16 p-3 hover:scale-110 transition-transform cursor-pointer | md:w-28 md:h-28 md:p-5 | lg:w-20 lg:h-20 lg:p-4 | xl:w-24 xl:h-24 xl:p-5"
  >
    <img class="max-h-full" :src="image" draggable="false" />
  </div>
</template>

<script>
export default {
  props: {
    image: String,
  },
};
</script>