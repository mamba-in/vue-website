<template>
  <div class="p100 por">
    <div class="jz_zuto">
      <!-- 左边总div -->
      <div class="slide_bar_left">
        <!--账户详情1111111111111-->
        <div class="slide_bar_left_com">
          <div class="gt_com3">
            <div class="gt_com3_zuo">
              <img src="../../assets/img/common/user.png">
            </div>
            <div class="gt_com3_you">
              账户详情
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor" @click="showProperty">
                资产概况
              </div>
              <div class="gt_com3_center_com cursor" @click="showMoneyflow">
                资金流水
              </div>
            </div>

          </div>
          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor" @click="showPay">
                充值
              </div>
              <div class="gt_com3_center_com cursor" @click="showWithDraw">
                提现
              </div>
            </div>
          </div>
        </div>
        <!--投资记录22222222-->
        <div class="slide_bar_left_com">
          <div class="gt_com3">
            <div class="gt_com3_zuo">
              <img src="../../assets/img/common/tz.png">
            </div>
            <div class="gt_com3_you cursor">
              投资记录
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor">
                蜂硕散标
              </div>
              <div class="gt_com3_center_com cursor">
                蜂硕计划
              </div>
            </div>

          </div>
          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor" @click="showCreditorTransfer">
                转让债权
              </div>
              <div class="gt_com3_center_com cursor" @click="showReturnedMoney">
                回款计划
              </div>
            </div>
          </div>
        </div>
        <!--我的奖励333333333-->
        <div class="slide_bar_left_com">
          <div class="gt_com3">
            <div class="gt_com3_zuo">
              <img src="../../assets/img/common/jl.png">
            </div>
            <div class="gt_com3_you">
              我的奖励
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor" @click="showRedEnvelope">
                我的红包
              </div>
              <div class="gt_com3_center_com">
                我的加息券
              </div>
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com">
                我的积分
              </div>
              <div class="gt_com3_center_com">
                我的抵金券
              </div>
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com">
                邀请好友
              </div>
              <div class="gt_com3_center_com">

              </div>
            </div>
          </div>
        </div>
        <!--账户设置-->
        <div class="slide_bar_left_com">
          <div class="gt_com3">
            <div class="gt_com3_zuo">
              <img src="../../assets/img/common/set.png">
            </div>
            <div class="gt_com3_you">
              账户设置
            </div>
          </div>

          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com">
                基本信息
              </div>
              <div class="gt_com3_center_com">
                安全认证
              </div>
            </div>

          </div>
          <div class="gt_com3">
            <div class="gt_com3_center">
              <div class="gt_com3_center_com cursor" @click="showMessage">
                消息
              </div>
              <div class="gt_com3_center_com">

              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右边的div-->
      <div class="slide_bar_right">
        <div class="kaitong">
          <div class="liji_kaitong_center">
            <img src="../../assets/img/common/icon.png">
            &nbsp;&nbsp;开通上海银行存管账户，保障您的资金财产安全&nbsp;&nbsp;&nbsp;&nbsp;<span>立即开通</span>
          </div>
        </div>
        <!--各自单独的div放在下面的里面就可以了-->
        <!--<div class="dandu_border"></div>-->
        <propertyStatus v-if="property"></propertyStatus>
        <money_flow v-if="moneyFlow"></money_flow>
        <pay :parentMessage="parentMessage" v-if="pay"></pay>
        <withDraw :parentWithDraw="parentWithDraw" v-if="withDraw"></withDraw>
        <returned_money v-if="returnedMoney"></returned_money>
        <creditor_transfer v-if="creditorTransfer"></creditor_transfer>
        <redEnvelope v-if="redEnvelope"></redEnvelope>
        <message v-if="message"></message>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '../../assets/js/bus.js'

  import propertyStatus from './propertyStatus'
  import money_flow from './money_flow'
  import pay from './pay'
  import withDraw from './withDraw'
  import returned_money from './returned_money'
  import creditor_transfer from './creditor_transfer'
  import redEnvelope from './redEnvelope'
  import message from './message'

  var PAGE;
  export default {
    name: 'personalCenter',
    components:{
      propertyStatus,
      money_flow,
      pay,
      withDraw,
      returned_money,
      creditor_transfer,
      redEnvelope,
      message
    },
    data() {
      return {
        property:true,
        moneyFlow:false,
        pay:false,
        withDraw:false,
        redEnvelope:false,
        creditorTransfer:false,
        returnedMoney:false,
        message:false,
        token:'',
        parentMessage:[{balance:''},{dailyLimit:''},{monthLimit:''},{transLimit:''},{bankCard:''},{token:''},{bankCode:''}],
        parentWithDraw:[{amount:''},{token:''}]
      }
    },
    created:function(){
      PAGE = this;
//      Bus.$on('token',function (token) {
//        this.token = token;
//      }.bind(this));
      PAGE.token = sessionStorage.getItem('token');
    },
    methods:{
      showProperty:function(){
        PAGE.property = true;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showMoneyflow:function(){
        PAGE.property = false;
        PAGE.moneyFlow = true;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showPay:function(){
        alert(PAGE.token+'-----个人中心');
        PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/customer/toRecharge',
          {
            headers:{
              'token': PAGE.token
            }
          })
          .then(function(res){
            console.log(PAGE.token);
            console.log(res);
            PAGE.parentMessage[0].balance = res.data.resultData.availableAmount;
            PAGE.parentMessage[1].dailyLimit = res.data.resultData.singleDailyLimit;
            PAGE.parentMessage[2].monthLimit = res.data.resultData.singleMonthlyLimit;
            PAGE.parentMessage[3].transLimit = res.data.resultData.singleTransactionLimit;
            PAGE.parentMessage[4].bankCard = res.data.resultData.sensitiveBankCard;
            PAGE.parentMessage[5].token = PAGE.token;
            PAGE.parentMessage[6].bankCode = res.data.resultData.bankCode;
          },function(res){

          });
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = true;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showWithDraw:function(){
        alert(PAGE.token+'-----提现');
        PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/customer/toWithdraw',
          {
            headers:{
              'token': PAGE.token
            }
          })
          .then(function(res){
            console.log(PAGE.token);
            console.log(res);
            PAGE.parentWithDraw[0].amount = res.data.resultData;
            PAGE.parentWithDraw[1].token = PAGE.token;
          },function(res){

          });
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = true;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showCreditorTransfer:function(){
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = true;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showReturnedMoney:function () {
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = true;
        PAGE.redEnvelope = false;
        PAGE.message = false;
      },
      showRedEnvelope:function(){
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = true;
        PAGE.message = false;
      },
      showMessage:function(){
        PAGE.property = false;
        PAGE.moneyFlow = false;
        PAGE.pay = false;
        PAGE.withDraw = false;
        PAGE.creditorTransfer = false;
        PAGE.returnedMoney = false;
        PAGE.redEnvelope = false;
        PAGE.message = true;
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to PAGE component only -->
<style scoped>
  .p100 {
    width: 100%;
    background: #F5F5F5;
    /*height: auto;*/
    min-height: 1140px;
    /*border: 1px solid red;*/
  }

  .jz_zuto {
    width: 1152px;
    /*border: 1px solid green;*/
    margin: auto;
  }

  /*左边总体的div*/
  .slide_bar_left {
    width: 240px;
    min-height: 620px;
    margin-top: 40px;
    /*border: 1px solid red;*/
    background: #fff;
    float: left;
  }

  /*左边每一个的div*/
  .slide_bar_left_com {
    width: 240px;
    min-height: 155px;
    /*border: 1px solid red;*/
  }

  .gt_com3 {
    width: 240px;
    height: 51.6px;
    /*border: 1px solid blue;*/
  }

  .gt_com3_zuo {
    width: 30px;
    height: 51.6px;
    /*border: 1px solid blue;*/
    float: left;
    margin-top: 5px;
  }

  .gt_com3_zuo img {
    margin-top: 15px;
    margin-left: 15px;
    width: 45%;
  }

  .gt_com3_you {
    width: 198px;
    height: 51.6px;
    /*border: 1px solid blue;*/
    float: left;
    font-size: 16px;
    line-height: 51.6px;
    padding-left: 10px;
  }

  .gt_com3_center {
    width: 200px;
    height: 51.6px;
    /*border: 1px solid red;*/
    margin-left: 40px;
  }

  .gt_com3_center_com {
    width: 100px;
    height: 51.6px;
    /*border: 1px solid green;*/
    float: left;
    font-size: 14px;
    line-height: 51.6px;
    color: #666666;
  }

  /*右边的总div*/
  .slide_bar_right {
    width: 888px;
    min-height: 620px;
    margin-top: 40px;
    /*border: 1px solid blue;*/
    float: right;
  }

  .kaitong {
    width: 888px;
    height: 40px;
    background: white;
  }

  .liji_kaitong_center {
    width: 488px;
    height: 40px;
    /*border: 1px solid red;*/
    margin: auto;
    color: #666666;
    font-size: 14px;
    line-height: 40px;
  }

  .liji_kaitong_center span {
    color: #E6A845;
    font-weight: bold;
  }

  .liji_kaitong_center img {
    vertical-align: middle;
  }
  .dandu_border{
    width:888px;
    min-height:620px;
    border: 1px solid green;
    margin-top:20px;
  }
</style>
