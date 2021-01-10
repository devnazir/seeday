const input = document.querySelector("input");
const btn = document.querySelector("button");

function clickOrEnter(e) {
    if (e.key == "Enter" || e.target.className == "cari") {
        const value = parseInt(input.value);
        if(isNaN(value)) {
            return;
        }

        checkDay(value);
    }
}


function checkDay(value) {
    const date = new Date();
    const nowDate = date.getDate();
    const result = date.setDate(nowDate + value);
    changeDateAndDay(result, value)
}

function changeDateAndDay(result, value) {
    const newDate = new Date(result);
    const day = newDate.getDay()
    const futureDate = newDate.getDate();
    const futureMonth = newDate.getMonth();
    const futureYear = newDate.getFullYear();

    const resultDay = `${days()[day]}`;
    const resultDate = `${futureDate}-${months()[futureMonth]}-${futureYear}`;

    showDateAndDay(resultDate, resultDay, value);
}

function showDateAndDay(resultDate, resultDay, value) {
    const result = document.querySelector(".result");
    const h2 = result.querySelector("h2");
    const span = result.querySelector("span");
    const p = result.querySelector("p");
    
    if(result.classList.contains("to-bottom")) {
        result.classList.remove("to-bottom");
    }

    setTimeout(() => {
        result.classList.add("to-bottom");
    }, 100);
    

    p.textContent = `${value} Hari setelah hari ini adalah :`;
    h2.innerText = resultDay;
    span.innerText = resultDate;
}

function months() {
    return ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
}

function days() {
    return ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
}

input.addEventListener("keydown", clickOrEnter);
btn.addEventListener("click", clickOrEnter);