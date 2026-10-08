/*Bài 2: Từ nhánh main, tạo nhánh feat/cloud-kingdom-2 sau đó checkout sang nhánh vừa tạo và thực hiện
các yêu cầu sau:
    - Tạo file tests/lesson-04/cloud-king.js
    - Khai báo:
        + Biến powerUp có giá trị là "Mushroom"
        + Sử dụng câu điều kiện if...els để xác định tên hiệu ứng tương ứng với các powerUp:
            _mushroom: "Mario becomes Supper"
            _flower: "Mario can shoot fireballs"
            _star: "Mario is invincible"
            _none: "Mario is normal"
            _khác: "Unknow power up"
        + In ra ngoài console hiệu ứng tên hiệu ứng */

let powerUp = "mushroom";
let powerUp1 = "flower";
let powerUp2 = "star";
let powerUp3 = "none";
let powerUp4 = "khác";
//let effect ='';
if(powerUp === "mushroom"){
    effect = "Mario becomes supper";
}
if (powerUp1 === "flower"){
    effect1 = "Mario can shoot fireballs";
}
if (powerUp2 === "star"){
    effect2 =  "Mario is invincible";
}
if (powerUp3 === "none"){
    effect3 = "Mario is normal"
}
if (powerUp4 === "khác"){
    effect4 = "Unknow power up"
}
console.log(effect);  
console.log(effect1);  
console.log(effect2);
console.log(effect3);
console.log(effect4); 