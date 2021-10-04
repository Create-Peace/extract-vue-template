<template>
  <div class="test-compiler">
    <h2>vue-compiler-html</h2>
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: 'TestCompiler',
  data () {
    return {
      name: 'compiler'
    }
  }
}
</script>