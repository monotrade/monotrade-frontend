<template>
  <div v-model="layout">
    <div v-if="layout.hasOwnProperty('children')">
      <panels :panels="layout.children" select_index="0"/>
    </div>
    <div v-else-if="layout.hasOwnProperty('left')">
      <Split v-model="layout.split" style="height: 100vh;" >
      <template slot="left">
        <tree-layout :layout="layout.left"/>
    </template>
      <template slot="right" name="after"> 
        <!-- <div style="height: 100vh;">right:{{layout.right}}</div> -->
        <tree-layout :layout="layout.right"/>
      </template>
    </Split>

      
    </div>
     <div v-else-if="layout.hasOwnProperty('top')">
        <Split v-model="layout.split" style="height: 100vh;" mode="vertical">
          <template slot="top">
            <!-- <div style="height: 100vh;">left:{{layout.top}}</div> -->
            <tree-layout :layout="layout.top"/>
        </template>
          <template slot="bottom" name="after"> 
            <!-- <div style="height: 100vh;">right:{{layout.bottom}}</div> -->
            <tree-layout :layout="layout.bottom"/>
          </template>
        </Split>
    </div>    
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import panels from "@/layouts/panels.vue"
export default {
  name: "treeLayout",
  components: {
    // draggable,
    panels
  },
  props: ['layout',],
  data() {
    return {
      
    };
  },
};
</script>