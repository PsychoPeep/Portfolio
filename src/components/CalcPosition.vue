<script>
import { useModeStore } from "../stores/ModeStore";
export default {
  setup() {
    const modeStore = useModeStore();
    return { modeStore };
  },
  mounted() {
    this.updateDistance();
    this.calculateLinePositions();
    window.addEventListener("resize", this.updateDistance);

    /* Get middle of Images */
    const imageElement = this.$refs.imageElement;
    imageElement.onload = () => {
      const imageElementWidth = imageElement.clientWidth;
      this.middleY = imageElementWidth / 2;
      const imageElementHeight = imageElement.clientHeight;
      this.middleX = imageElementHeight / 2;

      /* Get Left Distance */
      const rect = imageElement.getBoundingClientRect();
      this.distanceLeft = rect.left;
      /* Get Top Distance */
      this.distanceTop = rect.top;
    };
  },
  data() {
    return {
      middleY: 0,
      middleX: 0,
      distanceLeft: 0,
      distanceTop: 0,
      lineX1: 0,
      lineY1: 0,
      lineX2: 0,
      lineY2: 0,
    };
  },
  props: {
    image: String,
    position: String,
  },
  methods: {
    updateDistance() {
      const imageElement = this.$refs.imageElement;
      const rect = imageElement.getBoundingClientRect();
      this.distanceLeft = rect.left;
      this.distanceTop = rect.top;
    },
    calculateLinePositions() {
      this.lineX1 = this.middleY + this.distanceLeft;
      this.lineY1 = this.distanceTop;
      this.lineX2 = this.distanceLeft;
      this.lineY2 = 0;
    },
  },
  computed: {
    roundValue() {
      return (value) => Math.round(value);
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateDistance);
  },
};
</script>

<template>
  <!-- SVG -->
  <div
    :class="{
      [position]: true,
      'border-solid border-2 border-c_secondary': modeStore.isDevActive,
      'border-solid border-2 border-c_primary': modeStore.isDesignActive,
    }"
  >
    <img id="svgOne" ref="imageElement" :src="image" />
    <p
      v-if="modeStore.isDesignActive"
      class="absolute -top-10 py-1 px-2 bg-c_secondary text-c_white h-fit z-50"
      :style="{ left: -distanceLeft / 2 + 'px' }"
    >
      {{ roundValue(distanceLeft) + " px" }}
    </p>
    <p
      v-if="modeStore.isDesignActive"
      class="absolute -left-7 py-1 px-2 bg-c_secondary text-c_white h-fit z-50"
      :style="{ top: -distanceTop / 2 + 'px' }"
    >
      {{ roundValue(distanceTop) + " px" }}
    </p>

    <p
      v-if="modeStore.isDevActive"
      class="absolute -bottom-10 py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
    >
      img
    </p>
  </div>

  <!-- Lines -->
  <div v-if="modeStore.isDesignActive">
    <svg width="100%" height="100%" class="absolute">
      <line
        :x1="lineX1"
        :y1="lineY1"
        :x2="lineX2"
        :y2="lineY2"
        style="
          stroke: rgb(242, 72, 34);
          stroke-width: 2;
          stroke-dasharray: 3, 4;
        "
      />
    </svg>
    <svg width="100%" height="100%" class="absolute">
      <line
        :x1="0"
        :y1="distanceTop + middleX"
        :x2="distanceLeft"
        :y2="distanceTop + middleX"
        style="
          stroke: rgb(242, 72, 34);
          stroke-width: 2;
          stroke-dasharray: 3, 4;
        "
      />
    </svg>
  </div>
</template>

