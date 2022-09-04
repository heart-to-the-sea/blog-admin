<template>
  <div>12344</div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { getUserInfoAll } from "~/api/userInfo";
onMounted(() => {
  getUserInfoAll();
});
</script>
