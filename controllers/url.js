const shortid=require('shortid');
const {URL}=require('../models/url');

async function handleGenerateNewShortURL(req,res) {
    const shortId=shortid();
    if(!req.body.url) res.status(400).json({"error":"url is null!"});
    await URL.create({
        shortID: shortId,
        redirectURL: req.body.url,
        visitHistory: []
    });
    return res.status(200).json({"id":shortId});
}

async function handleAnalytics(req,res) {
    const shortID=req.params.shortID;
    const result=await URL.findOne({shortID,});
    return res.json({"totalClicks":result.visitHistory.length});
}

module.exports={
    handleGenerateNewShortURL,
    handleAnalytics,
}