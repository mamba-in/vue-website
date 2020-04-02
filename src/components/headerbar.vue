<template>
	<el-row class="por">
    <div class="sign_background width_per100 poa" v-if="showSignBackground">
      <!--sign_step1-->
      <div class="sign_step1_wrap poa" style="display: block;" v-if="showStep1">
        <el-row>
          <el-col><img class="fr mt20 mr20 cursor" @click="killStep1" src="../assets/img/sign/close.png"></el-col>
        </el-row>
        <el-row class="sign_mainpart">
          <el-col :span="24" class="sign_title ml-10">
            <el-col :span="6" :offset="7" class="pad_left20">蜂硕金融</el-col>
            <el-col :span="1" class="mt-15" style="font-size: 30px;">.</el-col>
            <el-col :span="4" class="pad_right25">注册</el-col>
          </el-col>
          <el-col class="sign_desc mt15">欢迎来到蜂硕金融，请使用账号及密码进行注册</el-col>
          <el-col :span="24"><input class="id_input mt60" type="text" placeholder="请输入您的手机号" v-model="signPhone" @focus="id_focus" @blur="id_blur"></el-col>
          <el-col class="set_password mt20">登录密码</el-col>
          <el-col :span="24"><input class="password_input mt20" type="text" placeholder="密码为6到16位的字母数字下划线" v-model="setPassword" @focus="password_focus" @blur="password_blur"></el-col>
          <el-col class="mr5 mt-25" :span="1" style="float: right;"><img class="eyesImg cursor" @click="hidePassword" :src="eyes"></el-col>
          <el-col class="referrer_box mt60">
            <span class="ft14">推荐人手机号码</span>
            <span class="ft12">（选填）</span>
            <span class="unfoldStyle cursor inblk"><img src="../assets/img/index_active/unfold.png"></span>
            <input type="text" class="referrer_tel cursor" v-model="inviterTel" @focus="input_unfold" @blur="input_fold">
          </el-col>
          <el-col class="sign_btn ft16 mt40 cursor" @click.native="go_step2" @keydown.13.native="go_step2">马上注册</el-col>
          <el-col class="ft12 mt25 txc" style="color:rgba(119,119,119,1);">您的信息已使用SSL加密技术，数据传输安全</el-col>
          <el-col class="ft14 mt40">
            <el-col :span="8"><span>已有账号？</span><span class="go_login cursor" @click="go_login" style="color: rgba(4, 126, 251, 1)">立即登录</span></el-col>
            <el-col class="txr" :span="8" :offset="8"><span>短信验证码</span><span class="cursor" @click="go_signQuick" style="color: rgba(4, 126, 251, 1)">快速登录</span></el-col>
          </el-col>
        </el-row>
      </div>
      <!--login-->
      <div class="login_wrap poa" v-if="showLoginWrap">
        <el-row>
          <el-col><img class="fr mt20 mr20 cursor" @click="killLogin" src="../assets/img/sign/close.png"></el-col>
        </el-row>
        <el-row class="sign_mainpart">
          <el-col :span="24" class="sign_title ml-10">
            <el-col :span="6" :offset="7" class="pad_left20">蜂硕金融</el-col>
            <el-col :span="1" class="mt-15" style="font-size: 30px;">.</el-col>
            <el-col :span="4" class="pad_right25">登录</el-col>
          </el-col>
          <el-col class="sign_desc mt15">欢迎来到蜂硕金融，请使用账号及密码进行登录</el-col>
          <el-col :span="24"><input class="id_input mt60" type="text" placeholder="请输入您的手机号" v-model="loginPhone" @focus="id_focus" @blur="loginId_blur"></el-col>
          <el-col class="login_tips ft12 color_red mt40"></el-col>
          <el-col class="step2_imgCode mt40" v-if="showImgCode">
            <input class="step2_imgInput mt25" type="text" placeholder="请输入图片验证码" v-model="imgValue" @focus="step2_img_focus" @blur="step2_img_blur">
            <img class="step2_Img fr" :src="imgCode" alt="">
          </el-col>
          <el-col :span="24"><input class="loginPassword_input mt55" type="text" placeholder="请输入您的密码" v-model="loginPassword" @focus="password_focus" @blur="password_blur"></el-col>
          <el-col class="mr5 mt-25" :span="1" style="float: right;"><img class="eyesImg cursor"  @click="hideLoginPassword" :src="eyes"></el-col>
          <el-col class="mt15"><span class="ft14 color_blue cursor fr">忘记密码</span></el-col>
          <el-col class="sign_btn ft16 mt40 cursor" @click.native="go_index" @keydown.enter.prevent="go_index">立即登录</el-col>
          <el-col class="ft12 mt25 txc" style="color:rgba(119,119,119,1);">您的信息已使用SSL加密技术，数据传输安全</el-col>
          <el-col class="ft14 mt70 mb20">
            <el-col :span="8"><span>没有账号？</span><span class="cursor color_blue" @click="go_signNormal">立即注册</span></el-col>
            <el-col class="txr" :span="8" :offset="8"><span>短信验证码</span><span class="color_blue cursor" @click="go_signQuick">快速登录</span></el-col>
          </el-col>
        </el-row>
      </div>
      <!--loginQuick-->
      <!--<div class="login_quick_wrap poa" style="display: none;">-->
        <!--<el-row>-->
          <!--<el-col><img class="fr mt20 mr20 cursor" @click="showSign" src="../assets/img/sign/close.png"></el-col>-->
        <!--</el-row>-->
        <!--<el-row class="sign_mainpart">-->
          <!--<el-col :span="24" class="sign_title ml-10">-->
            <!--<el-col :span="6" :offset="6">蜂硕金融</el-col>-->
            <!--<el-col :span="1" class="mt-15 ml-10" style="font-size: 30px;">.</el-col>-->
            <!--<el-col :span="6" class="pad_right25">快速登录</el-col>-->
          <!--</el-col>-->
          <!--<el-col class="sign_desc mt15">欢迎回来，使用短信验证即可登录，未注册将自动创建蜂硕金融账号</el-col>-->
          <!--<el-col class="signQuick_tips ft12 color_red mt40"></el-col>-->
          <!--&lt;!&ndash;<el-col :span="24"><input class="mt20" type="text" placeholder="请输入您的手机号" @focus="signQuick_focus" @blur="signQuick_blur"></el-col>&ndash;&gt;-->
          <!--<el-col :span="24" class="signQuick_msg_box mt55">-->
            <!--&lt;!&ndash;<input class="" type="text" placeholder="请输入短信验证码" @focus="signQuick_msg_focus" @blur="signQuick_msg_blur">&ndash;&gt;-->
            <!--<span class="ft14 fr cursor" style="color: rgba(4, 126, 251, 1)">获取验证码</span>-->
          <!--</el-col>-->
          <!--<el-col class="mt40 ft14 txc">-->
            <!--<span class="color_blk">提交表示您已阅读并同意</span>-->
            <!--<span class="color_blue cursor">《蜂硕金融用户注册协议》</span>-->
          <!--</el-col>-->
          <!--<el-col class="signQuick_submit cursor mt25">立即提交</el-col>-->
          <!--<el-col class="ft12 mt25 txc" style="color:rgba(119,119,119,1);">您的信息已使用SSL加密技术，数据传输安全</el-col>-->
          <!--<el-col class="mt70"><span class="ft14 cursor fr color_blue" @click="go_loginNormal">账号密码登录</span></el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <!--sign_step2 普通注册提交页面-->
      <div class="sign_step2_wrap" v-if="showStep2">
        <el-row>
          <el-col><img class="fr mt20 mr20 cursor" @click="killStep2" src="../assets/img/sign/close.png"></el-col>
        </el-row>
        <el-row class="sign_mainpart">
          <el-col :span="24" class="sign_title ml-10">
            <el-col :span="6" :offset="7" class="pad_left20">蜂硕金融</el-col>
            <el-col :span="1" class="mt-15" style="font-size: 30px;">.</el-col>
            <el-col :span="4" class="pad_right25">注册</el-col>
          </el-col>
          <el-col class="sign_desc mt15">请发送短信验证码并输入以验证您的身份</el-col>
          <el-col :span="24" class="step2_tel mt40" style="color: rgba(204,204,204,1);">
            <input class="step2_tel_input" style="border-bottom: none;" type="text" v-model="signPhone" readonly="readonly">
            <span class="ft14 fr cursor" @click="res_step1">修改</span>
          </el-col>
          <el-col class="step2_imgCode mt35" v-if="showImgCode">
            <input class="step2_imgInput mt25" type="text" placeholder="请输入图片验证码" v-model="imgValue" @focus="step2_img_focus" @blur="step2_img_blur">
            <img class="step2_Img fr" :src="imgCode" alt="">
          </el-col>
          <el-col class="step2_tips ft12 color_red mt40"></el-col>
          <el-col :span="24" class="step2_msg_box mt40">
            <input class="step2_msg_input" type="text" placeholder="请输入短信验证码" v-model="phoneCode" @focus="step2_msg_focus" @blur="step2_msg_blur">
            <span class="timer ft14 fr cursor" style="color: rgba(4, 126, 251, 1)" @click="getPhoneCode" :disabled="false">获取验证码</span>
          </el-col>
          <el-col class="submit_btn mt50 cursor" @click.native="go_step3">确认提交</el-col>
        </el-row>
      </div>
      <!--sign_step3-->
      <div class="sign_step3_wrap" v-if="showStep3">
        <el-row>
          <el-col><img class="fr mt20 mr20 cursor" @click="killStep3" src="../assets/img/sign/close.png"></el-col>
        </el-row>
        <el-row class="sign_step3_mainpart">
          <el-row class="sign_ok mt40" style="width: 340px; margin: auto;">
            <el-col :span="4" class="mt15"><img src="../assets/img/sign/success.png" style="width: 47px;height: 47px;" alt=""></el-col>
            <el-col :span="20" class="pad_left10">
              <el-col :span="24" class="ft30">恭喜您，注册成功！</el-col>
              <el-col :span="24" class="ft14 mt10">建议您立即开通上海银行存管账户</el-col>
            </el-col>
          </el-row>
          <el-col class="go_create mt60 cursor" @click.native="goBank">前往开通，为我的资金保驾护航</el-col>
          <el-col class="mt80 txc" style="border-bottom: none;">
            <el-col :span="24" class="ft20">上海银行为蜂硕金融提供资金存管服务</el-col>
            <el-col :span="24" class="ft13 mt10">开户符合监管规定，用户可单独设立密码，交易资金全程由银行监管。</el-col>
          </el-col>
          <el-col v-show="false">
            <form id="form" action="https://hubk.lanmaoly.com/bha-neo-app/lanmaotech/gateway" method="post">
              <input type="text" name="serviceName" value="PERSONAL_REGISTER_EXPAND"/><br>
              <input type="text" name="platformNo" value="9100002352"/><br>
              <input type="text" name="keySerial" value="1"/><br>
              <input type="text" name="sign" v-model="bindCardSign" id = "sign"/><br>
              <textarea name = "reqData" v-model="bindCardReqData" id="reqData"></textarea><br>
            </form>
          </el-col>
        </el-row>
      </div>
      <!--sign_quick-->
      <div class="sign_quick_wrap poa" v-if="showQuick">
        <el-row>
          <el-col><img class="fr mt20 mr20 cursor" @click="killSignQuick" src="../assets/img/sign/close.png"></el-col>
        </el-row>
        <el-row class="sign_mainpart">
          <el-col :span="24" class="sign_title ml-10">
            <el-col :span="6" :offset="6">蜂硕金融</el-col>
            <el-col :span="1" class="mt-15" style="font-size: 30px;">.</el-col>
            <el-col :span="6" class="pad_right25">快速登录</el-col>
          </el-col>
          <el-col class="sign_desc mt15">欢迎回来，使用短信验证即可登录，未注册将自动创建蜂硕金融账号</el-col>
          <el-col class="signQuick_tips ft12 color_red mt40"></el-col>
          <el-col :span="24"><input class="signQuick_tel_input mt20" type="text" placeholder="请输入您的手机号" v-model="quickPhone" @focus="signQuick_focus" @blur="signQuick_blur"></el-col>
          <el-col class="signQuick_imgCode mt35" v-if="showImgCode">
            <input class="signQuick_imgInput mt25" type="text" placeholder="请输入图片验证码" v-model="imgValueQuick" @focus="signQuick_img_focus" @blur="signQuick_img_blur">
            <img class="signQuick_Img fr" :src="imgCode" alt="">
          </el-col>
          <el-col :span="24" class="signQuick_msg_box mt55">
            <input class="signQuick_msg_input" type="text" placeholder="请输入短信验证码" v-model="quickPhoneCode" @focus="signQuick_msg_focus" @blur="signQuick_msg_blur">
            <span class="timerQuick ft14 fr cursor" style="color: rgba(4, 126, 251, 1)" @click="getPhoneCodeQuick">获取验证码</span>
          </el-col>
          <el-col class="referrer_box mt40" v-if="showInviter">
            <span class="ft14">推荐人手机号码</span>
            <span class="ft12">（选填）</span>
            <span class="unfoldStyle cursor inblk"><img src="../assets/img/index_active/unfold.png"></span>
            <input type="text" class="referrer_tel cursor" v-model="quickInviter" @focus="input_unfold" @blur="quickInput_fold">
          </el-col>
          <el-col class="mt40 ft14 txc">
            <span class="color_blk">提交表示您已阅读并同意</span>
            <span class="color_blue cursor">《蜂硕金融用户注册协议》</span>
          </el-col>
          <el-col class="signQuick_submit cursor mt25" @click.native="quickSubmit">立即提交</el-col>
          <el-col class="ft12 mt25 txc" style="color:rgba(119,119,119,1);">您的信息已使用SSL加密技术，数据传输安全</el-col>
          <el-col class="mt10"><span class="ft14 cursor fr color_blue" @click="res_login">账号密码登录</span></el-col>
        </el-row>
      </div>
    </div>
    <!--header开始-->
		<div :style="{background:'url('+headerImg.header+')'}" class="header_wrap" @mouseenter="header_mouseenter" @mouseleave="header_mouseleave">
      <div class="topbar_wrap width_per100">
        <div class="topbar width_per60">
          <el-row class="top_content">
            <el-col :span="24">
              <div class="topbar_left fl">
                <span><img :src="tel"></span>
                <span>客服电话: 400 022 9500（9:00-17:00）</span>
              </div>
              <div class="topbar_right fr">
                <el-row :gutter="5">
                  <el-col :span='6' class="cursor">手机客户端</el-col>
                  <el-col :span='6' class="cursor">最新活动</el-col>
                  <el-col :span='6' class="cursor">帮助中心</el-col>
                  <el-col :span='6'>
                    <span class="cursor" @click="showSign">注册</span>
                    <span class="pad_left3 pad_right3">|</span>
                    <span class="cursor" @click="showLogin">登录</span>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="nav_wrap width_per100">
        <div class="nav width_per60">
          <el-row>
            <el-col :span='8'>
              <div class="logo fl">
                <a href=""><img class="logoSrc" :src='logo'></a>
                <span class="pad_left15">用心守护您的每一份投资</span>
              </div>
            </el-col>
            <el-col :span='8' :offset='1'>
              <el-row :gutter='10' class='nav_middle'>
                <el-col :span='6' class="cursor"><router-link :style="{color:routerColor.color}" to="/">首页</router-link><span class="nav_line"></span></el-col>
                <el-col :span='6' class="cursor">我要投资<img :src="unfold" class="pad_left5" alt=""><span class="nav_line" style="display:none;"></span></el-col>
                <el-col :span='6' class="cursor">信息披露<img :src="unfold" class="pad_left5" alt=""><span class="nav_line" style="display:none;"></span></el-col>
                <el-col :span='6' class="cursor">安全保障<span class="nav_line" style="display:none;"></span></el-col>
              </el-row>
            </el-col>
            <el-col :span='3' :offset='4' class="user">
              <el-row :gutter='15'>
                <el-col :span='2' :offset='4' style='margin-top: -2px;'><img :src="user" style="width:24px;height: 24px;"></el-col>
                <el-col :span='12' :offset='2' @click.native="hideUsers"><router-link class="my_user color_wt" to="/personalCenter" @click.native="getToken">我的账户</router-link></el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
		<div class="width_per100 por" style="height: 1px; background-color:rgba(255,255,255,1); "></div>
    <el-row class='join_part mt55' v-if="joinPart">
      <el-col :span='24' class='join_part_line1'>蜂硕金融历史预期年化收益</el-col>
      <el-col :span='24' class='join_part_line2'>
        <span style="font-size:24px;color:rgba(196,145,44,1);">约</span>
        <span class="DIN" style="font-size:40px;color:rgba(196,145,44,1);">16.00%</span>
      </el-col>
      <el-col :span='24' class='join_part_line3'>立即加入领取好礼</el-col>
      <el-col :span='24' class='join_part_line4'>
        <span class="join_part_line4_left">已有账号？</span><span class="join_part_line4_right cursor color_blue" @click="showLogin">立即登录</span>
      </el-col>
    </el-row>
    <div class="clear"></div>
	</el-row>
</template>

<script type="text/javascript">
  import Bus from '../assets/js/bus.js'
  import Vue from 'vue'
  import  VueResource  from 'vue-resource'
  Vue.use(VueResource);
  var PAGE;
  var signGoStep2Flag = true;
export default {
  data () {
    return {
      isShow: false, //登录注册控制
      joinPart:true, //立即加入控制
      showImgCode: false, //图形验证码
      showInviter:false,  //显示邀请人手机号
      showSignBackground: false,
      showStep1: false,
      showStep2: false,
      showStep3: false,
      showQuick: false,
      showLoginWrap: false,
      // header style
      headerImgs: [{header:require('../assets/img/index/header.png')},{header:require('../assets/img/index_active/header.png')}],
      headerImg: '',
      logoSrc:[{logo:require('../assets/img/index/logo.png')},{logo:require('../assets/img/index_active/logo.png')}],
      telSrc:[{tel:require('../assets/img/index/tel.png')},{tel:require('../assets/img/index_active/tel.png')}],
      userSrc:[{user:require('../assets/img/index/user.png')},{user:require('../assets/img/index_active/user.png')}],
      unfoldSrc:[{unfold:require('../assets/img/index/open.png')},{unfold:require('../assets/img/index_active/unfold.png')}],
      eyesImg:[{eyes:require('../assets/img/sign/eyes_off.png')},{eyes:require('../assets/img/sign/eyes_on.png')}],
      eyes:'', // 显示隐藏密码
      logo: '',
      logo_active: '',
      tel:'',
      tel_active:'',
      user:'',
      user_active:'',
      unfold:'',
      unfold_active:'',
      header:'',
      header_active:'',
      // header style end
      signPhone:'', // 正常注册手机号
      loginPhone: '', // 正常登录手机号
      quickPhone:'', // 快速注册手机号
      setPassword: '',
      loginPassword:'',
      signGoStep2Flag1:true,
      signGoStep2Flag2:true,
      signGoStep2Flag3:true,
      routerColor:'', //路由导航字体样式
      routerColors:[{color:'white'},{color:'#444444'}],
      phoneCodeId:'', //短信验证码ID
      phoneCode:'', //短信验证码
      quickPhoneCode:'', //快速注册短信验证码
      imgCodeId: '', //图形验证码ID
      imgCode: '',  // 图形验证码src
      imgValue:'', //图形验证码
      imgValueQuick:'', //快速注册图形验证码
      graphId:'',
      graphCode:'',
      inviterTel:'', //推荐人手机号
      quickInviter:'', //快速注册推荐人手机号
      token: '',
      bindCardSign: '', // 银行sign
      bindCardReqData: '', // 银行reqData
      flag:false,
    }
  },
  mounted:function(){
//    alert('mounted in')
  },
  created:function(){
//    alert('created')
    PAGE = this;
    PAGE.logo = PAGE.logoSrc[0].logo;  //logo control
    PAGE.logo_active = PAGE.logoSrc[1].logo;
    PAGE.tel = PAGE.telSrc[0].tel;  //tel control
    PAGE.tel_active = PAGE.telSrc[1].tel;
    PAGE.user = PAGE.userSrc[0].user;  //user control
    PAGE.user_active = PAGE.userSrc[1].user;
    PAGE.unfold = PAGE.unfoldSrc[0].unfold;  //unfold control
    PAGE.unfold_active = PAGE.unfoldSrc[1].unfold;
    PAGE.header = PAGE.headerImgs[0].header;
    PAGE.header_active = PAGE.headerImgs[1].header;
    PAGE.headerImg = PAGE.headerImgs[0];
    PAGE.routerColor = PAGE.routerColors[0];
    PAGE.eyes = PAGE.eyesImg[0].eyes;
  },
  methods:{
    //隐藏baner上的立即加入部分
    hideUsers:function(){
      PAGE.joinPart=false;
    },
    //header交互
    header_mouseenter:function(){
      PAGE.logo = PAGE.logoSrc[1].logo;
      PAGE.tel = PAGE.telSrc[1].tel;
      PAGE.user = PAGE.userSrc[1].user;
      PAGE.unfold = PAGE.unfoldSrc[1].unfold;
      PAGE.headerImg = PAGE.headerImgs[1];
      PAGE.routerColor = PAGE.routerColors[1];
      $('.topbar_left').css('color','#444444'); //字体变黑
      $('.topbar_right').css('color','#444444'); //字体变黑
      $('.logo').css('color','#444444'); //字体变黑
      $('.nav_middle').css('color','#444444'); //字体变黑
      $('.my_user').css('color','#444444'); //字体变黑
      $('.user').css('border-color','#444444'); //我的账户边框变黑
      $('.nav_line').css('background','rgba(230, 168, 69, 1)'); //导航线条变色
  },
    header_mouseleave:function(){
      PAGE.logo = PAGE.logoSrc[0].logo;
      PAGE.tel = PAGE.telSrc[0].tel;
      PAGE.user = PAGE.userSrc[0].user;
      PAGE.unfold = PAGE.unfoldSrc[0].unfold;
      PAGE.headerImg = PAGE.headerImgs[0];
      PAGE.routerColor = PAGE.routerColors[0];
      $('.topbar_left').css('color','#ffffff'); //字体恢复
      $('.topbar_right').css('color','#ffffff');
      $('.logo').css('color','#ffffff');
      $('.nav_middle').css('color','#ffffff');
      $('.my_user').css('color','#ffffff');
      $('.user').css('border-color','#ffffff');
      $('.nav_line').css('background','#ffffff');
    },
    //导航注册按钮
    showSign:function(){
      // PAGE.isShow = !PAGE.isShow;
      // $('.sign_step1_wrap').css('display','block');
      // $('.sign_step2_wrap').css('display','none');
      // $('.sign_step3_wrap').css('display','none');
      // $('.sign_quick_wrap').css('display','none');
      // $('.login_wrap').css('display','none');
      PAGE.showSignBackground = true;
      PAGE.showStep1 = true;
      PAGE.signPhone = '';
      PAGE.setPassword = '';
    },
    showLogin:function(){
      // PAGE.isShow = !PAGE.isShow;
      // $('.login_wrap').css('display','block');
      PAGE.showSignBackground = true;
      PAGE.showLoginWrap = true;
      PAGE.loginPhone = '';
      PAGE.loginPassword = '';
    },
    killStep1:function(){
      PAGE.showSignBackground = false;
      PAGE.showStep1 = false;
    },
    killStep2:function(){
      PAGE.showSignBackground = false;
      PAGE.showStep2 = false;
    },
    killStep3:function(){
      PAGE.showSignBackground = false;
      PAGE.showStep3 = false;
    },
    killLogin:function(){
      PAGE.showSignBackground = false;
      PAGE.showLoginWrap = false;
    },
    killSignQuick:function(){
      PAGE.showSignBackground = false;
      PAGE.showQuick = false;
    },
    // 正常注册开始
    id_focus:function(){
      $('.id_input').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    id_blur:function(){
      // 手机号用户名判定
      var regPhone = /^1([358][0-9]|47|7[0789])[0-9]{8}$/;
      // var regId = /^[A-z_][A-z_0-9]{5,18}/;
      $('.id_input').css('border-bottom','1px solid rgba(153, 153, 153, 1)');//border恢复正常
      if(!regPhone.test($('.id_input').val())){
        $('.set_password').html('请您输入正确的手机号');
        $('.set_password').css('color','red');
      }else{
        $('.set_password').html('登录密码');
        $('.set_password').css('color','rgba(204,204,204,1)');
      }
      // 判断用户是否存在
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/verifyAccount',{
        cellphone: PAGE.signPhone,
      },{
        emulateJSON:true
      }).then(function (res) {
        console.log(res.data.resultCode+'------Code码')
        console.log(res.data.resultMessage+'------res信息')
        if(res.data.resultCode === '20001'){
          signGoStep2Flag = false;
          $('.set_password').html(res.data.resultMessage);
          $('.set_password').css('color','red');
        }else if(res.data.resultCode === '0'){
          signGoStep2Flag = true;
          $('.set_password').html('')
          console.log('用户不存在，可以注册');
        }
      },function (res) {

      })
    },
    password_focus:function(){
      $('.password_input').css('border-bottom','2px solid rgba(252, 165, 54, 1)');
    },
    password_blur:function(){
      //密码判定
      var regPassword = /^[A-z0-9_]{6,16}$/;
      $('.password_input').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      if(!regPassword.test($('.password_input').val())){
        $('.set_password').html('请您输入正确的密码格式');
        $('.set_password').css('color','red');
      }else{
        $('.set_password').html('登录密码');
        $('.set_password').css('color','rgba(204,204,204,1)');
      }
    },
    //密码显示隐藏
    hidePassword:function(){
      // $('.eyesImg').attr('src','../assets/img/sign/close.png');
      if($('.password_input').attr('type') == 'text'){
        $('.password_input').attr('type','password');
        PAGE.eyes = PAGE.eyesImg[1].eyes;
      }else{
        $('.password_input').attr('type','text');
        PAGE.eyes = PAGE.eyesImg[0].eyes;
      }
    },
    //推荐人手机号
    input_unfold:function(){
      $('.unfoldStyle').css({transform:'rotate(180deg)',float:'right'});
      $('.referrer_box').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
    },
    input_fold:function(){
      if(PAGE.inviterTel !== ''){
        // 判断邀请人是否存在
        PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/verifyInviter',{
          inviterCellphone: PAGE.inviterTel,
        },{
          emulateJSON:true
        }).then(function (res) {
          console.log('errorCode:'+res.data.resultCode)
          if(res.data.resultCode === '20007'){
            signGoStep2Flag = false;
            $('.set_password').html(res.data.resultMessage);
            $('.set_password').css('color','red');
          }else if(res.data.resultCode === '0'){
            signGoStep2Flag = true;
            console.log('in inviterCode---0')
          }
        },function (res) {

        })
      }else if(PAGE.inviterTel === ''){
        $('.unfoldStyle').css({transform:'rotate(0deg)',float:'none'});
        $('.referrer_box').css('border-bottom','none');
        signGoStep2Flag = true;
      }
    },
    quickInput_fold:function(){
      if(PAGE.quickInviter !== ''){
        // 判断邀请人是否存在
        PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/verifyInviter',{
          inviterCellphone: PAGE.quickInviter,
        },{
          emulateJSON:true
        }).then(function (res) {
          console.log('errorCode:'+res.data.resultCode)
          if(res.data.resultCode === '20007'){
            signGoStep2Flag = false;
            $('.signQuick_tips').html(res.data.resultMessage);
            $('.signQuick_tips').css('color','red');
          }else if(res.data.resultCode === '0'){
            signGoStep2Flag = true;
            console.log('in inviterCode---0')
          }
        },function (res) {

        })
      }else if(PAGE.quickInviter === ''){
        $('.unfoldStyle').css({transform:'rotate(0deg)',float:'none'});
        $('.referrer_box').css('border-bottom','none');
        signGoStep2Flag = true;
      }
    },
    //点击修改返回sign_step1
    res_step1:function(){
      // $('.sign_step1_wrap').css('display','block');
      // $('.sign_step2_wrap').css('display','none');
      PAGE.showStep1 = true;
      PAGE.showStep2 = false;
    },
    //sign_step2
    go_step2:function(){
      var regPhone = /^1([358][0-9]|47|7[0789])[0-9]{8}$/;
      var regPassword = /^[A-z0-9_]{6,16}$/;
      if(!(regPhone.test($('.id_input').val()) && regPassword.test($('.password_input').val()))){
        // $('.sign_step1_wrap').css('display','none');
        // $('.sign_step2_wrap').css('display','block');
        $('.set_password').html('请输入正确的用户名和密码进行注册');
        $('.set_password').css('color','red');
        signGoStep2Flag = false;
      }else if(regPhone.test($('.id_input').val()) && regPassword.test($('.password_input').val())){
        // // 判断用户是否存在
        // PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/verifyAccount',{
        //   cellphone: PAGE.signPhone,
        // },{
        //   emulateJSON:true
        // }).then(function (res) {
        //   console.log(res.data.resultCode+'------Code码')
        //   console.log(res.data.resultMessage+'------res信息')
        //   console.log('lllkkkkkkkkkk')
        //   if(res.data.resultCode === '20001'){
        //     $('.set_password').html(res.data.resultMessage);
        //     signGoStep2Flag = false;
        //   }else if(res.data.resultCode === '0'){
        //     $('.set_password').html('');
        //     signGoStep2Flag = true;
        //     console.log('i got here')
        //   }
        // },function (res) {
        //
        // });
        if(signGoStep2Flag){
          console.log('i got go')
          PAGE.showStep1 = false;
          PAGE.showStep2 = true;
        }
      }
    },
    //go_login
    go_login:function () {
      // $('.sign_step1_wrap').css('display','none');
      // $('.login_wrap').css('display','block');
      PAGE.showStep1 = false;
      PAGE.showLoginWrap = true;
    },
    go_loginNormal:function(){
      $('.login_wrap').css('display','block');
      $('.login_quick_wrap').css('display','none');
    },
    //获取短信验证码
    getPhoneCode:function(){
      console.log(PAGE.signPhone);
      $('.timer').html('3');
      var timer;
      var num =3;
      if($('.timer').html() >0 & $('.timer').html() <=3){
        PAGE.flag = true;
        timer = setInterval(function djs(){
          num--;
          $('.timer').html(num);
          while($('.timer').html()<0){
            $('.timer').html('获取验证码');
            clearInterval(timer);
            PAGE.flag = false;
          }
        },1000);
      }
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/sms/auth',{
        cellphone: PAGE.signPhone,
        operationType:'login',
      },{
        emulateJSON:true
      }).then(function(res){
        PAGE.phoneCodeId = res.data.resultData;
        console.log(PAGE.phoneCodeId);
        if(res.data.resultCode === '1004'){
          console.log(res.data.resultMessage);
          $('.step2_tips').html(res.data.resultMessage);
        }
        else if(res.data.resultCode === '1003'){
          console.log(res.data.resultMessage+'....3more');
          $('.step2_tips').html(res.data.resultMessage);
          PAGE.showImgCode = true;
          PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/graph')
            .then(function(res){
              PAGE.imgCodeId = res.data.resultData;
              console.log(PAGE.imgCodeId);
            },function(res){
              console.log(res.data.resultCode);
            });
          PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/graphId='+PAGE.imgCodeId)
            .then(function(res){
              PAGE.imgCode ='https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/'+PAGE.imgCodeId;
              console.log(PAGE.imgCode+'img src');
            },function(){

            })
        }
      },function(res){
        console.log(res.status);
      });
    },
    //go_step3 点击确认提交跳转注册成功页
    go_step3:function(){
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/register', {
          cellphone:PAGE.signPhone,
          password: PAGE.setPassword,
          smsId: PAGE.phoneCodeId,
          smsCode: PAGE.phoneCode,
          graphId: PAGE.imgCodeId,
          graphCode: PAGE.imgValue,
          inviterCellphone: PAGE.inviterTel,
          userRole: 'INVESTOR'
        },
        {emulateJSON:true})
        .then(function(res){
          if(res.data.resultCode === '0'){
            console.log('sign success')
            // $('.sign_step1_wrap').css('display','none');
            // $('.sign_step2_wrap').css('display','none');
            // $('.sign_step3_wrap').css('display','block');
            // PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/quick',
            //   {
            //     cellphone:PAGE.signPhone,
            //     smsId: PAGE.phoneCodeId,
            //     smsCode: PAGE.phoneCode,
            //     graphId: PAGE.imgCodeId,
            //     graphCode: PAGE.imgValue
            //   },
            //   {
            //     emulateJSON: true
            //   }).then(function(res){
            //   PAGE.token = res.data.resultData;
            //   console.log(PAGE.token+'------token')
            // },function(){
            //
            // })
            PAGE.token = res.data.resultData;
            sessionStorage.setItem('token',PAGE.token);
            console.log(PAGE.token+'------token')
            console.log(res.data.userRole)
            PAGE.$options.methods.bindCard()
            // alert('token')
          }else{
            console.log(res.data.resultMessage+'不成功原因');
            console.log('in third ....')
            if(res.data.resultCode === '1' || res.data.resultCode === '1001' || res.data.resultCode === '1002' || res.data.resultCode === '2001' || res.data.resultCode === '2002' || res.data.resultCode === '20007'){
              console.log('in fail')
              console.log(res.data.resultMessage);
              console.log(res.data.resultCode);
              $('.step2_tips').html(res.data.resultMessage);
            }
          }
        },function(res){
          console.log(res.data.resultMessage+'......请求失败');
        });

    },
    bindCard:function(){
      // 取到token 调bindCard接口
      // let myRequest = {
      //   userRole:'INVESTOR',
      //   headers:{
      //     'Content-Type':'application/x-www-form-urlencoded',
      //     'token':PAGE.token,
      //   },
      //   emulateJSON:true
      // };
      Vue.http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/bindCard',
        {},
        {
          headers:{
            // 'Content-Type':'application/x-www-form-urlencoded',
            'token':PAGE.token
          }
        },
        {
          emulateJSON : true
        })
        .then(function(res){
          console.log(res);
          console.log(res.data.resultData+'-------resultData');
          PAGE.bindCardSign = res.data.resultData.sign;
          PAGE.bindCardReqData = res.data.resultData.reqData;
          // $("#reqData").val(res.data.resultData.reqMap);
          // $("#sign").val(res.data.resultData.sign);
          PAGE.showStep2 = false;
          PAGE.showStep3 = true;
        },function(res){
          console.log(res.data.resultMessage+'------resMessage')
          console.log(PAGE.token+'--------------token')
        });
    },
    // 正常注册结束


    // 发送token到个人中心
//    getToken:function(){
//      alert(this.token+'----------lL')
////      Bus.$emit('token',this.token);  // 向个人中心发送token
//        sessionStorage.setItem('token',PAGE.token);
//    },

    //正常登录
    loginId_blur:function(){  // 失焦判断用户是否存在
      // 手机号用户名判定
      var regPhone = /^1([358][0-9]|47|7[0789])[0-9]{8}$/;
      // var regId = /^[A-z_][A-z_0-9]{5,18}/;
      $('.id_input').css('border-bottom','1px solid rgba(153, 153, 153, 1)');//border恢复正常
      if(!regPhone.test($('.id_input').val())){
        $('.login_tips').html('请您输入正确的手机号');
        $('.login_tips').css('color','red');
      }else{
        $('.login_tips').html('');
        // $('.set_password').css('color','rgba(204,204,204,1)');
      }
      // 判断用户是否存在
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/loginCheck',{
        cellphone: PAGE.loginPhone,
      },{
        emulateJSON:true
      }).then(function (res) {
        console.log(res.data.resultCode+'------错误码')
        console.log(res.data.resultMessage+'------错误信息')
        if(res.data.resultCode === '20002'){
          $('.login_tips').html(res.data.resultMessage);
        }else if(res.data.resultCode === '0'){
          $('.login_tips').html('')
        }
      },function (res) {

      })
    },
    go_index:function(){
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/login',
        {
          cellphone:PAGE.loginPhone,
          password: PAGE.loginPassword,
          graphId: PAGE.imgCodeId,
          graphCode: PAGE.imgValue
        },
        {
          emulateJSON: true
        })
        .then(function(res){
          if(res.data.resultCode === '0'){
            // PAGE.isShow = false;
            // $('.sign_step1_wrap').css('display','none');
            // $('.sign_step2_wrap').css('display','none');
            // $('.sign_step3_wrap').css('display','none');
            // $('.sign_quick_wrap').css('display','none');
            // $('.login_wrap').css('display','none');
            PAGE.showSignBackground = false;
            PAGE.showLoginWrap = false;
            PAGE.token = res.data.resultData;
            Bus.$emit('token',this.token);  // 向个人中心发送token
            alert(PAGE.token)
          }else{
            console.log('errorMessage:'+res.data.resultMessage)
            console.log('errorMessage:'+res.data.resultCode)
            if(res.data.resultCode === '20002' || res.data.resultCode === '20003' || res.data.resultCode === '2001' || res.data.resultCode === '2002'){
              $('.login_tips').html(res.data.resultMessage);
            }else if(res.data.resultCode === '20004'){
              $('.login_tips').html(res.data.resultMessage);
              PAGE.showImgCode = true;
              PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/graph')
                .then(function(res){
                  PAGE.imgCodeId = res.data.resultData;
                  console.log(PAGE.imgCodeId);
                },function(res){
                  console.log(res.data.resultCode);
                });
              PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/graphId='+PAGE.imgCodeId)
                .then(function(res){
                  PAGE.imgCode ='https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/'+PAGE.imgCodeId;
                  console.log(PAGE.imgCode+'img src');
                },function(){

                })
            }
          }
        },function(){

        })
    },
    go_loginQuick:function(){
      $('.login_quick_wrap').css('display','block');
      $('.login_wrap').css('display','none');
    },
    go_signNormal:function(){
      // $('.login_wrap').css('display','none');
      // $('.sign_step1_wrap').css('display','block');
      PAGE.showLoginWrap = false;
      PAGE.showStep1 = true;
    },
    //登录密码显示隐藏
    hideLoginPassword:function(){
      // $('.eyesImg').attr('src','../assets/img/sign/close.png');
      if($('.loginPassword_input').attr('type') == 'text'){
        $('.loginPassword_input').attr('type','password');
        PAGE.eyes = PAGE.eyesImg[1].eyes;
      }else{
        $('.loginPassword_input').attr('type','text');
        PAGE.eyes = PAGE.eyesImg[0].eyes;
      }
    },
    //正常登录结束

    //快速注册开始
    //go_signQuick
    go_signQuick:function () {
      // $('.sign_step1_wrap').css('display','none');
      // $('.sign_step2_wrap').css('display','none');
      // $('.sign_step3_wrap').css('display','none');
      // $('.sign_quick_wrap').css('display','block');
      PAGE.showStep1 = false;
      PAGE.showQuick = true;
      PAGE.quickPhone = '';
      PAGE.quickPhoneCode = '';
    },
    signQuick_focus:function(){
      $('.signQuick_tel_input').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    signQuick_blur:function(){
      // 手机号判定
      var regPhone = /^1([358][0-9]|47|7[0789])[0-9]{8}$/;
      $('.signQuick_tel_input').css('border-bottom','1px solid rgba(153, 153, 153, 1)');//border恢复正常
      if(!regPhone.test($('.signQuick_tel_input').val())){
        // $('.signQuick_tips').css('display','block');
        $('.signQuick_tips').html('请您输入正确的手机号');
        $('.signQuick_tel_input').css('border-bottom','2px solid rgba(230, 0, 0, 1)');
      }else{
        $('.signQuick_tips').html('');
        $('.signQuick_tel_input').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      }
      // 判断用户是否存在
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/checkAccount',{
        cellphone: PAGE.quickPhone,
      },{
        emulateJSON:true
      }).then(function (res) {
        console.log(res.data.resultCode+'快速注册错误码')
        console.log(res.data.resultMessage+'快速注册提示消息')
        if(res.data.resultCode === '0'){
          PAGE.showInviter = true;
        }else if(res.data.resultCode === '20006'){
          $('.signQuick_tips').html('');
        }
      },function (res) {

      })
    },
    //获取快速注册短信验证码
    getPhoneCodeQuick:function(){
      console.log(PAGE.quickPhone);
      $('.timerQuick').html('3');
      var timer;
      var num =3;
      if($('.timerQuick').html() >0 & $('.timerQuick').html() <=3){
        PAGE.flag = true;
        timer = setInterval(function djs(){
          num--;
          $('.timerQuick').html(num);
          while($('.timerQuick').html()<0){
            $('.timerQuick').html('获取验证码');
            clearInterval(timer);
            PAGE.flag = false;
          }
        },1000);
      }
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/sms/auth',{
        cellphone: PAGE.quickPhone,
        operationType:'login',
      },{
        emulateJSON:true
      }).then(function(res){
        PAGE.phoneCodeId = res.data.resultData;
        console.log('短信ID:'+PAGE.phoneCodeId);
        if(res.data.resultCode === '1004'){
          console.log(res.data.resultMessage);
          $('.signQuick_tips').html(res.data.resultMessage);
        }
        else if(res.data.resultCode === '1003'){
          console.log(res.data.resultMessage+'....3more');
          $('.signQuick_tips').html(res.data.resultMessage);
          PAGE.showImgCode = true;
          PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/graph')
            .then(function(res){
              PAGE.imgCodeId = res.data.resultData;
              console.log(PAGE.imgCodeId);
            },function(res){
              console.log(res.data.resultCode);
            });
          PAGE.$http.get('https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/graphId='+PAGE.imgCodeId)
            .then(function(res){
              PAGE.imgCode ='https://www.miguo66.com/BeeRich-3.0.0/verify/showgraph/'+PAGE.imgCodeId;
              console.log(PAGE.imgCode+'img src');
            },function(){

            })
        }
      },function(res){
        console.log(res.status);
      });
    },
    //普通注册图形验证码focus判定
    step2_img_focus:function () {
      $('.step2_imgCode').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    //快速注册图形验证码focus判定
    signQuick_img_focus:function () {
      $('.signQuick_imgCode').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    //普通注册图形验证码blur判定
    step2_img_blur:function(){
      var regPicCode = /^[A-z0-9]{4}$/;
      if(!regPicCode.test($('.step2_imgInput').val())){
        $('.step2_tips').html('请您输入正确的图形验证码');
        $('.step2_imgCode').css('border-bottom','2px solid rgba(230, 0, 0, 1)');
      }else{
        $('.step2_tips').html('');
        $('.step2_imgCode').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      }
    },
    //快速注册图形验证码blur判定
    signQuick_img_blur:function(){
      var regPicCode = /^[A-z0-9]{4}$/;
      if(!regPicCode.test($('.signQuick_imgInput').val())){
        $('.signQuick_tips').html('请您输入正确的图形验证码');
        $('.signQuick_imgCode').css('border-bottom','2px solid rgba(230, 0, 0, 1)');
      }else{
        $('.signQuick_tips').html('');
        $('.signQuick_imgCode').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      }
    },
    //普通注册短信验证码判定
    step2_msg_focus:function(){
      $('.step2_msg_box').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    //快速注册短信验证码判定
    signQuick_msg_focus:function(){
      $('.signQuick_msg_box').css('border-bottom','2px solid rgba(252, 165, 54, 1)'); //border变色
    },
    //普通注册blur短信验证码判定
    step2_msg_blur:function () {
      var regMsgCode = /^[0-9]{6}$/;
      if(!regMsgCode.test($('.step2_msg_input').val())){
        $('.step2_tips').html('请您输入正确的验证码格式');
        $('.step2_msg_box').css('border-bottom','2px solid rgba(230, 0, 0, 1)');
      }else{
        $('.step2_tips').html('');
        $('.step2_msg_box').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      }
    },
    //快速注册blur短信验证码判定
    signQuick_msg_blur:function () {
      var regMsgCode = /^[0-9]{6}$/;
      if(!regMsgCode.test($('.signQuick_msg_input').val())){
        $('.signQuick_tips').html('请您输入正确的验证码格式');
        $('.signQuick_msg_box').css('border-bottom','2px solid rgba(230, 0, 0, 1)');
      }else{
        $('.signQuick_tips').html('');
        $('.signQuick_msg_box').css('border-bottom','1px solid rgba(153, 153, 153, 1)');
      }
    },
    //quickSubmit  快速注册立即提交
    quickSubmit:function(){
      PAGE.$http.post('https://www.miguo66.com/BeeRich-3.0.0/customer/quick', {
          cellphone:PAGE.quickPhone,
          smsId: PAGE.phoneCodeId,
          smsCode: PAGE.quickPhoneCode,
          graphId: PAGE.imgCodeId,
          graphCode: PAGE.imgValueQuick,
          inviterCellphone: PAGE.quickInviter
        },
        {emulateJSON:true})
        .then(function(res){
          if(res.data.resultCode === '0'){
            console.log('in success')
            // PAGE.isShow = false;
            // $('.sign_step1_wrap').css('display','none');
            // $('.sign_step2_wrap').css('display','none');
            // $('.sign_step3_wrap').css('display','none');
            // $('.sign_quick_wrap').css('display','none');
            // $('.login_wrap').css('display','none');
            PAGE.showSignBackground = false;
            PAGE.showQuick = false;
          }else{
            console.log(res.data.resultMessage+'不成功原因');
            console.log('in third ....')
            console.log(res.data.resultCode+'------错误码')
            if(res.data.resultCode === '1' || res.data.resultCode === '1001' || res.data.resultCode === '1002' || res.data.resultCode === '2001' || res.data.resultCode === '2002'){
              console.log('in fail')
              console.log(res.data.resultMessage);
              console.log(res.data.resultCode);
              $('.signQuick_tips').html(res.data.resultMessage);
            }
          }
        },function(res){
          console.log(res.data.resultMessage+'......请求失败');
        })
    },
    //返回账号密码登录
    res_login:function(){
      // $('.sign_quick_wrap').css('display','none');
      // $('.login_wrap').css('display','block');
      PAGE.showQuick = false;
      PAGE.showLoginWrap = true;
    },
  //快速注册结束
    //goBank 开通银行存管
    goBank:function(){
      $('#form').submit();
    }
  }
}
</script>

<style scoped>
/*header*/
.header_wrap{
  /*background: url("../assets/img/index/header.png");*/
}
.topbar_wrap{
  /*background-color: rgba(161, 122, 65, 1);*/
  color: #fff;
  text-align: center;
  /*line-height: 40px;*/
  height: 40px;
}

.topbar_left, .topbar_right{
	height: 40px;
	font:12px "Microsoft Yahei";
	color:rgba(255,255,255,1);
	line-height: 40px;
}
.topbar_right{
	width: 282px;
}
/*topbar end*/

/*nav*/
.nav_wrap{
	/*background: rgba(161, 122, 65, 1);*/
	height: 80px;
}
.nav{
	height: 80px;
	line-height: 80px;
	text-align: center;
}
.logo{
	font-size:14px;
	font-family:Adobe Heiti Std R;
	color:rgba(255,255,255,1);
}
.logo img{
	width:167px;
	height: 49px;
}
.nav_middle{
	font-size:16px;
	font-family:MicrosoftYaHei;
	color:rgba(255,255,255,1);
}
.nav_middle span{
	width:90%;
	height: 4px;
	margin: auto;
	background: rgba(255,255,255,1);
	display: block;
	margin-top: -4.5px;
}
.user{
	width:140px;
	height: 40px;
	border:1px solid rgba(255,255,255,1);
	line-height: 40px;
	margin-top: 19px;
	font-size:14px;
	font-family:MicrosoftYaHei;
	color:rgba(255,255,255,1);
}
/*nav end*/
/*joinpart*/
.join_part{
  width: 240px;
  height:256px;
  background:rgba(255,255,255,1);
  opacity:0.92;
  border-radius: 3px;
  left:50%;
  position: absolute;
  margin-left: 330px;
  z-index: 5;
}
.join_part_line1{
  margin-top: 48px;
  font-size:14px;
  text-align: center;
}
.join_part_line2{
  margin-top: 25px;
  text-align: center;
}
.join_part_line3{
  width:176px;
  height:32px;
  background: rgba(235, 180, 91, 1);
  border-radius: 4px;
  font-size:14px;
  color:rgba(255,255,255,1);
  text-align: center;
  line-height: 32px;
  margin-top: 15px;
  margin-left: 32px;
  letter-spacing: 1px;
}
.join_part_line4{
  margin-top: 13px;
  font-size: 14px;
  text-align: center;
}
.join_part_line4_left{
  color:rgba(119,119,119,1);
}
.join_part_line4_right{
  color: rgba(4, 126, 251, 1);
}
/*joinpart end*/
/*sign_step1 普通注册首页*/
.sign_background{
  min-height: 3737px;
  background: rgba(0,0,0,0.6);
  z-index: 100;
}
.sign_step1_wrap, .sign_quick_wrap, .login_wrap, .login_quick_wrap{
  width: 560px;
  min-height: 560px;
  background: #ffffff;
  position: fixed;
  top: 10%;
  left: 35%;
}
.sign_mainpart{
  width: 430px;
  margin: auto;
}
.sign_title{
  font-size:20px;
  font-family:MicrosoftYaHei;
  color:rgba(68,68,68,1);
  text-align: center;
}
.sign_desc{
  font-size:12px;
  color:rgba(68,68,68,1);
  text-align: center;
}
.id_input, .password_input, .signQuick_tel_input, .loginPassword_input{
  width: 430px;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
  outline: none;
}
.id_input::-webkit-input-placeholder,
.password_input::-webkit-input-placeholder,
.loginPassword_input::-webkit-input-placeholder,
.signQuick_tel_input::-webkit-input-placeholder,
.signQuick_imgInput::-webkit-input-placeholder,
.signQuick_msg_input::-webkit-input-placeholder{
  color:rgba(204,204,204,1);
  font-size: 14px;
}
.referrer_tel{
  width: 200px;
  border: none;
  outline: none;
}
.set_password{
  font-size: 12px;
  color: rgba(204,204,204,1);
}
.sign_btn{
  width: 430px;
  height: 40px;
  background: rgba(255, 150, 0, 1);
  border-radius:4px;
  line-height: 40px;
  text-align: center;
  color:rgba(255,255,255,1);
}
/*sign_step1 end*/
/*sign_step2 普通注册提交页*/
.sign_step2_wrap{
  width: 560px;
  min-height: 500px;
  background: #ffffff;
  position: fixed;
  top: 10%;
  left: 35%;
}
.step2_tel{
  height: 30px;
  border: none;
  /*margin-top: 75px;*/
  border-bottom: 1px solid rgba(153, 153, 153, 1);
}
.step2_tel_input, .signQuick_msg_input, .step2_msg_input{
  width: 300px;
  border: none;
  outline: none;
}
.submit_btn, .go_create, .signQuick_submit{
  width: 430px;
  height: 40px;
  background: rgba(230, 168, 69, 1);
  border-radius:4px;
  line-height: 40px;
  text-align: center;
  color:rgba(255,255,255,1);
}
.step2_imgCode{
  border: none;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
}
.step2_imgInput{
  width: 260px;
  border: none;
  outline: none;
  display: inline-block;
}
.step2_Img{
  width: 160px;
  height: 45px;
  border: 1px solid rgba(153,153,153,1);
  border-bottom: none;
  display: inline-block;
}
.step2_msg_box{
  border: none;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
}
/*sign_step2 end*/
/*sign_step3 注册成功页*/
.sign_step3_wrap{
  width: 560px;
  height: 448px;
  background: #ffffff;
  position: fixed;
  top: 10%;
  left: 35%;
}
.sign_step3_mainpart{
  width: 430px;
  margin: auto;
}
/*sign_step3 end*/

/*sign_quick 快速注册*/
.signQuick_imgCode{
  border: none;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
}
.signQuick_imgInput{
  width: 260px;
  border: none;
  outline: none;
  display: inline-block;
}
.signQuick_Img{
  width: 160px;
  height: 45px;
  border: 1px solid rgba(153,153,153,1);
  border-bottom: none;
  display: inline-block;
}
.signQuick_msg_box{
  border: none;
  border-bottom: 1px solid rgba(153, 153, 153, 1);
}

/*sign_quick end*/
</style>
