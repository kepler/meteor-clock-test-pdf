Meteor.setInterval(function () {
    Session.set('time', new Date());
}, 1000);

Template.body.helpers({

    hours: _.range(0, 12),

    degrees: function () {
        return 30 * this;
    },

    handData: function () {
        var time = Session.get('time') || new Date();
        return {
            hourDegrees: time.getHours() * 30,
            minuteDegrees: time.getMinutes() * 6,
            secondDegrees: time.getSeconds() * 6
        };
    },

    radial: function (angleDegrees,
                      startFraction,
                      endFraction) {
        var r = 100;
        var radians = (angleDegrees - 90) / 180 * Math.PI;

        return {
            x1: r * startFraction * Math.cos(radians),
            y1: r * startFraction * Math.sin(radians),
            x2: r * endFraction * Math.cos(radians),
            y2: r * endFraction * Math.sin(radians)
        };
    }
});

Template.body.events({
    'click #pdf_button': function () {
        var html = '<h1>My cool html</h1>';
        console.log(html);
        Meteor.pdf.save(html, 'busca.pdf');
    }
});