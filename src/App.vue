<script>
import StackSquare from "./components/StackSquare.vue";
import HomeText from "./components/HomeText.vue";
import NavBar from "./components/NavBar.vue";
import CalcPos from "./components/CalcPosition.vue";
import { useModeStore } from "./stores/ModeStore";
export default {
  setup() {
    const modeStore = useModeStore();
    return { modeStore };
  },

  components: {
    StackSquare,
    HomeText,
    NavBar,
    CalcPos,
  },
};
</script>

<template>
  <NavBar :isDevBool="modeStore.isDevActive"></NavBar>
  <main
    class="grid min-h-screen max-w-screen bg-c_bg p-c_bodyPad pt-16 | lg:place-content-center lg:grid-cols-2"
  >
    <!--  -->
    <div
      class="my-auto flex flex-col items-center py-4 | lg:items-end lg:p-12 lg:ml-auto"
    >
      <CalcPos
        :image="'./src/images/svgOne.svg'"
        :position="'absolute top-1/4 left-1/3'"
      ></CalcPos>
      <CalcPos
        :image="'./src/images/svgTwo.svg'"
        :position="'absolute top-3/4 right-1/3'"
      ></CalcPos>
      <CalcPos
        :image="'./src/images/svgSquares.svg'"
        :position="'absolute right-1/3 top-1/4'"
      ></CalcPos>

      <HomeText
        text="UI/UX DESIGNER"
        before-click="Enter Designer Mode"
        after-click="Leave Designer Mode"
        @my-method="modeStore.toggleDesign"
        :isDesignMode="modeStore.isDesignActive"
        :isDevMode="modeStore.isDevActive"
      >
      </HomeText>
      <HomeText
        text="DEVELOPER"
        before-click="Enter Developer Mode"
        after-click="Leave Developer Mode"
        @my-method="modeStore.toggleDev"
        :isDevMode="modeStore.isDevActive"
      ></HomeText>
    </div>
    <!--  -->
    <div
      class="grid grid-cols-4 gap-c_gap mx-auto | md:px-12 lg:w-fit lg:mx-0 lg:my-auto lg:-translate-y-8"
      :class="{
        'border-solid border-2 border-c_secondary': modeStore.isDevActive,
      }"
    >
      <p
        v-if="modeStore.isDevActive"
        class="absolute -bottom-10 py-1 px-2 mr-2 mt-2 bg-c_secondary text-c_white h-fit"
      >
        div &gt; {{ '<StackSquare />' }}
      </p>
      <div class="flex flex-col gap-c_gap translate-y-10">
        <StackSquare image="./src/images/html.png"></StackSquare>
        <StackSquare image="./src/images/figma.png"></StackSquare>
      </div>
      <div class="flex flex-col gap-c_gap">
        <StackSquare image="./src/images/css.png"></StackSquare>
        <StackSquare image="./src/images/js.png"></StackSquare>
        <StackSquare image="./src/images/illustrator.png"></StackSquare>
      </div>
      <div class="flex flex-col gap-c_gap translate-y-10">
        <StackSquare image="./src/images/tailwind.png"></StackSquare>
        <StackSquare image="./src/images/vue.png"></StackSquare>
        <StackSquare image="./src/images/premiere.png"></StackSquare>
      </div>
      <div class="flex flex-col gap-c_gap translate-y-20">
        <StackSquare image="./src/images/mongo.png"></StackSquare>
        <StackSquare image="./src/images/express.png"></StackSquare>
      </div>
    </div>
  </main>
</template>

<style scoped>
#svgOne:hover {
  cursor: grab;
}
</style>
