<template>
  <div id="helloworld">
    <!-- <router-link to="/"></router-link>
    <router-view></router-view> -->
    
  <TaoBaoWang></TaoBaoWang> 
  <div class="ha"><CeBianLan></CeBianLan></div>
  <div class="das"><LunBo></LunBo></div>
  <ShangPing></ShangPing>
  <MeiRiTaoBao></MeiRiTaoBao>
  <Sp></Sp>
  </div>
</template>


<script>
import TaoBaoWang from './TaoBaoWang'
import LunBo from './LunBo'
import ShangPing from './ShangPing'
import MeiRiTaoBao from './MeiRiTaoBao'
import CeBianLan from './CeBianLan'
import Sp from './Sp'

export default {
 
 components: {
    TaoBaoWang,
    LunBo,
    ShangPing,
    MeiRiTaoBao,
    CeBianLan,
    Sp
  },
}
</script>

<style>
.ha {

    left: 170px;
}
.das {
   position: absolute;
   top: 250px;
   left: 260px;
}
.helloworld {
  background-color: #f4f4f4;
}
</style>