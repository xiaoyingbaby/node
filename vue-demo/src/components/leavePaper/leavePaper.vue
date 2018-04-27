<template>
  <div class="box">
    <div class="box-header">
      <h4 class="box-title">请假</h4>
    </div>
    <div class="box-body">
      <div class="space-cotnent">
        <div class="tab-content">
          <div class="tab-pane active">
            <ul class="leave-paper-type clearfix">
              <li class="active"><a href="">请假单</a></li>
              <li><a href="">临时出校申请单</a></li>
              <li><a href="">临时住校、通校申请单</a></li>
              <li><a href="">长期通校申请单</a></li>
            </ul>
            <div class="leave-paper">
              <table class="table table-leave">
                <thead>
                  <tr>
                    <th class="text-center" colspan="6">请假单</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th width="14.28%">学生姓名：</th>
                    <td width="19.28%">韩雪</td>
                    <th width="14.28%">班级：</th>
                    <td width="19.28%">高一（3）班</td>
                    <th width="14.28%">寝室号：</th>
                    <td width="19.28%">3#333</td>
                  </tr>
                  <tr>
                    <th width="14.28%">开始时间：</th>
                    <td width="19.28%">
                      <input type="text" class="datatimepicker" placeholder="请选择">
                    </td>
                    <th width="14.28%">结束时间：</th>
                    <td width="19.28%">
                      <input type="text" class="datatimepicker" placeholder="请选择">
                    </td>
                    <th width="14.28%">天数：</th>
                    <td width="19.28%">2天</td>
                  </tr>
                  <tr>
                    <th class="cell-big" width="14.28%">事由：</th>
                    <td width="83.33%" colspan="5">因身体不适，请假去医院</td>
                  </tr>
                  <tr>
                    <th class="cell-big" width="14.28%">床位是否保留：</th>
                    <td width="83.33%" colspan="5">
                      <label><input type="radio" name="radio" class="wp"><span class="lbl"> 保留</span></label>
                      <label><input type="radio" name="radio" class="wp"><span class="lbl"> 不保留</span></label>
                    </td>
                  </tr>
                  <tr>
                    <th width="14.28%">通校居住地：</th>
                    <td width="19.28%">
                      <input type="text" placeholder="请输入">
                    </td>
                    <th width="14.28%">陪住人姓名：</th>
                    <td width="19.28%">
                      <input type="text" placeholder="请输入">
                    </td>
                    <th width="14.28%">与本人关系：</th>
                    <td width="19.28%">
                      <input type="text" placeholder="请输入">
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="leave-paper-btn"><button class="btn btn-lg">提交申请</button></div>
            </div>
            <div class="leave-paper">
              <span class="icon icon-passed">审核通过</span>
              <table class="table table-leave">
                <thead>
                  <tr>
                    <th class="text-center" colspan="4">杭州外国语学校（请假单）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th width="16.67%">学生姓名：</th>
                    <td width="33.33%">韩雪</td>
                    <th width="16.67%">班级：</th>
                    <td width="33.33%">高一（3）班</td>
                  </tr>
                  <tr>
                    <th width="16.67%">寝室号：</th>
                    <td width="33.33%">3#333</td>
                    <th width="16.67%">起止时间：</th>
                    <td width="33.33%">2017-09-04 至 2017-09-06&emsp;共3天</td>
                  </tr>
                  <tr>
                    <th class="cell-big" width="16.67%">事由：</th>
                    <td width="83.33%" colspan="3">因身体不适，请假去医院</td>
                  </tr>
                  <tr>
                    <th class="cell-big" width="16.67%">班主任审核：</th>
                    <td width="33.33%">同意。廖明</td>
                    <th class="cell-big" width="16.67%">年级组长：</th>
                    <td width="33.33%">同意。廖明</td>
                  </tr>
                  <tr>
                    <th class="cell-big" width="16.67%">学生处领导：</th>
                    <td width="33.33%">同意。廖明</td>
                    <th class="cell-big" width="16.67%">分管校领导：</th>
                    <td width="33.33%">同意。廖明</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'leavePaper',
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 180)
    }
  },
  mounted: function () {
    this.scrollContainer()
  }
}
</script>
<style>

</style>
