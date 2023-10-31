<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Buttons from "./Buttons.vue";

export default {
  components: {
    MenuIcon,
    Buttons,
  },
  props: {
    isDevBool: Boolean,
  },
};
</script>

<template>
  <nav
    class="z-50 h-16 w-full px-c_bodyPad fixed top-0 bg-transparent flex justify-between items-center sm:flex-row-reverse"
  >
    <Buttons class="hidden sm:flex" :isDevMode="isDevBool"></Buttons>
    <MenuIcon class="block sm:hidden" :size="24" fillColor="#4831D4" />
    <span class="flex justify-start items-center gap-2">
      <span
        :class="{
          ' border-solid border-2 border-c_secondary': isDevBool,
        }"
      >
        <img
          class="h-8 w-8 bg-c_primary rounded-lg"
          src="../images/pfp.png"
          alt=""
        />
        <p
          v-if="isDevBool"
          class="absolute -bottom-6 py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
        >
          img
        </p>
      </span>

      <span class="relative">
        <p
          class="text-c_primary"
          :class="{
            'border-solid border-2 border-c_secondary': isDevBool,
          }"
          style="font-size: var(--logoText)"
        >
          DIOGO CARDOSO
        </p>
        <p
          v-if="isDevBool"
          class="absolute -bottom-10 py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
        >
          p
        </p>
      </span>
    </span>
  </nav>
</template>
