const Picture = require('../model/PictureModel.js')
const path = require('path');
const fs = require('fs');

exports.upload = async (req, res) => {
   try{
    const file = req.file

    const picture = new Picture({
        src: file.path
    })
    res.json({picture, message: 'imagem salva'})
    await picture.save()
   }catch(err){
    res.status(500).json({message:'erro ao salvar imagem'})
    console.log('error no controller backend, ', err)
   }
}

exports.getContent = async (req, res) => {
    try{
        const directoryPath = path.join('C:\\Users\\spcom\\OneDrive\\Documentos\\uploadandexib\\backend\\uploads');
        const fileUrls = [];
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.log(err)
              return res.status(500).send('Unable to scan files!');
            }

            files.forEach((file) => {
                fileUrls.push(`http://localhost:3009/uploads/${file}`);
              });
              res.json(fileUrls);
          });
    }catch(err){
        res.status(500).json({message: 'erro ao buscar images em banco'})
        console.log(err)
    }
}