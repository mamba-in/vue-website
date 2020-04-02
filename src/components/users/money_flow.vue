<template>
    <div class="money_flow_wrap mt25">
      <el-row class="money_flow_main">
        <el-col class="mt25 ft16 fwb">资金流水记录</el-col>
        <el-col class="mt55">
          <el-tabs class="pad_left10" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
              <el-col class="mt25 pad_left15">
                <el-col :span="12" :offset="2" class="pad_left20" style="position: absolute;left: 40%;top:4.5%;z-index: 20;">
                  <span class="ft12 color_102">时间范围：</span>
                  <el-date-picker align="right" type="date" placeholder="选择日期" size="small" style="width: 124px;"></el-date-picker>
                  <span class="color_102 pad_left10 pad_right10">——</span>
                  <el-date-picker align="right" type="date" placeholder="选择日期" size="small" style="width: 124px;"></el-date-picker>
                </el-col>
                <el-tabs class="tabs_son" v-model="activeName_son" @tab-click="handleClick_son">
                  <el-tab-pane label="最近一周" name="1week">
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="trade_date"
                        label="交易时间"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="trade_type"
                        label="交易类型"
                        width="135">
                      </el-table-column>
                      <el-table-column
                        prop="income"
                        label="收入（元）">
                      </el-table-column>
                      <el-table-column
                        prop="pay_off"
                        label="支出（元）">
                      </el-table-column>
                      <el-table-column
                        prop="balance"
                        label="可用余额（元）">
                      </el-table-column>
                      <el-table-column
                        prop="remark"
                        label="备注"
                        width="100">
                      </el-table-column>
                    </el-table>
                    <el-col :span="8" :offset="8" class="mt20 mb20">
                      <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                      </el-pagination>
                    </el-col>
                  </el-tab-pane>
                  <el-tab-pane label="最近一个月" name="1month">最近一个月</el-tab-pane>
                  <el-tab-pane label="最近三个月" name="3month">最近三个月</el-tab-pane>
                </el-tabs>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="fourth">角色管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="fifth">角色管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="sixth">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="seventh">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "money_flow",
      data(){
        return{
          activeName: 'first',
          activeName_son:'1week',
          tableData: [{
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          }, {
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          },{
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          },{
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          },{
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          },{
            trade_date: '2016-05-02 13:12:11',
            trade_type: '蜂硕散标',
            income: '5000.00',
            pay_off: '5000,00',
            balance: '5000,00',
            remark: '投资金额'
          }]
        }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleClick_son(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
  .money_flow_wrap{
    width: 888px;
    min-height: 576px;
    background:rgba(255,255,255,1);
  }
  .money_flow_main{
    width: 848px;
    margin: auto;
  }

</style>
