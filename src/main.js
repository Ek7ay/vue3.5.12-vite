import { createApp } from 'vue'
import App from './App.vue'
import { echarts } from '@/utils/echartsPlugin.js'
import '@/assets/style/variables.less'

const app = createApp(App);
app.provide('echarts', echarts)
app.mount('#app');
