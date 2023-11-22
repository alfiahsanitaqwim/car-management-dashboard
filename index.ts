const {Model} = require("objection");
const knex = require("knex")
const expressjs = require("express");
const ExpressT = require("express").Express;
const isAdmin   = require("./src/middleware/isAdmin")
const handleLogger   = require("./src/middleware/handlerLogger")
const carRouter = require("./src/routes/carRouter");
const userRouter = require("./src/routes/userRouter")
const upload = require("./src/middleware/upload");

//@ts-ignore
const app: Express = expressjs();
const cloudinary = require("cloudinary").v2
const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: "cars_c6", 
      user: "alfiahsanitaqwim", 
      password: "root"
    }
})

const PORT: number = 3000;

Model.knex(knexInstance)
cloudinary.config({ 
    cloud_name: 'djp77xipf', 
    api_key: '477512212399319', 
    api_secret: '***************************' 
  });


// to set up view engine tools using ejs
app.set("view engine", "ejs");

// to custom default views pathname in ejs
app.set("views","./src/views")
app.use(expressjs.static("public"))
app.use(expressjs.urlencoded())
app.use(handleLogger)
// app.use(isAdmin)

// separation of concern;
app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);

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