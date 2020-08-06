<template>
  <div class="test">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TrackTime msg="Klar for å starte dagen?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TrackTime from '@/components/TrackTime.vue'

export default {
  name: 'Home',
  components: {
    TrackTime
  }
}
</script>
