import bodyParser from "body-parser";
import  express,{Express,Request,Response,NextFunction}  from "express";


const app :Express = express();
app.use(bodyParser.json());


app.get('/',(req: Request,res: Response,next:NextFunction)=>{
    return res.status(200).json({'name':'Ademola'});
})

app.listen(3011, ()=>{
    console.log('server starting at 3011');
});