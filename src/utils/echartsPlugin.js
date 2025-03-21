import * as echarts from 'echarts'
import themeInfographic from '@/assets/echarts-themes/infographic.json'
import themeTest from '@/assets/echarts-themes/test.json'
import themeShine from '@/assets/echarts-themes/shine.json'
import themeChalk from '@/assets/echarts-themes/chalk.json'
echarts.registerTheme('test', themeTest)
echarts.registerTheme('shine', themeShine)
echarts.registerTheme('chalk', themeChalk)
echarts.registerTheme('infographic', themeInfographic)
export { echarts }