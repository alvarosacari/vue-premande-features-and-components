<template>
  <v-app-bar
    :clipped-left="clippedLeft"
    app
  >
    <v-app-bar-nav-icon
      v-if="showNavIcon"
      @click="$emit('navIcon:click')"
    />
    <v-toolbar-title>
      <slot />
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'VuetifyLayoutAppBar',
  props: {
    clippedLeft: { type: Boolean, default: false },
    showNavIcon: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>

</style>
