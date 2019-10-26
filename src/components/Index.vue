<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <b style="float:left">
        <i class="el-icon-office-building"></i>&nbsp;智能通风控制系统
      </b>
      <span><b>智控达管理员,您好！&nbsp;</b></span>
      <el-dropdown>
        <span class="el-dropdown-link">
          系统设置<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to='/role'>角色管理</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to='/cmd'>报错列表</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to='/user'>用户管理</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to='/config'>基础数据</router-link></el-dropdown-item>
          <el-dropdown-item divided><router-link to='/password'>修改密码</router-link></el-dropdown-item>
          <el-dropdown-item divided><router-link to='/'>退出登录</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <router-link to='/cs'><b><i class="el-icon-s-home">首页</i></b></router-link>
      <!-- <span><b>&nbsp;首页</b></span> -->
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      
        <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree" 
        @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  watch: {
    filterText(val){
      this.$refs.tree.filter(val)
    }
  },
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      filterText:'',
      data:[{
          id: 1,
          label: '控制系统',
          url: '/cs',
          children: [{
            id: 4,
            label: '一号楼',
            url: '/build',
            children: [{
              id: 9,
              label: '管道静压控制器',
              url:'/device'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps:{
          children:'children',
          label:'label'
        }
    }
  },
  methods:{
    filterNode(value,data){
      if(!value) 
        return true
      return data.label.indexOf(value)!==-1
    },
    handleNodeClick(data) {
      this.$router.push(data.url)
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    text-align: center;
    /*line-height: 320px*/
    margin: 10px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-dropdown-link {
    cursor: pointer;
    /*color: #409EFF;*/
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
