<template>
  <div v-model="layout" >
    <div v-if="layout.hasOwnProperty('children')">
      <panels :panels="layout.children" select_index="0"  style="width:200px; height: 100vh;" />
    </div>
    <div v-else-if="layout.hasOwnProperty('left')">
      <Split v-model="layout.split">

          <tree-layout slot="left" :layout="layout.left"  style="width:200px; height: 100vh;" />

          <tree-layout slot="right" :layout="layout.right"  style="width:200px; height: 100vh;" />
      </Split>
    </div>
     <div v-else-if="layout.hasOwnProperty('top')">
        <Split v-model="layout.split" mode="vertical">
            <tree-layout slot="top" :layout="layout.top" style="width:200px; height: 100vh;" />
            <tree-layout slot="bottom" :layout="layout.bottom"  style="width:200px; height: 100vh;" />
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