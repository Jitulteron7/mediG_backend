const { Router } = require('express');
const router = Router();

const reader = require('xlsx')

router.post('/dash', async (req, res) => {

    try {

        // Reading our test file
        const file = reader.readFile(req.file.path)
        
        let patient = []
  
        const sheets = file.SheetNames
        
        for(let i = 0; i < sheets.length; i++){

            const temp = reader.utils.sheet_to_json(
                file.Sheets[ file.SheetNames[i] ]
            )
        }

        await fs.unlink(req.file.path,(error)=>{
            console.log(error)
        });

        await Hospital.insertMany(patient)
            .then(function(){

                res.json({
                    success:1,
                    msg:'Successfully uploaded the student list'
                })
            }).catch(function(error){

                res.json({
                    success:0,
                    msg:'Something went wrong!',
                    error
                })            
            });

       } catch (error) {
          
          return res.json(internalServerError)
       }
})

module.exports = router