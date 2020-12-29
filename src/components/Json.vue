<template>
<div class="sp" >
<div class="shopdetails" v-for="(c, index) in posts" :key="index">
	<div id="leftbox">
	<div id="showbox">
    <img  width="400" height="550" />
    </div>
	</div>
    <div class="centerbox">
    	<p class="imgname">{{c.name}}</p>
    	<p class="Aprice">价格：<samp>￥89.00</samp></p>
    	<p class="price">促销价：<samp>{{c.mada}}</samp></p>
    	<p class="youhui">店铺优惠：<samp>购物满两件打八折</samp></p>
    	<p class="kefu">客服：</p>
        <ul>
        <li class="kuanshi">款式：多样</li>
        <!-- <li class="now shopimg"><a href="#" title="熊猫套装"><img src="https://gd1.alicdn.com/imgextra/i1/45738681/TB2LhdOdHJmpuFjSZFBXXXaZXXa_!!45738681.jpg_50x50.jpg_.webp" width="45"></a></li>
        <li class="shopimg"><a href="#" title="铁塔套装"><img src="https://gd3.alicdn.com/imgextra/i3/45738681/TB2Pvqhc3RkpuFjy1zeXXc.6FXa_!!45738681.jpg_50x50.jpg_.webp" width="45"></a></li>
        <li class="shopimg"><a href="#" title="创意胡子"><img src="https://gd1.alicdn.com/imgextra/i1/45738681/TB2B6dIdUhnpuFjSZFPXXb_4XXa_!!45738681.jpg_50x50.jpg_.webp" width="45"></a></li> -->
        </ul>
        <div class="clear"></div>
        <p class="chima">尺码：</p>
        <p class="buy"><a href="#" id="firstbuy">立即购买</a><a href="#">加入购物车</a></p>
   		<div class="clear"></div>
 
    </div>
 

    </div>
</div>
</template>
<script>
import Axios from "axios"
export default {
	data () {
		return {
			commodity : [],
			posts : []
		}
	},
	mounted() {
		var id = this.cm.search.id
		console.log(id)
		Axios.get(`http://localhost:3000/posts`, {
			params : {
				id : id
			}
		}).then(res => {
			this.commodity = res.data
		})
		this.mouned()
	},
	
	methods : {
		mouned () {
			var id = this.cm.search.id
			Axios.get('http://localhost:3000/posts', {
			params : {
				id : id
			}}).then(res => {
				this.posts = res.data
			})
			setTimeout(() => {
				$(() => {
					var i, imgs = $('.sp').find('img')
					console.log(imgs.length)
					for(i = 0;i < this.posts.length;i ++) {
						imgs[i].setAttribute('src', this.posts[i].cSrc)
					
					}
				})
			}, 500)
		}

	}

}
</script>

<style scoped>
*{
	   margin:0; padding:0;
}
.sp{
    background-color: #f4f4f4;
}
ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,p{
	 padding:0; margin:0;
	  list-style:none;
	  }
img{ border:0px;}
.clear{
	  clear:both;
	  }
      .header .bottom{ 
	width:1200px; height:39px; 
	margin:0 auto;
	line-height:39px; 
	background-image:url();
	padding:0;
	position:relative;
	}
.shopdetails{
	width:1200px;
	height:700px;
	margin:0 auto;
	margin-top:20px;
	position:relative;
    background-color: rgb(247, 242, 242);
	
}
.centerbox{
	width:580px;
	height:575px;
	position:absolute;
	top:0px;
	left:420px;
	z-index:1;
}
.centerbox .imgname{
	font-size:24px;
	color:#000;
	font-weight:bold;
	width:580px;
	height:40px;
	font-family:Microsoft YaHei,arial;
	margin-bottom:10px;
}
.centerbox p,.centerbox samp{
	width:580px;
	height:33px;
	font-size:12px;
	line-height:33px;
	color:#666;
	font-family:"微软雅黑";
	padding-left:10px;
	
}
.centerbox .Aprice, .price, .youhui{
	background:rgba(232,232,232,0.5);
}
.centerbox .Aprice samp{
	font-size:14px;
	text-decoration:line-through;
	font-family:"华文仿宋";
}
.centerbox .price samp{
	color:#D00;
	font-size:20px;
	font-weight:bold;
}
.centerbox .youhui samp{
	color:#000;
	font-weight:100;
}
.centerbox .kefu{
	margin-top:10px;
	margin-left:10px;
	width:150px;
	background-image:url();
	background-position:right;
	background-repeat:no-repeat;
}
.centerbox ul{
	margin-left:10px;
	margin-top:15px;
	}
.centerbox ul li{
	float:left;
	width:50px;
	height:50px;
	margin-left:10px;
}
.centerbox .kuanshi{
	color:#666;
	font-family:"微软雅黑";
}
.centerbox .shopimg{
	width:49px;height:49px;
}
.centerbox .shopimg img{
	margin:2px;
}
.centerbox .now{
	background-color:#F90;
}
.centerbox .chima{
	width:110px;
	height:40px;
	background-image:url();
	background-position:right;
	background-repeat:no-repeat;
	margin-left:10px;
	margin-top:10px;
}
.centerbox .buy{
		margin-left:30px;
		margin-top:25px;
	}
.centerbox .buy a{
	
	display:block;
	width:200px;
	height:50px;
	color:#000;
	border:1px solid #ccc;
	float:left;
	font-size:16px;
	font-weight:bold;
	font-family:Microsoft YaHei,arial;
	margin-left:10px;
	background-color:#fff;
	text-align:center;
	line-height:50px;
}
.centerbox .fenx{
	width:200px;
	margin-left:50px;
	margin-top:20px;
}
.centerbox .fuwu{
	width:500px;
	height:35px;
	margin-left:10px;
	background-image:url();
	background-position:right;
	background-repeat:no-repeat;
	margin-top:10px;
}
.centerbox .pay{
	width:200px;
	height:35px;
	margin-left:10px;
	background-image:url();
	background-position:right;
	background-repeat:no-repeat;
	margin-top:10px;
}
#firstbuy{
	background-color:#f00;
		color:#fff;
}
</style>