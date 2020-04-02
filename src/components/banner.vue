<template>
	<el-row style='height: 390px;'>
		<el-carousel :interval="5000" height='390px' arrow="never">
		    <el-carousel-item :label="bannerPage.page_label" v-for="bannerPage in bannerPages" :key="bannerPage.id">
		      	<h3>{{bannerPage.page_img}}</h3>
		    </el-carousel-item>
		</el-carousel>
	</el-row>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return{
        bannerPages:[
          {page_label:'安全保障', page_img:'1111'},
          {page_label:'银行存管', page_img:'2222'},
          {page_label:'新年活动', page_img:'3333'},
          {page_label:'运营报告', page_img:'4444'},
          {page_label:'跨年福利', page_img:'5555'}
        ]
      }
    }
  }
</script>

<style scoped>
.el-carousel__item h3 {
color: #475669;
font-size: 18px;
opacity: 0.75;
line-height: 390px;
text-align: center;
margin: 0;
}
.el-carousel__indicators--labels .el-carousel__button{
	width: 95px;
	height: 30px;
	font-size:12px;
	font-family:MicrosoftYaHei;
	color:rgba(255,255,255,1);
	background: rgba(37, 37, 37, 0.1);
}
.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}

</style>
