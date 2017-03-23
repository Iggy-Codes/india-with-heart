const nodemailer = require('nodemailer')

module.exports = (req, res) => {
  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_GOOGLE_USER,
      pass: process.env.MAIL_GOOGLE_PASS
    }
  })
  const mailOptions = {
    from: process.env.MAIL_GOOGLE_USER,
    to: process.env.MAIL_GOOGLE_USER,
    subject: 'Nuevo contacto web',
    text: `Nuevo contacto\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    html: `<h2>Nuevo contacto WEB</h2>
        <table>
          <tr><th>Nombre:</th><th>Email:</th><th>Teléfono:</th></tr>
          <tr><td><h3>${name}</h3></td><td><h3>${email}</td></h3><td><h3>${phone}</h3></td></tr>
          <tr><td colspan="3"><h3>${message}</td></tr>
        </table>`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    let result = true
    if (error) {
      result = false
      // const formValues = Object.assign(name, email, phone, message)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
    res.render('contact-result', {result})
  })

  // res.send('hola')
}
