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

    //  關閉 modal 前自動滾到上方
    modalElement.addEventListener('hide.bs.modal', function(){
        if(countryList){
            countryList.scrollTop = 0;
        }
        
    });


    //  即時搜尋
    countrySearch?.addEventListener('input', () =>{
        const query = countrySearch.value.toLowerCase();

        Array.from(countryItems).forEach(item => {
            const country = item.textContent.toLowerCase();
            item.style.display = country.includes(query) ? '' : 'none';
        });
    });

    
    //  點選國家項目，會顯示到計算機上，並關閉 modal 視窗
    Array.from(countryItems).forEach(item => {
        item.addEventListener('click', function(){
            const countryFlag = item.dataset.flag;
            if(activeLabel){
                const flagImg = activeLabel.querySelector('.country-ratio-img');;
                flagImg.src = countryFlag;
                flagImg.dataset.code = item.id;
            }

            bsModal.hide();
        });
    });
});
