(function($) {

  var Poller = function () {
    this.defaults = {
      type: 'veggies',
      limit: 10,
      frequency: 30
    };

    this.items = [
      'Adzuki Beans',
      'Asparagus',
      'Black-eyed Peas',
      'Brussels Sprouts',
      'Carrots',
      'Collard Greens',
      'Parsnips',
      'Rhubarb',
      'Yams',
      'Watercress'
    ];
  };

  Poller.prototype._getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Poller.prototype._getData = function (type) {
    var item, i, len;
    var list = this.items || [];
    var results = [];

    for (i = 0, len = list.length; i < len; i++) {
      item = list[i];

      results.push({
        name: item,
        count: this._getRandomNumber(0, 200000)
      });
    }
    return results;
  };

  Poller.prototype._processData = function (data, limit) {
    return data.slice(0, limit);
  };

  Poller.prototype.poll = function (options, cb) {
    var self = this;
    var config = $.extend({}, this.defaults, options);
    var dfd = $.Deferred();
    var results = function(){
      var payload = self._processData(self._getData(config.type), config.limit);

      cb && cb(payload);
      dfd.resolve(payload);

      return dfd;
    }

    setInterval(function () {
      results();
    }, config.frequency * 1000);

    results();
  };

  if (window.spredfast == null) {
    window.spredfast = {
      Poller: Poller
    };
  }
}(jQuery));