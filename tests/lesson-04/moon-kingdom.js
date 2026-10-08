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
// function createCharacters() {
//     const characters = [
//         { name: "HuyR", level: 2, health: 170 },
//         { name: "Hana", level: 3, health: 370 },
//         { name: "Mina", level: 2, health: 9770 }];
//     const UPPERCASE = characters.map((character) => ({
//         newName: character.name.toUpperCase(),
//         newLevel: character.level * 2,
//         newHealth: character.health * 3
//     }))
//     //return UPPERCASE;
//     const possibleWinners = UPPERCASE.filter(health1 => health1.newHealth > 1000);
//     return possibleWinners;
// };
// console.log(createCharacters());
function createCharacters(){
    const characters = [
        {name: "Haru", level: 3, health: 178},
        {name: "Hary", level: 4, health: 578},
        {name: "Potter", level: 6, health: 778}
    ];
    const charactersPowerUp = characters.map((characters) => ({
        newName: characters.name.toUpperCase(),
        newLevel: characters.level * 2,
        newHealth: characters.health * 3
    }));
    const possibleWinners = charactersPowerUp.filter(
        filterHealth => filterHealth.newHealth > 1000
    );
    return possibleWinners;
};
console.log(createCharacters());


