<template>
  <div class="row" style="background-color: white; height: 100vh">
    <div class="col-6">   
      
      <q-tabs
          v-model="tab"
          dense
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
<draggable :list="list1" group="people" @change="log" class="row">
          <q-tab v-for="(element, index) in list1" :name="element.name" :label="element.name" />          
</draggable>
        </q-tabs>

        <q-separator />   
      
        <q-tab-panels v-model="tab" animated style="height:300px">
        <q-tab-panel
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
          :name="element.name"
        >
          {{ element.name }} {{ index }}
        </q-tab-panel>
      </q-tab-panels>
      
    </div>

    <div class="col-3">      
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from "vuedraggable";
import splitable from "@/layouts/splitable.vue"
export default {
  // name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    splitable
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
      ]
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