<template>
  <div class="min-h-screen bg-gray-100">
    <div v-if="!isMDScreen">
      <button @click="isOpen = !isOpen" class="p-4 absolute top-0 right-0">
        test
      </button>
    </div>
    <Sidebar :isOpen="isOpen || isMDScreen" @update:isOpen="isOpen = false" />
    <div class="p-8">
      <h1 class="text-xl font-bold">Welcome to the Dashboard</h1>
      <!-- 其他内容 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Layout/Sidebar.vue';
import { ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
const isOpen = ref(false);
const isMDScreen = useMediaQuery('(min-width: 568px)');
</script>

<style></style>
