<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <BlogHeader />
      </el-header>
      <el-container>
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <el-main>
          <nuxt-page />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import BlogHeader from "~~/components/BlogHeader/BlogHeader.vue";
</script>
<style lang="less">
.common-layout {
  .el-header {
    color: @primary-text-color;
    background-color: @primary-back-color;
  }
}
</style>
