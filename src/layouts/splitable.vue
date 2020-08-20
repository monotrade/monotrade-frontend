<template>
  <div draggable="true"
    v-on:dragenter="onDragEnter"
    v-on:dragleave="onDragLeave"
    style="position:relative;" >
     <div style="position:absolute;background-color: green; width:100%; height: 100vh; z-index: 1;">
      <Split v-model="split" style="height: 100%;" :horizontal="true">
      <template v-slot:before>
        <panels v-bind:panels="before" v-bind:select_index="before_select_index"/>
    </template>
      <template v-slot:after name="after"> 
        <panels v-bind:panels="after" v-bind:select_index="after_select_index"/>
      </template>
    </Split>
    </div>

    <div name="split-top" v-show="showSplitTop" style="
      position: absolute; width: 100%;height: 50%;background-color: blue;
    z-index: 10;
    filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;
    "></div>


    <div v-show="showDropHandler" style="position:absolute; width: 100%;height: 100%; z-index: 99;
      background-image: url((require('./../assets/bg.png');
    ">
      <div style="width: 150px;height: 150px; 
      position: absolute;margin-left: 50%;margin-top: 50%;
      ">
     <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
        <q-btn round color="secondary">
          <q-icon name="arrow_drop_up"/>
        </q-btn>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row" style="padding-top: 10px; padding-bottom: 10px;">
        <div class="col-4">
          <q-btn round color="secondary" v-on:dragenter="onDragEnter">
            <q-icon name="arrow_left"/>
          </q-btn>
        </div>
        <div class="col-4">
          <q-btn round color="secondary"><q-icon name="aspect_ratio"/></q-btn>
        </div>
        <div class="col-4">
          <q-btn round color="secondary"><q-icon name="arrow_right"/></q-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
        <q-btn round color="secondary"><q-icon name="arrow_drop_down"/></q-btn>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</div>   
</template>

<script>
// import draggable from "vuedraggable";
import panels from "@/layouts/panels.vue"

export default {
    components: { panels,},
    
    data() {
        return {
          split: 50,
          before_select_index : 0,
          before: [
              {name:'mails'},
              {name:'alarms'},
              {name:'movies'},
            ],

          after_select_index : 0,
          after: [
              {name:'aaa'},
              {name:'bbb'},
              {name:'ccc'},
            ],

          showDropHandler: false,
          showSplitTop: false,
        	rate: 50,
            isHorizontal: true,            
        };
    },
    methods: {
      onDragEnter: function() {
        this.showDropHandler = true;        
        console.log("enter");
      },
      onDragLeave: function(){
        this.showDropHandler = false;
        console.log("leave");
      },
      onHoverLeft: function(flag) {
        this.showDropHandler = true;
        console.log(flag);
      }
    }
}
</script>

<style>
  .dragHandlerPane {
    
    position:absolute;
    /*top:50%;
    left:50%;
    width: 0px;    */
  }
</style>