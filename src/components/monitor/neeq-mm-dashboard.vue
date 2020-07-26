<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-x-xs q-gutter-y-lg">
      <card v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script>
import card from './neeq-mm-card.vue'
export default {
  data () {
    return {
      drawerLeft: false,
      drawerRight: true
    }
  }
}
</script>