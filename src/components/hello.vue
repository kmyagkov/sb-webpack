<template>
  <div>
    Hello, Vue!!!
    <span>
      <test />
    </span>
  </div>
</template>

<script>
import test from './test.vue';
export default {
  components: {
    test
  }
}
</script>

<style lang="scss" scoped>
div {
  color: white;
  background: teal;
}
</style>
