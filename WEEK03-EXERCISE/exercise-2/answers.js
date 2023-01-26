function convertADtoBE(input) {
    if(typeof input ==='number'&& input >= -543){
        return 'พ.ศ. '+ (input + 543);
    }
    else{
        return "ไม่ถูกต้อง";
    }
    // AD คือคริสดศักราย
    // BE คือพุทธศักราช
    //
    // TODO: แปลงปีใน คริสตศักราช เป็น พุทธศักราช เช่น 2000 เป็น "พ.ศ. 2543"
    // โดยให้เติมตัวอักษร พ.ศ. เข้าไปด้านหน้าด้วย

}

function evenOrOdd(input) {

    if(input%2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
    // TODO: ให้ตรวจสอบว่าตัวเลข input เป็นเลขคู่หรือเลขคี่
}

function getFullName(input) {
    if(input.sex =='male'){
        return "Mr. "+input.firstName+" "+input.lastName;
    }
    else if(input.sex =='female'){
    return "Ms. "+input.firstName+" "+input.lastName;
    }
     // TODO: ให้นำคำนำหน้าชื่อ ชื่อต้น นามสกุล มาต่อกัน
}

function getFirstName(input) {

    return fistname = input.substring(0, input.indexOf(" "));
    
    // TODO: ให้ทำการตัดนามสกุลออกโดยใช้ indexOf() และ substring()

}