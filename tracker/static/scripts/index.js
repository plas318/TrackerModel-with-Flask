const trackBtn = document.querySelector('#createT');
const loading = document.querySelector('.lds-default');
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

const ns = ['57.9', '67.8', '87.5', '55.4'];
const ps = ['0.0', '0.0', '34.4', '39.3']

trackBtn.addEventListener("click", (event) => {
    const resultPage = document.querySelector('.resultPic');
    event.preventDefault();
    trackBtn.setAttribute('disabled', 'true');
    if (trackBtn.classList.contains('redo')) {
        const resultImg = document.querySelector('#result-img');
        resultImg.remove();
    }


    loading.style.display = "inline-block";

    //Aquiring the essential inputs
    let difficulty = document.querySelector('#difficulty');

    let health = document.querySelector('#health')

    let startingPoint = document.querySelector('#startingPoint');

    let tourVisit = document.querySelector('#tour');

    let imgPath = `./static/images/${startingPoint.value}-${health.value}-${difficulty.value}-${tourVisit.value}/${startingPoint.value}-${health.value}-${difficulty.value}-${tourVisit.value}.png
    `;

    const showPic = () => {
        loading.style.display = "none";
        resultPage.insertAdjacentHTML('beforeend', `<img id="result-img"src="${imgPath}" style="width:538px;height:615px;"}>`);

        const resultImg = document.querySelector('#result-img');
        resultImg.addEventListener('click', (e) => {
            resultImg.classList.toggle('switch');

            if (resultImg.classList.contains('switch')) {
                resultImg.setAttribute('src', `./static/images/${startingPoint.value}-${health.value}-${difficulty.value}-${tourVisit.value}/o${startingPoint.value}-${health.value}-${difficulty.value}-${tourVisit.value}.jpg`);

            } else {
                resultImg.setAttribute('src', `${imgPath}`);
            }
        });

        trackBtn.removeAttribute('disabled');
        trackBtn.classList.add('redo');
        trackBtn.textContent = '코스 다시 추천';

        const tab1 = document.querySelector('#add-info');
        const tab2 = document.querySelector('#tour-info');
        const tab3 = document.querySelector('#extra-info');

       
        contents.forEach(content => {
            content.innerHTML ='';
        });

        tab1.innerHTML=`<p>맞춤 트랙 생성 결과입니다<br><br>시작지점: <span class="green">'${startingPoint.options[startingPoint.selectedIndex].text}'</span>에서 출발합니다.<br>
                         체력: 남은 체력은 <span class="green">'${ns[tourVisit.selectedIndex]}%'</span> 예정입니다.<br>
                         난이도: <span class="green">'${difficulty.options[difficulty.selectedIndex].text}'</span> 선택하셨습니다.<br>
                         관광지: 선택한 관광지유형 중 <span class="green">'${ps[tourVisit.selectedIndex]}%'</span> 방문가능합니다.<br>
                         목적지에 도착할 확률은 <span class="green">'100.0%'</span>입니다.<br>
                         </p>`;


        // const fs = require('fs')
        // fs.readFile(`./styles/txt/${startingPoint.value}-${health.value}-${difficulty.value}-${tourVisit.value}.txt`, (err, data) => {
        //         if (err) throw err;
        //         console.log(data.toString());
        //     })
        // const leftHealth = 
        // tab1.innerHTML=`<p>관광지 접촉횟수: ${}회<br>잔여체력: ${}%<br>도착 확률: ${}</p>`
    
    }


    //This is the page that would show the result.
    setTimeout(showPic, 1500);

});




tabButton.forEach((tab) => {
    tab.addEventListener('click', e => {
        tabButton.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('show');
        });

        const cid = tab.dataset.id;
        const cont = document.querySelector(`#${cid}`);
        cont.classList.add('show');
    });
})