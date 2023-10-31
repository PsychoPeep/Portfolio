<template>
  <span
    @mouseenter="showEnterMode"
    @mouseleave="showEnterMode"
    class="relative inline-flex"
  >
    <p
      v-if="isDevMode"
      class="py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
    >
      h2
    </p>
    <h2
      class="text-c_primary w-fit"
      :class="{
        'border-solid border-2 border-c_secondary': isDevMode,
      }"
      style="font-size: var(--homeText)"
    >
      {{ text }}
    </h2>
    <Transition>
      <p
        v-if="isShown"
        @click="callMethod"
        class="py-1 px-2 bg-c_secondary text-c_white absolute top-1/2 right-0 -translate-y-1/2 select-none cursor-pointer"
      >
        {{ !isDevMode ? beforeClick : afterClick }}
        <!-- change isDevMode -->
      </p>
    </Transition>
  </span>
</template>


<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  props: {
    text: String,
    beforeClick: String,
    afterClick: String,
    isDesignMode: Boolean,
    isDevMode: Boolean,
  },
  methods: {
    showEnterMode() {
      this.isShown = !this.isShown;
    },
    callMethod() {
      this.$emit("myMethod");
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>