<template>
	<el-row style='margin-top: 10px;'>
		<div class="mid_wrap width_per100">
			<div class="mid_box width_per60">
				<el-col :span='24' class='mid_top'>
					<div class="notice_bar fl cursor" @mouseenter="notice_mouseenter" @mouseleave="notice_mouseleave">
						<span class="pad_right10"><img src="../assets/img/index/bell.png"></span>
						<span>蜂硕金融SSL加密证书升级公告</span>
						<span class="pad_left20 ft14">2018/1/29</span>
					</div>
					<div class="viewMore fr cursor" @mouseenter="viewMore_mouseenter" @mouseleave="viewMore_mouseleave">查看更多&nbsp;>></div>
				</el-col>
				<el-col :span='24' style='margin-top: 45px; margin-bottom: 40px;'>
					<el-col :span='6' @mouseenter.native="middle1_mouseenter" @mouseleave.native="middle1_mouseleave">
						<el-col :span='6'><img class="middle1_img" :src="middle1"></el-col>
						<el-col :span='18'>
							<el-col :span='24' class='mid_word1 pad_left30 mt10'>银行存管</el-col>
							<el-col :span='24' class='mid_word2 pad_left30'>上海银行存管全程保驾护航</el-col>
						</el-col>
					</el-col>
					<el-col :span='6' @mouseenter.native="middle2_mouseenter" @mouseleave.native="middle2_mouseleave">
						<el-col :span='6'><img class="middle1_img" :src="middle2"></el-col>
						<el-col :span='18'>
							<el-col :span='24' class='mid_word1 pad_left30 mt10'>合规运营</el-col>
							<el-col :span='24' class='mid_word2 pad_left30'>债权真实透明运营稳健规范</el-col>
						</el-col>
					</el-col>
					<el-col :span='6' @mouseenter.native="middle3_mouseenter" @mouseleave.native="middle3_mouseleave">
						<el-col :span='6'><img :src="middle3"></el-col>
						<el-col :span='18'>
							<el-col :span='24' class='mid_word1 pad_left30 mt10'>专业风控</el-col>
							<el-col :span='24' class='mid_word2 pad_left30'>全程动态审核严格把控源头</el-col>
						</el-col>
					</el-col>
					<el-col :span='6' @mouseenter.native="middle4_mouseenter" @mouseleave.native="middle4_mouseleave">
						<el-col :span='6'><img :src="middle4"></el-col>
						<el-col :span='18'>
							<el-col :span='24' class='mid_word1 pad_left30 mt10'>安全保障</el-col>
							<el-col :span='24' class='mid_word2 pad_left30'>蜂硕安全保障计划贴心服务</el-col>
						</el-col>
					</el-col>
				</el-col>
			</div>
		</div>
	</el-row>
</template>

<script>
  var PAGE;
  export default {
    data(){
      return{
        middle1Src:[{middle1:require('../assets/img/index/middle1.png')},{middle1:require('../assets/img/index_active/middle1.png')}],
        middle2Src:[{middle2:require('../assets/img/index/money.png')},{middle2:require('../assets/img/index_active/middle2.png')}],
        middle3Src:[{middle3:require('../assets/img/index/zyfk.png')},{middle3:require('../assets/img/index_active/middle3.png')}],
        middle4Src:[{middle4:require('../assets/img/index/safety.png')},{middle4:require('../assets/img/index_active/middle4.png')}],
        middle1:'',
        middle2:'',
        middle3:'',
        middle4:'',
      }
    },
    created:function(){
      PAGE = this;
      PAGE.middle1 = PAGE.middle1Src[0].middle1;
      PAGE.middle2 = PAGE.middle2Src[0].middle2;
      PAGE.middle3 = PAGE.middle3Src[0].middle3;
      PAGE.middle4 = PAGE.middle4Src[0].middle4;
    },
    methods:{
      notice_mouseenter:function(){
        $('.notice_bar').css('color','rgba(230,168,69,1)');
      },
      notice_mouseleave:function(){
        $('.notice_bar').css('color','rgba(119,119,119,1)');
      },
      viewMore_mouseenter:function(){
        $('.viewMore').css('color','rgba(230,168,69,1)');
      },
      viewMore_mouseleave:function(){
        $('.viewMore').css('color','rgba(119,119,119,1)');
      },
      //图片交互
      middle1_mouseenter:function(){
        PAGE.middle1 = PAGE.middle1Src[1].middle1;
      },
      middle1_mouseleave:function(){
        PAGE.middle1 = PAGE.middle1Src[0].middle1;
      },
      middle2_mouseenter:function(){
        PAGE.middle2 = PAGE.middle2Src[1].middle2;
      },
      middle2_mouseleave:function(){
        PAGE.middle2 = PAGE.middle2Src[0].middle2;
      },
      middle3_mouseenter:function(){
        PAGE.middle3 = PAGE.middle3Src[1].middle3;
      },
      middle3_mouseleave:function(){
        PAGE.middle3 = PAGE.middle3Src[0].middle3;
      },
      middle4_mouseenter:function(){
        PAGE.middle4 = PAGE.middle4Src[1].middle4;
      },
      middle4_mouseleave:function(){
        PAGE.middle4 = PAGE.middle4Src[0].middle4;
      },
    }
  }
</script>

<style scoped>
	.mid_top{
		font-size:14px;
		font-family:MicrosoftYaHei;
		color:rgba(119,119,119,1);
	}
	.mid_word1{
		font-size:18px;
		font-family:MicrosoftYaHei;
		color:rgba(51,51,51,1);
	}
	.mid_word2{
		font-size:12px;
		font-family:MicrosoftYaHei;
		color:rgba(119,119,119,1);
		margin-top: 5px;
	}
</style>
