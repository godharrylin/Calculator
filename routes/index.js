import { Router } from 'express';
const router = Router();


router.get('/index', async (req, res) =>{
    res.render('index', { 
        countries: req.countries, 
        status: req.status,
        majorData: req.majorData,
        minorData: req.minorData
    });  
});

export default router;