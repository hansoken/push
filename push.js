var push = require('web-push')


let vapidKeys = {
    publicKey: 'BKdL6y5Ze3o0ivkvrzTYvDaWySDZK469HX94zISy1o3Eu9xQIdsd1aWcrDy2NOkZnXiCQtce2J1l-6YAesrKuGY',
    privateKey: 'o-mLaPkZ7DhfN80Rp0m4vfihdOocGsZaF7VRc9r3qBs'
  }


  push.setVapidDetails('mailto:kenneth@hansoken.com',vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dQOzwMGzo_c:APA91bEWy9cASpM8ExI1P_6A4UKPCk2VyEvMoowzpuEz8uDETJg384ktiRLunOm8NlDj096xYqXDQ-bIoCewaRjpMRtRe-dWSNui007gqIpnB8cD-lgMgmWEhDseH5hL5TDlc-EJMLBD",
    expirationTime:null,
    keys:{p256dh:
      "BBEKyBWDJzA060vYedLyaRk7rNJ-3LuE9JsktoGZzU6rzCYfrpFszLl0M2wdFPzQxAeN37Q6XMQiJFpb5h7TgGQ",
      auth:"xxcCF9I__UHqmfdPAhy6hg"}};

  