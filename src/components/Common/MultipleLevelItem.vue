<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.key"
      @click.stop="toggle(item)"
      class="text-white text-lg mb-2 p-2 rounded-sm"
      :class="{
        'bg-blue-500': isActive(item.key),
        'cursor-pointer': hasChildren(item),
      }"
    >
      <span :class="{ 'text-yellow-500': isActive(item.key) }">
        {{ item.text }}
      </span>

      <MultipleLevelItem
        v-if="isActive(item.key) && hasChildren(item)"
        :items="item.children"
        class="ml-4"
        :level="level + 1"
        @select-item="handlePopUpEvent"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useMenuStore } from '../../store/menu';
const menuStore = useMenuStore();
const props = defineProps({
  items: {
    type: Array as () => any[],
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});
const emits = defineEmits(['selectItem']);
const openId = ref<string | null>(null);

function hasChildren(item: any): boolean {
  return Boolean(item.children && item.children.length);
}

function toggle(item: any) {
  openId.value = openId.value === item.key ? null : item.key;
  emits('selectItem', { key: item.key });
}
function isActive(id: string): boolean {
  return menuStore.isMenuActive(id);
}

function handlePopUpEvent(child: any) {
  emits('selectItem', { key: openId.value, children: child });
}
</script>
