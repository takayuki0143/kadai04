
const send = document.getElementById("send");

// ボタンをクリックしたらイベントが発火する→入力したものが保存される
send.addEventListener('click', () => {
    const textarea = document.getElementById("textarea");
    let t = textarea;

    // valueの中身を複数にしたい
    let menua = document.getElementById("text_1");
    let menub = document.getElementById("text_2");
    let menuc = document.getElementById("text_3");
    let menud = document.getElementById("text_4");

    let meals = {
        "data1": menua.value,
        "data2": menub.value,
        "data3": menuc.value,
        "data4": menud.value
    };
    console.log(meals);

    // localstrageに複数valueを保存する
    localStorage.setItem(t.value,JSON.stringify(meals));
    textarea.value = "";
    menua.value ='';
    menub.value ='';
    menuc.value ='';
    menud.value ='';
});

    // データを取得
    const load = document.getElementById("load");
    load.addEventListener('click', () => {
    const list = document.getElementById('list');
    list.innerHTML = ""; // 既存のリストをクリアする

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));

        const html = `
            <tr>
                <th>${key}</th>
                <td>${JSON.stringify(value)}</td>
            </tr>
        `;
        list.innerHTML += html;
    }

    });

   

    // 検索機能もつけたい
    //もしすでに登録してあるlocalstrageのkeyと一致するものがあれば、Valueを返してほしい

    // 登録作業
    const r = document.getElementById("resister");
    r.addEventListener('click', () => {
        const re = document.getElementById("resis").value;
        const t = document.getElementById("val").value;
        localStorage.setItem(re,t);
        resis.value ="";
        val.value ="";
    });
    
    // 検索作業
    const searchInput =document.getElementById("searchInput");
    const searchBtn =document.getElementById("searchBtn");
    const searchResult =document.getElementById("searchResult"); 

    searchBtn.addEventListener('click',() =>{
        const search = document.getElementById("searchInput");
        const content = search.value;
        const result = localStorage.getItem(content);
        search.value ="";
        if (result) {
            searchResult.textContent =  result;
        } else {
            searchResult.textContent = "キーが見つかりません";
        }

    });


