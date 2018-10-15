'use strict'
module.exports = function(Model, options) {
    Model.observe('after save', function event(ctx, next) { //Observe any insert/update event on Model
        //var instanceOrData = ctx.data ? 'data' : 'instance';
        //console.log(ctx.instance.);
        var app = require('../../server/server');
        var NmessageId = ctx.instance.id; 
        var serviceId = ctx.instance.serviceId; 
        var SubscriptionMessage = app.models.SubscriptionMessage
        var Subscription = app.models.Subscription
        
        Subscription.find({where: {serviceId: serviceId}}, function(err, subscriptions) {
            subscriptions.forEach(subscription => {
                console.log(subscription.id)
                SubscriptionMessage.create({messageId: NmessageId, subscriptionId: subscription.id});
            });
        }); 
    next();
    });
}
