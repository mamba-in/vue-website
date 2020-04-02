<template>
	<div style="background: lightgreen; height: 500px;">
	    <el-button>按钮</el-button>
	    <el-input v-model="input" placeholder="my test"></el-input>
	<!--     <el-dialog :visible.sync="visible" title="Hello world">
	      <p>欢迎使用 Element</p>
	    </el-dialog> -->
  </div>
</template>

  <script>
  		export default{
  			data(){
  				return{
  					input:'wanglei'
  				}
  			}
  		}
  </script>
