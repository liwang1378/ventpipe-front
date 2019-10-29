<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/cs' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
		  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card" style="margin-top:10px;">
		  <div slot="header" class="clearfix">
		    <span>一号楼</span>
		    <el-button style="padding: 5px " type="primary">关闭</el-button>
		  </div>
		  <el-card class="box-card" style="margin-top:10px;">
		  	<div slot="header" class="clearfix">
			    <span>一号新风系统</span>
			    <el-button style="padding: 5px " type="primary">关闭</el-button>
		  	</div>
		  	<div>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col><div class="grid-content bg-purple">管道静压控制器</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">设备编号</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">004</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">连接状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">未连接</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">管道1设定压差</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">004</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">连接状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">未连接</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">管道1当前压差</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">004</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">连接状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">未连接</div></el-col>
		  		</el-row>
		  		
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="4"><div class="grid-content bg-purple">
		  		  	<el-button type="primary">一键升压1</el-button>
		  		  </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple-light">
	  		      	<el-button type="info">关机1</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="warning">一键升压2</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="danger">关机2</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="success">参数设置</el-button>
	  		      </div></el-col>
		  		</el-row>
		  	</div>
		  </el-card>
		   <el-card class="box-card" style="margin-top:10px;background-color:pink">
		  	<div slot="header" class="clearfix">
			    <span>101</span>
			    <el-button style="padding: 5px " type="primary">关闭</el-button>
		  	</div>
		  	<div>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col><div class="grid-content bg-purple">房间压差控制器</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">设备编号</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">004</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">连接状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">未连接</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">压差方向</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">负</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">门开状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">关闭</div></el-col>
		  		</el-row>
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="6"><div class="grid-content bg-purple">管道1当前压差</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple-light">004</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">连接状态</div></el-col>
	  		      <el-col :span="6"><div class="grid-content bg-purple">未连接</div></el-col>
		  		</el-row>
		  		
		  		<el-row type="flex" class="row-bg">
		  		  <el-col :span="4"><div class="grid-content bg-purple">
		  		  	<el-button type="primary">一键升压1</el-button>
		  		  </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple-light">
	  		      	<el-button type="info">关机1</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="warning">一键升压2</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="danger">关机2</el-button>
	  		      </div></el-col>
	  		      <el-col :span="4"><div class="grid-content bg-purple">
	  		      	<el-button type="success">参数设置</el-button>
	  		      </div></el-col>
		  		</el-row>
		  	</div>
		  </el-card>
		</el-card>
	</div>
</template>

<script>
import {get,post} from '@/router/axios-cfg'
	export default{
		data(){
			return {
				breadcrumb:[],
				activeNames: ['1']
			}
		},
		created(){
			let uuid = 24
			get('/building/createNavigator/'+uuid).then(res=>{
				console.log(res)
				this.breadcrumb = res.data
			})
		},
		methods:{
			handleChange(val) {
		      }
		}
	}
</script>

<style scoped>
	.text {
	    font-size: 14px;
	  }

	  .item {
	    margin-bottom: 18px;
	  }
	  
	  .clearfix:before,
	  .clearfix:after {
	    display: table;
	    content: "";
	    
	  }
	  .clearfix:after {
	    clear: both
	  }

	  .el-row {
	    margin-bottom: 5px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  /*.bg-purple-dark {
	    background: #99a9bf;
	  }
	  
	  .bg-purple-light {
	    background: #e5e9f2;
	  }*/
	  .grid-content {
	    border-radius: 4px;
	    /*min-height: 36px;*/
	  }
	  .row-bg {
	    padding: 10px 0;
	    /*background-color: #f9fafc;*/
	  }
</style>