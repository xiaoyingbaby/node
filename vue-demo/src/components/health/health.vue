<template>
  <div class="box">
    <div class="box-header">
      <h4 class="box-title">健康数据</h4>
    </div>
    <div class="box-body">
      <div class="space-content">
        <div class="tab-content">
          <div class="tab-pane active">
            <div class="health-toolbar clearfix">
              <div class="btn-group pull-left">
                <button class="btn">&lt;</button>
                <button class="btn">&gt;</button>
              </div>
              <span class="health-date">4/28-5/05</span>
              <div class="btn-group pull-right">
                <button class="btn">日视图</button>
                <button class="btn active">周视图</button>
                <button class="btn">月视图</button>
              </div>
            </div>
            <div id="chart-step" style="height:450px;"></div>
            <ul class="health-data">
              <li>
                <span><i class="icon icon-run"></i></span>
                <em>8000</em>
                <h5>步数</h5>
              </li>
              <li>
                <span><i class="icon icon-km"></i></span>
                <em>10.1</em>
                <h5>公里</h5>
              </li>
              <li>
                <span><i class="icon icon-cal"></i></span>
                <em>566</em>
                <h5>千卡</h5>
              </li>
              <li>
                <span><i class="icon icon-award"></i></span>
                <em>14</em>
                <h5>班级排名</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import utils from '../../common/js/utils'
export default {
  name: 'health',
  mounted: function () {
    this.scrollContainer()
    this.initChart()
  },
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 180)
    },
    initChart: function () {
      var stepChart = echarts.init(document.getElementById('chart-step'))
      stepChart.setOption({
        color: ['#6967f7'],
        tooltip: {
          trigger: 'axis',
          formatter: '{c}'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'line',
            areaStyle: {normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#b1aefa' // 0% 处的颜色
                }, {
                  offset: 1, color: '#f3f3fe' // 100% 处的颜色
                }]
              }
            }},
            data: [5600, 5300, 4600, 8600, 9000, 4230, 6210]
          }
        ]
      })
    }
  }
}
</script>
<style>

</style>
