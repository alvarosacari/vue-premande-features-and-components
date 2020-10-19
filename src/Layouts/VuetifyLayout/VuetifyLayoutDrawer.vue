<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="miniVariant"
    :permanent="permanent"
    :temporary="temporary"
    :right="right"
    app
    overflow
  >
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'VuetifyLayoutDrawer',
  props: {
    show: { type: Boolean, default: null },
    right: { type: Boolean, default: false },
    clipped: { type: Boolean, default: false },
    floating: { type: Boolean, default: false },
    miniVariant: { type: Boolean, default: false },
    permanent: { type: Boolean, default: false },
    temporary: { type: Boolean, default: false }
  },
  computed: {
    showDrawer: {
      get () {
        return this.show
      },
      set (show) {
        this.$emit('show:set', show)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
