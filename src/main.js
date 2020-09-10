import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, Field, Form, Collapse, CollapseItem, NavBar, Tab, Tabs, Tabbar, TabbarItem, Cell, CellGroup } from 'vant'
import '../src/assets/style/min.css'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Field)
Vue.use(Form)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
