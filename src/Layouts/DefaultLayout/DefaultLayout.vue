<template>
  <VuetifyLayout>
    <slot />
  </VuetifyLayout>
</template>

<script>
import VuetifyLayout from '../VuetifyLayout/VuetifyLayout.vue'
export default {
  name: 'DefaultLayout',
  components: {
    VuetifyLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
