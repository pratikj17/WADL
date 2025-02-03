const express=require('express');
const {handleRedirectShortURL}=require('../controllers/short-url');

const router=express.Router();

router.route('/:shortID').get(handleRedirectShortURL);

module.exports = {
    shortURLRouter:router
};
