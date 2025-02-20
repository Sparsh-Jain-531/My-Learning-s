const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const crypto = require('crypto');

const app = express();

app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12,(err,bytes)=>{
        const fn = bytes.toString("hex")+path.extname(file.originalname);
        cb(null, fn)
      })
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/', (req, res) =>{
    res.render('test');
})

app.post('/upload',upload.single('image'), (req, res) =>{
    console.log(req.file)
    res.redirect("/")
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})