import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message:"Enter your url : ", 
    name:"URL" }
  ])
  .then((answers) => {
    let url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.svg'));
    fs.writeFile("log.txt",url,(err)=> {
        if(err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } else {
      console.log(error);
    }
  });

 