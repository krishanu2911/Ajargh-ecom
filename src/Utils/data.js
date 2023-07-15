import { v4 as uuidv4 } from "uuid"

export const products = [
    {
        _id: uuidv4(),
        title: "REGULAR FIT SLOGAN",
        rate: "INR 1,390",
        displayImg: "/prod1.svg"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT SLOGAN2",
        rate: "INR 1,220",
        displayImg: "/image2.svg"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT V-NECK",
        rate: "INR 1,450",
        displayImg: "/image3.svg"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT POLO",
        rate: "INR 1,890",
        displayImg: "/image4.svg"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT COLOR BLOCK",
        rate: "INR 1,990",
        displayImg: "/prod1.svg"
    },
]

export const cartData = [
    {
        _id: uuidv4(),
        title: "REGULAR FIT SLOGAN",
        rate: "1390",
        displayImg: "/prod1.svg",
        qty: 1,
        size: "L"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT POLO",
        rate: "1190",
        displayImg: "/image2.svg",
        qty: 2,
        size: "S"
    },
    {
        _id: uuidv4(),
        title: "REGULAR FIT COLOR BLOCK",
        rate: "1140",
        displayImg: "/image3.svg",
        qty: 1,
        size: "M"
    },
]