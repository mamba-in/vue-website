<template>
  <div class="returned_detail_wrap mt25">
    <el-row class="mt25 ft16 fwb" style="border-bottom: 1px solid rgba(230,230,230,1)"><el-col class="pad_left20 mt25 mb25">回款详情</el-col></el-row>
    <el-row class="returned_detail_main">
      <el-col class="mt20 ft12">2018-01回款详情：</el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "returned_detail"
    }
</script>

<style scoped>
  .returned_detail_wrap{
    width: 888px;
    min-height: 576px;
    background:rgba(255,255,255,1);
  }
  .returned_detail_main{
    width: 848px;
    margin: auto;
  }
</style>
