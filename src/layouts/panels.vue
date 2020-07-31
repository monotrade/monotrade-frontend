<template>
	<q-card>
        <q-tabs
          v-model="current" dense class="text-grey" active-color="primary" indicator-color="primary"
          align="justify" narrow-indicator>
          <q-tab v-for="(p,index) in panels" :name="index" :label="p.name" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="current" animated>
          <q-tab-panel v-for="(p,index) in panels" :name="index" style="height:100vh">
            <div>{{ p.name }}</div>
            {{ p }}

            <br/>
            {{ p.name }}
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
</template>
<script>
export default {
	props: [ 'panels', 'select_index'],
	
	data() {
		return {
			current: 0,
		}
	}
}
</script>