<template>
  <el-card class="box-card mt25">
    <div slot="header" class="clearfix">
      <span class="ft16 fwb color_51">消息</span>
    </div>

  </el-card>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style scoped>

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 888px;
    border:none;
    box-shadow: none;
  }
</style>
