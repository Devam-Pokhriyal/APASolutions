const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs'); // Import hbs
const routes = require('./routes/main'); // Adjust the path as needed
const Detail=require('./models/Details')
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/APAsolutions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Detail.create({
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"About Us",
    //             url:"/about"
    //         },
    //         {
    //             label:"Manpower Supply",
    //             url:"/manpower"
    //         },
    //         {
    //             label:"Deep Cleaning",
    //             url:"/deepcleaning"
    //         },
    //         {
    //             label:"Security Guard",
    //             url:"/security"
    //         },
    //         {
    //             label:"House Keeping",
    //             url:"/housekeeping"
    //         },
    //         {
    //             label:"Office Boy",
    //             url:"/officeboy"
    //         },
    //         {
    //             label:"HRM Service",
    //             url:"/HRMservice"
    //         },
    //         {
    //             label:"Pest Control",
    //             url:"/Pestcontrol"
    //         },
    //         {
    //             label:"Onboarding",
    //             url:"/Onboarding"
    //         },
    //         {
    //             label:"GST Registration",
    //             url:"/GST"
    //         },
    //         {
    //             label:"Cafeteria Management",
    //             url:"/CafeteriaManagement"
    //         },
    //         {
    //             label:"Travelling & Booking Tickets",
    //             url:"/TicketsBooking"
    //         },
    //         {
    //             label:"Event Planner/Organizer",
    //             url:"/EventPlanning"
    //         }
            
    //     ]
    // })

}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/static', express.static('public'));

// Routes
app.use('/', routes);

hbs.registerPartials('views/partials')

// Set view engine
app.set('view engine', 'hbs');
app.set('views', 'views');

// Start the server
const port = process.env.PORT || 5556;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
