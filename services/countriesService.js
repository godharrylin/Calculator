let countries = [];
let status = 0;

//  抓取國家名稱及圖片資料
export async function preloadCountries() {

    try{
        const url = new URL('https://restcountries.com/v3.1/all');
        url.searchParams.append('fields', 'name,cca3,flags');

        const response = await fetch(url.toString());
        status = response.status;
        countries = await response.json().then(data =>
            data.map(country => ({
                name: country.name.common,
                cca3: country.cca3,
                flags: country.flags.svg
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