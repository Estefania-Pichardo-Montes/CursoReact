//const getImagenPromesa=()=> new Promise(resolve=>resolve('http://hola.com'))

//getImagenPromesa().then(console.log);

const getImagen= async()=>{

    try{
        const apiKey='uw3dOZrHwxMqVrze8sk9TejvDlQPk6Ot';
        const resp= await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
       const {data}= await resp.json();
       const {url}=data.images.original;
       const img=document.createElement('img');
       img.src=url;
       
       document.body.append(img);
    }
    catch(error){
        //Manejo del error
        console.error(error);
    }


}

getImagen();


