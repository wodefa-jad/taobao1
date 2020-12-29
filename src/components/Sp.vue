<template>
<div class="sp" id="jsons">
    <div class="box">
<el-row>
        <el-col>
           <h2 class="hotsale-hd mod-hd dar-hd">| 精选好物</h2>
           
        </el-col>
      
    </el-row> 
    <div class="sp1">
        <el-row :gutter="14" >
            <el-col :span="4.5" class="sp2" v-for="(p, index) in posts" :key="index">
                <img @click="go(p.id)">
                <div class="h4">{{p.title}}</div>
                <div class="rng"></div>
                <i class="el-icon-chat-dot">{{p.mada}}</i>
            </el-col>
        </el-row>
    </div>
    </div>
</div>

</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            title : '',
           posts:[]
        }
    },
    mounted () {
        axios.get('http://localhost:3000/posts').then(res => {
            this.posts = res.data
        })
        setTimeout(() => {
            $(() => {
                var i, imgs = $('#jsons').find('img')
                for(i = 0;i < this.posts.length;i ++) {
                    imgs[i].setAttribute('src', this.posts[i].tSrc)
                }
            })
        }, 500)
            
    },
    methods : {
       go(id){
           alert('ok')
           this.cm.search.id = id
           console.log(this.cm.search.id)
           window.location.href = '/#/json'
       }

    }
}
</script>

<style scoped>
.hotsale-hd {
    color: #ff9f00;
    border-bottom: 1px solid #f4f4f4;
}
.bar-hd {
    display: block;
}
.rng {
    height: 25px;
}
.sp{ 
    background-color: #f4f4f4;
    position: relative;
   
}
.sp1 {
    padding-left: 35px;
 
}
.sp2 {
    border: 1px solid transparent;
    color: #6c6c6c;
    border-right-color: #f4f4f4;
    border-bottom-color: #f4f4f4;
}
.text {
     position: absolute;
     bottom: 6px;
     left: 8px;
     color: #fff;
     
 }
 .h4 {
     margin-top: 7px;
    line-height: 22px;
    height: 20px;
    font-size: 14px;
    color: #666;
    font-weight: normal;
    transition: color 0.3s;
    overflow: hidden;
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
     top: 10px;
     width: 197px;
    height: 197px;
    overflow: hidden;
 }
 
  h2 small{
     position: relative;
     top: -7px;
 }
.pic{
    padding-top: 10px;
     color: #5a4f4f;
    
}
h3{
     font-size: 16px;
     font-weight: 300;
 }
 .el-icon-chat-dot {
     color: rgb(238, 21, 13);
 }
 
 .sp2{
            margin: 1px auto;
    
            position: relative; 
        }
  /* .sp2:hover::before{  
            content: '';
            width: 100%;
            height: 100%;
            border: 1px solid rgba(248, 6, 6, 0.938);
            display: block; 
            position: absolute; 
            top: 0;
            left: 0;
            box-sizing: border-box; 
        }  */
</style>