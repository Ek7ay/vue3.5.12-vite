import { createApp } from 'vue'
import App from './App.vue'
import { echarts } from '@/utils/echartsPlugin.js'
import '@/assets/style/variables.less'
import router from './router/routes.js'

const app = createApp(App);
app.provide('echarts', echarts)
app.use(router)
app.mount('#app');
