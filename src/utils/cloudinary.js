import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import path from 'path';

//cloudinary.config({ 
//    cloud_name: process.env.CLOUDINARY_NAME, 
//    api_key: process.env.CLOUDINARY_API_KEY , 
//    api_secret:  process.env.CLOUDINARY_SECRET_KEY,
//});
cloudinary.config({ 
    cloud_name: 'dkawojrgd', 
    api_key: '199672717681143', 
    api_secret: 'ph8o3JKvsjbjJKNKEZl1ugnAKGs' // Click 'View API Keys' above to copy your API secret
});

console.log(process.env.CLOUDINARY_NAME,process.env.CLOUDINARY_API_KEY,process.env.CLOUDINARY_SECRET_KEY,"yhbhbhbj");


const uploadToCloudinary = async (localFilePath) => {
    console.log(localFilePath,"cloudin");
    try {
        console.log(localFilePath,"cloudin");
        
        
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log("file uploaded to cloudinary ", response.url);

        return response
        
        
    } catch (error) {
       console.log(error);
       console.log('wedd');
       
       
        console.log( localFilePath,"dff");

        
        fs.unlinkSync(localFilePath)
        console.log( localFilePath,"dff");

        //return null
    }
}
export { uploadToCloudinary } 