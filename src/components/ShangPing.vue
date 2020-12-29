<template>
<div class="shangping">
    <div class="box">
        <el-row>
        <el-col>
           <h2 v-for="(c, index) in axasdaz" :key="index"> <img id="title"><small>{{c.name}}</small></h2>
        </el-col>
    </el-row>
   <el-row>
           <div id="json">
       <el-col :span="4" v-for="(c, index) in commodity" :key="index" >
                <img>
           <h3>{{c.price}}</h3>
           <i class="el-icon-chat-dot-round">{{c.name}}</i>
       </el-col>
           </div>
   </el-row>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            title : 'meirihaowu',
            commodity:[],
            axasdaz:[]
        }
    },
    mounted () {
        axios.get('http://localhost:3000/commodity').then(res => {
            this.commodity = res.data
            console.log(JSON.stringify(res.data))
        })
        axios.get('http://localhost:3000/axasdaz').then(res => {
            this.axasdaz = res.data
            console.log(JSON.stringify(res.data))
        })
        setTimeout(() => {
            $(() => {
                var i, imgs = $('#json').find('img')
                console.log(imgs.length)
                var imgss = $('#title')
                for(i = 0;i < this.commodity.length;i ++) {
                    imgs[i].setAttribute('src', this.commodity[i].tSrc)
                  
                }
                imgss[0].setAttribute('src', this.axasdaz[0].TSrc)
            })
        }, 500)
            
    }
}
</script>

<style scoped>
.shangping{ 
    background-color: #f4f4f4;
    padding-top: 20px;
}
.text {
     position: absolute;
     bottom: 6px;
     left: 8px;
     color: #fff;
     
 }
  .box {
     background: #fff;
      padding: 10px; 
    width: 1140px;
    margin: auto;

 }
 small {
     font-size: 12px;
     font-weight: 300;
     color :#999;
 }
 h2 img{
     width: auto;
     height: 24px;
     display: inline-block;
 
 }
 img{
      background-color: #f4f4f4;
 }
 
  h2 small{
     position: relative;
     top: -7px;
 }
.pic{
     color: #5a4f4f;
}
h3{
     font-size: 16px;
     font-weight: 300;
 }
 .el-icon-chat-dot-round {
     color: royalblue;
 }
</style>