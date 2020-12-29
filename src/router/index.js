import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TaoBaoWang from '@/components/TaoBaoWang'
import DengLu from '@/components/DengLu'
import ZhuCe from '@/components/ZhuCe'
import GouWuChe from '@/components/GouWuChe'
import LunBo from '@/components/LunBo'
import CeBianLan from '@/components/CeBianLan'
import MeiRiTaoBao from '@/components/MeiRiTaoBao'
import ShangPing from '@/components/ShangPing'
import Sp from '@/components/Sp'
import Json from '@/components/Json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/taobaowang',
      name: 'TaoBaoWang',
      component: TaoBaoWang
    },
     {
      path: '/denglu',
      name: 'DengLu',
      component: DengLu
    },
     {
      path: '/zhuce',
      name: 'ZhuCe',
      component: ZhuCe
    },
     {
      path: '/gouwuche',
      name: 'GouWuChe',
      component: GouWuChe
    },
     {
      path: '/lunbo',
      name: 'LunBo',
      component: LunBo
    },
     {
      path: '/cebianlan',
      name: 'CeBianLan',
      component: CeBianLan
    },
     {
      path: '/meiritaobao',
      name: 'MeiRiTaoBao',
      component: MeiRiTaoBao
    },
     {
      path: '/shangping',
      name: 'ShangPing',
      component: ShangPing
    },
     {
      path: '/sp',
      name: 'Sp',
      component: Sp
    },

     {
      path: '/json',
      name: 'Json',
      component: Json
    },
     
     
    ]
})
