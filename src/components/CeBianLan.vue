<template>
<div class="cebianlan">
    <div class="cebiaolan1">
      
         <el-row class="tac">
   <el-col :span="4">   
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#FFBB66"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>服务大厅</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">在场服务</el-menu-item>
          <el-menu-item index="1-2">历史服务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-shop"></i>
          <span>周边超市</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">蔬菜水果</el-menu-item>
          <el-menu-item index="1-2">健康谷物</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-lollipop"></i>
          <span>儿童零食</span>
        </template>
        <el-menu-item-group>        
          <el-menu-item index="1-1">甜甜糖果</el-menu-item>
          <el-menu-item index="1-2">三只松鼠</el-menu-item>
          <el-menu-item index="1-3">每日坚果</el-menu-item>
          <el-menu-item index="1-4">美味面包</el-menu-item>
          <el-menu-item index="1-5">阳光蛋糕</el-menu-item>
        </el-menu-item-group>
      </el-submenu>      
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-headset"></i>
          <span>最新数码</span>
        </template>
        <el-menu-item-group>       
          <el-menu-item index="1-1">苹果手机</el-menu-item>
          <el-menu-item index="1-2">小米音响</el-menu-item>
          <el-menu-item index="1-3">华为电脑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-bicycle"></i>
          <span>健康出行</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">公共出行</el-menu-item>
          <el-menu-item index="1-2">周边卖家</el-menu-item>
        </el-menu-item-group>
      </el-submenu>  

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-present"></i>
          <span>节日礼物</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">公共出行</el-menu-item>
          <el-menu-item index="1-2">周边卖家</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

   
     

    </el-menu>
  </el-col>
</el-row>
  </div>
</div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style scoped>
.cebianlan1 {
  left: 30px;
    margin: auto;
      
}
.cebianlan {
  background-color: #f4f4f4;
}

</style>