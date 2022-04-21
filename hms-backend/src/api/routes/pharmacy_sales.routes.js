const router = require("express").Router();
let PharmacySale = require("../model/pharmacy_sales.model");


//Add Pharmacy Sales
router.route("/add").post((req,res) => {


     //Added date
    let date = new Date();
    let dd = date.getDate()+1;
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();
    if(mm<10) 
    {
        mm='0'+mm;
    } 

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    let soldDate = yyyy+"-"+mm+"-"+dd;
    let soldMonth = yyyy+"-"+mm;
     

    const sold_date = soldDate;
    const sold_month = soldMonth;
    const item_code = req.body.item.item_code;
    const generic_name = req.body.item.generic_name;
    const brand_name = req.body.item.brand_name;
    const dosage = req.body.item.dosage;
    const imageURL = req.body.item.imageURL;
    const quantity = req.body.quantity;
    const total_amount = req.body.totAmount;
    
    const newPharmacySale = new PharmacySale({

        sold_date,
        sold_month,
        item_code,
        generic_name,
        brand_name,
        dosage,
        imageURL,
        quantity,
        total_amount
    });
    
    newPharmacySale.save().then(() => {
        res.json("added");
    }).catch((err)=>{
        console.log(err);
    })

});