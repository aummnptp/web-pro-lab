// ข้อ 3.1
function getDogDemo(url) {
  var time = 10;
  const interval =setInterval(()=>{
    if (time >= 0){

    document.getElementById('dogTime').innerHTML = time;
    // var number = document.getElementById 
    time--;
  }
  else{
    getAPI('https://dog.ceo/api/breeds/image/random', (res)=>{
       document.getElementById('dogImg').src = res.message;
       clearInterval(interval);
    },(error)=>{
      // error
    })
    
  }
  },1000)
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

}


// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')


  let isSucess1 = new Promise(
    function (resolve,reject){
      
    if(getResult().status == 'success'){
      let number = getResult().text;
      resolve(number)
    }
    else{ 
       number = 'State1';
      reject(number)
      
    }
  }
  );

  let isSucess2 = new Promise(
    function (resolve,reject){
      
    if(getResult().status == 'success'){
      let number = getResult().text;
      resolve(number);
    }
    else{ 
       number = 'State2';
      reject(number);
      
    }
  }
  );

  let isSucess3 = new Promise(
    function (resolve,reject){
      
    if(getResult().status == 'success'){
      let number = getResult().text;
      resolve(number);
    }
    else{ 
      number = 'State3';
      reject(number);
      
    }
  }
  );

  const rainbow = document.getElementById("rainbow")
  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'

   isSucess1.then((result) =>{
    rainbow.innerHTML = result;
    rainbow.className = 'has-text-primary';

  }).catch((error)=>{
    rainbow.innerHTML = error;
    rainbow.className = 'has-text-danger';
  });
      
      setTimeout(() => {
        // STATE 2 color = 'has-text-success'
       
   isSucess2.then((result) =>{
    rainbow.innerHTML = result;
    rainbow.className = 'has-text-success';

  }).catch((error)=>{
    rainbow.innerHTML = error;
    rainbow.className = 'has-text-danger';
  });
        
        
        setTimeout(() => {
            // STATE 3 color = 'has-text-success'
            
          isSucess3.then((result) =>{
            rainbow.innerHTML = result;
            rainbow.className = 'has-text-success';

          }).catch((error)=>{
            rainbow.innerHTML = error;
            rainbow.innerHTML = error;
    rainbow.className = 'has-text-danger';
          });
            

        }, 2000)

      }, 2000)

  }, 2000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}

// ข้อ 3.3
function evenNumber(num) {
  let promise = new Promise(function (resolve,reject){
    if((num %2) == 0){
      let msg = 'success : '+num+  "is an even number";
      resolve(msg);
    }
    else{
      let msg = 'Error : '+num + " is not an even numbe";
      reject(msg);
    }
  });
  promise.then((result) =>{
    document.getElementById('result').innerHTML = result;
  }).catch((error)=>{
    document.getElementById('result').innerHTML = error;
  });
  // hint : ทำการสร้าง promise และเรียกใช้
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  
}

function fetchData(password) {
  
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
