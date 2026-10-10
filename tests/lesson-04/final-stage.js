/*STAGE 05: FINAL STAGE
Ở vòng cuối này Mario sẽ phải vận dụng khả năng suy luận của mình để giải được câu đố từ trên Browser
gian ác: "Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 có tổng chia hết cho 17. Xem format ở hình dưới."
Ví dụ: (1,16), (2,15),(3,14)...là cặp số hợp lệ vì có tổng chia hết cho 17
Lưu ý: 
    - Mỗi cặp số chỉ được đếm 1 lần - (1,16) và (16,1) là cùng 1 cặp
    - 2 số trong cặp được phép bằng nhau (17,17), (34,34) là hợp lệ
    - Lưu đáp án ở file tests/lesson-04/final-stage.js và code tại nhánh main*/

function countNumber() {
    let count = 0;
    for (let x = 1; x <= 100; x++) {
        for (let y = 1; y <= 100; y++) {
            let sum = x + y;
            if ((sum % 17 == 0) && x <= y) {
                count ++;
                console.log(`${x}, ${y}`);
            }
        }
    }
    return `Tổng số cặp: ${count}`;
};
console.log(countNumber());
