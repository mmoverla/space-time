<template>
  <div class="page">
    <h1>{{ msg }}</h1>
    <div class="project-list">
      <div class="project"
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:title="project.title">
        <div>{{project.title}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TrackTime extends Vue {
  @Prop() private msg!: string;

  data() {
    return {
      projects: [
        { id: 1, title: 'Prosjekt 1' },
        { id: 2, title: 'Prosjekt 2' },
        { id: 3, title: 'Prosjekt 3' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
