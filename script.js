let arr = [
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'

    },{
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue'
    },{
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },{
        team: 'PBKS',
        primary: 'red',
        secondary: 'silver'
    },{
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },{
        team: 'DD',
        primary: 'blue',
        secondary: 'silver'
    }
]

let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let main = document.querySelector('main')

btn.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    btn.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a].team;
    main.style.backgroundColor = arr[a].secondary
    h1.style.backgroundColor = arr[a].primary
})