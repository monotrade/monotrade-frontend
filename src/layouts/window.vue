<template>
  <tree-layout :layout="layout"/>
</template>
<script>
// import draggable from "vuedraggable";
// import splitable from "@/layouts/splitable.vue"
import treeLayout from "@/layouts/tree-layout.vue"
const myLayout = {
  split: 50,
  left: {
    children: [
      { 
        name: "left1", 
        id: 1,
        component: require('@/components/trade/stockBuy').default,
        config: {},
      },
      { name: "Joao", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 },
    ],
  },

  right: {
    split: 50,
    top: {
      split: 50,
      top: {
        children: [
          { name: "rt-t-1", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 },
        ],
      },

      bottom: {
        children: [
          { name: "rl-b-1", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 },
        ],
      }

    },

    bottom: {
      children: [
        { name: "rr1", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],

    }
  },
};

export default {
  components: {
    // draggable,
    treeLayout,
  },
  data() {
    return {
      tab: 'mails',
      tablist: [
        {name: "Mails", id:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "alarms", id:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "movies", id:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
      ],

      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],

      layout: myLayout,
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>