const express = require('express');
const router = express.Router();

router.get('/favorites', (req, res, next) => {
    res.status(200).json([
        {
            id: 1,
            img: 'http://localhost:5000/images/image1.jpg',
            title: 'Image',
            author: 'author',
            favorite: true
        },
        {
            id: 2,
            img: 'http://localhost:5000/images/image2.jpg',
            title: 'Image',
            author: 'author',
            favorite: false
        },
        {
            id: 3,
            img: 'http://localhost:5000/images/image5.jpg',
            title: 'Image',
            author: 'author',
            favorite: false
        },
        {
            id: 4,
            img: 'http://localhost:5000/images/image6.jpg',
            title: 'Image',
            author: 'author',
            favorite: true
        },
        {
            id: 5,
            img: 'http://localhost:5000/images/image7.jpg',
            title: 'Image',
            author: 'author',
            favorite: true
        },
        {
            id: 6,
            img: 'http://localhost:5000/images/image3.jpg',
            title: 'Image',
            author: 'author',
            favorite: false
        }
    ]);
});

router.get('/food-item', (req, res, next) => {
    res.status(200).json([{
        id: 1,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 4,
        category: 'non-veg',
        isFavorite: true,
        price: '10$',
    }, {
        id: 2,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 3,
        category: 'veg',
        isFavorite: true,
        price: '10$',
    }, {
        id: 3,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 2,
        category: 'veg',
        isFavorite: true,
        price: '10$',
    }, {
        id: 4,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 1,
        category: 'veg',
        isFavorite: true,
        price: '10$',
    }, {
        id: 5,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 4,
        category: 'non-veg',
        isFavorite: true,
        price: '10$',
    }, {
        id: 6,
        title: 'ABC',
        subHeader: 'CDE',
        imgTitle: 'Image',
        imgSrc: 'https://source.unsplash.com/random',
        rating: 4,
        category: 'veg',
        isFavorite: true,
        price: '10$',
    }]);
});

module.exports = router;
