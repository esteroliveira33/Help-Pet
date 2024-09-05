import { dataSource } from "../database/database.config";
import { Server } from "../server/app";

dataSource.initialize()
.then(() =>{
    console.log('Parabéns tetezinha, conectou ao banco de dados')
})
.catch((err) =>{
    console.log('Eita tetezinha, deu erro ' + err);
})

new Server().app.listen(3000, () => console.log('Servidor rodando!'));