import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//安装ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
