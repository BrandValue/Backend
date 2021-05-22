const express = require('express');
const path = require('path');
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, DELETE, PATCH, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, x-info, x-id");
    res.header('Access-Control-Expose-Headers', "x-info, authorization");
    next();
});

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.status(200).json([
        {
            id: 1,
            img: 'http://localhost:5000/images/image1.jpg',
            title: 'Image',
            author: 'author',
            featured: true
        },
        {
            id: 2,
            img: 'http://localhost:5000/images/image2.jpg',
            title: 'Image',
            author: 'author',
            featured: false
        },
        {
            id: 3,
            img: 'http://localhost:5000/images/image5.jpg',
            title: 'Image',
            author: 'author',
            featured: true
        },
        {
            id: 4,
            img: 'http://localhost:5000/images/image6.jpg',
            title: 'Image',
            author: 'author',
            featured: true
        },
        {
            id: 5,
            img: 'http://localhost:5000/images/image7.jpg',
            title: 'Image',
            author: 'author',
            featured: true
        },
        {
            id: 6,
            img: 'http://localhost:5000/images/image3.jpg',
            title: 'Image',
            author: 'author',
            featured: true
        }
    ]);
});

app.listen(5000, () => {
    console.log('started');
})
