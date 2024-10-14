const express = require('express');
const router = express.Router(); // Use 'router' instead of 'routes'
const hbs=require('hbs')
const Detail=require('../models/Details')
router.get("/", async(request, response) => {
   
   const details=await Detail.findOne({"_id":"6709181cd91bfa0edd26f8be"})
   //console.log(details)
   response.render("index",{
    details:details
   })
});

router.get("/about", (request, response) => {
    response.render("about")
});
router.get("/manpower", (request, response) => {
    response.render("manpower")
});

router.get("/deepcleaning", (request, response) => {
    response.render("deepcleaning")
});

router.get("/security", (request, response) => {
    response.render("security")
});
router.get("/housekeeping", (request, response) => {
    response.render("housekeeping")
});
router.get("/officeboy", (request, response) => {
    response.render("officeboy")
});
router.get("/HRMservice", (request, response) => {
    response.render("HRMservice")
});
router.get("/Pestcontrol", (request, response) => {
    response.render("Pestcontrol")
});
router.get("/Onboarding", (request, response) => {
    response.render("Onboarding")
});
router.get("/GST", (request, response) => {
    response.render("GST")
});
router.get("/CafeteriaManagement", (request, response) => {
    response.render("CafeteriaManagement")
});
router.get("/TicketsBooking", (request, response) => {
    response.render("Travelling")
});
router.get("/EventPlanning", (request, response) => {
    response.render("EventPlanning")
});






module.exports = router;
