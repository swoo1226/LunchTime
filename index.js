/*
Parameter
 (Member)팀 목록 : Array
 (Group)조 개수 : Number
 (Menu)추천 메뉴 목록 : Array

Return value
    식사조와 추천메뉴 들어있는 Array[Object]
    ex) [{index + 1 조: 누구누구, 메뉴: 무엇무엇},{index + 1조: },{}]

    return array의 길이는 Group 수와 같아야 한다.
*/
EatLunch = (Member, Group, Menu) => {
    let result = [];
    let Team = [...Member];
    for(let i = 0; i < Group; i++) {
        result[i] = {};
        result[i][i+1] = [];    //팀원 추가될 곳
        let randomPickMenu = Math.floor(Math.random() * Menu.length);
        result[i]['추천 메뉴'] = Menu[randomPickMenu];
        Menu.splice(randomPickMenu, 1)
    }
    while(Team.length > 0) {
        for(let j = 0; j < result.length; j++) {
            let randomPickTeam = Math.floor(Math.random() * Team.length);
            if(Team[randomPickTeam] !== undefined) {
                result[j][j+1].push(Team[randomPickTeam])
            }
            Team.splice(randomPickTeam, 1);
        }
    }
    return result;
}
console.log('Members: ', EatLunch(['A','B','C','D','E','F','G'], 4, ['한식', '중식', '일식', '양식', '분식', '레스토랑', '배달']))