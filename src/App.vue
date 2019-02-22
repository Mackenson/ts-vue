<template>
  <h1>Counting by 2::: {{start + number}}</h1>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})

export default class App extends Vue{
  @Prop() start!: number
  number: number = 0

  mounted () {
    window.setInterval(()=>{
      this.number += 2
    }, 1000)
  }
}
</script>

<style lang="css" scoped>
</style>
