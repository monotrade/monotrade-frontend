<template>
	<Card>
        <Tabs>
          <TabPane v-for="(p,index) in panels" :name="p.name" :label="p.name">
            <component v-bind:is="p.component" v-bind="$attrs.data" :data="p.model"></component>
          </TabPane>
        </Tabs>
      </Card>
</template>
<script>
export default {
	props: [ 'panels', 'select_index'],
	
	data() {
		return {
			current: 0,
		}
	},
  // inheritAttrs: false,

}
</script>