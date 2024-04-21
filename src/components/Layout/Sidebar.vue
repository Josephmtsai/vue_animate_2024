<template>
  <div
    ref="target"
    :class="{
      'animate-slide-in': props.isOpen,
      'animate-slide-out': !props.isOpen && !props.isMdScreen,
    }"
    class="fixed sm:relative z-30 h-full md:h-auto bg-gray-800 w-64 right-0"
  >
    <h2 class="text-white text-lg p-4">Menu</h2>
    <div class="p-5">
      <MultipleLevelItem :items="menuItems" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SideBar } from '../../constant/sidebar.constant';
import MultipleLevelItem from '../Common/MultipleLevelItem.vue';
const props = defineProps({
  isOpen: Boolean,
  isMdScreen: Boolean,
});
const target = ref(null);

const emit = defineEmits(['update:isOpen']);
onClickOutside(target, (event) => {
  if (!props.isMdScreen) {
    emit('update:isOpen', false);
  }
});

const menuItems = ref(SideBar);
</script>
