<template>
  <div class="zichan_border" style="margin-top: 30px;">
    <!--下午好，古旧知故开始的div-->
    <div class="afternoon">
      <!--左边的div-->
      <div class="afternoon_left">
        <div class="touxiang"><img src="../../assets/img/common/tx.jpg"></div>
      </div>
      <!--中间的div-->
      <div class="afternoon_middle">
        <div class="afternoon_middle_center1">
          <div class="afternoon_middle_center1_com1">
            <span class="jin3">下午好，古旧知故</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="pg_size huise">风险评测：</span><span class="hse pg_size">前往评测>></span>
          </div>
          <div class="afternoon_middle_center1_com1">
            <span><img src="../../assets/img/common/cd.png"></span>&nbsp;&nbsp;&nbsp;<span><img
            src="../../assets/img/common/ip.png"></span>&nbsp;&nbsp;&nbsp;<span><img
            src="../../assets/img/common/g.png"></span>

          </div>
          <div class="afternoon_middle_center1_com1 pg_size huise">
            安全等级：<span style="color: #000;">中级</span>&nbsp;&nbsp;&nbsp;<span class="pg_size hse" style="font-weight: bold;">提升</span>
          </div>
        </div>
      </div>
      <!--右边的div-->
      <div class="afternoon_right">
        <div class="afternoon_middle_center2">
          <div class="afternoon_middle_center1_com2 huise">
            可用余额（元）<span><img
            src="../../assets/img/common/yj.png"> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img
            src="../../assets/img/common/by.png"> </span>
          </div>
          <div class="afternoon_middle_center1_com2">
            <span class="ling">0.00</span>
          </div>
          <div class="afternoon_middle_center1_com2">
            <div class="chunzhi">充值</div>
            <div class="tixian">提现</div>
          </div>
        </div>
      </div>
    </div>
    <!--下午好，古旧知故结束的div-->
    <!--资产总额开始的div-->
   <div class="afternoon2">
     <div class="afternoon_top">
       <div class="afternoon_top_com">
         <!--写死的字的div-->
         <div class="afternoon_top_com_sizi pg_size huise">
           资产总额（元）<img src="../../assets/img/common/wh.png">
         </div>
         <!--动态活数字的div-->
         <div class="afternoon_top_com_huozi fontsize26 hse">
           1356.41
         </div>
       </div>
       <div class="afternoon_top_com">
         <!--写死的字的div-->
         <div class="afternoon_top_com_sizi pg_size huise">
           累计收益（元）<img src="../../assets/img/common/wh.png">
         </div>
         <!--动态活数字的div-->
         <div class="afternoon_top_com_huozi fontsize26">
           1356.41
         </div>
       </div>
       <div class="afternoon_top_com">
         <!--写死的字的div-->
         <div class="afternoon_top_com_sizi pg_size huise">
           待收本金（元）<img src="../../assets/img/common/wh.png">
         </div>
         <!--动态活数字的div-->
         <div class="afternoon_top_com_huozi fontsize26">
           1356.41
         </div>
       </div>
       <div class="afternoon_top_com">
         <!--写死的字的div-->
         <div class="afternoon_top_com_sizi pg_size huise">
           待收利息（元）
           <img src="../../assets/img/common/wh.png">
         </div>
         <!--动态活数字的div-->
         <div class="afternoon_top_com_huozi fontsize26">
           1356.41
         </div>
       </div>
     </div>
     <div class="afternoon_bottom">
       <img src="../../assets/img/common/yun.png">
     </div>
   </div>
    <!--资产总额结束的div-->
    <!--最近投资记录开始的div-->
    <div class="touzi_jilu">
      <div class="touzi_jilu_center">
        <!--最近投资记录及查看更多的总div-->
        <div class="touzi_jilu_center_top">
          <div class="touzi_jilu_center_top_left">
            最近投资记录
          </div>
          <div class="touzi_jilu_center_top_right">
            <a href="https://www.baidu.com/">查看更多>></a>
            <!--<router-link to="/shibai">查看更多</router-link>-->
          </div>
        </div>
        <!--项目名称;预期年收益;项目期限;投资金额（元）;投资时间;状态的总div-->
        <div class="touzi_jilu_center_middle">
          <div class="touzi_mingcheng gt_css">
            项目名称
          </div>
          <div class="touzi_shouyi gt_css">
            预期年收益
          </div>
          <div class="touzi_qixian gt_css">
            项目期限
          </div>
          <div class="touzi_jine gt_css">
            投资金额（元）
          </div>
          <div class="touzi_shijian gt_css">
            投资时间
          </div>
          <div class="touzi_zhuangtai gt_css">
            状态
          </div>
        </div>
        <!--数据及要加滚动条的总div-->
        <div class="touzi_jilu_center_bottom">
          <!--要循环每一条数据的总div-->
          <div class="touzi_jilu_center_bottom_every" v-for="item in ProductList">
            <div class="touzi_mingcheng2 gt_css2" v-text="item.zhitou">
              <!--蜂硕直投-20180902-->
            </div>
            <div class="touzi_shouyi2 gt_css2" v-text="item.percent">
              <!--8.00%-->
            </div>
            <div class="touzi_qixian2 gt_css2" v-text="item.mymonth">
              <!--1个月-->
            </div>
            <div class="touzi_jine2 gt_css2" v-text="item.money">
              <!--6000.00-->
            </div>
            <div class="touzi_shijian2 gt_css2" v-text="item.riqi">
              <!--2018-09-02-->
            </div>
            <div class="touzi_zhuangtai2 gt_css2" v-text="item.zhuangtai">
              <!--投资冻结-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--最近投资记录结束的div-->
  </div>
</template>

<script>
  export default {
    name: "zichan",
    data() {
      return {
        ProductList:[
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"},
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"},
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"},
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"},
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"},
          {zhitou:"蜂硕直投-20180902",percent:"8.00%",mymonth:"1个月",money:"6000.00",riqi:"2018-09-02",zhuangtai:"投资冻结"}
        ]
      }
    }
  }

</script>

<style scoped>
  .zichan_border {
    margin: auto;
    width: 888px;
    height: 620px;
    /*border: 1px solid green;*/
  }

  .afternoon,.afternoon2 {
    width: 888px;
    height: 176px;
    background: white;
  }
  .afternoon2{
    margin-top: 30px;
  }
  .afternoon_left {
    width: 130px;
    height: 176px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touxiang {
    width: 74px;
    height: 74px;
    /*border: 1px solid red;*/
    margin: auto;
    margin-top: 51px;
  }

  .touxiang img {
    width: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .afternoon_middle {
    width: 408px;
    height: 176px;
    /*border: 1px solid red;*/
    float: left;
  }

  .afternoon_middle_center1 {
    width: 408px;
    height: 120px;
    /*border: 1px solid red;*/
    margin-top: 25px;
  }

  .afternoon_middle_center1_com1 {
    width: 408px;
    height: 40px;
    /*border: 1px solid red;*/
    color: #999999;
    line-height: 40px;
    font-size: 16px;
  }

  .pg_size {
    font-size: 14px;
  }

  .jin3 {
    color: #333333;
    font-weight: bold;
  }

  .afternoon_middle_center1_com2 {
    width: 350px;
    height: 40px;
    /*border: 1px solid red;*/
    line-height: 40px;
    font-size: 14px;
  }

  .chunzhi, .tixian {
    width: 96px;
    height: 30px;
    border: 1px solid #E6A845;
    float: left;
    margin-top: 5px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }

  .chunzhi {
    background: #E6A845;
    color: #fff;
  }

  .tixian {
    margin-left: 20px;
    color: #E6A845;
  }

  .ling {
    font-size: 24px;
  }

  .afternoon_middle_center2 {
    width: 350px;
    height: 120px;
    /*border: 1px solid green;*/
    margin-top: 25px;
  }

  .afternoon_right {
    width: 350px;
    height: 176px;
    /*border: 1px solid red;*/
    float: left;
  }
  /*资产总额开始的总div行*/
  .afternoon_top {
    width: 888px;
    height: 140px;
    /*border: 1px solid red;*/
  }

  .afternoon_top_com {
    width: 222px;
    height: 140px;
    /*border: 1px solid red;*/
    float: left;
  }

  .afternoon_top_com_sizi, .afternoon_top_com_huozi {
    width: 222px;
    height: 70px;
    /*border: 1px solid red;*/
    line-height: 70px;
    text-align: center;
  }

  .fontsize26 {
    font-size: 26px;
  }

  .afternoon_top_com_sizi img {
    vertical-align: middle;
  }

  .afternoon_bottom {
    width: 888px;
    height: 36px;
    /*border: 1px solid red;*/
  }

  .afternoon_bottom img {
    width: 100%;
  }
  /*最近投资记录*/
  .touzi_jilu {
    width: 888px;
    height: 430px;
    /*border: 1px solid red;*/
    background: #fff;
    margin-top: 30px;
  }

  .touzi_jilu_center {
    width: 828px;
    height: 400px;
    /*border: 1px solid red;*/
    margin: auto;
  }

  .touzi_jilu_center_top {
    width: 828px;
    height: 55px;
    /*border: 1px solid red;*/
  }

  .touzi_jilu_center_top_left {
    width: 414px;
    height: 55px;
    /*border: 1px solid red;*/
    float: left;
    line-height: 55px;
  }

  .touzi_jilu_center_top_right {
    width: 390px;
    height: 55px;
    /*border: 1px solid red;*/
    float: left;
    line-height: 55px;
  }

  .touzi_jilu_center_top_left {
    font-size: 16px;
    color: #333333;
    font-weight: bold;
  }

  .touzi_jilu_center_top_right {
    font-size: 14px;
    text-align: right;
    font-weight: bold;
  }

  .touzi_jilu_center_top_right a {
    text-decoration: none;
    color: #E6A845;
  }

  .touzi_jilu_center_middle {
    width: 828px;
    height: 32px;
    /*border: 1px solid red;*/
    background: #FAFAFA;
  }

  .touzi_mingcheng {
    width: 170px;
    height: 32px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_mingcheng2 {
    width: 170px;
    height: 50px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_shouyi, .touzi_qixian {
    width: 105px;
    height: 32px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_shouyi2, .touzi_qixian2 {
    width: 105px;
    height: 50px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_jine {
    width: 160px;
    height: 32px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_jine2 {
    width: 160px;
    height: 50px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_shijian {
    width: 148px;
    height: 32px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_shijian2 {
    width: 148px;
    height: 50px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_zhuangtai {
    width: 140px;
    height: 32px;
    /*border: 1px solid red;*/
    float: left;
  }

  .touzi_zhuangtai2 {
    width: 140px;
    height: 50px;
    /*border: 1px solid red;*/
    float: left;
  }

  .gt_css {
    text-align: center;
    line-height: 32px;
    color: #666666;
    font-size: 14px;
  }

  .gt_css2 {
    text-align: center;
    line-height: 50px;
    color: #333333;
    font-size: 12px;
  }

  .touzi_jilu_center_bottom {
    width: 828px;
    height: 313px;
    /*border: 1px solid red;*/
    overflow: hidden;
  }

  .touzi_jilu_center_bottom_every {
    width: 828px;
    height: 50px;
    border-bottom: 1px solid #E6E6E6;
  }
</style>
