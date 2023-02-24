
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="true"
    :router="true"
  >
    <el-sub-menu index="/">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Home</span>
      </template>
    </el-sub-menu>
    <el-menu-item index="/about">
      <el-icon><icon-menu /></el-icon>
      <template #title>about</template>
    </el-menu-item>
    <el-menu-item index="/table" >
      <el-icon><document /></el-icon>
      <template #title>table</template>
    </el-menu-item>
    <el-menu-item index="/data">
      <el-icon><setting /></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
  </el-menu>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
