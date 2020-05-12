<template>
  <v-app>
    <!-- Navigation drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="pink"
      dark
    >
      <v-list>
        <!-- User avatar, name, and email -->
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">Husnul Aman</v-list-item-title>
            <v-list-item-subtitle>iam.amanxz@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!--Page Links -->
        <v-list-item v-for="(item, i) in navListItems" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon class="title">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="subtitle-2" />
          </v-list-item-content>
        </v-list-item>

        <v-list-group group value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2">Manage UI</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, i) in navListUiItems"
            :key="i"
            :to="item.to"
            router
            exact
            active-class="active-back-transparent"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" class="title"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title" class="subtitle-2"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar -->
    <v-app-bar :clipped-left="clipped" fixed app dense hide-on-scroll flat class="px-5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-app-bar>

    <!-- Contents goes here -->
    <v-content class="grey lighten-5">
      <v-container class="px-10 grey lighten-5">
        <nuxt class="px-10 grey lighten-5" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navListItems: [
        {
          icon: "mdi-account-group",
          title: "Users",
          to: "/admin/users"
        },
        {
          icon: "mdi-airport",
          title: "Tours",
          to: "/admin/tours"
        },
        {
          icon: "mdi-motorbike",
          title: "Bikes",
          to: "/admin/bikes"
        },
        {
          icon: "mdi-laptop-chromebook",
          title: "Bookings",
          to: "/admin/bookings"
        },
        {
          icon: "mdi-comment-quote",
          title: "Feedbacks",
          to: "/admin/feedbacks"
        }
      ],
      navListUiItems: [
        {
          icon: "mdi-image",
          title: "Manage Gallery",
          to: "/admin/ui/gallery"
        },
        {
          icon: "mdi-information",
          title: "Manage Testimonials",
          to: "/admin/ui/testimonials"
        },
        {
          icon: "mdi-folder-multiple-image",
          title: "Manage Carousals",
          to: "/admin/ui/carousels"
        }
      ],
      miniVariant: false,
      right: true,
      title: "Admin Dashboard"
    };
  }
};
</script>

<style scoped>
.active-back-transparent {
  background-color: rgba(255, 255, 255, 0.025);
  color: white;
}
</style>