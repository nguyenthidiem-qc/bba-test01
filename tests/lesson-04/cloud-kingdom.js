/*Bài tập 1: Từ nhánh main, tạo nhánh /feat/cloud-kingdom sau đó checkout sang nhánh vừa tạo
sau đó thực hiện yêu cầu sau:
    - Tạo file tests/lesson-04/cloud-king.js
    - Khai báo:
        + Biến playerName có giá trị là "Mario"
        + Biến currentLives có giá trị là 3
        + Các hằng số lưu coins theo level:
            _ Level 1: 25
            _ Level 2: 30
            _Level 3: 45 
            
        + Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
        + In ra số coin dư khi chia tổng số coin cho 3
    - Commit kết quả với message: "feat: add solution for challenge 03"*/

    let playerName = "Mario";
    let currentLives = 3;
    const coins = {
        level1: 25,
        level2: 30,
        level3: 45
    };
    const sumCoin = (coins.level1 + coins.level2 + coins.level3);
    const avgCoin = (sumCoin/3).toFixed(1);
    console.log(`Tổng coin 3 level của ${playerName}: ${sumCoin}`);
    console.log(`Giá trị trung bình coins của ${playerName}: ${avgCoin}`);

        
