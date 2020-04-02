<template>
  <div class="tixian">
    <div class="tixian_top">充值</div>
    <div class="tixian_bottom">
      <div class="zongborder">
        <div class="top">
          <div class="everyone" @click="dianwo($event)" style="color:#E6A845;">
            快捷充值
          </div>
          <div class="everyone" @click="dianwo($event)">
            网银充值
          </div>
        </div>
        <div class="bottom">
          <div class="nav first">
            <div class="nav_center">
              <div class="com1_user_yue">账户余额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="money" v-html="parentMessage[0].balance"></span>&nbsp;&nbsp;元
              </div>
              <!--充值金额-->
              <div class="chongzhi_border">
                <div class="com1_tixian_jine">
                  <div class="com1_tixian_jine_left">
                    充值金额
                  </div>
                  <div class="com1_tixian_jine_right">
                    <input type="text" placeholder="请输入100元以上金额" v-model="amount">
                  </div>
                </div>
                <div class="com1_shouxu">注：不收取手续费</div>
                <div class="card">
                  <div class="card_div1">已绑银行卡</div>
                  <div class="card_div2"><img src="../../assets/img/common/zgbank.png"></div>
                  <div class="card_div3">*** **** **** *** {{parentMessage[4].bankCard}}</div>
                </div>
                <div class="com1_queren_tijiao">
                  <div class="btn_tijiao color_wt" @click="payQuick">确认充值</div>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>是否前往上海银行进行充值？</span>
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
              <!--快捷支付如下-->
              <div class="kjie_zhifu">
                <div class="kjie_zhifu_top">快捷支付如下：</div>
                <div class="kjie_zhifu_bottom">
                  <div class="neirong">
                    <div class="neirong_com">
                      <div class="neirong_com_div1">单笔限额（元）</div>
                      <div class="neirong_com_div1" v-html="parentMessage[3].transLimit"></div>
                    </div>
                    <div class="neirong_com">
                      <div class="neirong_com_div1">单日限额（元）</div>
                      <div class="neirong_com_div1" v-html="parentMessage[1].dailyLimit"></div>
                    </div>
                    <div class="neirong_com">
                      <div class="neirong_com_div1">单月限额（元）</div>
                      <div class="neirong_com_div1" v-html="parentMessage[2].monthLimit"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!--温馨提示-->
              <div class="wenxin">
                <div class="guizi">温馨提示：</div>
                <div class="guizi_nav xs_top">1、充值服务0手续费，预计5分钟内到账，具体以实际到账时间为准。</div>
                <div class="guizi_nav">2、您的账户资金将通过上海银行存管系统进行充值，如果充值金额没有及时到账，请联系客服：400-022-9500。</div>
                <div class="guizi_nav">3、如果超出支付限额，可以拆分整体投资金额多次充值。</div>
                <div class="guizi_nav">4、请使用借记卡充值，信用卡无法充值，禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</div>
                <div class="guizi_nav">5、充值成功的资金将实时转到您在上海银行存管系统中开设的存管账户中，只有您自己能调配账上的资金。</div>
                <div class="guizi_nav">6、使用网银充值的用户须在银行开通网上银行服务，单日限额一般较大，具体额度视银行具体规定；快捷支付充值不需要开通网 银，但单日限额较小。</div>
              </div>
            </div>
          </div>
          <!--网银充值-->
          <div class="nav second">
            <div class="nav_center">
              <div class="com1_user_yue">账户余额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="money" v-html="parentMessage[0].balance"></span>&nbsp;&nbsp;元
              </div>
              <!--充值金额-->
              <div class="chongzhi_border">
                <div class="com1_tixian_jine">
                  <div class="com1_tixian_jine_left">
                    充值金额
                  </div>
                  <div class="com1_tixian_jine_right">
                    <input type="text" placeholder="请输入100元以上金额" v-model="amountNormal">
                  </div>
                </div>
                <div class="com1_shouxu">注：不收取手续费</div>
                <div class="card">
                  <div class="card_div1">网上银行</div>
                  <div class="card_bank">
                    <div class="card_bank_xuan">
                      <div class="xuan_center">
                        <input type="radio" id="checkme1" checked="checked" name="sex" class="input_me"><label
                        for="checkme1"></label>
                      </div>
                    </div>
                    <div class="card_bank_img"><img src="../../assets/img/common/zgbank.png"></div>
                  </div>
                  <div class="card_bank">
                    <div class="card_bank_xuan">
                      <div class="xuan_center">
                        <input type="radio" id="checkme2" name="sex" class="input_me">
                        <label for="checkme2"></label>
                      </div>
                    </div>
                    <div class="card_bank_img"><img src="../../assets/img/common/zgbank.png"></div>
                  </div>
                  <div class="card_bank">
                    <div class="card_bank_xuan">
                      <div class="xuan_center">
                        <input type="radio" id="checkme3" name="sex" class="input_me">
                        <label for="checkme3"></label>
                      </div>
                    </div>
                    <div class="card_bank_img"><img src="../../assets/img/common/zgbank.png"></div>
                  </div>
                  <div class="card_bank_more" @click="show_model">>>查看更多</div>
                  <!--银行卡的模态框-->
                  <div class="model">
                    <div class="model_top">
                      <div class="model_close" @click="closeme">关闭</div>
                    </div>
                    <div class="model_bottom">
                      <div class="model_bottom_center">
                        <!--要加滚动条的div-->
                        <div class="model_everyone" >
                          <div class="everyone_com" v-for="item in mydata"><img v-bind:src="item" alt=""></div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="com1_queren_tijiao">
                  <div class="btn_tijiao color_wt" @click="payNormal">确认充值</div>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>是否前往上海银行进行充值？</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click.native="goShangHai">确 定</el-button>
                    </span>
                    <form id="formNormal" action="https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway" method="post" v-show="true">
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
              <!--快捷支付如下-->
              <div class="kjie_zhifu">
                <div class="kjie_zhifu_top">普通卡支付限额如下：</div>
                <div class="kjie_zhifu_bottom_putong">
                  <div class="putong_div1">
                    <div class="putong_div1_top">支持卡种</div>
                    <div class="putong_div1_bottom">借记卡</div>
                  </div>
                  <div class="putong_div2">
                    <div class="putong_com">单笔限额（元）</div>
                    <div class="putong_com">60000.00</div>
                    <div class="putong_com_1">6万</div>
                  </div>
                  <div class="putong_div3">
                    <div class="putong_com">每日限额（元）</div>
                    <div class="putong_com">1000.00</div>
                    <div class="putong_com_1">5万</div>
                  </div>
                  <div class="putong_div4">
                    <div class="putong_com2">需要满足条件</div>
                    <div class="putong_com2">个人网银短信专业版</div>
                    <div class="putong_com2_1">个人网银证书专业版</div>
                  </div>
                  <div class="putong_div5">
                    <div class="putong_div1_top2">单卡当日累计限额（元）</div>
                    <div class="putong_div1_bottom2">
                      <div class="putong_div1_bottom2_center">1.办理数字证书支付签约需开通个人网上银行专业版，并登录网上银行专业版进行签约。</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--温馨提示-->
              <div class="wenxin">
                <div class="guizi">温馨提示：</div>
                <div class="guizi_nav xs_top">1、充值服务0手续费，预计5分钟内到账，具体以实际到账时间为准。</div>
                <div class="guizi_nav">2、您的账户资金将通过上海银行存管系统进行充值，如果充值金额没有及时到账，请联系客服：400-022-9500。</div>
                <div class="guizi_nav">3、如果超出支付限额，可以拆分整体投资金额多次充值。</div>
                <div class="guizi_nav">4、请使用借记卡充值，信用卡无法充值，禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</div>
                <div class="guizi_nav">5、充值成功的资金将实时转到您在上海银行存管系统中开设的存管账户中，只有您自己能调配账上的资金。</div>
                <div class="guizi_nav">6、使用网银充值的用户须在银行开通网上银行服务，单日限额一般较大，具体额度视银行具体规定；快捷支付充值不需要开通网 银，但单日限额较小。</div>
              </div>
            </div>
          </div>

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
  props:['parentMessage'],
  name: "chongzhi",
  data() {
    return {
      mydata:[
        "../../static/img/common/zgbank.png",
        "../../static/img/common/zgbank.png",
        "../../static/img/common/zgbank.png",
        "../../static/img/common/zgbank.png",
        "../../static/img/common/zgbank.png",
        "../../static/img/common/zgbank.png",
      ],
      dialogVisible: false,
      amount:'', //充值金额
      amountNormal:'', //普通充值
      rechargeWay:'', // 充值方式
      serviceName:'',
      platformNo:'',
      keySerial:'',
      userDevice:'',
      sign:'',
      reqData:'',
      bankCode:'',
    }
  },
  created:function(){
    PAGE = this;
    PAGE.rechargeWay = 'SWIFT';
    PAGE.bankCode = PAGE.parentMessage[6].bankCode;
  },
  mounted(){
    // PAGE.$emit('childEvent');
    // PAGE.accountBalance = PAGE.messagePay;
  },
  methods: {
    dianwo: function (event) {
      var everyones = document.getElementsByClassName("everyone");
      var navs = document.getElementsByClassName("nav");
      for (var y = 0; y < everyones.length; y++) {
        everyones[y].style.color = "black"
      }
      if (event.target.innerText == "网银充值") {
        event.target.style.color = "#E6A845";
        $(".first").hide();
        $(".second").show();
        PAGE.rechargeWay = 'WEB';
      } else {
       event.target.style.color = "#E6A845";
       $(".first").show();
       $(".second").hide();
        PAGE.rechargeWay = 'SWIFT';
     }
    },
    show_model: function () {
      $(".model").show();
    },
    closeme: function () {
      $(".model").hide()
    },
    //快速充值提交
    payQuick:function(){
      // confirm('are you sure')
      console.log(PAGE.amount);
      Vue.http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/recharge',
        {
          'amount': PAGE.amount,
          'rechargeWay' : PAGE.rechargeWay
        },
        {
          headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'token':PAGE.parentMessage[5].token
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
      // Vue.http({
      //   url: 'https://www.miguo66.com/BeeRich-3.0.0/customer/recharge',
      //   method: 'POST',
      //   // 请求体重发送的数据
      //   data: {
      //         // amount: PAGE.amount,
      //         amount: 100,
      //         rechargeWay : PAGE.rechargeWay
      //   },
      //   // 设置请求头
      //   headers: {
      //     // 'Content-Type': 'x-www-from-urlencoded'
      //     'token':PAGE.parentMessage[5].token
      //   }
      // }).then(function (res) {
      //   // 请求成功回调
      //       console.log(res.data);
      //   console.log(PAGE.amount+'------get amount');
      //       PAGE.serviceName = res.data.resultData.serviceName;
      //       PAGE.platformNo = res.data.resultData.platformNo;
      //       PAGE.userDevice = res.data.resultData.userDevice;
      //       PAGE.bindCardSign = res.data.resultData.sign;
      //       PAGE.bindCardReqData = res.data.resultData.reqData;
      //       PAGE.keySerial = res.data.resultData.keySerial;
      // }, function (res) {
      //   // 请求失败回调
      //       console.log(res.data.resultMessage+'------resMessage');
      //       console.log(PAGE.token+'--------------token');
      // });
      PAGE.dialogVisible = true;
    },
    //普通充值提交
    payNormal:function(){
      // confirm('are you sure')
      console.log(PAGE.amountNormal);
      Vue.http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/recharge',
        {
          'amount': PAGE.amountNormal,
          'rechargeWay' : PAGE.rechargeWay,
          'bankcode' : PAGE.parentMessage[6].bankCode
        },
        {
          headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'token':PAGE.parentMessage[5].token
          }
        },
        Vue.http.options.emulateJSON = true
      )
        .then(function(res){
          console.log(res);
          console.log(PAGE.parentMessage[6].bankCode+'-------bankCode');
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
    goShangHai:function(){
      PAGE.dialogVisible = false;
      $('#formNormal').submit();
    }
  }
}
  </script>

  <style scoped>
  .tixian {
    width: 888px;
    height: 960px;
    background: #fff;
    margin: auto;
    margin-top: 20px;
  }

  .tixian_top {
    /*width: 888px;*/
    height: 80px;
    border-bottom: 1px solid #999999;
    color: #333;
    font-size: 16px;
    line-height: 80px;
    font-weight: bold;
    padding-left: 39px;
  }

  .tixian_bottom {
    width: 888px;
    /*height: 912px;*/
    /*border: 1px solid green;*/
  }

  .zongborder {
    width: 888px;
    /*height: 912px;*/
    /*border: 1px solid red;*/

  }

  .top {
    width: 880px;
    height: 80px;
    /*border: 1px solid green;*/
  }

  .everyone {
    width: 140px;
    height: 80px;
    /*border: 1px solid red;*/
    float: left;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
  }

  .bottom {
    width: 880px;
    height: 520px;
    /*border: 1px solid red;*/
  }

  .nav {
    display: none;
  }

  .nav_center {
    width: 800px;
    /*height: 832px;*/
    /*border: 1px solid red;*/
    margin: auto;
  }

  .first {
    display: block;
  }

  .com1_user_yue {
    width: 799px;
    height: 60px;
    /*border: 1px solid green;*/
    font-size: 14px;
    color: #333;
    line-height: 60px;
  }

  .money {
    font-size: 25px;
  }

  .chongzhi_border {
    width: 800px;
    min-height: 280px;
    border-bottom: 1px solid gray;
  }

  .com1_tixian_jine {
    width: 560px;
    height: 60px;
    /*border: 1px solid green;*/
    font-size: 14px;
    color: #333;
    line-height: 60px;
  }

  .com1_tixian_jine_left {
    width: 90px;
    height: 60px;
    /*border: 1px solid green;*/
    float: left;
  }

  .com1_tixian_jine_right {
    width: 460px;
    height: 46px;
    /*border: 1px solid red;*/
    float: left;
  }

  .com1_tixian_jine_right input {
    display: block;
    outline: none;
    width: 460px;
    height: 46px;
    border: none;
    border-bottom: 1px solid #999;
  }

  .money {
    font-size: 25px;
  }

  .com1_shouxu {
    width: 560px;
    height: 26px;
    /*border: 1px solid green;*/
    font-size: 12px;
    color: #666;
    line-height: 15px;
    padding-left: 90px;
  }

  .card {
    width: 800px;
    height: 110px;
    /*border: 1px solid green;*/
  }

  .card_div1 {
    width: 100px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
    color: #333;
    font-size: 14px;
    line-height: 90px;
  }

  .card_bank {
    width: 200px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
    cursor: pointer;
  }

  .card_bank_xuan {
    width: 30px;
    height: 90px;
    /*border: 1px solid green;*/
    float: left;
  }

  .xuan_center {
    width: 30px;
    height: 30px;
    /*border: 1px solid red;*/
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input_me {
    width: 20px;
    height: 20px;
    /*border: 1px solid green;*/
    cursor: pointer;
  }

  .card_bank_img {
    width: 168px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
  }

  .card_bank_img img {
    width: 166px;
    padding-top: 10px;
  }

  .card_bank_more {
    width: 96px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
    color: #E6A845;
    font-size: 16px;
    line-height: 90px;
    text-align: center;
    cursor: pointer;
  }

  .model {
    width: 700px;
    height: 250px;
    /*border: 1px solid red;*/
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background: #DCDCDC;
    border-radius: 10px;
    margin-top: 270px;
    display: none;
  }

  .model_top {
    width: 700px;
    height: 30px;
    /*border: 1px solid red;*/
  }

  .model_close {
    width: 60px;
    height: 30px;
    /*border: 1px solid green;*/
    float: right;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #666;
    cursor: pointer;
  }

  .model_bottom {
    width: 700px;
    height: 220px;
    /*border: 1px solid red;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .model_bottom_center {
    width: 642px;
    height: 202px;
    /*border: 1px solid red;*/
    overflow-y: auto;

  }

  .model_everyone {
    width: 640px;
    height: 100px;
    border: 1px solid transparent;
  /*  display: flex;
    justify-content: center;
    align-items: center;*/
  }

  .everyone_com {
    width: 212px;
    height: 100px;
    border: 1px solid transparent;
    float: left;
  }

  .card_div2 {
    width: 206px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
  }

  .card_div3 {
    min-width: 233px;
    height: 90px;
    /*border: 1px solid red;*/
    float: left;
    color: #999;
    font-size: 24px;
    line-height: 90px;
  }

  .com1_queren_tijiao {
    width: 800px;
    height: 40px;
    /*border: 1px solid green;*/
  }

  .btn_tijiao {
    width: 460px;
    height: 40px;
    /*border: 1px solid green;*/
    /*float: right;*/
    margin: auto;
    text-align: center;
    line-height: 40px;
    background: #E6A845;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }

  .kjie_zhifu {
    width: 800px;
    height: 180px;
    /*border: 1px solid green;*/
  }

  .kjie_zhifu_top {
    width: 800px;
    height: 60px;
    /*border: 1px solid green;*/
    font-size: 14px;
    color: #666;
    line-height: 60px;
  }

  .kjie_zhifu_bottom {
    width: 800px;
    height: 80px;
    /*border: 1px solid red;*/
  }

  .kjie_zhifu_bottom_putong {
    width: 765px;
    height: 96px;
    /*border: 1px solid red;*/
  }

  .putong_div1 {
    width: 103px;
    height: 96px;
    float: left;
    background: #DCDCDC;
    border: 1px solid #ccc;
  }

  .putong_div1_top {
    width: 103px;
    height: 32px;
    border-bottom: 1px solid #ccc;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: #555;
  }

  .putong_div1_bottom {
    width: 103px;
    height: 61px;
    /*border: 1px solid red;*/
    line-height: 61px;
    text-align: center;
    font-size: 14px;
    color: #555;
  }

  .putong_div2, .putong_div3 {
    width: 126px;
    height: 96px;
    border: 1px solid #DCDCDC;
    float: left;
    border-right: none;
  }

  .putong_com {
    width: 126px;
    height: 32px;
    /*border: 1px solid red;*/
  }

  .putong_com, .putong_com2, .putong_com_1, .putong_com2_1 {
    color: #555C61;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #DCDCDC;
  }

  .putong_com_1, .putong_com2_1 {
    border-bottom: none;
  }

  .putong_com2 {
    width: 172px;
    height: 32px;
    /*border: 1px solid red;*/
  }

  .putong_div4 {
    width: 172px;
    height: 96px;
    border: 1px solid #DCDCDC;
    float: left;
    border-right: none;
  }

  .putong_div5 {
    width: 223px;
    height: 96px;
    border: 1px solid #DCDCDC;
    float: left;
  }

  .putong_div1_top2 {
    width: 223px;
    height: 32px;
    border-bottom: 1px solid #ccc;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: #555;
  }

  .putong_div1_bottom2 {
    width: 223px;
    height: 61px;
    /*border: 1px solid red;*/
  }

  .putong_div1_bottom2_center {
    width: 210px;
    height: 61px;
    /*border: 1px solid red;*/
    margin: auto;
    font-size: 14px;
    color: #555;
  }

  .neirong {
    width: 624px;
    height: 80px;
    /*border: 1px solid red;*/
  }

  .neirong_com {
    background: #DCDCDC;
    width: 207px;
    /*height: 80px;*/
    /*border: 1px solid red;*/
    float: left;
  }

  .neirong_com_div1 {
    /*width: 207px;*/
    /*height: 40px;*/
    border: 1px solid #ccc;
    font-size: 14px;
    color: #555C61;
    line-height: 40px;
    padding-left: 15px;
  }

  .wenxin {
    width: 800px;
    min-height: 348px;
    /*border: 1px solid red;*/
  }

  .guizi {
    font-size: 14px;
    color: #333333;
  }

  .guizi_nav {
    font-size: 14px;
    color: #333;
    line-height: 30px;
  }

  .xs_top {
    padding-top: 15px;
  }
  </style>
