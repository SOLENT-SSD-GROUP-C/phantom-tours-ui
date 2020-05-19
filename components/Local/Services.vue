<template>
  <v-row>
    <v-col md="4" v-for="service in services" :key="service.id">
      <v-card class="mx-auto" height="320px" outlined>
        <v-img class="white--text align-end" height="200px" :src="service.img"></v-img>

        <v-card-subtitle class="pb-0">{{service.description}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          img:
            "https://p1.pxfuel.com/preview/13/640/25/landscape-travel-mountain-hill-outdoor-india.jpg",
          description:
            "We offer several unique adventure tours that allow our clients to Discover and Experience some of the hidden treasures South East Asia has to offer"
        },
        {
          id: 2,
          img:
            "https://media.defense.gov/2009/Mar/15/2000609160/780/780/0/091303-F-7814K-967.JPG",
          description:
            "Our Personalized Adventure Tours allow for a maximum of 12 riders, making each adventure tour a unique experience with a personal touch"
        },
        {
          id: 3,
          img: "https://rideoutafrica.com/img/common/knowledgable.jpg",
          description:
            "Our Knowledgable Team has years of experience and have the skill and know-how to ensure every tour is a fundamentally fantastic and safe experience"
        },
        {
          id: 4,
          img: "https://rideoutafrica.com/img/common/reliable-fleet.jpg",
          description:
            "Our Reliable Fleet of motorcycles is serviced regularly, fully licensed and roadworthy so you can enjoy every moment of your Phantom Tours adventure tour"
        },
        {
          id: 5,
          img: "https://rideoutafrica.com/img/common/backup.jpg",
          description:
            "A Trained First Aider and backup vehicle accompany every tour to ensure that we are prepared to take care of any emergency that may arise"
        },
        {
          id: 6,
          img: "https://rideoutafrica.com/img/common/comfortable.jpg",
          description:
            "A backup vehicle follows the group with all the gear, necessities and everyone’s luggage allowing you a more Comfortable Ride without panniers or boxes"
        }
      ]
    };
  }
};
</script>