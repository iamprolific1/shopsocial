import React from 'react'
import { PostTypes, AccountTypes, AvatarProps } from '../../types/Types';
import product1 from "../../assets/assets_img/image33.jpg";
import product2 from "../../assets/assets_img/image34.jpg";
import product3 from "../../assets/assets_img/image28.jpg";
import product4 from "../../assets/assets_img/image29.jpg";
import product5 from "../../assets/assets_img/image1.jpg";
import product6 from "../../assets/assets_img/image2.jpg"
import product7 from "../../assets/assets_img/image3.jpg"
import product8 from "../../assets/assets_img/image14.jpg"
import product9 from "../../assets/assets_img/image7.jpg";
import product10 from "../../assets/products/headphones.jpg";
import product11 from "../../assets/products/headphones_a_4.webp";
import product12 from "../../assets/products/headphones_b_2.webp";
import product13 from "../../assets/products/headphones_c_3.webp";
import product14 from "../../assets/products/headphones_c_4.webp";
import product15 from "../../assets/products/air-fryer1.jpg";
import product16 from "../../assets/products/air-fryer2.jpg";
import product17 from "../../assets/products/air-fryer3.jpg";
import product18 from "../../assets/products/air-fryer4.jpg";
import product19 from "../../assets/products/phone1.jpg";
import product20 from "../../assets/products/phone2.png";
import product21 from "../../assets/products/phone3.png";
import product22 from "../../assets/products/watch3.jpg";
import product23 from "../../assets/products/watch_3.webp";
import product24 from "../../assets/products/watch_4.webp"

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import video5 from '../../assets/videos/video5.mp4';
// import video6 from '../../assets/videos/video6.mp4';
// import video7 from '../../assets/videos/video7.mp4';
// import video8 from '../../assets/videos/video8.mp4';
// import video9 from '../../assets/videos/video9.mp4';
// import video10 from '../../assets/videos/video10.mp4';
import video11 from '../../assets/videos/video11.mp4';
import video12 from '../../assets/videos/video12.mp4';
import video13 from '../../assets/videos/video13.mp4';


import { Avatar } from '@mui/material';
import NoImageProfile from '../../assets/no-profile-picture.png'

export const profileAvatar: React.FC<AvatarProps> = (props) => {
    const { bgColor, width, height } = props;

    if (props.type === 'image') {
        return (
            <Avatar
                sx={{ bgColor: bgColor, width: width, height: height}}
                aria-label="profile"
                src={props.imageUrl}
                alt={props.altText}
            />
        );
    }

    if (props.type === 'text') {
        return (
            <Avatar sx={{bgColor: bgColor, width: width, height: height}}>
                {props.text}
            </Avatar>
        )
    }

    return (
        <Avatar sx={{width: 50, height: 50}} src={NoImageProfile} />
            
    )
}

export const defaultPostType: PostTypes[] = [
    {
        product: [
            {
                image_Url: [product1, product2, product3, product4],
                product_Name: ['Designer Made Footwear Collections'],
                product_Price: [30000, 50000, 80000, 100000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.BRAND,
                avatar: {
                    type: 'image',
                    width: 50,
                    height: 50,
                    imageUrl: 'https://bit.ly/dan-abramov',
                    altText: 'profile-image',
                    user_Name: 'Dan Abramov'
                }
            },
            {
                image_Url: [product5, product6, product7, product8, product9],
                product_Name: ['Designer Made Hoodie Sweater Collections'],
                product_Price: [100000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.DISTRIBUTOR,
                avatar: {
                    type: 'text',
                    width: 50,
                    height: 50,
                    text: 'D',
                    bgColor: '#6B8E23',
                    user_Name: 'John Doe'
                }
            },
            {
                image_Url: [product10, product11, product12, product13, product14],
                product_Name: ['High Quality Headphones with Hi-Fi speakers'],
                product_Price: [150000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.VENDOR,
                avatar: {
                    type: 'text',
                    width: 50,
                    height: 50,
                    text: 'S',
                    bgColor: '#FFA07A',
                    user_Name: 'Jane Smith'
                }
            },
            {
                image_Url: [product15, product16, product17, product18],
                product_Name: ['Premium Digital Smart Air Fryer with Multi-Cooking Functionality and Rapid Air Technology available in different brand and colors'],
                product_Price: [180000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.VENDOR,
                avatar: {
                    type: 'image',
                    width: 50,
                    height: 50,
                    imageUrl: 'https://bit.ly/tioluwani-kolawole',
                    altText: 'profile-image',
                    user_Name: 'Tioluwani Kolawole'
                }
            },
            {
                image_Url: [product19, product20, product21],
                product_Name: ['UK used Iphone 13 and Iphone 13 pro available as seen.'],
                product_Price: [350000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.VENDOR,
                avatar: {
                    type: 'image',
                    width: 50,
                    height: 50,
                    imageUrl: 'https://bit.ly/prosper-baba',
                    altText: 'profile-image',
                    user_Name: 'Prosper Baba'
                }
            },
            {
                image_Url: [product22, product23, product24],
                product_Name: ['Brand New Apple Watch'],
                product_Price: [150000],
                product_Details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar commodo pretium. Donec sed lacus ac nunc eleifend dictum. Integer semper dictum leo eget pharetra'],
                account_Type: AccountTypes.DISTRIBUTOR,
                avatar: {
                    type: 'text',
                    width: 50,
                    height: 50,
                    text: 'P',
                    user_Name: 'Prolific Dev'
                }
            },

        ]
    }
]

export const videoPostType: PostTypes[] = [
    {
        video: [
            {
                url: [video1, video2, video3, video4, video5],
                caption: ['This is video product1', 'This is video product2', 'this is video product3', 'this is video product4', 'this is video product5'],
                account_Type: AccountTypes.VENDOR,
                avatar: {
                    type: 'text',
                    width: 50,
                    height: 50,
                    text: 'S',
                    user_Name: 'SkinCare Products'
                },
                details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus condimentum dui, eu ultrices massa. Mauris hendrerit, metus sed gravida pharetra, nulla mi mollis nisi, quis auctor lorem mauris ac orci. Quisque ac eros at nisi tempor iaculis. Vestibulum vestibulum quam luctus justo laoreet feugiat. Sed ante sapien, tincidunt ut ullamcorper sit amet, sollicitudin ut sapien. Proin enim dui, tincidunt et']
            },
            {
                url: [video11, video12, video13],
                caption: ['This is video product6', 'This is video product7', 'This is video product8', 'This is video product9', 'This is video product10'],
                account_Type: AccountTypes.BRAND,
                avatar: {
                    type: 'image',
                    imageUrl: 'https://bit.ly/code-beast',
                    width: 50,
                    height: 50,
                    altText: 'profile_image',
                    user_Name: 'Adex Tech'
                },
                details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus condimentum dui, eu ultrices massa. Mauris hendrerit, metus sed gravida pharetra, nulla mi mollis nisi, quis auctor lorem mauris ac orci.']
            },
            {
                url: [video11, video12, video13],
                caption: ['This is video product11', 'This is video product12', 'This is video product12'],
                account_Type: AccountTypes.DISTRIBUTOR,
                avatar: {
                    type: 'text',
                    text: 'L',
                    width: 50,
                    height: 50,
                    user_Name: 'Laptops & Tech'
                },
                details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus condimentum dui, eu ultrices massa. Mauris hendrerit, metus sed gravida pharetra, nulla mi mollis nisi, quis auctor lorem mauris ac orci.']
            }
        ]
    }
]

export const normalImagePostType: PostTypes[] = [
    {
        normal_Image: [
            {
                caption: [],
                url: []
            }
        ]
    }
]