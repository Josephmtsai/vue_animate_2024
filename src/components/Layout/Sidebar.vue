<template>
  <div
    ref="target"
    :class="{
      'animate-slide-in': props.isOpen && !props.isMdScreen,
      'animate-slide-out': !props.isOpen && !props.isMdScreen,
      'sm:relative': props.isMdScreen,
      fixed: !props.isMdScreen,
    }"
    class="z-30 h-full md:h-auto bg-gray-800 w-64 right-0"
  >
    <h2 class="text-white text-lg p-4">Menu</h2>
    <div class="p-5">
      <MultipleLevelItem :items="menuItems" @select-item="setMenuStore" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SideBar } from '../../constant/sidebar.constant';
import MultipleLevelItem from '../Common/MultipleLevelItem.vue';
import { useMenuStore } from '../../store/menu';

const menuStore = useMenuStore();
const props = defineProps({
  isOpen: Boolean,
  isMdScreen: Boolean,
});
const target = ref(null);
menuStore.loadFromStorage();
const emit = defineEmits(['close']);
onClickOutside(target, (event) => {
  if (!props.isMdScreen) {
    emit('close');
  }
});

function setMenuStore(selectList: any) {
  menuStore.setMenuStore(flattenKeys(selectList));
}

function flattenKeys(obj: any) {
  let keys: string[] = [];

  function extractKeys(obj: any) {
    if (obj != null && typeof obj === 'object') {
      keys.push(obj.key);
      if (obj.children) {
        extractKeys(obj.children);
      }
    }
  }

  extractKeys(obj);
  return keys;
}
const menuItems = ref(SideBar);
</script>
