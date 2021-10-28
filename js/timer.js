$(document).ready(function () {
    function CountdownTimer(elm, tl, mes) {
        this.initialize.apply(this, arguments);
    }
    CountdownTimer.prototype = {
        initialize: function (elm, tl, mes) {
            this.elem = document.getElementById(elm);
            this.tl = tl;
            this.mes = mes;
        },
        countDown: function () {
            var today = (new Date()).getTime() + 60 * 1000;
            if ((this.tl - today) <= 0) {
                this.elem.innerHTML = this.mes;
                return;
            }

            var timer = '';
            var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
            var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
            var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
            var me = this;



            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number hour">' + this.addZero(hour) + '</span></span>';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number min">' + this.addZero(min) + '</span></span><span class="number-wrapper"><div class="line"></div><div class="caption"></div><span class="number sec">' + this.addZero(sec) + '</span></span>';
            this.elem.innerHTML = timer;
            tid = setTimeout(function () {
                me.countDown();
            }, 10);
        },
        addZero: function (num) {
            return ('0' + num).slice(-2);
        }
    }

    function CDT() {

        // Set countdown limit
        var t = new Date();
        t.setDate(t.getDate() + 1);
        var tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');


        // You can add time's up message here
        var timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div></span>');
        timer.countDown();
    }

    function CDT3() {

        // Set countdown limit
        var t = new Date();
        t.setDate(t.getDate() + 1);
        var tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');


        // You can add time's up message here
        var timer = new CountdownTimer('CDT3', tl, '<span class="number-wrapper"><div class="line"></div></span>');
        timer.countDown();
    }

    function CDT2() {

     // Set countdown limit
     var tl = new Date();

     // You can add time's up message here
     var timer = new CountdownTimer('CDT2', tl, '<span class="number-wrapper"><div class="line"></div></span>');
     timer.countDown();
     }

    CDT();
    CDT3();
});
