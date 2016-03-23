(function(){angular.module("clanrevoltados",["ngSanitize","ui.router","toastr"])}).call(this),function(){angular.module("clanrevoltados").service("webDevTec",function(){"ngInject";var e,a;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}],a=function(){return e},this.getTec=a})}.call(this),function(){angular.module("clanrevoltados").directive("acmeNavbar",function(){var e,a;return e=["moment",function(e){"ngInject";var a;a=this,a.relativeDate=e(a.creationDate).fromNow()}],a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("clanrevoltados").factory("githubContributor",["$log","$http",function(e,a){"ngInject";var i,s,t;return i="https://api.github.com/repos/Swiip/generator-gulp-angular",s=function(s){var t,o;return null==s&&(s=30),t=function(e){return e.data},o=function(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))},a.get(i+"/contributors?per_page="+s).then(t)["catch"](o)},t={apiHost:i,getContributors:s}}])}.call(this),function(){angular.module("clanrevoltados").directive("acmeMalarkey",function(){var e,a,i;return e=["$log","githubContributor",function(e,a){"ngInject";var i,s,t;t=this,i=function(){return s().then(function(){e.info("Activated Contributors View")})},s=function(){return a.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t.contributors=[],i()}],i=function(e,a,i,s){var t,o;o=void 0,t=malarkey(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){t.type(e).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){t.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})},a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("clanrevoltados").controller("MainController",["$scope","$state","toastr",function(e,a,i){}])}.call(this),/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
function(){$(function(){console.log("SCROLL TOP",$(window).scrollTop()),$(window).scroll(function(){var e;e=$(window).scrollTop(),e>=300?$(".navbar-default").addClass("navbar-shrink"):$(".navbar-default").removeClass("navbar-shrink")}),$("a.page-scroll").bind("click",function(e){var a;a=$(this),$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()})}.call(this),function(){angular.module("clanrevoltados").run(["$log",function(e){"ngInject";return e.debug("runBlock end")}])}.call(this),function(){angular.module("clanrevoltados").config(["$stateProvider","$urlRouterProvider",function(e,a){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),a.otherwise("/")}])}.call(this),function(){angular.module("clanrevoltados").constant("moment",moment)}.call(this),function(){angular.module("clanrevoltados").config(["$logProvider","toastrConfig",function(e,a){"ngInject";return e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}])}.call(this),angular.module("clanrevoltados").run(["$templateCache",function(e){e.put("app/main/main.html",'<nav class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header page-scroll"><button type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#page-top" class="navbar-brand page-scroll">Start Bootstrap</a></div><div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li class="hidden"><a href="#page-top"></a></li><li><a href="#services" class="page-scroll">Services</a></li><li><a href="#portfolio" class="page-scroll">Portfolio</a></li><li><a href="#about" class="page-scroll">About</a></li><li><a href="#team" class="page-scroll">Team</a></li><li><a href="#contact" class="page-scroll">Contact</a></li></ul></div></div></nav><header><div class="container"><div class="intro-text"><div class="intro-lead-in">Welcome To Our Studio!</div><div class="intro-heading">It\'s Nice To Meet You</div><a href="#services" class="page-scroll btn btn-xl">Tell Me More</a></div></div></header><section id="services"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Services</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row text-center"><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span><h4 class="service-heading">E-Commerce</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-laptop fa-stack-1x fa-inverse"></i></span><h4 class="service-heading">Responsive Design</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-lock fa-stack-1x fa-inverse"></i></span><h4 class="service-heading">Web Security</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div></div></div></section><section id="portfolio" class="bg-light-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Portfolio</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal1" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/roundicons.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Round Icons</h4><p class="text-muted">Graphic Design</p></div></div><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal2" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/startup-framework.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Startup Framework</h4><p class="text-muted">Website Design</p></div></div><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal3" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/treehouse.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Treehouse</h4><p class="text-muted">Website Design</p></div></div><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal4" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/golden.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Golden</h4><p class="text-muted">Website Design</p></div></div><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal5" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/escape.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Escape</h4><p class="text-muted">Website Design</p></div></div><div class="col-md-4 col-sm-6 portfolio-item"><a href="#portfolioModal6" data-toggle="modal" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="assets/images/portfolio/dreams.png" alt="" class="img-responsive"></a><div class="portfolio-caption"><h4>Dreams</h4><p class="text-muted">Website Design</p></div></div></div></div></section><section id="about"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">About</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-lg-12"><ul class="timeline"><li><div class="timeline-image"><img src="assets/images/about/1.jpg" alt="" class="img-circle img-responsive"></div><div class="timeline-panel"><div class="timeline-heading"><h4>2009-2011</h4><h4 class="subheading">Our Humble Beginnings</h4></div><div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img src="assets/images/about/2.jpg" alt="" class="img-circle img-responsive"></div><div class="timeline-panel"><div class="timeline-heading"><h4>March 2011</h4><h4 class="subheading">An Agency is Born</h4></div><div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li><div class="timeline-image"><img src="assets/images/about/3.jpg" alt="" class="img-circle img-responsive"></div><div class="timeline-panel"><div class="timeline-heading"><h4>December 2012</h4><h4 class="subheading">Transition to Full Service</h4></div><div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img src="assets/images/about/4.jpg" alt="" class="img-circle img-responsive"></div><div class="timeline-panel"><div class="timeline-heading"><h4>July 2014</h4><h4 class="subheading">Phase Two Expansion</h4></div><div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div></li></ul></div></div></div></section><section id="team" class="bg-light-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Our Amazing Team</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-sm-4"><div class="team-member"><img src="assets/images/team/1.jpg" alt="" class="img-responsive img-circle"><h4>Kay Garland</h4><p class="text-muted">Lead Designer</p><ul class="list-inline social-buttons"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-linkedin"></i></a></li></ul></div></div><div class="col-sm-4"><div class="team-member"><img src="assets/images/team/2.jpg" alt="" class="img-responsive img-circle"><h4>Larry Parker</h4><p class="text-muted">Lead Marketer</p><ul class="list-inline social-buttons"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-linkedin"></i></a></li></ul></div></div><div class="col-sm-4"><div class="team-member"><img src="assets/images/team/3.jpg" alt="" class="img-responsive img-circle"><h4>Diana Pertersen</h4><p class="text-muted">Lead Developer</p><ul class="list-inline social-buttons"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div></div></div></section><aside class="clients"><div class="container"><div class="row"><div class="col-md-3 col-sm-6"><a href="#"><img src="assets/images/logos/envato.jpg" alt="" class="img-responsive img-centered"></a></div><div class="col-md-3 col-sm-6"><a href="#"><img src="assets/images/logos/designmodo.jpg" alt="" class="img-responsive img-centered"></a></div><div class="col-md-3 col-sm-6"><a href="#"><img src="assets/images/logos/themeforest.jpg" alt="" class="img-responsive img-centered"></a></div><div class="col-md-3 col-sm-6"><a href="#"><img src="assets/images/logos/creative-market.jpg" alt="" class="img-responsive img-centered"></a></div></div></div></aside><section id="contact"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Contact Us</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-lg-12"><form id="contactForm" name="sentMessage" novalidate=""><div class="row"><div class="col-md-6"><div class="form-group"><input id="name" type="text" placeholder="Your Name *" required="" data-validation-required-message="Please enter your name." class="form-control"><p class="help-block text-danger"></p></div><div class="form-group"><input id="email" type="email" placeholder="Your Email *" required="" data-validation-required-message="Please enter your email address." class="form-control"><p class="help-block text-danger"></p></div><div class="form-group"><input id="phone" type="tel" placeholder="Your Phone *" required="" data-validation-required-message="Please enter your phone number." class="form-control"><p class="help-block text-danger"></p></div></div><div class="col-md-6"><div class="form-group"><textarea id="message" placeholder="Your Message *" required="" data-validation-required-message="Please enter a message." class="form-control"></textarea><p class="help-block text-danger"></p></div></div><div class="clearfix"></div><div class="col-lg-12 text-center"><div id="success"></div><button type="submit" class="btn btn-xl">Send Message</button></div></div></form></div></div></div></section><footer><div class="container"><div class="row"><div class="col-md-4"><span class="copyright">Copyright © Your Website 2014</span></div><div class="col-md-4"><ul class="list-inline social-buttons"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-linkedin"></i></a></li></ul></div><div class="col-md-4"><ul class="list-inline quicklinks"><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div></div></div></footer><div id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/roundicons-free.png" alt="" class="img-responsive img-centered"><p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p><p><strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of<a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set<a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p><ul class="list-inline"><li>Date: July 2014</li><li>Client: Round Icons</li><li>Category: Graphic Design</li></ul><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Heading</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/startup-framework-preview.png" alt="" class="img-responsive img-centered"><p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p><p>You can preview Startup Framework<a href="http://designmodo.com/startup/?u=787">here</a>.</p><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/treehouse-preview.png" alt="" class="img-responsive img-centered"><p>Treehouse is a free PSD web template built by<a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p><p>You can download the PSD template in this portfolio sample item at<a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/golden-preview.png" alt="" class="img-responsive img-centered"><p>Start Bootstrap\'s Agency theme is based on Golden, a free PSD website template built by<a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p><p>You can download the PSD template in this portfolio sample item at<a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/escape-preview.png" alt="" class="img-responsive img-centered"><p>Escape is a free PSD web template built by<a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p><p>You can download the PSD template in this portfolio sample item at<a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div><div id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true" class="portfolio-modal modal fade"><div class="modal-content"><div data-dismiss="modal" class="close-modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><h2>Project Name</h2><p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p><img src="assets/images/portfolio/dreams-preview.png" alt="" class="img-responsive img-centered"><p>Dreams is a free PSD web template built by<a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p><p>You can download the PSD template in this portfolio sample item at<a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p><button type="button" data-dismiss="modal" class="btn btn-primary"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-f2c0533677.js.map