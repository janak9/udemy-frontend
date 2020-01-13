<script>
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
            search: ""
        }
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
                        <div v-on="on" class="nav-item" style=""><v-icon style="font-size:16px;">mdi-view-grid</v-icon> Category</div>
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