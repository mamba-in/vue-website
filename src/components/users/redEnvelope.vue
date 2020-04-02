<template>
  <el-card class="box-card mt25">
    <div slot="header" class="clearfix">
      <span class="ft16 fwb color_51">我的红包</span>
      <span class="fr ft14 color_main cursor">使用规则>></span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的红包" name="first">
        <el-col :span="11">
          <div  style="background: url(../../assets/img/common/red_normal.png);"></div>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="已使用" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="未使用" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
  export default {
    name: "redEnvelope",
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
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
    min-height: 605px;
    border:none;
    box-shadow: none;
    border-radius: 0;
  }
</style>
