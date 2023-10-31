<template>
  <span
    class="flex gap-4 relative"
    :class="{
      'border-solid border-2 border-c_secondary': isDevMode,
    }"
  >
    <p
      v-if="isDevMode"
      class="absolute -bottom-10 py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
    >
      span > a
    </p>
    <a
      v-for="image in images"
      :key="image.id"
      :href="image.link ? image.link : ''"
      target="_blank"
      class="w-10 h-10 rounded-lg bg-c_primary p-2 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer"
    >
      <img class="max-h-full" :src="'./src/images/' + image.img" />
    </a>
  </span>
</template>

<script>
export default {
  props: {
    isDevMode: Boolean,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          img: "youtube.svg",
          link: "https://www.youtube.com/@ThePixify123", // Add your link here
        },
        {
          id: 2,
          img: "behance.svg",
          link: "https://www.behance.net/diogocardoso6",
        },
        {
          id: 3,
          img: "dribbble.svg",
          link: "https://dribbble.com/D_C_C",
        },
        {
          id: 4,
          img: "github.svg",
          link: "https://github.com/PsychoPeep",
        },
        {
          id: 5,
          img: "email.svg",
          link: "mailto:dioogoocardoosoo@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
</style>
