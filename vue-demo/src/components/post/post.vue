<template>
  <div class="box">
    <div class="box-body">
      <div class="post-container">
        <ul class="post-list" data-action="scroll">
          <li v-for="(item, index) in items" :key="index">
            <a href="">
              <img width="140" height="112" :src="item.pic" alt="" class="post-img">
              <h4 class="post-title"><span class="label label-line label-line-purple">{{item.type}}</span>{{item.title}}</h4>
              <p class="post-summary">{{item.summary}}</p>
              <p class="post-time">发布时间：{{item.time}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'post',
  data: function () {
    return {
      items: [
        {
          pic: './img.png',
          type: '校级',
          title: '大庆市中小学生第三十二届篮球比赛圆满结束',
          summary: '为全面推进素质教育，深入实施中小学“体育、艺术2+1”项目工程11月17日，大庆市中小学生第三十二届篮球比赛暨',
          time: '2017-11-22'
        },
        {
          pic: './img.png',
          type: '班级',
          title: '大庆市中小学生第三十二届篮球比赛圆满结束',
          summary: '为全面推进素质教育，深入实施中小学“体育、艺术2+1”项目工程11月17日，大庆市中小学生第三十二届篮球比赛暨',
          time: '2017-11-22'
        },
        {
          pic: './img.png',
          type: '校级',
          title: '大庆市中小学生第三十二届篮球比赛圆满结束',
          summary: '为全面推进素质教育，深入实施中小学“体育、艺术2+1”项目工程11月17日，大庆市中小学生第三十二届篮球比赛暨',
          time: '2017-11-22'
        }
      ]
    }
  },
  methods: {
    scrollContainer: function () {
      var container = document.querySelector('.post-container')
      container.style.overflowY = 'auto'
      container.style.height = window.innerHeight - container.getBoundingClientRect().top + document.documentElement.scrollTop - 180 + 'px'
    }
  },
  mounted: function () {
    this.scrollContainer()
  }
}
</script>
<style>

</style>
