import { config } from "./config";

const {Model} = require("objection");
const knex = require("knex")
const expressjs = require("express");
const handleLogger   = require("./src/middleware/handlerLogger")
const carRouter = require("./src/routes/carRouter");
const userRouter = require("./src/routes/userRouter")
const authRouter = require("./src/routes/authRouter")
const upload = require("./src/middleware/upload");

const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file  = fs.readFileSync('./openAPI.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)


//@ts-ignore
const app: Express = expressjs();
const cloudinary = require("cloudinary").v2
const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: config.database_name, 
      user: "postgres", 
      password: config.database_name
    }
})

const PORT: number = 3000;

Model.knex(knexInstance)
          
cloudinary.config({ 
  cloud_name: 'djp77xipf', 
  api_key: '477512212399319', 
  api_secret: 'puwH-ffmZk-VWjkqNtuxMtc09sk' 
});


app.set("view engine", "ejs");
app.set("views","./src/views")
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(expressjs.static("public"))
app.use(expressjs.urlencoded())
app.use(handleLogger)
// app.use(isAdmin)

// separation of concern;
app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);
app.use("/v1", authRouter)

//@ts-ignore
app.post("/v1/cars/picture", upload.single("picture"), (req, res)=> {
    const filebase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${filebase64}`

    //@ts-ignore
    cloudinary.uploader.upload(file, (err, result)=> {
        if(err){
            return res.status(400).json({
                message: err.message, 
            })
        }

        res.status(201).json({
            message: "Upload success", 
            url: result.url
        })
    })
})

app.listen(PORT, ()=> {
    console.log(`is listening to port ${PORT}`)
} )