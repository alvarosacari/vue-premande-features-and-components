<template>
  <v-app id="vuetify-app">
    <VuetifyLayoutAppBar
      :clipped-left="leftDrawer.clipped"
      :clipped-right="rightDrawer.clipped"
    >
      <template #navIconLeft>
        <v-app-bar-nav-icon @click="leftDrawer.show = !leftDrawer.show" />
      </template>

      <template #content>
        <v-toolbar-title>
          Vuetify
        </v-toolbar-title>
        <v-spacer />
      </template>

      <template #navIconRight>
        <v-app-bar-nav-icon @click="rightDrawer.show = !rightDrawer.show" />
      </template>
    </VuetifyLayoutAppBar>

    <VuetifyLayoutDrawer
      :show="leftDrawer.show"
      :clipped="leftDrawer.clipped"
      :floating="leftDrawer.floating"
      :mini-variant="leftDrawer.mini"
      :permanent="leftDrawer.type === DRAWER_PERMANENT"
      :temporary="leftDrawer.type === DRAWER_TEMPORARY"
      @show:set="leftDrawer.show = $event"
    />

    <VuetifyLayoutDrawer
      :show="rightDrawer.show"
      :clipped="rightDrawer.clipped"
      :floating="rightDrawer.floating"
      :mini-variant="rightDrawer.mini"
      :permanent="rightDrawer.type === DRAWER_PERMANENT"
      :temporary="rightDrawer.type === DRAWER_TEMPORARY"
      right
      @show:set="rightDrawer.show = $event"
    />

    <v-main>
      <slot />
    </v-main>

    <VuetifyLayoutFooter :inset="footer.inset">
      {{ new Date().getFullYear() }}
    </VuetifyLayoutFooter>
  </v-app>
</template>

<script>
import VuetifyLayoutAppBar from './VuetifyLayoutAppBar.vue'
import VuetifyLayoutDrawer from './VuetifyLayoutDrawer.vue'
import VuetifyLayoutFooter from './VuetifyLayoutFooter.vue'
import { DRAWER_DEFAULT, DRAWER_PERMANENT, DRAWER_TEMPORARY } from './constants/drawerTypes.js'

export default {
  name: 'VuetifyLayout',
  components: {
    VuetifyLayoutFooter,
    VuetifyLayoutAppBar,
    VuetifyLayoutDrawer
  },
  data () {
    return {
      DRAWER_PERMANENT,
      DRAWER_TEMPORARY,
      leftDrawer: {
        show: null,
        type: DRAWER_DEFAULT,
        clipped: true,
        floating: false,
        mini: false
      },
      rightDrawer: {
        show: null,
        type: DRAWER_DEFAULT,
        clipped: true,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
