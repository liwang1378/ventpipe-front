<template>
	<div>
		<el-row type="flex" class="row-bg" justify="center">
		  <el-col :span="12"><div class="grid-content bg-purple">
		  	<el-table :data="tableData" style="width:100%" :default-sort="{prop:'date',order:'descending'}">
		  		<el-table-column prop="date" label="日期" sortable width="240"></el-table-column>
		  		<el-table-column prop="name" label="姓名" sortable></el-table-column>
		  		<el-table-column prop="address" label="地址" width="280" :formatter="formatter"></el-table-column>
		  		<el-table-column prop="detail" label="操作" width="80"></el-table-column>
		  	</el-table>
		  </div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light" style="margin-left:10px;padding:0px;background-color: #fcf8e3;">
		  	<el-collapse v-model="activeNames" @change="handleChange" style="background-color: #fcf8e3;">
		  		<el-collapse-item  name="1" >
		  		<template slot="title">
		  			<span style="color:blue;">设备运行状况</span>&nbsp;<i class="header-icon el-icon-info"></i>
		  		</template>
		  			<div id="main" style="width:100%;height:400px;"></div>
		  		</el-collapse-item>
		  		<el-collapse-item title="总系统状态" name="2">
		  			<div>
		  				<el-tag effect="dark" type="info" key="total">总控制器 - 15</el-tag>
		  				<el-tag effect="dark" type="success" key="success">正常系统 - 12</el-tag>
		  				<el-tag effect="dark" type="danger" key="error">故障系统 - 3</el-tag>
		  			</div>
		  			
		  		</el-collapse-item>
		  		<el-collapse-item title="总系统参数设置" name="3">
		  			<div>
		  				<el-row>
		  				  <el-button type="primary">新风系统</el-button>
		  				  <el-button type="success">排风系统</el-button>
		  				  <el-button type="info">通 风 柜</el-button>
		  				</el-row>
		  				<el-row>
		  				  <el-button type="warning">其   他</el-button>
		  				  <el-button type="danger">一键停车</el-button>
		  				  <el-button type="danger">一键启动</el-button>
		  				</el-row>
		  			</div>
		  		</el-collapse-item>
		  	</el-collapse>
		  </div></el-col>
		</el-row>
	</div>
</template>

<script>
import echarts from "echarts";
	export default{
		data(){
			return{
				activeNames: ['1'],
				tableData: [{
		          date: '2018年7月19日 5:30:48 星期一',
		          name: '设备故障',
		          address: '一号楼一号新风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2018年7月29日 14:30:48 星期三',
		          name: '设备故障',
		          address: '二号楼一号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2018年8月19日 13:30:48 星期四',
		          name: '设备故障',
		          address: '一号楼一号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2018年9月19日 23:30:48 星期五',
		          name: '设备故障',
		          address: '二号楼一号新风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2019年1月19日 20:30:48 星期六',
		          name: '设备故障',
		          address: '一号楼二号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2019年4月19日 00:30:48 星期二',
		          name: '设备故障',
		          address: '一号楼一号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2019年5月19日 6:30:48 星期四',
		          name: '设备故障',
		          address: '一号楼二号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2019年6月19日 05:30:48 星期一',
		          name: '设备故障',
		          address: '一号楼二号排风101-102通风柜',
		          detail: '详情操作'
		        },{
		          date: '2019年8月19日 15:30:48 星期四',
		          name: '设备故障',
		          address: '一号楼三号排风101-102通风柜',
		          detail: '详情操作'
		        }, ],
		        charts:'',
		        opinion:['管道静压控制器','房间压差控制器','通风柜'],
		        opinionData:[{value:5,name:'管道静压控制器'},{value:8,name:'房间压差控制器'},{value:4,name:'通风柜'}]
			}
		},
		methods:{
			formatter(row,column){
				return row.address
			},
			handleChange(val){
			},
			drawPie(id){
				this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
					title:{
						text: '系统机柜类型总数',
						x:'center'
					},
					tooltip:{
						trigger:'item',
						formatter:"{a} <br>{b} : {c} ({d}%)"
					},
					legend:{
						orient:'vertical',
						x:'left',
						data:this.opinion
					},
					series:[{
						name:'机柜名称',
						type:'pie',
						radius:'55%',
						center:['40%','50%'],
						data:this.opinionData,
						itemStyle:{
							emphasis:{
								shadowBlur:10,
								shadowOffsetX:0,
								shadowColor:'rgba(0,0,0,0.5)'
							}
						}
					}]
					
				})
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.drawPie('main')
			})
		}
	}
</script>

<style scoped>
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
    .el-col {
    	border-radius: 4px;
    }
    .bg-purple-dark {
    	background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 500px;
    }
    .row-bg {
      padding: 0;
      background-color: #f9fafc;
    }
</style>