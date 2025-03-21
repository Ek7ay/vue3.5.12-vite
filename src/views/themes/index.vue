<script setup>
import { ref, onMounted, inject } from 'vue'
import svgcat from '@/assets/images/cat.svg'
import svgdog from '@/assets/images/dog.svg'
// import * as echarts from 'echarts'
// import themeTest from '@/assets/echarts-themes/test.json'
// import themeShine from '@/assets/echarts-themes/shine.json'
// import themeChalk from '@/assets/echarts-themes/chalk.json'
// import themeInfographic from '@/assets/echarts-themes/infographic.json'
// echarts.registerTheme('test', themeTest)
// echarts.registerTheme('shine', themeShine)
// echarts.registerTheme('chalk', themeChalk)
// echarts.registerTheme('infographic', themeInfographic)

// heatmap图表实例
const heatmapChart = ref()
let myChart = null
const echarts = inject('echarts')
const setChart = (theme = '') => {
  if (myChart) {
    myChart.dispose();
  }
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(heatmapChart.value, theme);
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
}

onMounted(() => {
  setChart()
})

const svgSrc = ref(svgcat)

const changeTheme = (theme) => {
  switch (theme) {
    case 'default':
      document.documentElement.className = 'theme-default'
      svgSrc.value = svgcat
      setChart()
      break
    case 'dark':
      document.documentElement.className = 'theme-dark'
      svgSrc.value = svgdog
      setChart('test')
      break
  }
}

</script>

<template>
  <div class="box" id="main" ref="heatmapChart"></div>
  <div class="textBox">
    换主题测试
    <button @click="changeTheme('default')">默认主题</button>
    <button @click="changeTheme('dark')">深色主题</button>
    <div class="lt">
      <img :src="svgSrc" alt="">
    </div>
    <div class="rt">

    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 600px;
  height: 400px;
  border: 3px solid @border-color;
  margin: 0 auto;
  float: left;
}
.textBox {
  width: 600px;
  height: 400px;
  border: 3px solid @border-color;
  margin: 0 auto;
  float: left;
  position: relative;
  background-color: @back-color;
  color: @font-color;
  .lt {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    border: 3px solid @border-color;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rt {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    height: 200px;
    border: 3px solid @border-color;
    background: @background-image;
  }
}
</style>
