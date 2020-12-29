<template>
<div class="gouwuche">
    <div id="header"><img src="https://img.alicdn.com/tfs/TB1R5fsgyDsXe8jSZR0XXXK6FXa-281-80.jpg" alt="" /></div>
<div id="nav">您的位置：<a href="#">首页</a> > <a href="#">我的淘宝</a> > 我的购物车</div>
<div id="navlist">
  <ul>
    <li class="navlist_red_left"></li> 
    <li class="navlist_red">1. 查看购物车</li> 
    <li class="navlist_red_arrow"></li>
    <li class="navlist_gray">2. 确认订单信息</li> 
    <li class="navlist_gray_arrow"></li> 
     <li class="navlist_gray">3. 付款到支付宝</li> 
    <li class="navlist_gray_arrow"></li>   
     <li class="navlist_gray">4. 确认收货</li> 
    <li class="navlist_gray_arrow"></li> 
    <li class="navlist_gray">5. 评价</li> 
    <li class="navlist_gray_right"></li>   
  </ul>
</div>

<div id="content">
 <table width="100%" border="0" cellspacing="0" cellpadding="0" id="shopping">
 
  <tr>
    <td class="title_1"><input id="allCheckBox" type="checkbox" value="" onclick="selectAll()" />全选</td>
    <td class="title_2" colspan="2">店铺宝贝</td>
    <td class="title_4">单价（元）</td>
    <td class="title_5">数量</td>
    <td class="title_6">小计（元）</td>
    <td class="title_7">操作</td>
  </tr>
  <tr>
    <td colspan="7" class="line"></td>
  </tr>
  <tr>
    <td colspan="7" class="shopInfo">店铺：<a href="#">纤巧百媚时尚鞋坊</a>    卖家：<a href="#">纤巧百媚</a></td>
  </tr>
   <tr id="product1">
    <td class="cart_td_1"><input name="cartCheckBox" type="checkbox" value="product1" onclick="selectSingle()" /></td>
    <td class="cart_td_2"><img src="https://gd1.alicdn.com/imgextra/i1/45738681/TB2LhdOdHJmpuFjSZFBXXXaZXXa_!!45738681.jpg_50x50.jpg_.webp" alt="shopping"/></td>
    <td class="cart_td_3"><a href="#">日韩流行风时尚美眉最爱独特米字拼图金属坡跟公主靴子黑色</a><br />
        颜色：棕色 尺码：37<br />
    </td>
    <td class="cart_td_5">138.00</td>
    <td class="cart_td_6"><button>-</button> <input id="num_3" type="text"  value="1" class="num_input" readonly="readonly"/><button>+</button></td>
    <td class="cart_td_7"></td>
    <td class="cart_td_8"><a href="">删除</a></td>
  </tr>
  
  <tr>
    <td colspan="7" class="shopInfo">店铺：<a href="#">香港我的美丽日记</a>    卖家：<a href="#">lokemick2009</a></td>
  </tr>
   <tr id="product2">
    <td class="cart_td_1"><input name="cartCheckBox" type="checkbox" value="product2" onclick="selectSingle()" /></td>
    <td class="cart_td_2"><img src="https://gd3.alicdn.com/imgextra/i3/45738681/TB2Pvqhc3RkpuFjy1zeXXc.6FXa_!!45738681.jpg_50x50.jpg_.webp" alt="shopping"/></td>
    <td class="cart_td_3"><a href="#">chanel/香奈尔/香奈尔炫亮魅力唇膏3.5g</a><br />
      </td>
    <td class="cart_td_5">265.00</td>
    <td class="cart_td_6"><button>-</button> <input id="num_3" type="text"  value="1" class="num_input" readonly="readonly"/><button>+</button></td>
    <td class="cart_td_7"></td>
    <td class="cart_td_8"><a href="">删除</a></td>
  </tr>
  
   <tr>
    <td colspan="7" class="shopInfo">店铺：<a href="#">实体经营</a>    卖家：<a href="#">林颜店铺</a> </td>
  </tr>
   <tr id="product3">
    <td class="cart_td_1"><input name="cartCheckBox" type="checkbox" value="product3"  onclick="selectSingle()"/></td>
    <td class="cart_td_2"><img src="https://gd1.alicdn.com/imgextra/i1/45738681/TB2B6dIdUhnpuFjSZFPXXb_4XXa_!!45738681.jpg_50x50.jpg_.webp" alt="shopping"/></td>
    <td class="cart_td_3"><a href="#">蝶妆海晳蓝清滢粉底液10#（象牙白）</a><br />
       </td>
    <td class="cart_td_5">85.00</td>
    <td class="cart_td_6"><button>-</button> <input id="num_3" type="text"  value="1" class="num_input" readonly="readonly"/><button>+</button></td>
    <td class="cart_td_7"></td>
    <td class="cart_td_8"><a href="">删除</a></td>
  </tr>
  
  
  
   <tr>
   <td  colspan="3"><a href=""></a></td>
    <td colspan="5" class="shopend">商品总价（不含运费）：<label id="total" class="yellow"></label> 元<br />
       <el-button type="warning">提交</el-button></td>
  </tr>
</table>
</div>
</div>

 


</template>


<script>
function changeNum(numId,flag){
	var numId=document.getElementById(numId);
	if(flag=="minus"){
		if(numId.value<=1){
			alert("宝贝数量必须是大于0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}
	

function productCount(){
	var total=0;      
	var integral=0;   
	
	var point;      
	var price;    
	var number;    
	var subtotal;  

     
	var myTableTr=document.getElementById("shopping").getElementsByTagName("tr"); 
	if(myTableTr.length>0){
	for(var i=1;i<myTableTr.length;i++){
	    if(myTableTr[i].getElementsByTagName("td").length>2){ 
		point=myTableTr[i].getElementsByTagName("td")[3].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[4].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=price*number;
		myTableTr[i].getElementsByTagName("td")[6].innerHTML=price*number;
		}
	}
	document.getElementById("total").innerHTML=total;
	document.getElementById("integral").innerHTML=integral;
	
	}
}
function selectAll(){
	var oInput=document.getElementsByName("cartCheckBox");
 for (var i=0;i<oInput.length;i++){
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}
	
function selectSingle(){
	var k=0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false){
		  k=1;
		  break;
	    }
	}
	if(k==0){
		document.getElementById("allCheckBox").checked=true;
		}
	else{
		document.getElementById("allCheckBox").checked=false;
		}
}

</script>

<style>


body{
	margin:0px;
	padding:0px;
	font-size:12px;
	line-height:20px;
	color:#333;
   }
ul,li,ol,h1,dl,dd{
	list-style:none;
	margin:0px;
	padding:0px;
	}
a{
	color:#1965b3;
    text-decoration: none;
	}    
a:hover{
	color:#CD590C;
	text-decoration:underline;
	}
img{
	border:0px;
	vertical-align:middle;
	}
#header{
	height:40px;
	margin:10px auto 10px auto;
	width:800px;
	clear:both;
	}
#nav{
	margin:10px auto 10px auto;
	width:800px;
	clear:both;

   padding-top: 10px;
	}
    #navlist{
	width:800px;
	margin:0px auto 0px auto;
	height:23px;
	}
	#navlist li{
		float:left;
		height:23px;
		line-height:26px;
	}
	.navlist_red_left{
		background-image:url();
		background-repeat:no-repeat;
		background-position:-12px -92px;
		width:3px;
		}
	.navlist_red{
		background-color:#ff6600;
		text-align:center;
		font-size:14px;
		font-weight:bold;
		color:#FFF;
		width:130px;
		}
	.navlist_red_arrow{
		background-color:#ff6600;
		background-image:url();
		background-repeat:no-repeat;
		background-position:0px 0px;
		width:13px;
		}
	.navlist_gray{
		background-color:#e4e4e4;
		text-align:center;
		font-size:14px;
		font-weight:bold;
		width:150px;
		}
	.navlist_gray_arrow{
		background-color:#e4e4e4;
		background-image:url();
		background-repeat:no-repeat;
		background-position:0px 0px;
		width:13px;
		}
	.navlist_gray_right{
		background-image:url();
		background-repeat:no-repeat;
		background-position:-12px -138px;
		width:3px;
		}

#content{
	width:800px;
    
	margin:10px auto 5px auto;
	clear:both;
	}
	.title_1{
		text-align:center;
		width:50px;
		}
	.title_2{
		text-align:center;
		}
	.title_3{
		text-align:center;
		width:80px;
		}
	.title_4{
		text-align:center;
		width:80px;
		}
	.title_5{
		text-align:center;
		width:100px;
		}
	.title_6{
		text-align:center;
		width:80px;
		}
	.title_7{
		text-align:center;
		width:60px;
		}
	.line{
		background-color:#a7cbff;
		height:3px;
		}
	.shopInfo{
		padding-left:10px;
		height:35px;
		vertical-align:bottom;
		}
	.num_input{
		border:solid 1px #666;
		width:25px;
		height:15px;
		text-align:center;
		}
	.cart_td_1,.cart_td_2,.cart_td_3,.cart_td_4,.cart_td_5,.cart_td_6,.cart_td_7,.cart_td_8{
		background-color:#e2f2ff;
		border-bottom:solid 1px #d1ecff;
		border-top:solid 1px #d1ecff;
		text-align:center;
		padding:5px;
		}
	.cart_td_1,.cart_td_3,.cart_td_4,.cart_td_5,.cart_td_6,.cart_td_7{
		border-right:solid 1px #FFF;
		}
	.cart_td_3{
		text-align:left;
		}
	.cart_td_4{
		font-weight:bold;
		}
	.cart_td_7{
		font-weight:bold;
		color:#fe6400;
		font-size:14px;
		}
	.hand{
		cursor:pointer;
		}
.shopend{
	text-align:right;
	padding-right:10px;
	padding-bottom:10px;
	}
.yellow{
	font-weight:bold;
	color:#fe6400;
	font-size:18px;
	line-height:40px;
	}
</style>