import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header2.jpeg'
import search_icon from './search_icon.png'
import menu_1 from './mandimenu.jpg'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './idiyappam.jpg'
import menu_6 from './menu_6.png'
import menu_8 from './menu_8.png'

import food_1 from './spicymandi.png'
import food_2 from './periperimandi.jpg'
import food_3 from './shawayamandi.png'
import food_4 from './yemenimandi.png'
import food_5 from './shawarma.jpg'
import food_6 from './plateshawarma.jpg'
import food_7 from './jumboshawarma.jpg'
import food_8 from './kathiroll.jpg'
import food_9 from './strawberryicecream.jpg'
import food_10 from './palada.jpg'
import food_11 from './jaricecream.jpg'
import food_12 from './cheesecake.jpg'
import food_13 from './sandwich.jpg'
import food_14 from './hotdog.jpg'
import food_15 from './burger.jpg'
import food_16 from './beefburger.jpg'
import food_17 from './idiyappam.jpg'
import food_18 from './porottabeef.jpg'
import food_19 from './appam.jpg'
import food_20 from './fishfry.jpg'
import food_21 from './alooparatha.jpg'
import food_22 from './masaladosa.jpg'
import food_23 from './idli.jpg'
import food_24 from './meals.jpg'
import food_29 from './chillychicken.jpg'
import food_30 from './friedrice.jpg'
import food_31 from './springroll.jpg'
import food_32 from './chickennoodles.jpg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Mandi",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Kerala",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Chinese",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Spicy Mandi",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Mandi"
    },
    {
        _id: "2",
        name: "Peri Peri Mandi",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Mandi"
    }, {
        _id: "3",
        name: "Shawaya Mandi",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Mandi"
    }, {
        _id: "4",
        name: "Yemeni Mandi",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Mandi"
    }, {
        _id: "5",
        name: "Classic Shawarma",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "6",
        name: "Plate Shawarma",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "7",
        name: "Jumbo Shawarma",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "8",
        name: "Kathi Roll",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "9",
        name: "Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "10",
        name: "Dr.Binu's Palada",
        image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "12",
        name: "Cheesecake",
        image: food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Hotdog",
        image: food_14,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "15",
        name: "Chicken Burger",
        image: food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "16",
        name: "Beef Burger",
        image: food_16,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "17",
        name: "Idiyappam",
        image: food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Kerala"
    }, {
        _id: "18",
        name: "Porotta Beef",
        image: food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Kerala"
    }, {
        _id: "19",
        name: "Appam",
        image: food_19,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Kerala"
    }, {
        _id: "20",
        name: "Ayala Fry",
        image: food_20,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Kerala"
    }, {
        _id: "21",
        name: "Aloo Paratha",
        image: food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "22",
        name: "Masala Dosa",
        image: food_22,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "23",
        name: "Idli Set",
        image: food_23,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "24",
        name: "Meals",
        image: food_24,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        _id: "29",
        name: "Chilly Chicken",
        image: food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chinese"
    }, {
        _id: "30",
        name: "Fried Rice",
        image: food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chinese"
    }, {
        _id: "31",
        name: "Spring Roll",
        image: food_31,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chinese"
    }, {
        _id: "32",
        name: "Chicken Noodles",
        image: food_32,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chinese"
    }
]
