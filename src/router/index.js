/*
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-18 22:15:51
 * @FilePath: \SecurityCheck_Vue\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const YC = () => import('../views/YC/YC.vue')
const YCQuery = () => import('../views/YC/page/YCQuery')
const YCVCR = () => import('../views/YC/page/YCVCR')
const YCMarket = () => import('../views/YC/page/YCMarket')
const YCCode = () => import('../views/YC/page/YCCode')
const YCResult = () => import('../views/YC/page/YCResult')

const Auman = () => import('../views/Auman/Auman.vue')
const AumanQuery = () => import('../views/Auman/page/AumanQuery.vue')

const XC = () => import('../views/XC/XC.vue')
const XCQuery = () => import('../views/XC/page/XCQuery.vue')
const XCResult = () => import('../views/XC/page/XCResult.vue')
const XCError = () => import('../views/XC/page/XCError.vue')


const routes = [{
    path: '/yc',
    name: 'yc',
    component: YC,
    children: [{
        path: '',
        name: 'ycQuery',
        component: YCQuery
      },
      {
        path: 'ycVCR',
        name: 'ycVCR',
        component: YCVCR
      },
      {
        path: 'ycMarket',
        name: 'ycMarket',
        component: YCMarket
      },
      {
        path: 'ycCode',
        name: 'ycCode',
        component: YCCode
      },
      {
        path: 'ycResult',
        name: 'ycResult',
        component: YCResult
      },
    ]
  },
  {
    path: '/auman',
    name: 'auman',
    component: Auman,
    children: [{
      path: '',
      name: 'aumanQuery',
      component: AumanQuery
    }]
  },
  {
    path: '/xc',
    name: 'xc',
    component: XC,
    children: [{
        path: '',
        name: 'xcQuery',
        component: XCQuery
      },
      {
        path: 'xcResult',
        name: 'xcResult',
        component: XCResult
      },
      {
        path: 'xcError',
        name: 'xcError',
        component: XCError
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

const company = {
  'yc': '玉柴正品配件防伪查询系统',
  'auman': 'Cummins Filtration',
  'xc': '超级码区块链防伪溯源查询平台'
}

router.beforeEach((to, from, next) => {
  document.title = company[to.matched[0].name]
  next()
});

export default router