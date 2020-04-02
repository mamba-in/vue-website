<template>
    <div class="creditor_transfer_wrap mt25">
      <el-row class="creditor_transfer_main">
        <el-col class="mt25 ft16 fwb">转让债权</el-col>
        <el-col class="mt55">
          <el-tabs class="pad_left10" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="可转让债权" name="first">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="product_name"
                  label="产品名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="year_rate"
                  label="预期年化率"
                  width="135">
                </el-table-column>
                <el-table-column
                  prop="rest_days"
                  label="剩余期限">
                </el-table-column>
                <el-table-column
                  prop="ready_back"
                  label="待收本息（元）">
                </el-table-column>
                <el-table-column
                  prop="next_repay"
                  label="下个还款日">
                </el-table-column>
                <el-table-column
                  prop="todo"
                  label="操作"
                  width="100">
                  <template class="cursor" slot-scope="props">
                    <el-button type="text" @click="dialogVisible = true" class="transferApply">申请转让</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-col :span="8" :offset="8" class="mt20 mb20">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="转让中债权" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="已转让债权" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="转让失败债权" name="fourth">角色管理</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <el-dialog v-model="dialogVisible" title="债权转让申请"  :visible.sync="dialogVisible" center width="640px">
        <el-col style="height: 2px; background: rgba(237, 237, 237, 1);"></el-col>
        <el-col class="mt20" v-for="transferApply in transferApplys" :key="transferApply.id">
          <span class="fl ft14 color_102">{{transferApply.productName}}</span>
          <span class="fr ft14 color_51 DIN">{{transferApply.nameValue}}</span>
        </el-col>
        <el-col class="mt25" style="height: 2px; background: rgba(237, 237, 237, 1);"></el-col>
        <el-col class="mt20" v-for="transferApply_part2 in transferApplys_part2" :key="transferApply_part2.id">
          <span class="fl ft14 color_102">{{transferApply_part2.priceName}}</span>
          <span class="fr ft14 color_51 DIN">{{transferApply_part2.priceNum}}</span>
        </el-col>
        <el-col class="ft12 color_119 mt30">提示：蜂硕散标债权转让收取投资本金2%的手续费，蜂硕计划产品在锁定期内债转收取投资本金*2%的手续费，
          锁定期外不收取手续费。</el-col>
        <span slot="footer" class="dialog-footer">
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <el-button style="width: 430px; height: 40px;margin-top: 100px; margin-bottom: 50px; background: rgba(230,168,69,1); border: none; color: #ffffff;" size="medium" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      name: "creditor_transfer",
      data(){
        return{
          activeName: 'first',
          tableData: [{
            product_name: '蜂硕计划20180130',
            year_rate: '8.00%',
            rest_days: '3/6',
            ready_back: '54.60',
            next_repay: '2018-02-20'
          },{
            product_name: '蜂硕计划20180130',
            year_rate: '8.00%',
            rest_days: '3/6',
            ready_back: '54.60',
            next_repay: '2018-02-20',
            todo: '申请转让'
          },{
            product_name: '蜂硕计划20180130',
            year_rate: '8.00%',
            rest_days: '3/6',
            ready_back: '54.60',
            next_repay: '2018-02-20',
            todo: '申请转让'
          }],
          dialogVisible: false,
          transferApplys:[
            {productName:'产品名称：', nameValue:'蜂硕金融20180209'},
            {productName:'产品名称：', nameValue:'蜂硕金融20180209'},
            {productName:'产品名称：', nameValue:'蜂硕金融20180209'},
            {productName:'产品名称：', nameValue:'蜂硕金融20180209'},
            {productName:'产品名称：', nameValue:'蜂硕金融20180209'},
          ],
          transferApplys_part2:[
            {priceName:'转让价格（元）',priceNum:'2000.00'},
            {priceName:'服务费（元）',priceNum:'12.00'},
          ]
        }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        go_transfer:function(){
          alert('in')
        }
      }
    }
</script>

<style scoped>
  .creditor_transfer_wrap{
    width: 888px;
    min-height: 576px;
    background:rgba(255,255,255,1);
  }
  .creditor_transfer_main{
    width: 848px;
    margin: auto;
  }
</style>
