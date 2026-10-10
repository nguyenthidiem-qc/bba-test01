/*Từ nhánh main, tạo nhánh feat/moon-kingdom và làm các bài tập trong file 
tests/lesson-04/moon-kingdom.js */

/*BÀI TẬP 1: Tạo hàm createCharacters:
    - Khai báo mảng các object characters có các thuộc tính: name, level, health
    - Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
        + Thuộc tính name UPPERCASE của name gốc
        + level: x2 level gốc
        + health: x3 của health gốc
    - Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đăt tên mảng mới lọc
    được này là "possibleWinners"
*/

function createCharacters() {
    const characters = [
        { name: "Haru", level: 3, health: 178 },
        { name: "Hary", level: 4, health: 578 },
        { name: "Potter", level: 6, health: 778 }
    ];
    const charactersPowerUp = characters.map((character) => ({
        newName: character.name.toUpperCase(),
        newLevel: character.level * 2,
        newHealth: character.health * 3
    }));
    const possibleWinners = charactersPowerUp.filter(
        filterHealth => filterHealth.newHealth > 1000
    );
    return possibleWinners;
};
console.log(createCharacters());


/*Bài 2: Tạo hàm printLeaderboard:
    - Nhận vào tham số: players là mảng các object: [{name: "Mario", score: 1000},...]
    - Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp
    -In ra bảng xếp hạng, lưu ý với 3 giá trị 1,2,3 hãy thêm huy chương phía trước */

    //Step1: Khai báo mảng
const players = [
    { name: "Mario", score: 1908 },
    { name: "Gao", score: 1782 },
    { name: "Lua", score: 1995 },
    { name: "Sky", score: 1729 },
    { name: "Moon", score: 1162 }
];

//Step2: Viết hàm nhận mảng làm tham số:
function printLeaderboard(players) {
    const bangXepHang = players.sort((a, b) => b.score - a.score);
    return bangXepHang;
};
const kqua = printLeaderboard(players);
kqua.forEach((players,index) => {
    let huyChuong = "";
    if(index ===0){
        huyChuong = "🥇";
    }
    if(index === 1){
        huyChuong = "🥈";
    }
    if(index===2){
        huyChuong = "🥉";
    }
    console.log(`${huyChuong} ${index + 1}. ${players.name}, ${players.score}`);
    
});
printLeaderboard(players);

