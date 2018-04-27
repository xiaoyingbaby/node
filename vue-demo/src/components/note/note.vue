<template>
  <div class="box">
    <div class="box-header">
      <h4 class="box-title">小纸条</h4>
    </div>
    <div class="box-body">
      <div class="space-content">
        <div class="tab-content">
          <div id="aa" class="tab-pane active" role="tabpanel">
            <div class="note" @scroll=scrollLoading>
              <div class="note-container"></div>
              <div class="note-container"></div>
              <div class="note-container"></div>
              <div class="note-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var skins = ['note-blue', 'note-red', 'note-green', 'note-yellow'] /* 小纸条皮肤 */
var counter /* 当前已加载数量，及总小纸条数量 */
var total
export default {
  name: 'note',
  data: function () {
    return {
      items: [
        {
          sender: '王昌龄',
          avatar: 'images/female.png',
          content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。(樯橹 一作：强掳)故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '前瞻马耳九仙山。碧连天。晚云间。城上高台，真个是超然。莫使匆匆云雨散，今夜里，月婵娟。 小溪鸥鹭静联拳。去翩翩。点轻烟。人事凄凉，回首便他年。莫忘使君歌笑处，垂柳下，矮槐前。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '明月几时有，把酒问青天。不知天上宫阙，今夕是何年？我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '君生我未生，我生君已老；恨未同君生，日日与君好。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。',
          time: '2018-01-12'
        },
        {
          sender: '王昌龄',
          avatar: 'images/female.png',
          content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。(樯橹 一作：强掳)故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '前瞻马耳九仙山。碧连天。晚云间。城上高台，真个是超然。莫使匆匆云雨散，今夜里，月婵娟。 小溪鸥鹭静联拳。去翩翩。点轻烟。人事凄凉，回首便他年。莫忘使君歌笑处，垂柳下，矮槐前。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '明月几时有，把酒问青天。不知天上宫阙，今夕是何年？我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '君生我未生，我生君已老；恨未同君生，日日与君好。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。',
          time: '2018-01-12'
        },
        {
          sender: '王昌龄',
          avatar: 'images/female.png',
          content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。(樯橹 一作：强掳)故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '前瞻马耳九仙山。碧连天。晚云间。城上高台，真个是超然。莫使匆匆云雨散，今夜里，月婵娟。 小溪鸥鹭静联拳。去翩翩。点轻烟。人事凄凉，回首便他年。莫忘使君歌笑处，垂柳下，矮槐前。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '明月几时有，把酒问青天。不知天上宫阙，今夕是何年？我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '君生我未生，我生君已老；恨未同君生，日日与君好。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。',
          time: '2018-01-12'
        },
        {
          sender: '王昌龄',
          avatar: 'images/female.png',
          content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。(樯橹 一作：强掳)故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '前瞻马耳九仙山。碧连天。晚云间。城上高台，真个是超然。莫使匆匆云雨散，今夜里，月婵娟。 小溪鸥鹭静联拳。去翩翩。点轻烟。人事凄凉，回首便他年。莫忘使君歌笑处，垂柳下，矮槐前。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '明月几时有，把酒问青天。不知天上宫阙，今夕是何年？我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '君生我未生，我生君已老；恨未同君生，日日与君好。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。',
          time: '2018-01-12'
        },
        {
          sender: '王昌龄',
          avatar: 'images/female.png',
          content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。(樯橹 一作：强掳)故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '前瞻马耳九仙山。碧连天。晚云间。城上高台，真个是超然。莫使匆匆云雨散，今夜里，月婵娟。 小溪鸥鹭静联拳。去翩翩。点轻烟。人事凄凉，回首便他年。莫忘使君歌笑处，垂柳下，矮槐前。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '明月几时有，把酒问青天。不知天上宫阙，今夕是何年？我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '君生我未生，我生君已老；恨未同君生，日日与君好。',
          time: '2018-01-12'
        },
        {
          sender: '苏轼',
          avatar: 'images/female.png',
          content: '十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。',
          time: '2018-01-12'
        }
      ]
    }
  },
  mounted: function () {
    this.init()
    this.setScroll()
  },
  methods: {
    getRandomIntInclusive: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getMinHeightCell: function () {
      var cells = document.querySelectorAll('.note-container')
      var cellsH = []
      var minIndex
      var min
      cells.forEach(function (el) {
        cellsH.push(el.clientHeight)
      })
      min = Math.min.apply(Math, cellsH)
      for (var i = 0; i < cellsH.length; i++) {
        if (cellsH[i] === min) {
          minIndex = i
          break
        }
      }
      return cells[minIndex]
    },
    setScroll: function () {
      var container = document.querySelector('.note')
      container.style.height = window.innerHeight - container.getBoundingClientRect().top - 220 + 'px'
    },
    loadingItem: function (items) {
      var minCell = this.getMinHeightCell()
      var randomNum = this.getRandomIntInclusive(0, skins.length - 1)
      var note = this.rendarNote(items, skins[randomNum])
      minCell.appendChild(note)
    },
    rendarNote: function (data, color) {
      var obj = document.createElement('div')
      obj.innerHTML = '<div class="note-item ' + color + '"><div class="note-sender"><img src="' + data.avatar + '" alt=""><span>' + data.sender + '</span></div><div class="note-content">' + data.content + '</div><p class="note-time">' + data.time + '</p></div>'
      return obj.childNodes[0]
    },
    init: function () {
      total = this.items.length
      if (total > 10) {
        counter = 10
      } else {
        counter = total
      }
      for (var i = 0; i < counter; i++) {
        this.loadingItem(this.items[i])
      }
    },
    scrollLoading: function () {
      var container = document.querySelector('.note')
      var lastCounter = counter
      console.log(this.getMinHeightCell())
      if (container.scrollTop > this.getMinHeightCell().clientHeight - container.clientHeight) {
        if (counter + 10 > total) {
          counter = total
        } else {
          counter = counter + 10
        }
        if (lastCounter === counter) return
        // console.log('lastCounter: ' + lastCounter);
        // console.log('total: ' + total);
        for (var i = lastCounter; i < counter; i++) {
          this.loadingItem(this.items[i])
        }
        // console.log('加载了');
      }
    }
  }
}
</script>
<style>

</style>
