import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/style/main.css'

import {ConfigProvider} from 'vant'
// 引入自定义黑色主题
import './assets/style/dark.less'

// pinia持久化插件
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'


const app = createApp(App)
    .use(createPinia().use(piniaPluginPersistedState))
    .use(router)
    .use(ConfigProvider)

app.mount('#app')
