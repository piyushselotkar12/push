var push = require('web-push');

let vapidKeys = {
  publicKey: 'BLKfIc0j_Nt1iIIStoiFveagBKPIYl4Wl0PNGGu33sXfrv9dnIgZpqaC3ap4Hp3fa5yqgnCmcPnOPkmF7fR1QOk',
  privateKey: 'Ce9MhqXdShz_smtbHwjGV2G0wbrgRh_HHggM4CLAny8'  
}

push.setVapidDetails('mailto:test@code.co.uk' , vapidKeys.publicKey, vapidKeys.privateKey)
let sub={};
push.sendNotification(sub, 'test message')