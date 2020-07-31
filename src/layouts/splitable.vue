<template>
  <div draggable="true"
    v-on:dragenter="onDragEnter"
    v-on:dragend="onDragLeave"
    style="position:relative;" >
     <div style="position:absolute; top: 10px; left: 10px;background-color: green; width:100%; height: 100%; z-index: 1;">
      a      
    </div>


    <div v-show="showDropHandler" style="position:absolute; top: 10px; left: 10px; width: 100%;height: 100%; z-index: 99;  
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

   


    
    


    <!-- <div class="dragHandlerPane" v-show="showDropHandler">
      <div position: absolute;
        width: 150px;height: 150px; margin-left: 50%;margin-top: 50%;">
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
 -->
	
 </div>   
</template>

<script>
import draggable from "vuedraggable";
import splitable from "@/layouts/splitable.vue"

export default {
    data() {
        return {
          showDropHandler: false,
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