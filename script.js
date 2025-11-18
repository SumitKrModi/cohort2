let main = document.querySelector('main');
let btn = document.querySelector('button');

let arr = ["https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1495231916356-a86217efff12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1677005708723-c0dabb815e4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym91cXVldHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym91cXVldHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1497276236755-0f85ba99a126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym91cXVldHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1676693582198-5579ce256342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym91cXVldHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1603178455924-ef33372953bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1512056495345-913a0c261dc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D","https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1557925923-6885735abfb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1575178114667-c8a832c61f45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D"];

btn.addEventListener('click',function(){

    let h1 = document.createElement('img')

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.random()*100
    let y = Math.random()*100
    let z = Math.random()*360
    let scl = Math.random()*5
    h1.style.position = 'absolute'
    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.rotate = z+'deg'
    h1.style.scale = scl
    h1.style.height = '100px'
    h1.style.width = '100px'
    h1.style.borderRadius = '50%'

    let a = Math.floor(Math.random()*arr.length)
    h1.src = arr[a]
    main.appendChild(h1)
    console.log(h1);
})