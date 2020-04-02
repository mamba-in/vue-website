<template>
    <div class="returned_money_wrap mt25">
      <el-row class="mt25 ft16 fwb" style="border-bottom: 1px solid rgba(230,230,230,1)"><el-col class="pad_left20 mt25 mb25">回款计划</el-col></el-row>
      <el-row class="returned_money_main">
        <el-col class="mt25">
          <el-tabs class="pad_left10" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="total_data">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="returned_date"
                  label="回款日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="returned_yes"
                  label="已回款（元）"
                  width="135">
                </el-table-column>
                <el-table-column
                  prop="returned_no"
                  label="未回款（元）">
                </el-table-column>
                <el-table-column
                  prop="deserve_total"
                  label="应收总额（元）">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态">
                </el-table-column>
              </el-table>
              <el-col :span="8" :offset="7" class="mt20 mb20">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="2018年" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="2017年" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="2016年" name="fourth">角色管理</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "returned_money",
      data(){
        return{
          activeName: 'total_data',
          tableData: [{
            returned_date: '2016-05',
            returned_yes: '500.00',
            returned_no: '5000.00',
            deserve_total: '5000,00',
            status: '查看详情'
          }, {
            returned_date: '2016-05',
            returned_yes: '500.00',
            returned_no: '5000.00',
            deserve_total: '5000,00',
            status: '查看详情'
          },{
            returned_date: '2016-05',
            returned_yes: '500.00',
            returned_no: '5000.00',
            deserve_total: '5000,00',
            status: '查看详情'
          }]
        }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
      }

    }
</script>

<style scoped>
  .returned_money_wrap{
    width: 888px;
    min-height: 576px;
    background:rgba(255,255,255,1);
  }
  .returned_money_main{
    width: 848px;
    margin: auto;
  }
</style>
