import { Client } from "pg";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv"

dotenv.config();

const sql = `
    CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY,
    text TEXT NOT NULL,
    username TEXT NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    INSERT INTO messages (id, text, username) VALUES 
    ('${uuid()}', 'This is the first message.', 'Rohan Cha'),
    ('${uuid()}', 'This is the second message.', 'Mushu Cha');
`;

async function main(){
    console.log("Connecting.......");
    const client = new Client({
        connectionString: process.env.DB_URI_CLIENT
    })
    try{
        await client.connect();

        await client.query(sql);
    }catch(error){
        console.error("Error connecting:", error);
        throw error;
    }finally{
        await client.end();
        console.log("Populated.")
    }
}

main();