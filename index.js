const express = require('express');
const QRCode = require('qrcode');
const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send({message : "QR CODE GENERATER"})
});

app.post('/generateQR',async (req, res) => {

    try {
        let message = req.body.message;
        if(message==""){
            res.send({message : "Empty Data"})
        }
        QRCode.toDataURL(message, function(err, message){
            console.log(message.data);
            res.send({message})
        })
        
    } catch (error) {
        console.log("something went wrong in qrpost")
    }
    const message = req.body.message;

   
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
