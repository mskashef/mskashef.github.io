// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cv = {
  summary: "I'm MSK, And I'm a Front End Developer. I'm Flexible against learning new concepts.\n    In 2017, I chose my way, which was being a Front End developer. Then I started my self-learning process. I just played a lot with HTML, CSS and after a year, I started doing my first projects.\n    In July 2019, I started working with React.js. Always I was trying to expand my knowledge and I love to learn new concepts.\n    I also have interests and talents in some fields such as painting, music, working with Electronics, etc.",
  name: 'M.S Kashef',
  contactInfo: [{
    icon: '<i class="bi bi-envelope"></i>',
    title: 'Email',
    value: 'mohammadsadeghmk[at]gmail.com'
  }, {
    icon: '<i class="bi bi-phone"></i>',
    title: 'Phone number',
    value: '+98 901 061 5710'
  }, {
    icon: '<i class="bi bi-geo-alt"></i>',
    title: 'Location',
    value: 'Iran, West Azerbaijan, Urmia'
  }, {
    icon: '<i class="bi bi-instagram"></i>',
    title: 'Instagram',
    value: 'MSK.CODES (Disabled)'
  }, {
    icon: '<i class="bi bi-linkedin"></i>',
    title: 'Linkedin',
    value: 'mskashef'
  }, {
    icon: '<i class="bi bi-github"></i>',
    title: 'GitHub',
    value: 'mskashef'
  }],
  skills: [{
    title: 'Working',
    skills: ['ReactJs', 'JavaScript', 'HTML', 'CSS', 'JQuery', 'TypeScript', 'Webpack', 'NodeJs', 'ExpressJs', 'Java', 'Git']
  }, {
    title: 'Basic',
    skills: ['C', 'PHP', 'JavaFx']
  }, {
    title: 'Softwares',
    skills: ['Adobe XD']
  }, {
    title: 'Soft Skills',
    skills: ['Responsibility', 'Entrepreneurship', 'Emotional Intelligence', 'Decision-making power', 'Teaching', 'Criticism of', 'Creativity', 'Problem-solving skills']
  }],
  education: [{
    title: 'BS, Computer Engineering, Urmia Univercity, Urmia, Iran (en.urmia.ac.ir)',
    date: '2017 - 2021',
    description: 'Faculty of electrical and computer engineering, Urmia University, Urmia, Iran',
    icon: 'assets/img/academic/uu.svg'
  }],
  experiences: {
    industrial: [{
      title: 'React Developer at <a target="_blank" href="https://liboberry.com/">LiboBerry</a>',
      companyName: 'LiboBerry',
      icon: 'assets/img/industrial/liboberry.png',
      date: 'May 2021 - Present',
      description: 'LiboBerry is an AI-Powered scientific writing assistant service.',
      tasks: ["Developed a custom WYSIWYG Editor with special facilities like suggestion support based on the AI model's output.", "Developed a WebApp for user dashboard with the possibility of Project Creation, Edit, Upload the reference articles, ... .", "Developed a WebApp which use can enter data and get the standart HTML/XML output."],
      tags: ['ReactJs', 'React Hooks', 'JS', 'HTML', 'CSS', 'JSX', 'Adobe XD']
    }, {
      title: 'React Developer at <a target="_blank" href="https://www.learnpersianart.com/">Rhythmitica</a>',
      companyName: 'Rhythmitica',
      icon: 'assets/img/industrial/mashgh-eshgh.png',
      date: 'Jun 2020 - Dec 2020',
      description: 'Rhythmitica is an online musical instrument tutoring academy',
      tasks: ["Developed an online shop for music instruments.", "Developed a WebApp for class reservation.", "Developed a PWA for class management.", "Developed a custom calendar component for managing classes.", "Designed a UI for the online shop using.", "Designed a UI for the class reservation website using.", "Designed a UI for the PWA."],
      tags: ['ReactJs', 'React Hooks', 'JS', 'HTML', 'SASS', 'JSX', 'Adobe XD']
    }, {
      title: 'Frontend Developer at <a target="_blank" href="https://ex-changelly.com/">Changelly</a>',
      companyName: 'Changelly',
      icon: 'assets/img/industrial/changelly.png',
      date: 'May 2020 - Jul 2020',
      description: 'Changelly is an online cryptocurrency shop.',
      tasks: ["Developed a HomePage.", "Developed a custom chart library with SVG & JS."],
      tags: ['JS', 'SVG', 'HTML', 'CSS']
    }, {
      title: 'UI Designer at <a target="_blank" href="https://www.farazbal.com/">Farazbal</a>',
      companyName: 'Farazbal',
      icon: 'assets/img/industrial/farazbal.png',
      date: 'May 2019',
      description: 'Farazbal is an online website which introduces the products.',
      tasks: ["Developed some components of the website.", "Designed a UI for the website."],
      tags: ['JS', 'HTML', 'CSS', 'Adobe XD']
    }, {
      title: 'Web Developer and UI Designer at Satell',
      companyName: 'Satell',
      icon: 'assets/img/industrial/satell.png',
      date: 'Jul 2019 - Apr 2020',
      description: 'Satell is an online sales platform for connecting local shops and customers.',
      tasks: ["Developed a landing page.", "Designed a UI for the website.", "Designed Satell's Logo"],
      tags: ['JS', 'HTML', 'CSS', 'Adobe XD', 'JQuery']
    }, {
      title: 'React Developer at 30Bime',
      companyName: '30Bime',
      icon: 'assets/img/industrial/1405.png',
      date: 'July 2019 - May 2020',
      description: '30Bime is an online insurance panel.',
      tasks: ["Designed and Developed an insurance panel with ReactJs.", "Designed and Developed a Login Page with HTML, CSS, JS."],
      tags: ['React', 'Redux', 'JS', 'HTML', 'CSS', 'Adobe XD', 'JQuery']
    }],
    academic: [{
      title: 'Teaching Assistant, Internet Engineering',
      icon: 'assets/img/academic/uu.svg',
      date: 'Fall 2021',
      description: 'Faculty of electrical and computer engineering, Urmia University, Urmia, Iran'
    }, {
      title: 'Teaching Assistant, Java Advanced Programming',
      icon: 'assets/img/academic/uu.svg',
      date: 'Fall 2020',
      description: 'Faculty of electrical and computer engineering, Urmia University, Urmia, Iran'
    }]
  },
  certificates: [{
    title: 'Project-Oriented course In Front-end Web Development',
    date: 'Oct 2020',
    icon: 'assets/img/certificates/frontend.png',
    description: 'Quera College Website',
    link: "Link: <a href=\"https://quera.ir/certificate/wXHShP8t/\">https://quera.ir/certificate/wXHShP8t/</a>"
  }, {
    title: 'Fundamentals of java programing and Algorithmic thinking',
    date: 'Jan 2019',
    icon: 'assets/img/certificates/java.png',
    description: 'Quera College Website',
    link: "Link: <a href=\"https://quera.ir/certificate/XFzqy6tx/\">https://quera.ir/certificate/XFzqy6tx/</a>"
  }, {
    title: 'Attendance 54 hours of Urmia Lake startup weekend',
    date: 'Nov 2018',
    icon: 'assets/img/certificates/startup-weekend.png',
    description: 'Urmia Lake National Festival',
    link: ""
  }],
  languages: [{
    title: 'Azərbaycan dili',
    amount: 100
  }, {
    title: 'Persian',
    amount: 100
  }, {
    title: 'English',
    amount: 50
  }],
  opensourceProjects: [{
    title: 'React Simple Piano',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    icon: 'assets/img/opensource-projects/react-piano.png',
    date: 'Sep 2020',
    description: "This is a simple opensource piano for someone who want's to learn a bit about working with AudioContext in\n      js an also It's a good practice to increase your skills in web development.",
    link: 'Link: <a href="https://github.com/mskashef/react-piano" target="_blank">https://github.com/mskashef/react-piano</a>'
  }, {
    title: 'React Ripple Effect',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    icon: 'assets/img/opensource-projects/react-ripple-effect.svg',
    date: 'Sep 2020',
    description: "In this project I have implemented the Ripple Effect with using no libraries.",
    link: 'Link: <a href="https://github.com/mskashef/react-ripple-effect" target="_blank">https://github.com/mskashef/react-ripple-effect</a>'
  }, {
    title: 'PhotoZone',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    icon: 'assets/img/opensource-projects/photozone.svg',
    date: 'Jul 2020',
    description: "A social media for sharing images (Like Pinterest and Instagram) [university project]",
    link: 'Link: <a href="https://github.com/mskashef/photozone-frontend" target="_blank">https://github.com/mskashef/photozone-frontend</a>'
  }, {
    title: 'PhotoZone',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    icon: 'assets/img/opensource-projects/html5-snake-game.svg',
    date: 'Dec 2019',
    description: "The popular Snake game written with HTML, CSS, JS",
    link: 'Link: <a href="https://github.com/mskashef/HTML-5-Snake-Game" target="_blank">https://github.com/mskashef/HTML-5-Snake-Game</a>'
  }, {
    title: 'HiChat',
    tags: ['React', 'Redux', 'SASS', 'ES6', 'JavaScript', 'HTML5', 'CSS3', 'NodeJs', 'MQTT', 'Adobe XD'],
    icon: 'assets/img/opensource-projects/hichat.svg',
    date: 'Dec 2019',
    description: "A messenger web application",
    link: 'Link: Is being developed... (Screenshot is available in my Sample Works part in this CV.'
  }, {
    title: 'Happy Programmers Day Animation',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    icon: 'assets/img/opensource-projects/happy-programmers-day.png',
    date: 'Sep 2018',
    description: "A beautiful 3D animation using HTML, CSS, JS",
    link: 'Link: <a href="https://github.com/mskashef/HappyProgramersDayAnimation" target="_blank">https://github.com/mskashef/HappyProgramersDayAnimation</a>'
  }],
  sampleworks: [{
    title: 'Photozone',
    src: 'assets/img/sampleworksScreenshots/photozone.png',
    tags: ['JS', 'React', 'Adobe XD', 'SASS', 'HTML', 'JSX', 'NodeJs']
  }, {
    title: 'ITICA PWA',
    src: 'assets/img/sampleworksScreenshots/itica-pwa.png',
    tags: ['JS', 'React', 'CSS', 'HTML', 'Material UI']
  }, {
    title: 'Hooman Khalatbari',
    src: 'assets/img/sampleworksScreenshots/hooman-khalatbari.png',
    tags: ['JS', 'React', 'SASS', 'Adobe XD', 'HTML', 'JSX']
  }, {
    title: 'مشق عشق',
    src: 'assets/img/sampleworksScreenshots/mashgh-eshgh.png',
    tags: ['JS', 'React', 'SASS', 'Adobe XD', 'HTML', 'JSX']
  }, {
    title: 'چنجلی',
    src: 'assets/img/sampleworksScreenshots/changelly.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Adobe XD', 'SVG', 'Ajax', 'PHP']
  }, {
    title: 'Rhythmitica',
    src: 'assets/img/sampleworksScreenshots/rhythmitica.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Adobe XD', 'JSX']
  }, {
    title: 'Happy Programmers day Animation',
    src: 'assets/img/sampleworksScreenshots/hpd.png',
    tags: ['HTML', 'CSS', 'JavaScript']
  }, {
    title: 'HiChat',
    src: 'assets/img/sampleworksScreenshots/hichat.png',
    tags: ['React', 'Adobe XD', 'HTML', 'SASS', 'JSX', 'JavaScript']
  }, {
    title: '30Bime',
    src: 'assets/img/sampleworksScreenshots/30bime.png',
    tags: ['React', 'Adobe XD', 'HTML', 'CSS', 'JavaScript']
  }, {
    title: 'Farazbal',
    src: 'assets/img/sampleworksScreenshots/farazbal.png',
    tags: ['Adobe XD']
  }, {
    title: 'Satell',
    src: 'assets/img/sampleworksScreenshots/satell.png',
    tags: ['HTML', 'CSS', 'JS', 'JQuery', 'Adobe XD', 'Logo Design']
  }, {
    title: 'Ahoura',
    src: 'assets/img/sampleworksScreenshots/ahoura.png',
    tags: ['Adobe XD']
  }]
};

function renderSeparators() {
  _toConsumableArray($('divider')).map(function (divider) {
    return $(divider).replaceWith("<div class=\"sep\">\n      <h4 class=\"sep-title\">".concat($(divider).attr('data-title'), "</h4>\n      <div class=\"sep-line\"></div>\n    </div>"));
  });
}

function getContacts() {
  function getContact(title, value, icon) {
    return "<div class=\"contact\">\n          <!--<img\n            class=\"contact-icon\"\n            src=\"".concat(icon, "\"\n            alt=\"").concat(title, "\"\n          /> -->\n          ").concat(icon, "\n          <span class=\"contact-value\">").concat(value, "</span>\n        </div>");
  }

  return "<h4>Contact Info</h4>" + cv.contactInfo.map(function (_ref) {
    var title = _ref.title,
        value = _ref.value,
        icon = _ref.icon;
    return getContact(title, value, icon);
  }).join('\n');
}

function getSkills() {
  function getSkill(title, skills) {
    return "<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3\">\n          <b>".concat(title, "</b>\n          <ul>\n          ").concat(skills.map(function (skill) {
      return "<li>".concat(skill, "</li>");
    }).join('\n'), "\n          </ul>\n        </div>");
  }

  return cv.skills.map(function (_ref2) {
    var title = _ref2.title,
        skills = _ref2.skills;
    return getSkill(title, skills);
  }).join('\n');
}

function getIndastrials() {
  function getIndustrial(title, companyName, icon, date, description, tasks, tags) {
    return "<div class=\"card\">\n          <img\n            class=\"industrial-card-icon\"\n            src=\"".concat(icon, "\"\n            alt=\"").concat(companyName, "\"\n          />\n          <div>\n            <span class=\"card-title\">").concat(title, "</span>\n            <br />\n            <b>").concat(date, "</b>\n            <div>\n            ").concat(description, "\n            </div>\n            <ul>\n            ").concat(tasks.map(function (task) {
      return "<li>".concat(task, "</li>");
    }).join('\n'), "\n            </ul>\n            ").concat(tags.map(function (tag) {
      return "<span class=\"badge bg-secondary\">".concat(tag, "</span>");
    }).join('\n'), "\n          </div>\n        </div>");
  }

  return "<div class=\"sep\">\n    <h4 class=\"sep-title\">Industrial Experiences</h4>\n    <div class=\"sep-line\"></div>\n  </div>" + cv.experiences.industrial.map(function (_ref3) {
    var title = _ref3.title,
        companyName = _ref3.companyName,
        icon = _ref3.icon,
        date = _ref3.date,
        description = _ref3.description,
        tasks = _ref3.tasks,
        tags = _ref3.tags;
    return getIndustrial(title, companyName, icon, date, description, tasks, tags);
  }).join('\n');
}

function getAcademics() {
  function getAcademic(title, icon, date, description) {
    return "<div class=\"card\">\n        <img\n          class=\"industrial-card-icon\"\n          src=\"".concat(icon, "\"\n          alt=\"Logo\"\n        />\n        <div>\n          <span class=\"card-title\">\n            ").concat(title, "\n          </span>\n          <br />\n          <b>").concat(date, "</b>\n          <div>\n            ").concat(description, "\n          </div>\n        </div>\n      </div>");
  }

  return "<div class=\"sep\">\n    <h4 class=\"sep-title\">Academic Experiences</h4>\n    <div class=\"sep-line\"></div>\n  </div>" + cv.experiences.academic.map(function (_ref4) {
    var title = _ref4.title,
        icon = _ref4.icon,
        date = _ref4.date,
        description = _ref4.description;
    return getAcademic(title, icon, date, description);
  }).join('\n');
}

function getCertificates() {
  function getCertificate(title, icon, date, description, link) {
    return "<div class=\"card\">\n      <img\n        class=\"industrial-card-icon\"\n        src=\"".concat(icon, "\"\n        alt=\"\"\n      />\n      <div>\n        <span class=\"card-title\">\n          ").concat(title, "\n        </span>\n        <br />\n        <b>").concat(date, "</b>\n        <div>").concat(description, "</div>\n        <div>").concat(link, "</div>\n      </div>\n    </div>");
  }

  return cv.certificates.map(function (_ref5) {
    var title = _ref5.title,
        icon = _ref5.icon,
        date = _ref5.date,
        description = _ref5.description,
        link = _ref5.link;
    return getCertificate(title, icon, date, description, link);
  }).join('\n');
}

function getLanguages() {
  function getLanguage(title, amount) {
    return "<div class=\"lang\">\n    ".concat(title, "\n    <div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(amount, "%\" aria-valuenow=\"").concat(amount, "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"background-color: var(--mainColor)\"></div>\n</div>\n  </div>");
  }

  return cv.languages.map(function (_ref6) {
    var title = _ref6.title,
        amount = _ref6.amount;
    return getLanguage(title, amount);
  }).join('\n');
}

function getOpensourceProjects() {
  function getOpensourceProject(title, icon, date, description, tags, link) {
    return "<div class=\"card\">\n            <img\n              class=\"industrial-card-icon\"\n              src=\"".concat(icon, "\"\n              alt=\"\"\n            />\n            <div>\n              <span class=\"card-title\">").concat(title, "</span>\n              <br />\n              <b>").concat(date, "</b>\n              <div>\n              ").concat(description, "\n              </div>\n              <div>").concat(link, "</div>\n              ").concat(tags.map(function (tag) {
      return "<span class=\"badge bg-secondary\">".concat(tag, "</span>");
    }).join('\n'), "\n            </div>\n          </div>");
  }

  return cv.opensourceProjects.map(function (_ref7) {
    var title = _ref7.title,
        icon = _ref7.icon,
        date = _ref7.date,
        description = _ref7.description,
        tags = _ref7.tags,
        link = _ref7.link;
    return getOpensourceProject(title, icon, date, description, tags, link);
  }).join('\n');
}

function getSampleWorks() {
  function getSampleWork(title, src, tags) {
    return "\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4\" style=\"padding: 5px;\">\n    <div class=\"card samplework-card\" style=\"padding: 0;\">\n      <a href=\"".concat(src, "\" target=\"_blank\">\n      <img\n        class=\"samplework-screenshot\"\n        src=\"").concat(src, "\"\n        alt=\"").concat(title, "\"\n      />\n      </a>\n      <br />\n      <div style=\"text-align: center; font-weight: bold; font-size: 18px;\">\n        ").concat(title, "\n      </div>\n      <div style=\"padding: 10px\">\n        ").concat(tags.map(function (tag) {
      return "<span class=\"badge bg-secondary\">".concat(tag, "</span>");
    }).join('\n'), "\n      </div>\n    </div>\n    </div>\n    ");
  }

  return cv.sampleworks.map(function (_ref8) {
    var title = _ref8.title,
        src = _ref8.src,
        tags = _ref8.tags;
    return getSampleWork(title, src, tags);
  }).join('\n');
}

function getEducations() {
  function getEducation(title, icon, date, description) {
    return "<div class=\"card\">\n    <img\n      class=\"industrial-card-icon\"\n      src=\"".concat(icon, "\"\n      alt=\"\"\n    />\n    <div>\n      <span class=\"card-title\">\n       ").concat(title, "\n      </span>\n      <br />\n      <b>").concat(date, "</b>\n      <div>\n        ").concat(description, "\n      </div>\n    </div>\n  </div>");
  }

  return cv.education.map(function (_ref9) {
    var title = _ref9.title,
        icon = _ref9.icon,
        date = _ref9.date,
        description = _ref9.description;
    return getEducation(title, icon, date, description);
  }).join('\n');
}

function renderData() {
  $("#name").html(cv.name);
  $("#summary").html(cv.summary);
  $("#contact-info").html(getContacts());
  $("#skills").html(getSkills());
  $("#industrial-experiences").html(getIndastrials());
  $("#academic-experiences").html(getAcademics());
  $("#certificates").html(getCertificates());
  $("#languages").html(getLanguages());
  $("#opensource-projects").html(getOpensourceProjects());
  $("#sampleworks-screenshots").html(getSampleWorks());
  $("#education").html(getEducations());
}

$(document).ready(function () {
  renderSeparators();
  renderData();
});
},{}],"C:/Users/MSKASHEF/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65507" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/MSKASHEF/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map