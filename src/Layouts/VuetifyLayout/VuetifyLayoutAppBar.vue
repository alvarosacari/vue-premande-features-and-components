<template>
  <v-app-bar
    :clipped-left="clippedLeft"
    :clipped-right="clippedRight"
    app
  >
    <slot name="navIconLeft" />
    <slot name="content" />
    <slot name="navIconRight" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'VuetifyLayoutAppBar',
  props: {
    clippedLeft: { type: Boolean, default: false },
    clippedRight: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>

</style>
