<template>
  <div id="vditor"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";
const vditor = ref<Vditor | null>(null);
onMounted(() => {
  window.Vditor = Vditor;
  vditor.value = new Vditor("vditor", {
    after: () => {
      debugger;
      vditor.value!.setValue(
        "Vue Composition API + Vditor + TypeScript Minimal Example"
      );
    },
  });
});
</script>
