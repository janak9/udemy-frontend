<script>
import { mapGetters } from 'vuex';

export default {
    name: "NavBar",
    data() {
        return {
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            search: "",
            loginDialog: false,
            signUpDialog: false
        }
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
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar style="line-height:64px">
        <v-row>
            <v-col cols="12" sm="6" style="display:flex;">
                <v-toolbar-title style="width:23%;">
                    <v-img 
                        :src="require('../assets/images/logo-udemy.svg')"
                        contain
                        height="100%"
                        width="72%"
                    ></v-img>
                </v-toolbar-title>
                <v-menu
                    open-on-hover
                    offset-y
                    >
                    <template v-slot:activator="{ on }">
                        <div v-on="on" class="nav-item" style=""><span style="font-size:16px;" class="fa fa-th"></span> Category</div>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    hide-details
                    outlined
                    dense
                    @click:append="search_submit()"
                    placeholder="Search for anything"
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" style="display:flex;">
                <v-menu
                    open-on-hover
                    offset-y
                    max-width="300px"
                    >
                    <template v-slot:activator="{ on }">
                        <div v-on="on" class="nav-item">Udemy for Business</div>
                    </template>
                    <v-list>
                        <v-list-item >
                            <div style="color:#505763; font-size:15px;">
                                <p>Get your team access to 3,500+ top Udemy courses anytime, anywhere</p>
                                <p>Try Udemy for Business</p>
                            </div>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <template v-if="auth_token != ''">
                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item">Instructor</div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Switch to the instructor view here - get back to the courses you’re teaching.</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item">My Course<v-icon>mdi-chevron-down</v-icon> </div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Start learning from over 100,000 courses today.</p>
                                    <p>Browse Now</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item"><v-icon style="color:#ec5252;">mdi-heart-outline</v-icon> </div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Start learning from over 100,000 courses .</p>
                                    <p>Explore courses</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item">
                                <v-badge
                                    :content="1"
                                    :value="1"
                                    color="#ec5252"
                                    overlap
                                    dense
                                >
                                    <v-icon>mdi-cart-outline</v-icon>
                                </v-badge>
                            </div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Start learning from over 100,000 courses today.</p>
                                    <p>Browse Now</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item"><v-icon>mdi-bell-outline</v-icon> </div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Notifications <v-icon right>mdi-settings</v-icon></p>
                                    <p>Explore courses</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="user_profile">
                                <p>JV</p>
                            </div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Notifications <v-icon right>mdi-settings</v-icon></p>
                                    <p>Explore courses</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else>
                      <v-menu
                        open-on-hover
                        offset-y
                        max-width="300px"
                        >
                        <template v-slot:activator="{ on }">
                            <div v-on="on" class="nav-item">Teach On Udemy</div>
                        </template>
                        <v-list>
                            <v-list-item >
                                <div style="color:#505763; font-size:15px;">
                                    <p>Turn what you know into an opportunity and reach millions around the world.</p>
                                    <p>Learn more</p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="loginDialog" max-width="400px">
                        <template v-slot:activator="{ on }">
                            <v-btn
                                large
                                outlined
                                v-on="on"
                                style="margin: auto; margin-right:15px;"
                                >Log In</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline" style="font-size:15px !important;">Log In to Your Udemy Account!</span>
                                <v-spacer></v-spacer>
                                <v-btn
                                    icon
                                    @click="loginDialog = false"
                                    ><v-icon>mdi-close</v-icon></v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-btn 
                                        color="#1a538a"
                                        style="color: #fff;"
                                        width="100%"
                                        ><v-icon>mdi-facebook-box</v-icon> <span class="ml-2">Continue with Facebook</span></v-btn>
                                </v-col>
                                </v-row>
                                <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-btn 
                                        color="#fff"
                                        ><v-img src="../assets/images/google-logo.png" width="25px" height="25px"></v-img> <b class="ml-2">Continue with Google</b></v-btn>
                                </v-col>
                                </v-row>
                                <v-alert color="red lighten-3" >Error</v-alert>
                                <v-row>
                                    <v-col cols="12" class="pa-1">
                                        <v-text-field 
                                            label="Email*" 
                                            hide-details
                                            outlined
                                            single-line
                                            prepend-inner-icon="mdi-email-outline"
                                            ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="pa-1">
                                        <v-text-field 
                                            label="Password*" 
                                            type="password" 
                                            hide-details
                                            outlined
                                            single-line
                                            prepend-inner-icon="mdi-lock-outline"
                                            ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn dark color="#ec5252" width="100%" @click="loginDialog = false">Log In</v-btn>
                                    </v-col>
                                    <v-col cols="12">
                                        or <a href="#">Forgot Password</a>
                                    </v-col>
                                    <v-col cols="12">
                                        Don't have an account? <a href="#">Sign up</a>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    
                    <v-dialog v-model="signUpDialog" max-width="400px">
                        <template v-slot:activator="{ on }">
                            <v-btn
                                large
                                outliend
                                color='#ec5252'
                                style="margin: auto; color: #fff;"
                                v-on="on"
                                >Sign Up</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline" style="font-size:15px !important;"><b>Sign Up and Start Learning!</b></span>
                                <v-spacer></v-spacer>
                                <v-btn
                                    icon
                                    @click="signUpDialog = false"
                                    ><v-icon>mdi-close</v-icon></v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                            <v-container>
                                <v-alert color="red lighten-3" >Error</v-alert>
                                <v-row>
                                    <v-col cols="12" class="pa-1">
                                        <v-text-field 
                                            label="Full Name*" 
                                            hide-details
                                            outlined
                                            single-line
                                            prepend-inner-icon="mdi-account"
                                            ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="pa-1">
                                        <v-text-field 
                                            label="Email*" 
                                            hide-details
                                            outlined
                                            single-line
                                            prepend-inner-icon="mdi-email-outline"
                                            ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" class="pa-1">
                                        <v-text-field 
                                            label="Password*" 
                                            type="password" 
                                            hide-details
                                            outlined
                                            single-line
                                            prepend-inner-icon="mdi-lock-outline"
                                            ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="I’m in for emails with exciting discounts and personalized recommendations"></v-checkbox>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-btn dark color="#ec5252" width="100%" @click="signUpDialog = false">Sign Up</v-btn>
                                    </v-col>
                                    <v-col cols="12" style="font-size:10px;">
                                        By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>. 
                                    </v-col>
                                    <v-divider style="border-width: thin 0 0 1px"></v-divider>
                                    <v-col cols="12">
                                        Already have an account? <a href="#">Log In</a>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </template>
            </v-col>
        </v-row>
    </v-toolbar>
  </v-card>
</template>

<style>
    .v-input__control{
        margin: auto;
    }
    .nav-item{
        font-size:14px;
        color: #8a92a3;
        margin-right:30px;
        cursor: pointer;
    }
    
    .v-input__slot{
        padding-right: 0px !important;
    }
    .v-input__append-inner{
        padding: 8px;
        margin: 0 !important;
        width: 10%;
    }
    .v-input__icon--append i{
        color: #ec5252 !important; 
    }

    .v-input__append-inner:hover{    
        background-color: #ec5252;
    }
    .v-input__append-inner:hover > .v-input__icon--append i{
        color: #fff !important;
    }

    .user_profile{
        background-color: #686f7a;
        color: #fff;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin: auto;
        line-height: 52px;
    }
        
</style>