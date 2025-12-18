<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $t('hello.paragraph') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped lang="scss">
.read-the-docs {
  color: #333;
}
h1{
  font-size: 45px;
}
p{
  font-size: 50px;
  color: aqua;
}
</style>
