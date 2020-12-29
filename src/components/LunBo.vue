<template>
<div class="lunbo">
  <div class="lunbo1">
  <el-carousel :interval="4000" type="card" height="280px" width="300px">
    <el-carousel-item v-for="item in dasw" :key="item">
      <img :src="item" alt="">
      </el-carousel-item>
      
    
  </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
        name : 'LunBo',
        data () {
            return {
            dasw: [
              'https://img.alicdn.com/imgextra/i1/6000000003237/O1CN01S4jELe1ZmahxInytr_!!6000000003237-0-octopus.jpg',
             'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
             'https://gw.alicdn.com/imgextra/i3/1918243/O1CN018v6dzt2AlLPhu2nh2_!!1918243-0-lubanu.jpg',
             'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
             'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg'
            ]
            }
        }
}
</script>


<style scoped>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lunbo1{
      width: 1030px;
      margin: auto;
      

  }
  .lunbo {
    width: 100%;
    background-color: #f4f4f4;
    position:  relative;
 
  }
  
</style>
