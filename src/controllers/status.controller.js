import ResponseBuilder from "../utils/builders/ResponseBuilder.js"


const getPingController = (req, res) => 
   
    {
        try {
            const response = new ResponseBuilder()
            
            .setOk(true)
            .setStatus(200)
            .setMessage("Ok ")
            .setPayload({mensaje:'la operacion ha sido un éxito'})
            .build()    
            res.status(200).json(response)
        }
        catch (error) {
            
            const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage("error servidor desconocido")
            .setPayload({mensaje:error.message})
            .build()
            res.status(500).json(response)
        }
    }
export default getPingController