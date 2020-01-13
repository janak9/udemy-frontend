<script>
export default {
    name: "NavBar",
    data() {
        return {
            categories: [
                { name: "Development", icon: "mdi-code-not-equal-variant" },
                { name: "Business", icon: "mdi-chart-areaspline" },
                { name: "IT & Software", icon: "mdi-desktop-mac" },
                { name: "Office Productivity", icon: "mdi-clipboard-text" },
                { name: "Personal Development", icon: "mdi-book-open-variant" },
                { name: "Design", icon: "mdi-grease-pencil" },
                { name: "Marketing", icon: "mdi-bullseye" },
                { name: "Health & Fitness", icon: "mdi-heart-pulse" },
                { name: "Music", icon: "mdi-music" }
            ],
            sub_categories: [
                { name: "Development", icon: "mdi-code-not-equal-variant" },
                { name: "Business", icon: "mdi-chart-areaspline" },
                { name: "IT & Software", icon: "mdi-desktop-mac" },
                { name: "Office Productivity", icon: "mdi-clipboard-text" },
                { name: "Personal Development", icon: "mdi-book-open-variant" }
            ]
        }
    }
}
</script>

<template>
    <div style="height:40px;">
        <div v-for="(category, index) in categories" :key="index" class="items">
            <v-icon>{{ category.icon }}</v-icon> {{ category.name }}
            <div class="drop_down_menu">
                <div v-for="(sub_category, index) in sub_categories" :key="index" class="drop_down_menu_item">
                    <v-icon style="color: #fff;font-size:40px;">{{ sub_category.icon }}</v-icon><br>
                    {{ sub_category.name }}-{{ category.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .items{
        display: inline-block;
        padding: 15px 10px;
        font-size: 12px;
        cursor: pointer;
    }

    .items:hover{
        background-color: #ccc;
    }

    .drop_down_menu{
        width: 100%;
        position: fixed;
        background-color: #29303b;
        color: #fff;
        display: none;
        margin-top: 15px;
        left: 0;
    }

    .drop_down_menu_item{
        display: inline-block;
        margin: 20px;
        padding: 25px;
    }

    .items:hover > .drop_down_menu{
        display: block;
    }
</style>