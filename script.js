let main = document.querySelector('main');
let btn = document.querySelector('button');

let arr = ["Code is poetry written with logic.","Good design is intelligence made visible.","Web performance is a feature, not an afterthought.","Simplicity is the soul of every great interface.","A fast website is the best user experience.","Clean code is the silent hero of every project.","Users judge your site in seconds so make those seconds count.","Design for humans not machines.Responsive design is respect for your users.","Every pixel should serve a purpose.Build first for clarity then for beauty.","Great UX is invisible to the user.","Accessibility is a responsibility not a choice.","Your website is your brand's first handshake.","Small improvements create big experiences."];

btn.addEventListener('click',function(){

    let h1 = document.createElement('h1')

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.random()*80
    let y = Math.random()*80
    let z = Math.random()*360
    let scl = Math.random()*3
    h1.style.position = 'absolute'
    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.rotate = z+'deg'
    h1.style.scale = scl
    h1.style.color = `rgb(${c1},${c2},${c3})`
    let a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]
    main.appendChild(h1)
    console.log(h1);
})