(function (window) {
    'use strict'
    var App = window.App || {};

    function Payment(paymentId) {
        console.log('In payment constructor');
        this.paymentId = paymentId;
    }

    Payment.prototype.createPayment = function(payment) {
        var modal = new Modal(payment);
        modal.$element.modal('show');
    }

    function Modal(payment) {
        var $div = $('<div></div>', {
            id: 'submit-msg',
            'class': 'modal'
        });

        var $p = $('<p>Thank you for your payment, ' + payment.title + ' ' + payment.username + '</p>');
        $div.append($p);
        this.$element = $div;
    }

    App.Payment = Payment;
    window.App = App;
})(window);