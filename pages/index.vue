<script setup lang="ts">
import { ref } from "vue";
const items = ref([]);

const fetchData = async () => {
  try {
    const res = await axios.get("/posts");
    items.value = res.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div v-if="items.length > 0">
    {{ items }}
  </div>
</template>
