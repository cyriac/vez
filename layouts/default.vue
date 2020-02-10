<template>
  <div>
    <app-header />
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  components: { appHeader }
}
</script>

<style>
body {
  margin: 0 !important;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
