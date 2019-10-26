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
		  <!-- <el-col :span="1"></el-col> -->
		  <el-col :span="12"><div class="grid-content bg-purple-light" style="margin-left:10px;padding:0px;background-color: #fcf8e3;">
		  	<el-collapse v-model="activeNames" @change="handleChange" style="background-color: #fcf8e3;">
		  		<el-collapse-item  name="1" >
		  		<template slot="title">
		  			<span style="color:blue;">设备运行状况</span>&nbsp;<i class="header-icon el-icon-info"></i>
		  		</template>
		  		<!--echarts容器-->
		  			<div id="main" style="width:100%;height:400px;"></div>
		  		</el-collapse-item>
		  		<el-collapse-item title="总系统状态" name="2">
		  			<div>
		  				<el-tag effect="dark" type="info" key="">总控制器 - 15</el-tag>
		  				<el-tag effect="dark" type="success" key="">正常系统 - 12</el-tag>
		  				<el-tag effect="dark" type="danger" key="">故障系统 - 3</el-tag>
		  			</div>
		  			
		  		</el-collapse-item>
		  		<el-collapse-item title="总系统参数设置" name="3">
		  			<div>
		  				<el-row>
		  				  <el-button type="primary">主要按钮</el-button>
		  				  <el-button type="success">成功按钮</el-button>
		  				  <el-button type="info">信息按钮</el-button>
		  				</el-row>
		  				<el-row>
		  				  <el-button type="warning">警告按钮</el-button>
		  				  <el-button type="danger">危险按钮</el-button>
		  				  <el-button type="danger">危险按钮</el-button>
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
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          detail: '详情操作'
		        }, {
		          date: '2018年7月19日 5:30:48 星期四',
		          name: '李小虎',
		          address: '上海市普陀区金沙江路 1517 弄',
		          detail: '详情操作'
		        }, {
		          date: '2016-05-01',
		          name: '张小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '刘小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2011-05-03',
		          name: '利小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2012-05-03',
		          name: '沈小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2013-05-03',
		          name: '杨小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '付小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2014-05-03',
		          name: '吴小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }],
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