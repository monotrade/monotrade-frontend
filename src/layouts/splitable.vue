<template>    
	<q-splitter v-model="rate" horizontal style="background-color: grey; height: 100vh;">
		<template v-slot:before style="height: 100vh">
  			<slot name="top">Top</slot>
  			<q-btn round color="secondary" @click="showNotification('top')" style="position:absolute;left:50%; top:0px; margin-left:-20px">
          <q-icon name="arrow_upward" />
        </q-btn>
        <q-btn round color="secondary" @click="showNotification('left')">
          <q-icon name="arrow_back" />
          </q-btn>
		</template>
		<template v-slot:after style="height: 100vh">
  			<slot name="top">Bottom</slot>
  			<q-btn round color="secondary" @click="showNotification('top')" style="position:absolute;left:50%; top:0px; margin-left:-20px">
          <q-icon name="arrow_upward" />
        </q-btn>
        <q-btn round color="secondary" @click="showNotification('left')">
          <q-icon name="arrow_back" />
          </q-btn>
		</template>
	</q-splitter>
    
</template>

<script>
import draggable from "vuedraggable";
import splitable from "@/layouts/splitable.vue"

export default {
    data() {
        return {
        	rate: 30,
            isHorizontal: false,
            list: [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 }
            ]         
        };
    },
}
</script>