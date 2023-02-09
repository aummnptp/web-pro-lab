// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    if (window.confirm("ยืนยันไหม?")) {
        const msg ='ยืนยันจ้า';
       callback(msg)
      }
    else{
        const msg = 'ไม่ดีกว่า';
        callback(msg)
    }
      
    
}

// ข้อ 2.2

function start() {
    
   
    setTimeout(() =>{
        document.getElementById('start').innerHTML ='Program started'
        setTimeout(()=>{
            document.getElementById('process').innerHTML ='Hello World'
            setTimeout(()=>{
            document.getElementById('end').innerHTML ='Program ended'
            },2000)
        },3000)
    },0)
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
}

// ข้อ 2.3
function stopTime() {
   var Time =  document.getElementById('Time').value;

   setInterval(function () {  
    if(Time >=0){
        var Minute = Math.floor(Time/60);
        var Second = Time%60;
        if(Minute<9){
            document.getElementById('setMinute').innerHTML = '0'+ Minute;
        }
        else{
            document.getElementById('setMinute').innerHTML = Minute;
        }
        if(Second<9){
        document.getElementById('setSecond').innerHTML =  '0'+ Second;
        }
        else{
            document.getElementById('setMinute').innerHTML = Second;
        }
        Time--;
    }
    else{
        clearInterval
    }
    }, 1000);
}

