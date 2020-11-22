const { Mailer } = require('nodemailer-react');

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/sendMail', (req, res) => {
  const sendEmail = () => {
    const mailerConfig = {
      defaults: {
        from: {
          name: 'Pete Marsh-Hunn',
          address: 'peteslanguageservices@gmx.net',
        },
      },
      transport: {
        host: 'mail.gmx.com',
        port: 587,
        tls: {
            ciphers:'SSLv3',
            rejectUnauthorized: false
        },
        debug:true,
        auth: {
            user: 'peteslanguageservices@gmx.net',
            pass: 'athlestan'
        }
      },
    }

    const emailsList = {
      pass: {
        subject: 'Hello World!',
        body: (
          <div>
            <p>Your password is:</p>
            <p>{password}</p>
          </div>
        ),
      },
    }

    const mailer = Mailer(mailerConfig, emailsList)

    mailer.send('pass', {}, {
      to: 'danji_ma90@hotmail.com',
    })
  }
});
