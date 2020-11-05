import cloudinary from 'cloudinary';

const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({ 
    cloud_name: 'dgby2q7t3', 
    api_key: '967791936596246', 
    api_secret: 'ZKpnYgzxiK2GlBtlbV1siE_ZHFs' 
  });

describe('Pruebas en fileUpload', () => {
    
    
    test('Debe de cargar un archivo y retornar un url', async() => {
        
        //Subir la imagen
        const resp= await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');

        const blob= await resp.blob();

        const file = new File([blob], 'foto.png');

        //Usar el file upload
        const url=await fileUpload(file);
        
        expect(typeof url).toBe('string');

        //Borrar la imagen que subimos

        const segments=url.split('/');
        const imageId=segments[segments.length-1].replace('.png','');
        
        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            
        });

    });
    
    test('Debe de retornar un error', async() => {
        
        const file = new File([], 'foto.png');
        const url=await fileUpload(file);
        
        expect( url).toBe(null);

    });
})
