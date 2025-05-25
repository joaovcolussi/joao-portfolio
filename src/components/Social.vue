<template>
  <a :href="url" class="btn-link">
    <img :src="iconPath" :alt="`${name} Icon`" />
    {{ name }}
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  iconPath: {
    type: String,
    required: true
  }
});
</script>