<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
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

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dense
      flat
      dark
      hide-on-scroll
      class="red accent-3 px-10"
    >
      <div></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up" />

      <router-link to="/" tag="span" exact style="cursor:pointer">
        <v-toolbar-title
          class="font-weight-regular title white--text"
          link
          to="/"
          router
          style="cursor:pointer"
        >
          PHANTOM
          <span class="font-weight-bold title white--text">TOURS</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer />

      <div class="hidden-xs-only">
        <v-btn text v-for="(item, i) in items" :key="i" :to="item.to" router exact>{{item.title}}</v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer dark padless>
      <v-card flat tile class="blue darken-2 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>SSDGROUPC</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Tours",
          to: "/tours"
        },
        {
          title: "Bikes",
          to: "/bikes"
        },
        {
          title: "Gallery",
          to: "/gallery"
        },
        {
          title: "About",
          to: "/aboutUs"
        },
        {
          title: "Contact Us",
          to: "/contactUs"
        },
        {
          title: "Admin",
          to: "/admin/users"
        }
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  }
};
</script>
