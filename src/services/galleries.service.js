import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
// import { Galleries } from "../models/galleries.model.js";
// import cloudinaryConfig from '../configs/cloudinary.config.js';

async function getMultiple(){
  
  // const { title, imageUrl, description } = query;

  try {

    // const whereClause = {};

    // if (title) {
    //   whereClause.title = {
    //     [Op.iLike]: `%${title}%`, // use case-insensitive LIKE operator
    //   };
    // }
    // if (imageUrl) {
    //   whereClause.imageUrl = imageUrl;
    // }
    // if (description) {
    //   whereClause.description = {
    //     [Op.iLike]: `%${description}%`, // use case-insensitive LIKE operator
    //   };
    // }

    const dbResult = await Galleries.findAll();

    // Return the mapped galleries in the response
    return {
      status: "success", 
      code : 200,
      message : 'Fetching galleries successfully!',
      data : dbResult
    }
    
  } catch (err) {
    console.error(err);
    return {
      status: "Failed", 
      code : 400,
      message : 'Error fetching galleries!'
    }
  }
}

async function createGalleries(request){

  // Get request Body
  const { title, description } = request.body

  // const imageUrl = request.file.path
  
  // Error message
  if (!title || !description) {
    let message = ""
    
      if (!title ) {
        message += ", title"
      }
      
      // if (!imageUrl) {

      //   message += ", imageUrl"
      // }

      if (!description) {
        message += ", description"
      }
    
      return { 
        status: 'Failed',
        code: 400,
        message: `Failed creating gallery${message} is empty!`
      }
    }
    
    try {
      
      let imageUrl = null
      let filename = null

      if (request.file) {
        imageUrl = request.file.path
        filename = request.file.filename
        // console.log(request.file)
      }

      // set default imageUrl if empty
      const defaultImageUrl = 'https://res.cloudinary.com/dp7yp5kgv/image/upload/v1684334844/galleries/map_uqx7qx.jpg';
      const finalImageUrl = imageUrl || defaultImageUrl;
      
      // Create new gallery record using the Galleries model
      const newGallery = await Galleries.create({
        id: uuidv4(),
        title: title,
        imageUrl: finalImageUrl,
        filename: filename,
        description: description,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      // Return the newly created gallery in the response
      return {
        status: "success",
        code: 201,
        message: 'Gallery created successfully!',
        data: {
          galleryId: newGallery.id,
          title: newGallery.title,
          imageUrl: newGallery.imageUrl,
          description: newGallery.description
        }
      }
    
  } catch (err) {
    console.error(err);
    return {
      status: "Failed", 
      code : 400,
      message : 'Error creating gallery!'
    }
  }
}

export default {
  getMultiple,
  createGalleries
}
