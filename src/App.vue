<template>
  <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row flex-1">
    <div v-if="!isMdScreen" class="p-4 flex justify-end">
      <i
        class="pi pi-bars text-3xl cursor-pointer"
        @click="isOpen = !isOpen"
      ></i>
    </div>

    <!-- Main content area -->
    <div class="flex-1 p-4 mt-10">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="n in 9"
          :key="n"
          :class="{
            'h-24 border-2 border-black box flex justify-center items-center relative': true,
            'animate-blink': isBlinking(n),
          }"
          :ref="setGridItemRef"
        >
          <div
            v-if="n === 1"
            ref="circle"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10"
          >
            0
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar
      v-if="isOpen || isMdScreen"
      :isMdScreen="isMdScreen"
      :isOpen="isOpen"
      @update:isOpen="isOpen = false"
    />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Layout/Sidebar.vue';
import { ref, onMounted, nextTick } from 'vue';
import { useMediaQuery, useResizeObserver } from '@vueuse/core';
import { gsap } from 'gsap';
const isOpen = ref(false);
const isMdScreen = useMediaQuery('(min-width: 568px)');
function isBlinking(index: number) {
  return [3, 5, 9].includes(index);
}
function isCorner(index: number) {
  return [0, 2, 6, 8].includes(index);
}
const circle = ref(null);
const gridItem = ref(null);
const setGridItemRef = (el) => {
  if (el) gridItem.value = el;
};

onMounted(async () => {
  await nextTick();
  if (gridItem.value) {
    useResizeObserver(gridItem, ([entry]) => {
      const gridWidth = entry.contentRect.width;
      animate(gridWidth);
    });
  }
});
function animate(gridWidth: number) {
  gsap.to(circle.value, {
    x: gridWidth * 2,
    duration: 2,
    ease: 'none',
    onComplete: () => {
      gsap.to(circle.value, {
        x: gridWidth * 3,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        onComplete: () => {
          gsap.set(circle.value, { x: '0%', opacity: 1 });
          animate(gridWidth);
        },
      });
    },
  });
}
</script>
<style scoped>
.box {
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(113, 81, 95, 1) 81%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
