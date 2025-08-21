import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.EXCHANGE_RATE_API_KEY;
let ratioList = [];

export async function preloadRatioData(){
    
    //  base currency is USD
    const url = new URL(`https://openexchangerates.org/api/latest.json`);
    url.searchParams.set('app_id', `${apiKey}`);

    console.log('fetching the ratio data.');
    const res = await fetch(url.toString());
    ratioList = await res.json();

    console.log(ratioList);

}


export function bindingRatioAndCountry(countries){
    let newCountries = countries.map(country => {
        const currencyMap = country.currencies.reduce((acc, code) =>{
            acc[code] = ratioList.rates[code] ?? null;
            return acc;
        }, {});


        //  複製原始country 資料，再改變 currencies 內容
        return{
            ...country,
            currencies: currencyMap
        };
    });

    return newCountries;
}
