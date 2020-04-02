<template>
	<el-row>
		<div class="footer_wrap width_per100" style="background: #2A2A2A; height: 412px;">
			<div class="footer width_per50">
        <el-row :gutter="20">
          <el-col :span="8" class="mt80" style="color: #ffffff;">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-col style="font-size: 16px;margin-bottom: 42px;">关于我们</el-col>
                <el-col style="font-size: 14px;">信息披露</el-col>
                <el-col style="font-size: 14px;margin-top: 15px;">运营报告</el-col>
                <el-col style="font-size: 14px;margin-top: 15px;">联系我们</el-col>
              </el-col>
              <el-col :span="8">
                <el-col style="font-size: 16px;margin-bottom: 42px;">帮助中心</el-col>
                <el-col style="font-size: 14px;">新手必读</el-col>
                <el-col style="font-size: 14px;margin-top: 15px;">注册认证</el-col>
                <el-col style="font-size: 14px;margin-top: 15px;">存管账户</el-col>
              </el-col>
              <el-col :span="8">
                <el-col style="font-size: 16px;margin-bottom: 42px;">安全保障</el-col>
                <el-col style="font-size: 14px;">保障计划</el-col>
                <el-col style="font-size: 14px;margin-top: 15px;">政策法规</el-col>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="10" class="mt80" style="color: #ffffff;">
            <el-col :span="8">
              <el-col :span="24" style="padding-left: 0;"><img src="../assets/img/index/wx_scan.png" style="width: 108px;height: 108px;"></el-col>
              <el-col :span="24" class="mt20" style="font-size: 12px; text-align: center">手机App下载</el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="24" style="padding-left: 0;"><img src="../assets/img/index/wx_scan.png" style="width: 108px;height: 108px;"></el-col>
              <el-col :span="24" class="mt20" style="font-size: 12px; text-align: center">关注微信公众号</el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="24" style="padding-left: 0;"><img src="../assets/img/index/wx_scan.png" style="width: 108px;height: 108px;"></el-col>
              <el-col :span="24" class="mt20" style="font-size: 12px; text-align: center">关注微信服务号</el-col>
            </el-col>
          </el-col>
          <el-col :span="6" class="mt80">
            <el-col :span="24" style="font-size: 12px; color: #ffffff;">客服热线</el-col>
            <el-col :span="24" class="mt20" style="font-size: 30px; color: #ffffff;">400 022 9500</el-col>
            <el-col :span="24" class="mt20" style="font-size: 14px; color: #ffffff;">周一&nbsp;-&nbsp;周五</el-col>
            <el-col :span="24" class="mt15" style="font-size: 12px; color: #ffffff;">9:00-17:00</el-col>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="mt40" style="font-size: 12px;color:rgba(153,153,153,1);">
          <el-col :span="10">©2016-2018 天津蜂硕天下网络科技有限公司 fsjr66.com 版权所有</el-col>
          <el-col :span="6">蜂硕金融提醒您：市场有风险，选择需谨慎</el-col>
        </el-row>
        <el-row :gutter="20" style="font-size: 12px;color:rgba(153,153,153,1);">
          <el-col :span="4">津ICP备16000898号-1</el-col>
          <el-col :span="5">互联网金融协会违法违规行为投诉</el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="mt10">
            <el-col :span="6" v-for="rzImg in rzImages" :key="rzImg.id"><img :src="rzImg.rzimgUrl"></el-col>
          </el-col>
        </el-row>
			</div>
		</div>
	</el-row>
</template>

<script>
  export default {
    name: "footerbar",
    data(){
      return{
        rzImages:[
          {rzimgUrl:require('../assets/img/index/renzheng1.png')},
          {rzimgUrl:require('../assets/img/index/renzheng2.png')},
          {rzimgUrl:require('../assets/img/index/renzheng3.png')},
          {rzimgUrl:require('../assets/img/index/renzheng4.png')}
        ]
      }
    }
  }
</script>


<style type="text/css">
	.footer_wrap{
		height: 400px;
		background: #5E5E5E;
	}
</style>
