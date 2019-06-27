<template>
  <div>
    {{ component }} content from data
  </div>
</template>
<script>
export default {
  name: 'ComponentA',
  data () {
    return {
      component: 'ComponentA'
    }
  }
}
</script>