<template>
  <v-footer
    :inset="inset"
    app
  >
    <slot />
  </v-footer>
</template>

<script>
export default {
  name: 'VuetifyLayoutFooter',
  props: {
    inset: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
