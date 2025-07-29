/* modal */
document.addEventListener('DOMContentLoaded', function(){
    let activeLabel = null;

    //  所有可點擊的 label
    const labels = document.querySelectorAll('.label-box');

    labels.forEach(label => {
        label.addEventListener('click', () => {
            activeLabel = label;
        });
    });

    //  Modal 內搜尋 + 選取
    const countryList = document.getElementById('countryList');
    const countrySearch = document.getElementById('countrySearch');
    const countryItems = countryList?.getElementsByTagName('li') || [];
    const modalElement = document.getElementById('countryModal');
    const bsModal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);

    //  即時搜尋
    countrySearch?.addEventListener('input', () =>{
        const query = countrySearch.value.toLowerCase();

        Array.from(countryItems).forEach(item => {
            const country = item.textContent.toLowerCase();
            item.style.display = country.includes(query) ? '' : 'none';
        });
    });

    //  點選國家項目
    Array.from(countryItems).forEach(item => {
        item.addEventListener('click', function(){
            const selectedCountry = item.textContent;
            
            if(activeLabel){
                activeLabel.textContent = selectedCountry;
            }

            bsModal.hide();
        });
    });
});
