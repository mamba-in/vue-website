<template>
    <el-row>
      <div class="partnerWrap width_per100">
        <div class="partner width_per60" style="height: 200px;">
          <el-row class="mt45">
            <el-col style="font-size: 18px;">合作伙伴</el-col>
          </el-row>
          <el-row :gutter="35" class="mt35">
            <el-col :span="4" v-for="partner in partners" :key="partner.id"><img :src="partner.imgUrl" style="width: 160px;height: 70px;border: 1px solid #cccccc;"></el-col>
          </el-row>
        </div>
      </div>
    </el-row>
</template>

<script>
    export default {
        name: "partner",
      data(){
          return{
            partners:[
              {imgUrl:require('../assets/img/index/fyjt.png')},
              {imgUrl:require('../assets/img/index/aly.png')},
              {imgUrl:require('../assets/img/index/zgyl.png')},
              {imgUrl:require('../assets/img/index/tdkj.png')},
              {imgUrl:require('../assets/img/index/hcby.png')},
              {imgUrl:require('../assets/img/index/wdtx.png')}
            ]
          }
      }
    }
</script>

<style scoped>

</style>
