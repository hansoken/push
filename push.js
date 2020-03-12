var push = require('web-push')


let vapidKeys = {
    publicKey: 'BKdL6y5Ze3o0ivkvrzTYvDaWySDZK469HX94zISy1o3Eu9xQIdsd1aWcrDy2NOkZnXiCQtce2J1l-6YAesrKuGY',
    privateKey: 'o-mLaPkZ7DhfN80Rp0m4vfihdOocGsZaF7VRc9r3qBs'
  }


  push.setVapidDetails('mailto:kenneth@hansoken.com',vapidKeys.publicKey, vapidkeys.privateKey)


  let sub = {};

  