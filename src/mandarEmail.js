const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "perindevboot@gmail.com",
        pass: "gxkqsyymnogquthd",
      },
    });

async function main(texto,imprimirConsole,assunto,para) {
    await transporter.sendMail({
        from: "perindevboot@gmail.com",
        to: para,
        subject: assunto,
        html: texto
    });
    console.log(imprimirConsole)
}

module.exports = { main };

if (require.main === module) {
    (async () => {
        await main("Teste de envio de e-mail","E-mail enviado com sucesso!!","Teste","hix_x@hotmail.com");
    })();
}