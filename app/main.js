import '../css/fullpage.css';
import '../css/examples.css';
import '../css/common.css';
import '../css/index.css';
import '../css/index.home.css';
import '../css/index.video.css';
import '../css/index.feature.css';
import '../css/index.chat.css';
import '../vendor/modal/component.css';

import jQuery from 'jquery';
import '../js/jquery.preload';
import 'fullpage.js';
import '../vendor/modal/classie';
import '../vendor/modal/modalEffects';

var $ = jQuery;
var img = ['../img/loading.png', '../img/nav-menu.jpg'];
$.preload(img, {
  minTimer: 500,
  // 加载完所有的图片执行的方法
  end: function() {
    $('#loading').toggleClass('hidden');
    $(document).ready(function() {
      var imgs = ['../img/bj-1/bj-1.jpg', '../img/bj-1/bj-1-1.png', '../img/bj-1/lijigoumai.png', '../img/bj-2/Bj-1.png', '../img/bj-2/Bj-2.png', '../img/bj-3/bj-3.jpg', '../img/bj-3/bj-3-1.png', '../img/bj-3/bj-3-2.png', '../img/bj-3/bj-3-3.png', '../img/bj-3/bj-3-4.png', '../img/bj-3/bj-3-5.png', '../img/bj-3/bj-3-6.png', '../img/bj-3/bj-3-7.png', '../img/bj-4/bj-4.jpg', '../img/bj-5/bj-5-1.png', '../img/bj-5/xiaobu-1.png', '../img/bj-5/bj-5-2.png', '../img/bj-6/bj-6.jpg', '../img/bj-7/bj-7.jpg', '../img/bj-7/bj-7-1.png', '../img/bj-7/bj-7-2.png', '../img/bj-7/bj-7-3.png', '../img/bj-7/bj-7-4.png', '../img/bj-8/bj-8-1.png', '../img/bj-8/bj-8-2.png', '../img/bj-9/bj-9-1.png', '../img/bj-10/bj-10-1.png', '../img/bj-11/bj-11.jpg', '../img/bj-12/bj-12.jpg', '../img/bj-12/bj-12-1.png', '../img/bj-12/bj-12-2.png', '../img/bj-12/bj-12-4.png', '../img/bj-13/bj-14.jpg', '../img/bj-13/bj-14-1.png', '../img/bj-13/bj-14-2.png', '../img/bj-13/bj-14-3.png', '../img/bj-13/bj-14-4.png', '../img/bj-13/bj-14-5.png', '../img/bj-13/bj-14-2.png', '../img/bj-14/bj-15-1.png', '../img/bj-14/bj-15-2.png', '../img/bj-14/bj-15-4.png', '../img/bj-14/bj-15-5_02.png', '../img/bj-14/bj-15-6.png', '../img/bj-14/bj-15-7.png', '../img/video.jpg'

      ];
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('weixinjsbridgeready', function onbridgeready() {
            weixinjsbridge.call('hidetoolbar');
            weixinjsbridge.call('hideoptionmenu');
          });
        }
      }


      $('.menu').click(function(e) {
        var el = $(e.target);
        $('.nav-menu').toggleClass('hidden');
        $('.menu').toggleClass('show');
      });
      $('.nav-menu>li>a').click(function(e) {
        // $.fn.fullpage.moveTo(e.currentTarget.attributes[0].nodeValue)
        setTimeout(function() {
            $('.nav-menu').toggleClass('hidden');
            $('.menu').toggleClass('show');
            $.fn.fullpage.reBuild();
          }, 300)
          // window.location.reload();
      })
      $.preload(imgs, {
        minTimer: 2000,

        // 加载完所有的图片执行的方法
        end: function() {
          $('#loading').toggleClass('hidden');
          $('#myContainer').toggleClass('hidden');
          $('#myContainer').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            // continuousHorizontal: true,
            // continuousHorizontalKey: "dG1hbGwuY29tX0diQ1kyOXVkR2x1ZFc5MWMwaHZjbWw2YjI1MFlXdz1ZeHQ=",
            slidesNavigation: true,
            anchors: ["home", "video", "production", "feature1", "feature2", "feature3", "feature4", "feature5", "feature6", "feature7", "params1", "params2", "download", "service", "about"],
            // loopHorizontal: false,
            recordHistory: false,
            controlArrows: false,
            navigation: false,
            navigationPosition: 'right',
            scrollOverflow: false,
            scrollingSpeed: 800,
            fitToSectionDelay: 800,
            animateAnchor: false,
            css3: true
          });
        }
      });

      //  有声绘本
      var chat_list = $("#chat-list")
      var ul = chat_list.find("ul");
      var ul2 = $("<ul />");
      var lis = chat_list.find("li");
      var anObj = {
        delay: 1000,
        pageDelay: 1000,
        duration: 8000
      };
      var timeTotal = lis.length * anObj.delay;

      lis.each(function(i) {
        var li = $(this);

        li.attr(
          "style",
          "-webkit-animation-delay:" + (anObj.delay * i) + "ms;" +
          "animation-delay:" + (anObj.delay * i) + "ms;"
        )
      });
      ul2.html(ul.html()).appendTo(chat_list);

      var playChatList = function() {
        ul.addClass('doAnimate');

        setTimeout(function() {
          ul2.removeClass('doAnimate');
        }, anObj.duration - anObj.delay)

        setTimeout(function() {
          ul2.addClass('doAnimate');

          setTimeout(function() {
            ul.removeClass('doAnimate');
          }, anObj.duration - anObj.delay)
        }, timeTotal);
      }

      setTimeout(function() {
        playChatList();

        setInterval(function() {
          playChatList();
        }, timeTotal * 2)
      }, anObj.pageDelay);


      // ===== 介绍视频 =====
      $('#video-source')[0].src = '../img/video.mp4';
      $('.section-video .video-play').click(function(e) {
        /* var bgVideo = $('.section-video .fullscreen-bg video')[0];
        bgVideo.pause(); */
        var video = $('#modal-video video')[0];

        if (!video.paused) return
        video.play();
      });

      var timer;
      $(window).on('resize', function() {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        timer = setTimeout(function() {
          var $modal = $('#modal-video');
          var video = $modal.find('video')[0];

          if ($modal.is(".md-show") && video.paused) {
            video.play();
          }
        }, 500)
      });
    });

  }
});