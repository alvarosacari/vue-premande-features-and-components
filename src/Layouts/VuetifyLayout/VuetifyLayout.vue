<template>
  <v-app id="vuetify-app">
    <VuetifyLayoutNavigationDrawer
      :show="primaryDrawer.show"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      @show:set="(show) => primaryDrawer.show = show"
    />
    <VuetifyLayoutAppBar
      :clipped-left="primaryDrawer.clipped"
      :show-nav-icon="primaryDrawer.type !== 'permanent'"
      @navIcon:click="primaryDrawer.show = !primaryDrawer.show"
    >
      Vuetify
    </VuetifyLayoutAppBar>
    <v-main>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <span>Scheme</span>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      primary
                      label="Dark"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <span>Drawer</span>
                    <v-radio-group
                      v-model="primaryDrawer.type"
                      column
                    >
                      <v-radio
                        v-for="drawer in drawers"
                        :key="drawer"
                        :label="drawer"
                        :value="drawer.toLowerCase()"
                        primary
                      />
                    </v-radio-group>
                    <v-switch
                      v-model="primaryDrawer.clipped"
                      label="Clipped"
                      primary
                    />
                    <v-switch
                      v-model="primaryDrawer.floating"
                      label="Floating"
                      primary
                    />
                    <v-switch
                      v-model="primaryDrawer.mini"
                      label="Mini"
                      primary
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <span>Footer</span>
                    <v-switch
                      v-model="footer.inset"
                      label="Inset"
                      primary
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <VuetifyLayoutFooter :inset="footer.inset">
      {{ new Date().getFullYear() }}
    </VuetifyLayoutFooter>
  </v-app>
</template>

<script>
import VuetifyLayoutAppBar from './VuetifyLayoutAppBar.vue'
import VuetifyLayoutFooter from './VuetifyLayoutFooter.vue'
import VuetifyLayoutNavigationDrawer from './VuetifyLayoutNavigationDrawer.vue'

export default {
  components: {
    VuetifyLayoutFooter,
    VuetifyLayoutAppBar,
    VuetifyLayoutNavigationDrawer
  },
  data () {
    return {
      drawers: ['Default', 'Permanent', 'Temporary'],
      primaryDrawer: {
        show: true,
        type: 'default',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
