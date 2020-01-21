<script>
// @ is an alias to /src
import NavBar2 from '@/components/NavBar2'
import { mapGetters } from 'vuex';

export default {
	name: 'home',
	data() {
		return {
            search: ""
		}
	},
	components: {
		NavBar2
	},
	computed: {
		...mapGetters(['auth_token'])
	},
    methods: {
        search_submit(){
            alert(this.search);
        }
    },
}
</script>

<template>
  	<div class="home">
		<template v-if="auth_token != ''">
		    <NavBar2 />
			<v-img :src="require('../assets/images/home-p1.jpg')" height="300px" style="margin-top:15px;">
				<v-row align="center" class="lightbox white--text pa-2 fill-height">
					<v-col cols="12" sm="4" style="text-align:left; margin-left:10%;">
						<div style="font-size:42px;"><b>Learn your way up</b></div>
						<div class="body-1" style="font-size:32px;">Get the latest skills in leading industries with on-demand, expert-led courses</div>
					</v-col>
				</v-row>
			</v-img>
			
		</template>
		<template v-else>
			<v-img :src="require('../assets/images/home-p2.jpg')" height="500px">
				<v-row align="center" class="lightbox white--text pa-2 fill-height">
					<v-col cols="12" sm="4" style="text-align:left; margin-left:7%;">
						<div style="font-size:40px;font-weight:500;">Learn on your schedule</div>
						<div class="" style="font-size:18px;">Study any topic, anytime. Choose from thousands of expert-led courses now.</div>
						<br>
						<v-text-field
							v-model="search"
							append-icon="mdi-magnify"
							hide-details
							outlined
							background-color="#fff"
							dense
							@click:append="search_submit()"
							placeholder="What do you want to learn?"
						></v-text-field>
					</v-col>
				</v-row>
			</v-img>
			<v-row class="how_work_container">
				<v-col cols="12" sm="4" class="how_work_item">
					<v-icon>mdi-bullseye</v-icon>
					<div>
						<p><b>100,000 online courses</b></p>
						<p>Explore a variety of fresh topics</p>
					</div>
				</v-col>
				
				<v-col cols="12" sm="4" class="how_work_item">
					<v-icon>mdi-bullseye</v-icon>
					<div>
						<p><b>Expert instruction</b></p>
						<p>Find the right instructor for you</p>
					</div>
				</v-col>

				<v-col cols="12" sm="4" class="how_work_item">
					<v-icon>mdi-bullseye</v-icon>
					<div>
						<p><b>Lifetime access</b></p>
						<p>Learn on your schedule</p>
					</div>
				</v-col>
			</v-row>
		</template>
  	</div>
</template>

<style scoped>
	.how_work_container{
		background: linear-gradient(-45deg,#EC5252 0%,#6E1A52 100%); 
		height:85px;
		color: #fff;
		margin: auto;
		padding: 7px 60px;
		text-align: left;
	}

	.how_work_container i{
		float: left;
		color: #fff;
		font-size: 50px;
		margin-right: 10px;
	}
	.how_work_container p{
		margin-bottom: 0 ;
	}
</style>