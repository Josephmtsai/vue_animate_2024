<template>
  <div ref="target" class="relative">
    <div
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed h-full top-0 right-0 bg-gray-800 w-64 transition-transform duration-300 z-50"
    >
      <h2 class="text-white text-lg p-4">Menu</h2>
      <div class="p-5">
        <MultipleLevelItem :items="menuItems" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SideBar } from '../../constant/sidebar.constant';
import MultipleLevelItem from '../Common/MultipleLevelItem.vue';
defineProps({
  isOpen: Boolean,
});
const target = ref(null);

const emit = defineEmits(['update:isOpen']);
onClickOutside(target, (event) => emit('update:isOpen', false));

const menuItems = ref(SideBar);
</script>
