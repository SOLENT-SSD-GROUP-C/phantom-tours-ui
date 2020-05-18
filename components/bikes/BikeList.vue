<template>
  <div>
    <v-row>
      <v-col v-for="n in 1" :key="n" cols="12" md="4">
        <v-img src="https://rideoutafrica.com/img/common/bike-africa-twin.jpg"></v-img>
      </v-col>

      <v-col v-for="n in 1" :key="n" cols="12" md="8">
        <h1>Honda Africa Twin DCT</h1>
        <p>
          The Honda Africa Twin is the perfect bike for any type of adventurer and route.
          Mountain, desert, rock, sand, and everything in between, the Africa Twin is ready
          to conquer it with its potent engine and dynamic chassis. It features a capable
          4-stroke 1000cc parallel twin engine that makes it ideal for your PHANTOM TOURS adventure.
        </p>

        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h1 class="font-weight-black">Specifications</h1>
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Engine Type</td>
                <td>Liquid-cooled 4-stroke 8-valve parallel twin with 270°crank and Unicam®</td>
              </tr>
              <tr>
                <td>Engine Displacement</td>
                <td>998 cc</td>
              </tr>
              <tr>
                <td>Max. Power Output</td>
                <td>70 kW (93.9 bhp) @ 7,500 rpm (95/1/EC)</td>
              </tr>
              <tr>
                <td>Max. Torque</td>
                <td>99 Nm @ 6,000 rpm (95/1/EC)</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>4.93 l/100 km / 104.9 g/km</td>
              </tr>
              <tr>
                <td>Seat Height (mm)</td>
                <td>940</td>
              </tr>
              <tr>
                <td>Brakes</td>
                <td>Single 240 mm disc 2 piston caliper / Single 240 mm disc 1 piston caliper</td>
              </tr>
              <tr>
                <td>Tyres</td>
                <td>3.00-21 / 4.60-18</td>
              </tr>
              <tr>
                <td>Suspension</td>
                <td>Pro-Link® Showa single-shock with spring-preload, 20-position compression- and 20-position rebound-damping adjustability / 11.0 in</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
    <br />
    <v-row>
      <v-col v-for="n in 1" :key="n" cols="12" md="4">
        <v-img src="https://rideoutafrica.com/img/common/bike-xl-650.jpg"></v-img>
      </v-col>

      <v-col v-for="n in 1" :key="n" cols="12" md="8">
        <h1>Honda XR650L</h1>
        <p class="text-justify">
          The Honda XR650L is known for its sheer power and ability to take on any off-road
          adventure. We switch to the XR on the more technical 4x4 routes where a more nimble,
          lighter bike is easier to manoeuvre
        </p>

        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h1 class="font-weight-black">Specifications</h1>
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Engine Type</td>
                <td>Liquid-cooled 4-stroke 8-valve parallel twin with 270°crank and Unicam®</td>
              </tr>
              <tr>
                <td>Engine Displacement</td>
                <td>998 cc</td>
              </tr>
              <tr>
                <td>Max. Power Output</td>
                <td>70 kW (93.9 bhp) @ 7,500 rpm (95/1/EC)</td>
              </tr>
              <tr>
                <td>Max. Torque</td>
                <td>99 Nm @ 6,000 rpm (95/1/EC)</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>4.93 l/100 km / 104.9 g/km</td>
              </tr>
              <tr>
                <td>Seat Height (mm)</td>
                <td>940</td>
              </tr>
              <tr>
                <td>Brakes</td>
                <td>Single 240 mm disc 2 piston caliper / Single 240 mm disc 1 piston caliper</td>
              </tr>
              <tr>
                <td>Tyres</td>
                <td>3.00-21 / 4.60-18</td>
              </tr>
              <tr>
                <td>Suspension</td>
                <td>Pro-Link® Showa single-shock with spring-preload, 20-position compression- and 20-position rebound-damping adjustability / 11.0 in</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>