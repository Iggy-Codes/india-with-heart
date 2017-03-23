// const path = require('path')
// const Trip = require(path.join(__base, 'models/Trip')) // eslint-disable-line no-undef
// const Destination = require(path.join(__base, 'models/Destination')) // eslint-disable-line no-undef
// const marked = require('marked')
const nodemailer = require('nodemailer')

module.exports = (req, res) => {
  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'indiaconcorazaon@gmail.com',
      pass: process.env.MAIL_GOOGLE
    }
  })
  console.log('TRANSPORTER')
  console.log(transporter)
// setup email data with unicode symbols
  const mailOptions = {
    // from: `"${name}" <${email}>`,
    from: '"Web" <indiaconcorazaon@gmail.com>',
    to: '"Web" <indiaconcorazaon@gmail.com>',
    subject: 'Nuevo contacto web',
    html: `<h1>Nuevo contacto</h1>
        <ul>
          <li>Nombre: ${name}</li>
          <li>Email: ${email}</li>
          <li>Teléfono: ${phone}</li>
          <li>Mensaje: ${message}</li>
        </ul>`
  }
  console.log(mailOptions)
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    // console.log('Message %s sent: %s', info.messageId, info.response)
    res.json(info)
  })

  res.send('hola')
}
