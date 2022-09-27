<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <footer>
      <slot name="footer"></slot>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
<style scoped lang="scss">

</style>
