<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">Reservations</h1>

    <div>
      <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">UID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Reservation Name</th>
              <th class="text-left">Type</th>
              <th class="text-left">Email</th>
              <th class="text-left">Date</th>
              <th class="text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in reservations" :key="item.name">
              <td>{{ item.uid }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.reservationName}}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.phone }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 500,
    reservations: [
      {
        uid: "4652",
        name: "Husnul Aman",
        reservationName: "Colombo City Tour",
        type: "Tour",
        email: "husnulamanads@gmail.com",
        date: "26-07-2020",
        phone: "(076) 797 1071"
      },
      {
        uid: "7895",
        name: "Shafeek Ahmed",
        reservationName: "Maximum Rideout",
        type: "Rideout",
        email: "shafeek@gmail.com",
        date: "17-06-2020",
        phone: "(076) 797 1071"
      }
    ]
  })
};
</script>
