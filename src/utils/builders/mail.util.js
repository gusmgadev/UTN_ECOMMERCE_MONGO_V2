import transporter from "../../config/transporter.config.js"

const sendEmailprueba = async (text, to) => {
    await transporter.sendMail({
        to: to,
        from: ENVIROMMENT.GMAIL_USER,
        subject: "Prueba de envio de email",
        html:`
        <h1>Test mail</h1>
        <p>${text}</p>`
        
    })
}

//sendEmail("hola, es una prueba desde nodejs clase 21", "gustavo.mgainformatica@gmail.com")

const sendEmail = async (options) => {
    //funcion que genera una CAPA para enviar correos, esta capa permite luego cambiar facilmetne si cambia la libreria que envia mails
try {
    let response = await transporter.sendMail(options)

    /*formato RESPONSE:
    
    {
  accepted: [ 'gustavo.mgainformatica@gmail.com' ],
  rejected: [],
  ehlo: [
    'SIZE 35882577',
    '8BITMIME',
    'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
    'ENHANCEDSTATUSCODES',
    'PIPELINING',
    'CHUNKING',
    'SMTPUTF8'
  ],
  envelopeTime: 820,
  messageTime: 729,
  messageSize: 323,
  response: '250 2.0.0 OK  1729560854 d9443c01a7336-20e7eee63a1sm32566985ad.18 - gsmtp',
  envelope: {
    from: 'gustavomari.utn@gmail.com',
    to: [ 'gustavo.mgainformatica@gmail.com' ]
  },
  messageId: '<6a8bf534-328d-686b-d8ba-ed5f14624c1d@gmail.com>'
}*/
    console.log(response)
} catch (error) {
    console.log('error al enviar mail: ',error)
    throw error
}
}
export default sendEmail