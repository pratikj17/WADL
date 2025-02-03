const express=require('express');
const {handleGenerateNewShortURL,handleAnalytics}=require('../controllers/url')

const router=express.Router();
// console.log("Importing Router!")

router.route('/').post(handleGenerateNewShortURL);
router.route('/analytics/:shortID').get(handleAnalytics);

module.exports={
    urlRouter:router
};