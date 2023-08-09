let btn = document.getElementsByTagName("button");
let display = document.getElementById("display")
let cont = "";
let result = "";
let lastBtn = "";
let selettore = document.getElementById("sel");
let contenitoreSel = document.getElementById("selCont");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (cont.length <= 16) {
            if (btn[i].textContent >= 0 && btn[i].textContent <= 9 || btn[i].textContent == ".") {
                cont = cont + btn[i].textContent;
                display.textContent = cont;
            }
        }

        if (btn[i].textContent == "+" || btn[i].textContent == "-" || btn[i].textContent == "x" || btn[i].textContent == "/") {
            if (result == "") {
                result = display.textContent;
                lastBtn = btn[i].textContent;
            } else if (cont != "" && btn[i].textContent == "+") {
                result = parseFloat(result) + parseFloat(cont);
                display.textContent = result;
                lastBtn = btn[i].textContent;
            } else if (cont != "" && btn[i].textContent == "-") {
                result = parseFloat(result) - parseFloat(cont);
                display.textContent = result;
                lastBtn = btn[i].textContent;
            } else if (cont != "" && btn[i].textContent == "x") {
                result = parseFloat(result) * parseFloat(cont);
                display.textContent = result;
                lastBtn = btn[i].textContent;
            } else if (cont != "" && btn[i].textContent == "/") {
                result = parseFloat(result) / parseFloat(cont);
                display.textContent = result;
                lastBtn = btn[i].textContent;
            }
            cont = "";
        }
        if (btn[i].textContent == "=") {
            if (cont != "" && lastBtn == "+") {
                result = parseFloat(result) + parseFloat(cont);
            }
            if (cont != "" && lastBtn == "-") {
                result = parseFloat(result) - parseFloat(cont);
            }
            if (cont != "" && lastBtn == "x") {
                result = parseFloat(result) * parseFloat(cont);
            }
            if (cont != "" && lastBtn == "/") {
                result = parseFloat(result) / parseFloat(cont);
            }
            display.textContent = result;
            cont = "";
            lastBtn = "";
        }
        if (btn[i].textContent == "RESET") {
            cont = "";
            result = "";
            display.textContent = "_";
        }
        if (btn[i].textContent == "DEL") {
            cont = cont.slice(0, -1);
            if (cont != "") {
                display.textContent = cont;
            } else {
                display.textContent = "_";
            }
        }
    })
}

let k = 1;
let main = document.getElementById("main")

selettore.addEventListener("click", ()=>{
    if(k==1){
        contenitoreSel.style.justifyContent = "center";
        main.classList.add("tema2");
        k=2;
    } else if(k==2){
        contenitoreSel.style.justifyContent = "flex-end";
        main.classList.add("tema3");
        main.classList.remove("tema2");
        k=3;
    }else if(k==3){
        contenitoreSel.style.justifyContent = "flex-start";
        main.classList.remove("tema3");
        k=1;
    }
})