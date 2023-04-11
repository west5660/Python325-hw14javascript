//
// let otvet = Number(prompt(' какой день недели?'))
// switch (otvet) {
//     case 1: {
//         alert('Понедельник')
//         break
//     }
//     case 2:{
//         alert('Вторник')
//         break
//     }
//     case 3:{
//         alert('Среда')
//         break
//     }
//     case 4:{
//         alert('Четверг')
//         break
//     }
//     case 5:{
//         alert('Пятница')
//         break
//     }
//     case 6:{
//         alert('Суббота')
//         break
//     }
//     case 7:{
//         alert('Воскресенье')
//         break
//     }
//     default:{
//         alert('нет такого')
//     }
// }

//бот спрашивает
// let otvet1 = prompt(' Напиши сообщение')
// switch (otvet1) {
//     case 'привет': {
//         alert('Здравствуй')
//         break
//     }
//     case 'игра':{
//         alert('догонялки')
//         break
//     }
//     case 'как дела':{
//         alert('нормально')
//         break
//     }
//     case 'кто ты':{
//         alert('робот')
//         break
//     }
//     case 'пока':{
//         alert('До встречи')
//         break
//     }
//
// }

//игра в динозавра
$(document).keydown(f1)
function f1() {
    if ($('#dino').classList !== 'jump') {
        $('#dino').addClass('jump')
    }


        setTimeout(
            function (){
            $('#dino').removeClass('jump')}, 1000)

}

function  f2(){
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    let meteorrun = $('#meteor').css('top')
    let dinoTop = Number($('#dino').css('top').slice(0, -2));
    let dinoHeight = $('#dino').height();
    let dinoLeft = Number($('#dino').css('left').slice(0, -2));
    let dinoWidth = $('#dino').width();
    let meteorTop = Number($('#meteor').css('top').slice(0, -2));
    let meteorHeight = $('#meteor').height();
    let meteorLeft = Number($('#meteor').css('left').slice(0, -2));
    let meteorWidth = $('#meteor').width();

    console.log(kaktusleft+'--'+dinotop)
    dinotop = Number(dinotop.slice(0,-2))
    kaktusleft = Number(kaktusleft.slice(0,-2))
    meteorrun = Number(meteorrun.slice(0,-2))

   console.log(dinotop)
   console.log(meteorrun)

    if (0<kaktusleft && kaktusleft<50 && dinotop > 300)

    {
        alert(' попался')
        location.reload(f2, 10)}
    else if (dinoTop + 100 > meteorTop && dinoTop < meteorTop + 0 && dinoLeft + 10 > meteorLeft && dinoLeft < meteorLeft + 50){
        alert(' попался')
        location.reload(f2, 10)
    }
}
setInterval(f2,10)


