<template>
	<div>
	<el-tabs type="border-card">
	  <el-tab-pane label="楼栋/房屋">
	  	<el-tabs type="border-card">
	  		<el-tab-pane label="楼栋">
	  			<div>
		  			<span style="text-align:center;font-size:24px;">楼栋维护</span>
		  			<div style="float:right;margin-bottom:10px">
			  			<el-button type="primary"  size="small" @click="buildFresh()">刷新</el-button>
			  			<el-button type="primary"  size="small" @click="buildUI=true">添加楼栋</el-button>
			  		</div>
			  			<el-table
		  			    :data="buildData"
		  			    border
		  			    style="width: 100%">
		  			    <el-table-column
		  			      prop="houseroomid"
		  			      label="编号">
		  			    </el-table-column>
		  			    <el-table-column
		  			      prop="hsname"
		  			      label="楼栋名称">
		  			    </el-table-column>
		  			    <el-table-column
		  			      prop="address"
		  			      label="地址">
		  			    </el-table-column>
		  			    <el-table-column
		  			      label="操作" width="400">
		  			      <template slot-scope="scope">
		  			          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">修改</el-button>
		  			          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
		  			      </template>
		  			    </el-table-column>
		  			</el-table>
	  			</div>
	  		</el-tab-pane>
	  		<el-tab-pane label="房屋">
	  			<div>
		  			<span style="text-align:center;font-size:24px;">房屋维护</span>
		  			<div style="float:right;margin-bottom:10px">
			  			<el-button type="primary"  size="small" @click="fresh()">刷新</el-button>
			  			<el-button type="primary"  size="small" @click="userUI=true">添加房间</el-button>
		  			</div>
		  			<el-table
		  			    :data="roomData"
		  			    border
		  			    style="width: 100%" row-key="houseroomid" default-expand-all :tree-props="{children:'children',hasChildren:'hasChildren'}">
		  			    <el-table-column
		  			      prop="houseroomid"
		  			      label="编号" sortable>
		  			    </el-table-column>
		  			    <el-table-column
		  			      prop="hsname"
		  			      label="所属楼栋" sortable>
		  			    </el-table-column>
		  			    <el-table-column
		  			      prop="address"
		  			      label="房间名称">
		  			    </el-table-column>
		  			    <el-table-column
		  			      label="操作" width="400">
		  			      <template slot-scope="scope">
		  			          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">修改</el-button>
		  			          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
		  			      </template>
		  			    </el-table-column>
		  			</el-table>
	  			</div>
	  		</el-tab-pane>
	  	</el-tabs>
	  </el-tab-pane>
	  <el-tab-pane label="通风系统">
		<div>
			<span style="text-align:center;font-size:24px;">通风系统维护</span>
			<div style="float:right;margin-bottom:10px">
  			<el-button type="primary"  size="small" @click="fresh()">刷新</el-button>
  			<el-button type="primary"  size="small" @click="userUI=true">添加通风系统</el-button>
  		</div>
  			<el-table
			    :data="pipeData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="houseroomid"
			      label="编号">
			    </el-table-column>
			    <el-table-column
			      prop="hsname"
			      label="系统名称">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="类型">
			    </el-table-column>
			    <el-table-column
			      label="操作" width="400">
			      <template slot-scope="scope">
			          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">修改</el-button>
			          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
			      </template>
			    </el-table-column>
			</el-table>
		</div>
	  </el-tab-pane>
	  <el-tab-pane label="设备">
		<div>
			<span style="text-align:center;font-size:24px;">设备维护</span>
			<div style="float:right;margin-bottom:10px">
  			<el-button type="primary"  size="small" @click="fresh()">刷新</el-button>
  			<el-button type="primary"  size="small" @click="userUI=true">添加通风系统</el-button>
  		</div>
  			<el-table
			    :data="deviceData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="houseroomid"
			      label="编号">
			    </el-table-column>
			    <el-table-column
			      prop="hsname"
			      label="状态">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="设备名称">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="设备类型">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="设备编号">
			    </el-table-column>
			    <el-table-column
			      label="操作" width="400">
			      <template slot-scope="scope">
			          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">修改</el-button>
			          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
			      </template>
			    </el-table-column>
			</el-table>
		</div>
	  </el-tab-pane>
	</el-tabs>
	<!--添加楼栋弹窗-->
	<el-dialog title="添加楼栋" :visible.sync="buildUI">
		<el-form :model="buildForm" :rules="buildRules" ref="buildForm">
			<el-input v-model="buildForm.houseroomid" type="hidden"></el-input>
			<el-form-item label="楼栋名称" :label-width="formLabelWidth" prop="hsname">
				<el-input v-model="buildForm.hsname" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="地址" :label-width="formLabelWidth" prop="address">
				<el-input v-model="buildForm.address" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>
		<div class="dialog-footer" slot="footer">
			<el-button @click="buildUI=false">取消</el-button>
			<el-button type="primary" @click="submitBuildForm('buildForm')">确定</el-button>
		</div>
	</el-dialog>
	</div>
</template>

<script>
import {get,post} from '@/router/axios-cfg'
	export default{
		data(){
			return{
				buildUI:false,
				formLabelWidth:'120px',
				buildForm:{
					hsname:'',
					address:''
				},
				buildRules:{
					hsname:[{required:true,message:'请输入楼栋名称',trigger:blur}]
				},
				pipeData:[],
				deviceData:[],
				buildData:[{
					houseroomid:1,
					hsname:'教学楼',
					address:'新校区'
				}],
				roomData:[{
					houseroomid:1,
					hsname:'一号楼',
					address:'九江职院'
				},{
					houseroomid:2,
					hsname:'二号楼',
					address:'九江学院',
					children:[{
						houseroomid:11,
						hsname:'303',
						address:'金沙江路'
					},{
						houseroomid:12,
						hsname:'303',
						address:'十里校区'
					}]
				}]
			}
		},
		methods:{
			buildFresh(){
				this.query()
			},
			query(){
				get('/hs/query').then(res=>{
					this.buildData = res.data
				})
			},
			submitBuildForm(formName){
				let param = (this.buildForm)
				param.type = 1
				param.customerid = '007'
				console.log(param)
				this.$refs[formName].validate((valid)=>{
			  		if(valid){
						post('/hs/save',JSON.stringify(param)).then((res)=>{
		  				this.$message({
  				          message: '操作成功！',
  				          type: 'success'
  				        });
		  			})
		  			this.buildUI=false
		  			this.$refs[formName].resetFields();
		  			this.query()
			  		}else{
						this.$message.error('错了哦');
			  			return false
			  		}
				})
			}
		}
	}
</script>

<style scoped>
	
</style>