<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.key"
      @click.stop="toggle(item.key)"
      class="text-white text-lg mb-2 p-2 rounded-sm"
      :class="{
        'bg-blue-500': isActive(item.key),
        'cursor-pointer': hasChildren(item),
      }"
    >
      {{ item.text }}

      <MultipleLevelItem
        v-if="isActive(item.key) && hasChildren(item)"
        :items="item.children"
        class="ml-4"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';

defineProps({
  items: {
    type: Array as () => any[],
    required: true,
  },
});
const openId = ref<string | null>(null);

function hasChildren(item: any): boolean {
  return Boolean(item.children && item.children.length);
}

function toggle(id: string) {
  openId.value = openId.value === id ? null : id;
}
function isActive(id: string): boolean {
  return openId.value === id;
}
</script>
