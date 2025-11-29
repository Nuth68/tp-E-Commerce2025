<template>
  <div class="menu-bar">
    <!-- Title -->
    <div class="menu-title">
      {{ NameMenu }}
    </div>

    <!-- Groups List -->
    <ul class="menu-groups">
      <li
        v-for="group in groups"
        :key="group"
        @click="handleGroupClick(group)"
        :class="['menu-item', activeGroup === group ? 'active' : '']"
      >
        {{ group }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MenuBar',

  props: {
    NameMenu: {
      type: String,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
  },

  emits: ['group-selected'],

  setup(props, { emit }) {
    const activeGroup = ref('Group All')

    watch(
      () => props.groups,
      (newVal) => {
        if (newVal && newVal.length > 0 && activeGroup.value === 'Group All') {
          activeGroup.value = newVal[0]
          emit('group-selected', activeGroup.value)
        }
      },
      { immediate: true },
    )

    const handleGroupClick = (group) => {
      activeGroup.value = group
      emit('group-selected', group)
    }

    return {
      activeGroup,
      handleGroupClick,
    }
  },
})
</script>

<style scoped>
.menu-bar {
  width: 100%;
  height: 56px; /* h-14 */
  display: flex;
  align-items: center;         /* items-center */
  justify-content: space-between; /* justify-between */
  padding: 0 16px;             /* px-4 */
  box-shadow: 0 1px 2px rgba(0,0,0,0.1); /* shadow-sm */
  background: #fff;
}

.menu-title {
  font-size: 18px;  /* text-lg */
  font-weight: 600; /* font-semibold */
  color: #1f2937;   /* text-gray-800 */
}

.menu-groups {
  display: flex;
  gap: 24px; /* space-x-6 */
  margin: 0;
  padding: 0;
}

.menu-item {
  list-style: none;
  cursor: pointer;
  padding-bottom: 4px;
  color: #4b5563; /* text-gray-600 */
  transition: all 0.2s ease;
}

.menu-item:hover {
  color: #111827; /* hover:text-gray-900 */
}

.menu-item.active {
  color: #059669; /* text-green-600 */
  font-weight: bold;
  border-bottom: 2px solid #059669; /* border-b-2 border-green-600 */
}
.menu-bar{
  margin-bottom: 30px;
}
</style>
