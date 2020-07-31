<template>
  <div draggable="true"
    v-on:dragenter="onDragEnter"
    v-on:dragleave="onDragLeave" >

    <div name="dragHandlerPane"
      v-show="showDropHandler"
      style="position:relative;top:50%;left:50%;
      width:150px;height:150px; margin-left: -75px; margin-top: -75px;
      background-color: green">
      <q-btn round color="secondary"
        style="margin-top:-80px">
        <q-icon name="arrow_upward"/>
      </q-btn>
      <q-btn round color="secondary"
        style="margin-left:-80px">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-btn round color="secondary"
        style="margin-right:-80px">
        <q-icon name="arrow_front" />
      </q-btn>
      <q-btn round color="secondary"
         style="margin-top:80px">
        <q-icon name="arrow_downward" />
      </q-btn>
    </div>
    <div name="content">abc</div>
	<!-- <q-splitter v-model="rate" :horizontal="isHorizontal" style="
    position:relative;top:0%;left:0%;
    background-color: grey; height: 100vh;">
    <template v-slot:before style="height: 100vh">
        <slot name="top">Top</slot>
        
    </template>
    <template v-slot:after style="height: 100vh">
        <slot name="top">Bottom</slot>
        
    </template>
  </q-splitter> -->
 </div>   
</template>

<script>
import draggable from "vuedraggable";
import splitable from "@/layouts/splitable.vue"

export default {
    data() {
        return {
          showDropHandler: true,
        	rate: 50,
            isHorizontal: true,
            list: [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ]         
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
      }
    }
}
</script>