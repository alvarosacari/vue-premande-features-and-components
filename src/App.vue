<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style lang="scss">
</style>
