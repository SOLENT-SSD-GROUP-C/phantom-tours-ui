<template>
  <v-card class="mx-auto my-3" outlined>
    <v-row>
      <v-col xs="12" md="5">
        <v-list-item-avatar tile image height="200" width="300" color="grey">
          <v-img
            src="https://c4.wallpaperflare.com/wallpaper/29/381/284/motorbike-derbi-gpr-sports-wallpaper-preview.jpg"
          ></v-img>
        </v-list-item-avatar>
      </v-col>
      <v-col xs="12" md="7">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-4">Honda Africa Twin DCT</v-list-item-title>
            <v-list-item-text
              class="grey--text"
            >The Honda Africa Twin is the perfect bike for any type of adventurer and route. Mountain, desert, rock, sand, and everything in between, the Africa Twin is ready to conquer it with its potent engine and dynamic chassis. It features a capable 4-stroke 1000cc parallel twin engine that makes it ideal for your Ride Out Africa adventure.</v-list-item-text>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text class="green--text">EDIT</v-btn>
          <v-btn text class="red--text">DELETE</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>