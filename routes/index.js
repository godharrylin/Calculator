import { Router } from 'express';
const router = Router();


router.get('/index', async (req, res) =>{
    console.log(req.countries);
    res.render('index', { countries: req.countries, status: req.status });  
});

export default router;