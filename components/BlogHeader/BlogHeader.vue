<template>
  <div style="height: 100%" class="header-box">
    <div class="logo"></div>
    <div class="header-list-box">
      <div class="header-list" ref="headerListBox">
        <template v-for="item of list">
          <div
            :class="[
              'header-node',
              actionValue.id === item.id ? 'header-node-active' : '',
            ]"
            @click="handleSelect(item)"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <el-icon :size="20" class="scroll-left-btn" @click="leftScroll">
        <ArrowLeftBold />
      </el-icon>
      <el-icon :size="20" class="scroll-right-btn" @click="rightScroll">
        <ArrowRightBold />
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useScroll } from "./useScroll";
import { useSelect } from "./useSelect";
import { ref } from "vue";
const list = [
  {
    id: 1,
    name: "书籍管理",
    path: "/book",
    type: 1,
    children: {},
  },
  {
    id: 2,
    name: "个人中心",
    path: "/",
    type: 1,
    children: {},
  },
  {
    id: 3,
    name: "个人作品",
    path: "/",
    type: 1,
    children: {},
  },
  {
    id: 4,
    name: "网站设置",
    path: "/",
    type: 1,
    children: {},
  },
  {
    id: 5,
    name: "配置管理",
    path: "/",
    type: 1,
    children: {},
  },
];
const headerListBox = ref<HTMLDivElement>(null);
const { leftScroll, rightScroll } = useScroll(headerListBox);
const { handleSelect, actionValue } = useSelect();
</script>
<style lang="less">
.header-box {
  width: 100%;
  display: flex;
  position: relative;
}
.logo {
  width: 200px;
  height: 100%;
  background-color: inherit;
}
.header-list-box {
  padding: 0 20px;
  width: 60vw;
  height: 100%;
  overflow-x: auto;
  position: relative;
  .scroll-left-btn {
    cursor: pointer;
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: @primary-back-color;
  }
  .scroll-right-btn {
    cursor: pointer;
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: @primary-back-color;
  }
}
.header-list {
  height: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: @primary-text-color;
  }
  .header-node {
    flex-shrink: 0;
    max-width: 200px;
    height: 100%;
    line-height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: @primary-back-color;
      background-color: @primary-text-color;
    }
  }
  .header-node-active {
    color: @primary-back-color;
    background-color: @primary-text-color;
  }
}
</style>
