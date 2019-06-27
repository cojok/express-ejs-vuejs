<template>
  <div>
    {{ getContent }} content from vuex store
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'component-b',
  data () {
    return {
      component: 'test'
    }
  },
  computed: {
    ...mapGetters([
      'getContent'
    ])
  }
}
</script>