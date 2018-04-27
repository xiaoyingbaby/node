<template>
  <div class="checkin-container">
    <!-- S 考勤数据 -->
    <ul class="checkin-info">
      <li>应到人数：<em>55</em>人</li>
      <li>实到人数：<em>51</em>人</li>
      <li>请假人数：<em>1</em>人</li>
      <li>未到人数：<em>3</em>人</li>
      <li>迟到人数：<em>1</em>人</li>
    </ul><!-- E 考勤数据 -->
    <ul class="checkin-stu-list">
      <li v-for="(item, index) in items" :key="index">
        <a href="">
          <div class="checkin-stu-avatar"><img :src="item.avatar" alt=""></div>
          <span class="checkin-stu-name">{{item.name}}<span class="checkin-flag" v-if="item.isLeave">假</span></span>
          <span class="label label-fill">未签到</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// var status = ['label-fill-bluePurple', 'label-fill-red', '']
export default {
  name: 'stuList',
  data: function () {
    return {
      items: [
        {
          name: '韩雪',
          avatar: 'male.png',
          isLeave: true,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: true,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        },
        {
          name: '韩雪',
          avatar: './male.png',
          isLeave: false,
          isSign: false
        }
      ]
    }
  }
}
</script>
<style>

</style>
