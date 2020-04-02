<template>
<div class="tixian mt25">
  <div class="tixian_top">提现</div>
  <div class="tixian_bottom">
    <div class="tixian_bottom_com1">
      <div class="tixian_bottom_com1_center">
        <div class="com1_kong"></div>
        <div class="com1_user_yue">账户余额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="money" v-html="parentWithDraw[0].amount"></span>&nbsp;&nbsp;元</div>
        <div class="com1_tixian_jine">
          <div class="com1_tixian_jine_left">
            提现金额
        </div>
          <div class="com1_tixian_jine_right">
            <input type="text" placeholder="请输入提现金额" v-model="amount">
          </div>
        </div>
        <div class="com1_shouxu">注：手续费2元/笔，预计提现T+1到账</div>
        <div class="com1_queren_tijiao">
          <div class="btn_tijiao color_wt" @click="withDrawOk">确认提现</div>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>是否前往上海银行进行提现？</span>
            <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click.native="goShangHaiBank">确 定</el-button>
            </span>
            <form id="form" action="https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway" method="post" v-show="true">
              <input type="text" name="serviceName" v-model="serviceName"/><br>
              <input type="text" name="platformNo" v-model="platformNo"/><br>
              <input type="text" name="keySerial" v-model="keySerial"/><br>
              <input type="text" name="userDevice" v-model="userDevice"/><br>
              <textarea name="sign" v-model="sign"></textarea><br>
              <textarea name="reqData" v-model="reqData"></textarea><br>
            </form>
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="tixian_bottom_com2">
      <div class="tixian_bottom_com2_center">
        <div class="guizi">温馨提示：</div>
        <div class="guizi_nav xs_top">1、提现手续费2元每笔，提现预计T+1到账，具体以实际到账时间为准。</div>
        <div class="guizi_nav">2、您的账户资金将通过上海银行存管系统进行提现，如果提现金额没有及时到账，请联系客服：400-022-9500。</div>
        <div class="guizi_nav">3、如果超出提现限额，可以拆分整体金额多次提现。</div>
        <div class="guizi_nav">4、请使用借记卡充值，信用卡无法充值提现，禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
  import  VueResource  from 'vue-resource'
  Vue.use(VueResource);
  var PAGE;
    export default {
      props:['parentWithDraw'],
      name: "tixian",
      data(){
        return{
          dialogVisible: false,
          amount:'',
          serviceName:'',
          platformNo:'',
          keySerial:'',
          userDevice:'',
          sign:'',
          reqData:'',
        }
      },
      created:function(){
        PAGE = this;
      },
      methods:{
        withDrawOk:function(){
          console.log(PAGE.amount);
          Vue.http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/withdraw',
            {
              'amount': PAGE.amount,
              'withdrawType' : 'NORMAL'
            },
            {
              headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'token':PAGE.parentWithDraw[1].token
              }
            },
            Vue.http.options.emulateJSON = true
          )
            .then(function(res){
              console.log(res);
              PAGE.serviceName = res.data.resultData.serviceName;
              PAGE.platformNo = res.data.resultData.platformNo;
              PAGE.userDevice = res.data.resultData.userDevice;
              PAGE.sign = res.data.resultData.sign;
              PAGE.reqData = res.data.resultData.reqData;
              PAGE.keySerial = res.data.resultData.keySerial;
            },function(res){
              console.log(res.data.resultMessage+'------resMessage');
              console.log(PAGE.token+'--------------token');
            });
          PAGE.dialogVisible = true;
        },
        handleClose(done) {
          PAGE.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        goShangHaiBank:function(){
          PAGE.dialogVisible = false;
          $('#form').submit();
        },
      }
    }
</script>

<style scoped>
.tixian{
  width: 888px;
  height: 630px;
  /*margin-top: 25px;*/
  /*border: 1px solid green;*/
  background: #fff;
  /*margin:auto;*/
}
  .tixian_top{
    /*width: 888px;*/
    height:80px;
    border-bottom: 1px solid #999999;
    color: #333;
    font-size: 16px;
    line-height: 80px;
    font-weight: bold;
    padding-left:39px;
  }
.tixian_bottom{
  width: 888px;
  height:529px;
  /*border: 1px solid green;*/
}
  .tixian_bottom_com1{
    width: 888px;
    height:299px;
    /*border: 1px solid green;*/
  }
  .tixian_bottom_com1_center{
    width: 560px;
    height:299px;
    /*border: 1px solid green;*/
    margin: auto;
  }
  .com1_kong{
    width: 560px;
    height:40px;
    /*border: 1px solid green;*/
  }
  .com1_user_yue,.com1_tixian_jine{
    width: 560px;
    height:60px;
    /*border: 1px solid green;*/
    /*font-size: 14px;*/
    font-size: 14px;
    color: #333;
    line-height: 60px;
  }
.com1_tixian_jine_left{
  width:90px;
  height:60px;
  /*border: 1px solid green;*/
  float: left;
}
  .com1_tixian_jine_right{
    width:460px;
    height:46px;
    /*border: 1px solid red;*/
    float: left;
  }
  .com1_tixian_jine_right input{
    display: block;
    outline: none;
    width:460px;
    height:46px;
    border: none;
    border-bottom: 1px solid #999;
  }
.money{
  font-size:25px;
}
  .com1_shouxu{
    width: 560px;
    height:45px;
    /*border: 1px solid green;*/
    font-size: 12px;
    color: #666;
    line-height:15px;
    padding-left:90px;
  }
.com1_queren_tijiao{
  width:560px;
  height:40px;
  /*border: 1px solid green;*/
}
.btn_tijiao{
  width:460px;
  height:40px;
  /*border: 1px solid green;*/
  float: right;
  text-align: center;
  line-height: 40px;
  background:#FF9600;
  font-size: 16px;
  margin-right: 8px;
  cursor: pointer;
}
.btn_tijiao a{
  color: white;
  text-decoration: none;
}
.tixian_bottom_com2{
  width: 888px;
  height:230px;
  /*border: 1px solid green;*/
}
.tixian_bottom_com2_center{
  width: 868px;
  height:230px;
  /*border: 1px solid green;*/
  margin: auto;
}
.guizi{
  font-size: 14px;
  color: #333333;
  padding-left:40px;
}
.guizi_nav{
  font-size: 14px;
  color: #333;
  padding-left:40px;
  line-height: 30px;
}
.xs_top{
  padding-top: 15px;
}
</style>
