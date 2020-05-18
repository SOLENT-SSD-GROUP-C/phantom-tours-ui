<template>
  <div>

    <app-slider></app-slider>
    
    
<v-row justify="center">
    <v-col cols="12" sm="12" md="8" lg="6">
  <h1>Contact Us</h1>

        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

  
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    
     <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
     <v-text-field
            v-model="cpassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Conform Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

    

      <v-btn class="mr-4" @click="submit">submit</v-btn>

    <v-btn @click="clear">clear</v-btn>


  </v-form>
    </v-col>
</v-row>
  </div>  
</template>

<script>
import ImageSlider from "@/components/home/ImageSlider.vue";
  export default {
      components: {
    appSlider: ImageSlider,
  },
    
    data () {
      return {
        show1: false,
        show2: true,
     
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          // min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
  }
</script>

