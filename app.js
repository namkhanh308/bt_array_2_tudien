let tienganh = ["Hello","Goodbye","How","What","Do","Hello1"]
let tiengviet = ["Chào","Tạm Biệt","Như thế nào","Cái gì","Làm","Chào1"];
let kq = document.getElementById("kq")
function dich(){
    let word = document.getElementById("word").value;
    // let index = tienganh.indexOf(word);
    // console.log(index)
    // if(index != -1){
    //     kq.innerText = tiengviet[index];
    //     value = "";
    // }
    // else {
    //     kq.innerText = "Không có trong từ điển";
    // }
    console.log(word)
    let arr ;
    for (let i = 0 ; i < tienganh.length ; i++){
        if(tienganh[i] === word){
            arr = i;
        }
    }
    if(arr != null){
        kq.innerText = tiengviet[arr];
    }
    else {
        kq.innerText = "Không có trong từ điển";
    }


}