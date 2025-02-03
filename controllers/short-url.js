const {URL}=require('../models/url');

async function handleRedirectShortURL(req,res){
    const shortID=req.params.shortID;
    const entry=await URL.findOneAndUpdate(
        {shortID,},
        {
            $push:{
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        }
    );
    res.redirect(entry.redirectURL);
}

module.exports={
    handleRedirectShortURL
};