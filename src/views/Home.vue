<template>
  <div class="home">
    <NavBar2 />

    <v-img :src="require('../assets/images/home-p1.jpg')" height="300px" style="margin-top:15px;">
      <v-row align="center" class="lightbox white--text pa-2 fill-height">
        <v-col style="text-align:left; margin-left:10%;">
          <div class="subheading" style="font-size:42px;"><b>Learn your way up</b></div>
          <div class="body-1" style="font-size:32px;"><b>Get the latest skills in leading industries with on-demand, <br> expert-led courses</b></div>
        </v-col>
      </v-row>
    </v-img>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from '@/components/NavBar2'

export default {
  name: 'home',
  components: {
    NavBar2
  }
}
</script>
