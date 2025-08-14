let countries = [];
let status = 0;

//  抓取國家名稱及圖片資料
export async function preloadCountries() {

    try{
        const url = new URL('https://restcountries.com/v3.1/all');
        url.searchParams.append('fields', 'name,cca3,flags,currencies');

        const response = await fetch(url.toString());
        status = response.status;
        countries = await response.json().then(data =>
            data.map(country => ({
                name: country.name.common,
                cca3: country.cca3,
                flags: country.flags.svg,
                currencies: Object.keys(country.currencies)     //  獲取該國家使用的幣別名稱 (可能不只一種)
            }))
        );
        console.log('fetching the country data');
    } catch(error){
        console.error('❌ Failed to preload country data:', error);
    }
}

//  提供國家資料存取
export function getCountries(){
    return countries;
}

//  獲取 API response status
export function getStatus(){
    return status;
}