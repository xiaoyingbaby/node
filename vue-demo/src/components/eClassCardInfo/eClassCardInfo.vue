<template>
  <div class="box">
    <div class="box-body">
      <div class="role">
        <span class="role-img"><img src="./female-teacher.png" alt=""></span>
        <span class="label label-fill label-fill-bluePurple">班主任</span>
        <h4 class="role-name">小李子</h4>
      </div>
      <ul class="data-list">
        <li><span>班级人数</span><span><em>53</em></span></li>
        <li><span>请假人数</span><span><em>2</em></span></li>
        <li>
          <span>请假名单</span>
          <span>李雪丽、张倩倩、小李子... <a class="js-show-leave" href="">更多</a></span>
          <div class="leave-list">
            <h4>请假名单</h4>
            <div class="leave-list-content">李雪丽、张倩倩、小李子、李雪丽、张倩倩、小李子、李雪丽、张倩倩、小李子</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import utils from '../../common/js/utils'
export default {
  name: 'eClassCardInfo',
  methods: {
    scrollContainer: function () {
      var containers = this.$el.lastElementChild
      utils.calcScroll(containers, 160)
    }
  },
  mounted: function () {
    this.scrollContainer()
  }
}
</script>
<style>

</style>
