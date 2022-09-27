<template>
  <div class="home">
   <h1>home</h1>
    <HelloWorld>
      <p slot="header">头部</p>
      <p slot="footer">尾部</p>
    </HelloWorld>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
