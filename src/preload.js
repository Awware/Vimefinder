function preload(url, callback = null){
    const img = new Image
    img.src = url
    if(callback) img.onload = callback
}

export {preload}