<template>
    <button
      :class="[
        'cursor-pointer rounded-md transition-all   border-2 px-4 py-2 w-full text-center h-fit hover:shadow-md duration-300',
        Type == 'primary'
          ? 'bg-green-500 border-green-500 text-white hover:bg-green-500/80 hover:border-green-500/80 '
          : Type == 'secondary'
          ? ' border-green-500 text-green-500 hover:text-green-500/80 hover:border-green-500/80'
          : 'bg-green-500/20 border-green-500 text-green-500 hover:text-green-500/80 hover:border-green-500/80 hover:bg-primary/10',
      ]"
      @click="$emit('onClick')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    Type: {
      type: String,
    },
  });
  </script>