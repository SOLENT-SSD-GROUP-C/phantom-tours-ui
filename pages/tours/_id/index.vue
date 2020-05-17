<template>
  <v-app>
    <v-container>
      <h1 class="display-1 my-3">Colombo Summer Tour {{$route.params.id}}</h1>

      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col xs="12" md="4">
          <v-card flat>
            <v-list-item>
              <v-switch
                readonly
                success="availability"
                label="Availabe"
                color="orange darken-3"
                value="orange darken-3"
                hide-details
              ></v-switch>
            </v-list-item>
            <v-divider class="my-4"></v-divider>
          </v-card>

          <v-card flat v-for="(item, i) in items" :key="i">
            <v-list-item>
              <v-icon left x-large>{{ item.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{
                  item.title
                  }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col xs="12" md="8">
          <v-card flat>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="400px"></v-img>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              omnis pariatur, hic fugit quam iusto expedita ut, mollitia
              doloremque nisi at, eos architecto reiciendis culpa esse. Adipisci
              rerum maiores itaque omnis sequi provident eum maxime quaerat quam
              aut reiciendis nihil doloremque asperiores nisi exercitationem
              doloribus veniam assumenda recusandae, necessitatibus, animi
              aspernatur non dolorum suscipit in.
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="purple"
                text
                :to="{path: '/settings', params: {jumpTo: 'verification'}}"
              >Book This Tour</v-btn>
              <v-icon>mdi-arrow-right</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-list-item>
            <v-list-item-title class="display-1">What's included in your tour price?</v-list-item-title>
            <v-btn icon @click="show1 = !show1">
              <v-icon>
                {{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-list-item>

          <v-expand-transition>
            <v-row :v-show="show1">
              <v-col>
                <v-card outlined v-show="show1">
                  <v-card-title>Included</v-card-title>
                  <v-divider class="my-2"></v-divider>
                  <v-card-text>Honda African Twin DCT Rental</v-card-text>
                  <v-card-text>Fuel for Motorcycle</v-card-text>
                  <v-card-text>Lunch & Hydration</v-card-text>
                  <v-card-text>Helmet, Jacket, Gloves & Riding Buff</v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card outlined v-show="show1">
                  <v-card-title>You bring</v-card-title>
                  <v-divider class="my-2"></v-divider>
                  <v-card-text>Valid Motorcycle License</v-card-text>
                  <v-card-text>Shirt & Warm Top</v-card-text>
                  <v-card-text>Solid Footwear</v-card-text>
                  <v-card-text>Strong Fabric Long Pants</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list-item>
            <v-list-item-title class="display-1">Tour Itinerary</v-list-item-title>
            <v-btn icon @click="show2 = !show2">
              <v-icon>
                {{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-list-item>

          <v-expand-transition>
            <v-row :v-show="show2">
              <v-col>
                <v-card outlined v-show="show2">
                  <v-card-title>Day1</v-card-title>
                  <v-card-text>Somewhere</v-card-text>
                  <v-divider class="my-2"></v-divider>
                  <v-card-title>Day2</v-card-title>
                  <v-card-text>Somewhere</v-card-text>
                  <v-divider class="my-2"></v-divider>
                  <v-card-title>Day3</v-card-title>
                  <v-card-text>Somewhere</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list-item>
            <v-list-item-title class="display-1">Route</v-list-item-title>
            <v-btn icon @click="show3 = !show3">
              <v-icon>
                {{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-list-item>

          <v-expand-transition>
            <v-row :v-show="show3">
              <v-col v-show="show3">
                <v-img
                  src="https://rideoutafrica.com/img/common/map-route-garden-route-passes-day-trip.jpg"
                ></v-img>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list-item>
            <v-list-item-title class="display-1">Accommodation</v-list-item-title>
            <v-btn icon @click="show4 = !show4">
              <v-icon>
                {{
                show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-list-item>

          <v-expand-transition>
            <v-row :v-show="show4">
              <v-col>
                <h1 v-show="show4">Accommodation Heading</h1>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list-item>
            <v-list-item-title class="display-1">Feedback</v-list-item-title>
            <v-btn icon @click="show5 = !show5">
              <v-icon>
                {{
                show5 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}
              </v-icon>
            </v-btn>
          </v-list-item>

          <v-expand-transition>
            <v-row :v-show="show5">
              <v-col v-show="show5">
                <v-textarea name="input-7-1" filled label="Your Feedback" auto-grow value></v-textarea>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      availability: true,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: true,
      items: [
        {
          icon: "mdi-currency-usd",
          title: "Price",
          value: "R3500.00"
        },
        {
          icon: "mdi-clock",
          title: "Duration",
          value: "5 Days"
        },
        {
          icon: "mdi-terrain",
          title: "Terrain",
          value: "Costal"
        },
        {
          icon: "mdi-map-marker-distance",
          title: "Distance",
          value: "16521 km"
        },
        {
          icon: "mdi-account-group",
          title: "Group Size",
          value: "6 People"
        },
        {
          icon: "mdi-account",
          title: "Price",
          value: "R3500.00"
        }
      ]
    };
  }
};
</script>
