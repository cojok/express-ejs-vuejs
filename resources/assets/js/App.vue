<template>
  <div id="app">
    <componenta />
    <componentb />
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
export default {
  name: 'app',
  components: {
    componenta: ComponentA,
    componentb: ComponentB
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
