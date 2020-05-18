<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app text>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="font-weight-thin grey--text">
        PHANTOM
        <span class="font-weight-bold grey--text">TOURS</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-compass-outline",
          title: "Tours",
          to: "/tours"
        },
        {
          icon: "mdi-motorbike",
          title: "Bikes",
          to: "/bikes"
        },
        {
          icon: "mdi-image-multiple",
          title: "Gallery",
          to: "/gallery"
        },
        {
          icon: "mdi-account",
          title: "About Us",
          to: "/about"
        },
        {
          icon: "mdi-message-draw",
          title: "Contact Us",
          to: "/contact"
        },
        {
          icon: "mdi-book-open",
          title: "Reservation",
          to: "/reservation"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  }
};
</script>