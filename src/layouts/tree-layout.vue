<template>
  <div v-model="layout">
    <div v-if="layout.hasOwnProperty('children')">
      <panels :panels="layout.children" select_index="0"/>
    </div>
    <div v-else-if="layout.hasOwnProperty('left')">
      <q-splitter v-model="layout.split" style="height: 100vh;">
      <template v-slot:before>
        <tree-layout :layout="layout.left"/>
    </template>
      <template v-slot:after name="after"> 
        <!-- <div style="height: 100vh;">right:{{layout.right}}</div> -->
        <tree-layout :layout="layout.right"/>
      </template>
    </q-splitter>

      
    </div>
     <div v-else-if="layout.hasOwnProperty('top')">
        <q-splitter v-model="layout.split" style="height: 100vh;" horizontal>
          <template v-slot:before>
            <!-- <div style="height: 100vh;">left:{{layout.top}}</div> -->
            <tree-layout :layout="layout.top"/>
        </template>
          <template v-slot:after name="after"> 
            <!-- <div style="height: 100vh;">right:{{layout.bottom}}</div> -->
            <tree-layout :layout="layout.bottom"/>
          </template>
        </q-splitter>
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