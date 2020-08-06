<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TrackTime msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TrackTime from '@/components/TrackTime.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TrackTime
  }
}
</script>
