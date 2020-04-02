<template>
	<el-row style="background: #F5F5F5;">
		<div class="mainpart_wrap width_per100 pad_bottom80">
			<div class="mainpart_content width_per60">
				<el-row class='greenhand mt40' style='background:rgba(255,255,255,1); height: 206px;'>
					<el-col :span='6' class="por" style='height: 206px'>
            <img src='../assets/img/index/greenhand.png' style="height: 206px;">
						<el-col :span='24' class='greenhand_left_word1 poa'>新手专享</el-col>
						<el-col :span='24' class='greenhand_left_word2 poa'>收益高、期限短</el-col>
					</el-col>
					<el-col :span='18' style='height:206px;'>
						<el-col :span='24' class='pad_left20 mt10'>
							<img src="../assets/img/index/gift.png">
							<span style="font-size:16px;font-family:MicrosoftYaHei; color:rgba(51,51,51,1);">新手专享</span>
						</el-col>
						<el-col :span='24' class='greenhand_right pad_left35 mt10'>
							<el-col :span='8'>
								<span class="num DIN">6.35</span>
								<span class="percentCode DIN">%</span>
								<span class="num DIN">+</span>
								<span class="num DIN">2.00</span>
								<span class="percentCode DIN">%</span>
							</el-col>
							<el-col :span='8' class='mt10' style='text-align:center;'>
								<span class="mid_num">1</span>
								<span class="mid_word">个月</span>
							</el-col>
							<el-col :span='8' :offset='2' class='greenhand_btn mt40'>立即加入</el-col>
						</el-col>
						<el-col :span='24' class='greenhand_footer mt10'>
							<el-col :span='8'>预期年化收益</el-col>
							<el-col :span='8' class='pad_left30'>锁定期</el-col>
						</el-col>
					</el-col>
				</el-row>
        <!--蜂硕计划-->
				<el-row>
					<el-col :span='24' class='mt30'>
						<span style="font-size:20px;font-weight: bold; font-family:MicrosoftYaHei-Bold;color:rgba(51,51,51,1);">蜂硕计划</span>
						<span class="pad_left15" style="font-size: 16px;color: #666666;">智能投资，优先投标</span>
					</el-col>
				</el-row>
        <el-row :gutter="10" class="mt20">
          <el-col :span="8" class="fs_plan mt10 mr10" style="width: 377px; height: 240px; background: #ffffff;" v-for="planObject in planObjects" :key="planObject.id">
            <el-col :span="24" class="mt20 pad_left30" style="font-size: 16px; color: rgba(51,51,51,1);">{{planObject.planTime}}</el-col>
            <el-col :span="24" class="mt30 pad_left30">
              <el-col :span="10">
                <span class="num">{{planObject.rate}}</span>
                <span class="percentCode">%</span>
              </el-col>
              <el-col :span="5" :offset="8" class="mt10">
                <span class="mid_num">{{planObject.month}}</span>
                <span class="mid_word">个月</span>
              </el-col>
            </el-col>
            <el-col :span='24' class="mt20 pad_left30" style="font-size: 14px;color:rgba(102,102,102,1);">
              <el-col :span='8'>预期年化收益</el-col>
              <el-col :span='8' :offset="8" class='pad_left35' style="text-align: center;">锁定期</el-col>
            </el-col>
            <el-col :span="24" class="mt30 pad_left30">
              <el-col :span="13">
                <span style="font-size: 14px;color:rgba(102,102,102,1);">剩余额度</span>
                <span style="font-size: 16px;color:rgba(51,51,51,1);">{{planObject.balance}}</span>
                <span style="font-size: 16px;color:rgba(102,102,102,1);">元</span>
              </el-col>
              <el-col :span="5" :offset="5" style="font-size: 14px; color:rgba(230,168,69,1);">立即加入</el-col>
            </el-col>
          </el-col>
        </el-row>
        <!--蜂硕计划end-->
        <!--蜂硕散标-->
        <el-row>
          <el-col :span='24' class='mt30'>
            <span style="font-size:20px;font-weight: bold; font-family:MicrosoftYaHei-Bold;color:rgba(51,51,51,1);">蜂硕散标</span>
          </el-col>
        </el-row>
        <el-row class="mt30" style="height: 448px;">
          <el-col :span="6" class="por">
            <img src="../assets/img/index/sanbiao.png" style="width: 285px; height: 447px;">
            <el-col :span="24" class="poa" style="font-size: 20px;color: #ffffff; top: 160px;left: 65px;">优产资质透明清晰</el-col>
            <el-col :span="24" class="poa" style="width: 140px;height: 40px;border-radius: 4px;border: 1px solid #ffffff;text-align: center;line-height: 40px;color: #ffffff;top: 260px;left: 75px;">查看更多</el-col>
          </el-col>
          <el-col :span="18" v-for="sanObject in sanObjects" :key="sanObject.id" style="height: 112px;background: #ffffff; border-bottom: 1px solid #F5F5F5;">
            <el-col :span="5" class="pad_left20 mt50" style="font-size: 16px; color: rgba(51,51,51,1);">{{sanObject.objTime}}</el-col>
            <el-col :span="4" :offset="1" class="sanbiao" style="text-align: center;">
              <el-col :span="24" class="mt30">
                <span class="num">{{sanObject.sanRate}}</span>
                <span class="percentCode">%</span>
              </el-col>
              <el-col :span="24" class="mt5 pad_left10" style="font-size: 14px;color:rgba(102,102,102,1);">预期年化收益</el-col>
            </el-col>
            <el-col :span="2" :offset="1" style="text-align: center;">
              <el-col :span="24" class="sanbiao_time mt35">
                <span class="mid_num">{{sanObject.deadTime}}</span>
                <span class="mid_word">个月</span>
              </el-col>
              <el-col :span="24" class="mt15 pad_left10" style="font-size: 14px;color:rgba(102,102,102,1);">锁定期</el-col>
            </el-col>
            <el-col :span="4" :offset="1" style="text-align: center;">
              <el-col :span="24" class="mt35">
                <span class="DIN" style="font-size: 16px;">{{sanObject.sanBalance}}</span>
                <span>元</span>
              </el-col>
              <el-col :span="24" class="mt15" style="font-size: 14px;color:rgba(102,102,102,1);">剩余额度</el-col>
            </el-col>
            <el-col :span="3" :offset="2" class="mt50" style="font-size: 16px; color: rgba(230, 168, 69, 1);">立即加入</el-col>
          </el-col>
        </el-row>
        <!--蜂硕散标end-->
        <!--转让债权-->
        <el-row>
          <el-col :span='24' class='mt30'>
            <span style="font-size:20px;font-weight: bold; font-family:MicrosoftYaHei-Bold;color:rgba(51,51,51,1);">转让债权</span>
          </el-col>
        </el-row>
        <el-row class="mt30" style="height: 448px;">
          <el-col :span="6" class="por">
            <img src="../assets/img/index/zhuanrang.png" style="width: 285px; height: 447px;">
            <el-col :span="24" class="poa" style="font-size: 20px;color: #ffffff; top: 160px;left: 65px;">优产资质透明清晰</el-col>
            <el-col :span="24" class="poa" style="width: 140px;height: 40px;border-radius: 4px;border: 1px solid #ffffff;text-align: center;line-height: 40px;color: #ffffff;top: 260px;left: 75px;">查看更多</el-col>
          </el-col>
          <el-col :span="18" v-for="sanObject in sanObjects" :key="sanObject.id" style="height: 112px;background: #ffffff; border-bottom: 1px solid #F5F5F5;">
            <el-col :span="5" class="pad_left20 mt50" style="font-size: 16px; color: rgba(51,51,51,1);">{{sanObject.objTime}}</el-col>
            <el-col :span="4" :offset="1" class="sanbiao" style="text-align: center;">
              <el-col :span="24" class="mt30">
                <span class="num">{{sanObject.sanRate}}</span>
                <span class="percentCode">%</span>
              </el-col>
              <el-col :span="24" class="mt5 pad_left10" style="font-size: 14px;color:rgba(102,102,102,1);">预期年化收益</el-col>
            </el-col>
            <el-col :span="2" :offset="1" style="text-align: center;">
              <el-col :span="24" class="sanbiao_time mt35">
                <span class="mid_num">{{sanObject.deadTime}}</span>
                <span class="mid_word">个月</span>
              </el-col>
              <el-col :span="24" class="mt15 pad_left10" style="font-size: 14px;color:rgba(102,102,102,1);">锁定期</el-col>
            </el-col>
            <el-col :span="4" :offset="1" style="text-align: center;">
              <el-col :span="24" class="mt35">
                <span class="DIN" style="font-size: 16px;">{{sanObject.sanBalance}}</span>
                <span>元</span>
              </el-col>
              <el-col :span="24" class="mt15" style="font-size: 14px;color:rgba(102,102,102,1);">剩余额度</el-col>
            </el-col>
            <el-col :span="3" :offset="2" class="mt50" style="font-size: 16px; color: rgba(230, 168, 69, 1);">立即加入</el-col>
          </el-col>
        </el-row>
        <!--转让债权end-->
        <!--蜂硕动态-->
        <el-row :gutter="25">
          <el-col :span='12' class='mt30'>
            <span style="font-size:20px;font-weight: bold; font-family:MicrosoftYaHei-Bold;color:rgba(51,51,51,1);">蜂硕动态</span>
            <el-col class="mt25" style="height: 330px;background: #ffffff;">
              <el-col class="mt15" style="border-bottom: 1px solid #cccccc; height: 145px;">
                <el-col :span="9.5" class="mt15" style="height: 111px; border: 1px solid #cccccc;padding-left: 6.5px; padding-right: 6.5px;">
                  <img src="../assets/img/index/greenhand.png" class="mt5" style="width: 180px;height: 100px;"></el-col>
                <el-col :span="13" class="mt15" style="height: 100px;">
                  <el-col :span="24" style="font-size: 14px;">硕峰网贷行业发展</el-col>
                  <el-col :span="24" class="mt5" style="font-size: 12px;color:rgba(153,153,153,1);">
                    <span>发布日期：</span><span>2018/01/24</span>
                  </el-col>
                  <el-col :span="24" class="mt5" style="font-size: 12px; color:rgba(119,119,119,1);">蜂硕金融受邀参加2018年网贷行业发展峰会，蜂硕金
                    融受邀参加2018年网，蜂硕金融受邀参加2018年网
                    贷行业发展峰会参加2018年网贷行业发展峰会...</el-col>
                </el-col>
              </el-col>
              <el-col class="mt10" v-for="state in states" :key="state.id">
                <span style="font-size: 20px; font-weight: bold; color:rgba(119,119,119,1);">.</span>
                <span style="font-size: 14px;" class="pad_left5">{{state.statesNews}}</span>
                <span style="font-size: 12px; color:rgba(119,119,119,1);" class="pad_left30">{{state.stateTime}}</span>
              </el-col>
            </el-col>
          </el-col>
          <el-col :span="12" class="mt30">
            <span style="font-size:20px;font-weight: bold; font-family:MicrosoftYaHei-Bold;color:rgba(51,51,51,1);">平台数据</span>
            <el-col class="mt25" style="height: 330px;background: #ffffff;">
              <el-col :span="12" style="height: 165px;border-bottom: 1px solid rgba(229, 229, 229, 0.38); border-right: 1px solid rgba(229, 229, 229, 0.38);text-align: center;">
                <el-col :span="24" class="mt50" style="font-size: 16px;">平台累计交易额</el-col>
                <el-col :span="24" class="mt20">
                  <span class="pad_left5" style="font-size: 30px; color: rgba(230, 168, 69, 1);">413,159,636</span>
                  <span class="pad_left5" style="font-size: 16px;">元</span>
                </el-col>
              </el-col>
              <el-col :span="12" style="height: 165px;border-bottom: 1px solid rgba(229, 229, 229, 0.38);text-align: center;">
                <el-col :span="24" class="mt50" style="font-size: 16px;">累计为用户赚取收益</el-col>
                <el-col :span="24" class="mt20">
                  <span class="pad_left5" style="font-size: 30px; color: rgba(230, 168, 69, 1);">413,159,636</span>
                  <span class="pad_left5" style="font-size: 16px;">元</span>
                </el-col>
              </el-col>
              <el-col :span="12" style="height: 165px;border-bottom: 1px solid rgba(229, 229, 229, 0.38); border-right: 1px solid rgba(229, 229, 229, 0.38);text-align: center;">
                <el-col :span="24" class="mt50" style="font-size: 16px;">累计用户数</el-col>
                <el-col :span="24" class="mt20">
                  <span class="pad_left5" style="font-size: 30px; color: rgba(230, 168, 69, 1);">413,159,636</span>
                  <span class="pad_left5" style="font-size: 16px;">人</span>
                </el-col>
              </el-col>
              <el-col :span="12" style="height: 165px;border-bottom: 1px solid rgba(229, 229, 229, 0.38);text-align: center;">
                <el-col :span="24" class="mt50" style="font-size: 16px;">项目资产总数</el-col>
                <el-col :span="24" class="mt20">
                  <span class="pad_left5" style="font-size: 30px; color: rgba(230, 168, 69, 1);">413,159,636</span>
                  <span class="pad_left5" style="font-size: 16px;">个</span>
                </el-col>
              </el-col>
            </el-col>
          </el-col>
        </el-row>
			</div>
		</div>
	</el-row>
</template>

<script>
  export default {
    name:'mainpart',
    data(){
      return{
        planObjects: [
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
          {planTime:'蜂硕计划1月期',rate:'6.00',month:1,balance:'1,500,000.00'},
        ],
        sanObjects:[
          {objTime:'蜂硕散标2018012301', sanRate:'6.00', deadTime:1, sanBalance:'1,500,000.00'},
          {objTime:'蜂硕散标2018012301', sanRate:'6.00', deadTime:1, sanBalance:'1,500,000.00'},
          {objTime:'蜂硕散标2018012301', sanRate:'6.00', deadTime:1, sanBalance:'1,500,000.00'},
          {objTime:'蜂硕散标2018012301', sanRate:'6.00', deadTime:1, sanBalance:'1,500,000.00'}
        ],
        states:[
          {statesNews:'蜂硕金融受邀参加2018年网贷行业发展峰会，蜂硕金融受邀蜂',stateTime:'2018/01/31'},
          {statesNews:'蜂硕金融受邀参加2018年网贷行业发展峰会，蜂硕金融受邀蜂',stateTime:'2018/01/31'},
          {statesNews:'蜂硕金融受邀参加2018年网贷行业发展峰会，蜂硕金融受邀蜂',stateTime:'2018/01/31'},
          {statesNews:'蜂硕金融受邀参加2018年网贷行业发展峰会，蜂硕金融受邀蜂',stateTime:'2018/01/31'}
        ]
      }
    }
  }
</script>

<style scoped>
	.greenhand_left_word1{
		font-size:24px;
		font-family:MicrosoftYaHei-Bold;
		color:rgba(255,255,255,1);
		text-align: center;
    left: 10px;
    top: 65px;
	}
	.greenhand_left_word2{
		font-size:18px;
		font-family:MicrosoftYaHei-Bold;
		color:rgba(255,255,255,1);
		text-align: center;
    top: 120px;
    left: 10px;
	}
	.greenhand_right .num, .fs_plan .num, .sanbiao .num{
		font-size:40px;
		font-family:DIN-Medium;
		color:rgba(230,168,69,1);
	}
	.greenhand_right .percentCode, .fs_plan .percentCode, .sanbiao .percentCode{
		font-size:24px;
		font-family:DIN-Medium;
		color:rgba(230,168,69,1);
	}
	.greenhand_right .mid_num, .fs_plan .mid_num, .sanbiao_time .mid_num {
		font-size:24px;
		font-family:DIN-Medium;
		color:rgba(79,79,79,1);
	}
	.greenhand_right .mid_word, .fs_plan .mid_word, .sanbiao_time .mid_words{
		font-size:18px;
		font-family:Microsoft YaHei;
		color:rgba(79,79,79,1);
	}
	.greenhand_right .greenhand_btn{
		width:160px;
		height:40px;
		background:rgba(235, 180, 91, 1);
		border-radius: 4px;
		font-size:18px;
		font-family:MicrosoftYaHei;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 40px;
	}
	.greenhand_footer{
		font-size:14px;
		font-family:MicrosoftYaHei;
		color:rgba(79,79,79,1);
		text-align: center;
	}

</style>
