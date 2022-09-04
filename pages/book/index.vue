<template>
  <div><BlogMarkdown /></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { getUserInfoAll } from "~/api/userInfo";
import BlogMarkdown from "~~/components/markdown/BlogMarkdown.vue";

onMounted(() => {
  getUserInfoAll();
});
</script>
