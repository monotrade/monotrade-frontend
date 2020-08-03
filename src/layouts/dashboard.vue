<template>
  <tree-layout :layout="layout" style="background-color: black;"/>
</template>
<script>
// import draggable from "vuedraggable";
import treeLayout from "@/layouts/tree-layout.vue"
const myLayout = {
  split: 50,
  top: {
    
        split: 30,
        left: {
          children:[
          {
            name: "left1", 
            id: 1,
            component: require('@/pages/dashboard/centerLeft1').default,
            config: {},
          }, { name: "left12", 
            id: 2,
            component: require('@/pages/dashboard/centerLeft2').default,
            config: {},
          }]
        },
        right : {
          split: 50,
          left:{
            children: [
              { name: "center", 
                id: 3,
                component: require('@/pages/dashboard/center').default,
                config: {},
              },
            ]
          },
          right: {
            children:[
            { name: "left3", 
              id: 4,
              component: require('@/pages/dashboard/centerRight1').default,
              config: {},
            },{ name: "left4", 
              id: 5,
              component: require('@/pages/dashboard/centerRight2').default,
              config: {},
            },]
          },
        },
  },

  bottom: {
    split: 50,
    left: {
      
        children: [
          { name: "left4", 
              id: 5,
              component: require('@/pages/dashboard/bottomLeft').default,
              config: {},
            },
        ],

    },

    right: {
      children: [
          { name: "left4", 
              id: 5,
              component: require('@/pages/dashboard/bottomRight').default,
              config: {},
            },
      ],

    }
  },
};

export default {
  components: {
    treeLayout,
  },
  data() {
    return {
      layout: myLayout,
    };
  },
  methods: {
    
  }
};
</script>