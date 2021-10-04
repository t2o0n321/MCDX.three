// processing wasm
let wasmExport = null

function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.copyWithin(dest, src, src + num);
}

var asmLibraryArg = {
    "emscripten_memcpy_big": _emscripten_memcpy_big
}

var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
}

async function loadWASM(){
    let result = await fetch('webAsm/function.wasm')
    let bytes = await result.arrayBuffer()
    let wasm = await WebAssembly.instantiate(bytes, info)
    wasmExport = wasm.instance.exports
}

loadWASM()

console.log('Successfully loaded wasm file')
//

document.addEventListener('keydown', (evnt)=>{
    if(evnt.keyCode == 13){ 
        if(check()){
            var box = document.getElementsByClassName('box')[0]
            var Label = document.createElement('div')
            Label.className += 'L'
            box.removeChild(box.getElementsByClassName('checkBar')[0])
            box.appendChild(Label)
            Label.innerText = 'Access Granted'
        }
        else{
            alert('Incorrect Password !')
        }
     }
})

function check(){
    var usrInput = document.getElementById('usrInput').value

    var count = 0;

    for(var i = 0; i <= usrInput.length - 1; i++){
        var a = usrInput.charCodeAt(i)
        if(wasmExport.P455Chkr(a, i)){
            count++
            continue
        }
        break
    }

    return (count == 36)

}


