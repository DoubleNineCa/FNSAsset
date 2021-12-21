const client = require("./utils/PGConnection");

const main = async () => {
    client.connect(err => {
        if(err){
            console.error("connection error", err.stack);
            process.exit(1);
        }else {
            console.log("Database connected");
        }
    });


    setTimeout(() => {
        client.end();
    }, 5000);
}

main();