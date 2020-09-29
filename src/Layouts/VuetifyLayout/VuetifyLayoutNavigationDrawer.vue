<template>
  <v-navigation-drawer
    v-model="showNavigationDrawer"
    :clipped="clipped"
    :floating="floating"
    :mini-variant="miniVariant"
    :permanent="permanent"
    :temporary="temporary"
    app
    overflow
  />
</template>

<script>
export default {
  name: 'VuetifyLayoutNavigationDrawer',
  props: {
    show: { type: Boolean, required: true },
    clipped: { type: Boolean, default: false },
    floating: { type: Boolean, default: false },
    miniVariant: { type: Boolean, default: false },
    permanent: { type: Boolean, default: false },
    temporary: { type: Boolean, default: false }
  },
  computed: {
    showNavigationDrawer: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('show:set', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
