<template>
  <q-layout style="background: green">
        <!-- <q-page padding> -->
          <slot>in page</slot>
          <!-- place QPageSticky at end of page -->          
          <q-page-sticky position="top" :offset="[0, 18]">
            <q-btn round color="accent" icon="arrow_back" class="rotate-90" />
          </q-page-sticky>
          <q-page-sticky position="right" :offset="[18, 0]">
            <q-btn round color="accent" icon="arrow_upward" class="rotate-90" />
          </q-page-sticky>
          <q-page-sticky position="left" :offset="[18, 0]">
            <q-btn round color="accent" icon="arrow_back" />
          </q-page-sticky>
          <q-page-sticky position="bottom" :offset="[0, 18]">
            <q-btn round color="accent" icon="arrow_forward" class="rotate-90" />
          </q-page-sticky>
          



          <div class="column flex-center" style="width: 500px; max-width: 90vw;">
      <div class="row group">        
        <div>
          <q-btn round color="secondary" @click="showNotification('top')">
            <q-icon name="arrow_upward" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <q-btn round color="secondary" @click="showNotification('left')">
            <q-icon name="arrow_back" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="secondary" @click="showNotification('center')">
            <q-icon name="fullscreen_exit" />
          </q-btn>
        </div>
        <div>
          <q-btn round color="secondary" @click="showNotification('right')">
            <q-icon name="arrow_forward" />
          </q-btn>
        </div>
      </div>
      <div class="row group">
        
        <div>
          <q-btn round color="secondary" @click="showNotification('bottom')">
            <q-icon name="arrow_downward" />
          </q-btn>
        </div>
        
      </div>
    </div>
        <!-- </q-page> -->
      </q-layout>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  components: { Draggable,},
  data () {
    return {
      drawerLeft: false,
      drawerRight: false
    }
  },
    mounted() {

  window.open("/","name", "height=754, width=1277, top=0, left=2, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no");
},
methods: {
  toTop() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 10);
      },
       //触摸开始（手指放在触摸屏上）
      dragStart: function (e) {
        this.isdrag = true;
        this.tempX = parseInt($(".drift").css("left") + 0);
        this.tempY = parseInt($(".drift").css("top") + 0);
        this.x = e.touches[0].pageX;
        this.y = e.touches[0].pageY;
 
      },
      //拖动（手指在触摸屏上移动）
      dragMove: function (e) {
        if (this.isdrag) {
          var curX = this.tempX + e.touches[0].pageX - this.x;
          var curY = this.tempY + e.touches[0].pageY - this.y;
          //边界判断
          curX = curX < 0 ? 0 : curX;
          curY = curY < 0 ? 0 : curY;
          curX = curX < document.documentElement.clientWidth - $('.drift')[0].clientWidth ? curX : document.documentElement.clientWidth - $('.drift')[0].clientWidth;
          curY = curY < document.documentElement.clientHeight - $('.drift')[0].clientHeight ? curY : document.documentElement.clientHeight - $('.drift')[0].clientHeight;
          $(".drift").css({"left": curX, "top": curY});
 
          //禁止浏览器默认事件
          e.preventDefault();
        }
      },
      //拖动结束
      dragEnd: function () {
        this.isdrag = false;
      }

}
}  
</script>