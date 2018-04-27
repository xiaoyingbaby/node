<template>
  <div class="box">
    <div class="box-header">
      <h4 class="box-title">我的课表</h4>
    </div>
    <div class="box-body">
      <div class="space-content">
        <div class="tab-content">
          <div id="aa" class="tab-pane active" role="tabpanel">
            <table class="table table-course">
              <thead>
                <tr>
                  <th width="12.5%"></th>
                  <th class="active" width="12.5%">周一</th>
                  <th width="12.5%">周二</th>
                  <th width="12.5%">周三</th>
                  <th width="12.5%">周四</th>
                  <th width="12.5%">周五</th>
                  <th width="12.5%">周六</th>
                  <th width="12.5%">周日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="4">上午</td>
                  <td class="active">
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                  <td>
                    语文
                    <p>小李子</p>
                  </td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr><td colspan="8"></td></tr>
                <tr>
                  <td rowspan="4">下午</td>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
                <tr>
                  <td class="active">语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                  <td>语文</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'stuCourseTable',
  mounted: function () {
    this.scrollContainer()
  },
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 180)
    }
  }
}
</script>
<style>

</style>
