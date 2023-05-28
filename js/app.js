
const send = document.getElementById("send");

// ボタンをクリックしたらイベントが発火する→入力したものが保存される
send.addEventListener('click', () => {
    const textarea = document.getElementById("textarea");
    let t = textarea.value;

    // valueの中身を複数にしたい
    let meala = document.getElementById("text_1").value;
    let mealb = document.getElementById("text_2").value;
    let mealc = document.getElementById("text_3").value;
    let meald = document.getElementById("text_4").value;

    let meals = {
        meal1: meala,
        meal2: mealb,
        meal3: mealc,
        meal4: meald
    };

    // localstrageに複数valueを保存する
    localStorage.setItem(t,JSON.stringify(meals));

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
    


