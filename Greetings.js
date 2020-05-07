(function (global, $) {
  // It will create the required object

  var Greetings = function (name, mood) {
    return new Greetings.init(name, mood);
  };
  var supportedTimes = ["morning", "noon", "night", "evening"];

  // Greeting messages

  var greetings = {
    morning: "Good Morning",
    noon: "Good AfterNoon",
    night: "Good Evening",
    evening: "Good Evening",
  };

  // Adding methods to the prototype instead of individual objects

  Greetings.prototype = {
    getname: function () {
      return this.name;
    },
    validate: function () {
      if (supportedTimes.indexOf(this.time) === -1) {
        throw "Invalid time";
      }
    },
    greeting: function () {
      return greetings[this.time] + ", " + this.name + "!";
    },
    set_Time: function (newTime) {
      this.time = newTime;
      this.validate();
      return this;
    },
    log: function () {
      if (console) {
        console.log(greetings[this.time] + " " + this.name);
      }
    },

    jquerySelected: function (query) {
      if (!$) {
        throw "jQuery not loaded";
      }
      if (!query) {
        throw "Missing jQuery selector ";
      }
      var message = this.greeting();

      $(query).html(message);
      return this;
    },
  };

  // Defining function constructor

  Greetings.init = function (name, time) {
    var person = this;
    person.name = name || "";
    person.time = time || "";
  };

  // Refering where it should look for prototype of the object

  Greetings.init.prototype = Greetings.prototype;

  // Setting alias and attach Greetings to the global object

  global.Greetings = global.G$ = Greetings;
})(window, jQuery);
