import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'reset-css'

//element-plus的暗黑主题css
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入elementlus
import ElementPlus from 'element-plus'
//引入中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/style.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, { locale: zhCn })
app.use(createPinia())
app.use(router)

app.mount('#app')
