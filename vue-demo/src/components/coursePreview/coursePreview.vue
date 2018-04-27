<template>
  <div class="box">
    <div class="box-body">
      <div class="course-notice-wrapper">
        <ul class="course-notice">
          <li class="course-item" :class="[itemColor(index), itemStatus(item.time)]" v-for="(item, index) in monday" :key="index">
            <div class="course-card">
              <ul class="course-info">
                <li><h4>{{item.name}}<em>第一节</em></h4></li>
                <li>
                  <span><i class="icon icon-teacher"></i>{{item.teacher}}</span>
                  <span><i class="icon icon-time"></i>{{item.time}}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint no-trailing-spaces: 0 */
export default {
  name: 'coursePreview',
  data: function () {
    return {
      monday: [
        {
          id: 'm1',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '语文',
          time: '08:00~08:45'
        },
        {
          id: 'm2',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '数学',
          time: '08:55~09:40'
        },
        {
          id: 'm3',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '物理',
          time: '10:00~10:45'
        },
        {
          id: 'm4',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '英语',
          time: '10:55~11:40'
        },
        {
          id: 'm5',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '化学',
          time: '13:00~13:45'
        },
        {
          id: 'm6',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: true,
          name: '生物',
          time: '13:55~14:40'
        },
        {
          id: 'm7',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '历史',
          time: '14:50~15:35'
        },
        {
          id: 'm8',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '政治',
          time: '15:45~16:30'
        },
        {
          id: 'm9',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '地理',
          time: '16:40~17:25'
        },
        {
          id: 'm10',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '美术',
          time: '18:30~19:15'
        },
        {
          id: 'm9',
          avatar: 'images/male.png',
          teacher: '小李子',
          attend: false,
          name: '音乐',
          time: '19:25~20:10'
        }
      ]
    }
  },
  methods: {
    // 按顺序为每节课添加不同的颜色
    itemColor: function (index) {
      var color
      switch (index % 5) {
        case 0: color = 'course-item-violetRed'; break
        case 1: color = 'course-item-yellow'; break
        case 2: color = 'course-item-blue'; break
        case 3: color = 'course-item-green'; break
        case 4: color = 'course-item-orange'; break
      }
      return color
    },
    // 判断每节课所处的状态
    itemStatus: function (time) {
      var temp = time.split('~')
      var start = temp[0].split(':')[0] * 3600 + temp[0].split(':')[1] * 60
      var end = temp[1].split(':')[0] * 3600 + temp[1].split(':')[1] * 60
      var date = new Date()
      var now = date.getHours() * 3600 + date.getMinutes() * 60
      
      if (now > end) {
        return 'pass'
      } else if (now >= start && now <= end) {
        return 'current'
      } else {
        return 'future'
      }
    },
    scrollContainer: function () {
      var container = document.querySelector('.course-notice-wrapper')
      container.style.overflow = 'auto'
      container.style.height = window.innerHeight - container.getBoundingClientRect().top + document.documentElement.scrollTop - 180 + 'px'
    },
    centerCurrent: function () {
      var cur = document.querySelector('.course-item.current')
      var container = document.querySelector('.course-notice-wrapper')
      var list = document.querySelector('.course-notice')
      var sumHeight = 0
      var centerTop = 0
      var curTop = 0

      var items = document.querySelectorAll('.course-item')
      for (var n = 0; n < items.length; n++) {
        sumHeight = sumHeight + items[n].offsetHeight
      }
      list.style.height = sumHeight

      var pass = document.querySelectorAll('.course-item.pass')
      var pLength = pass.length
      
      if (cur == null) {
        pLength = pLength - 1
        centerTop = container.offsetHeight / 2
      } else {
        centerTop = container.offsetHeight / 2 - cur.offsetHeight / 2
      }
      for (var i = 0; i < pLength; i++) {
        curTop = curTop + pass[i].offsetHeight
      }

      var sMax = sumHeight - container.offsetHeight

      if (curTop > centerTop && curTop - centerTop > sMax) {
        container.scrollTop = sMax
      } else if (curTop < centerTop) {
        container.scrollTop = 0
      } else {
        container.scrollTop = curTop - centerTop
      }
    },
    refresh: function () {
      var that = this
      setInterval(function () {
        that.centerCurrent()
      }, 5000)
    }
  },
  mounted: function () {
    this.scrollContainer()
    this.centerCurrent()
    this.refresh()
  }
}
</script>
<style>

</style>
