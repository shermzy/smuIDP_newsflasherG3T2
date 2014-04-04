<%-- 
    Document   : prac
    Created on : Apr 4, 2014, 5:01:45 PM
    Author     : Sherman
--%>



<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <title>NewsFlasher | Beta</title>
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/font-awesome/css/font-awesome.min.css"
          rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/custom.css" rel="stylesheet" type="text/css" />
    <!-- END THEME STYLES -->
    <link rel="shortcut icon" href="favicon.ico" />

    <link href='http://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap/css/bootstrap.min.css"
          rel="stylesheet" type="text/css" />
</head><!-- END HEAD -->

<body>
    <div  id="content">



        <div class="sentimentsFilter ">

            <div id="neu" class ="sentimentSel">     Neutral</div>
            <div id="pos" class ="sentimentSel">    Positive</div>  
            <div id="neg" class ="sentimentSel">       Negative</div>

            <div class="newsSource">
                <div class="icon-btn">
                    <i class="fa fa-group"></i>
                    <div>
                        Social Media
                    </div>
                    <span class="badge badge-success" id="socialMediaCount">

                    </span>
                </div>
                <div href="#" class="icon-btn">
                    <i class="fa fa-video-camera"></i>
                    <div>
                        News Agency
                    </div>
                    <span class="badge badge-success" id="newsAgencyCount">

                    </span>
                </div>
                <div href="#" class="icon-btn">
                    <i class="fa fa-globe"></i>
                    <div>
                        Others
                    </div>
                    <span class="badge badge-success" id="othersCount">

                    </span>
                </div>

            </div>   

        </div>
        <div class="newsDetails" id="newsDetails" style="height: 447px; display: block;">


    <div class="newsArticle" style="height: 422px;">
        <div class="foregroundStory" style="background-image: url(http://newsflasher-smuidp21.rhcloud.com/images/articles/articlePicture_05-03-2014_01-44.png); background-color: rgb(68, 68, 68); background-position: 50% 50%; background-repeat: no-repeat no-repeat;"></div>

        <!--Issue-->
        <div class="overlay" style="margin-top: -422px;">
            <div class="col-md-3 hidden-xs">

            </div>

            

            <div class="col-md-offset-1 col-md-4 col-xs-12" id="middleStory">

            <div class="news_caption_title" id="originalStory">Should you buy bitcoin?</div><div class="list-group"><a href="#" class="list-group-item"><p>Bitcoin is the currency of the Internet: a distributed, worldwide, decentralized digital money. Unlike traditional currencies such as dollars, bitcoins are issued and managed without any central authority</p></a> <a href="#" class="list-group-item"><p>
To some, Bitcoin today is considered "better" than other stores of value because of reasons like easy to hide, impossible to steal and not controlled by central authority. </p></a> </div></div>
            <div class="col-md-4">


            </div>
        </div>
    </div>
    <!--End Issue-->
    <!--News slider-->
    <div id="cbp-fwslider" class="cbp-fwslider" style="height: 422px;">

    <ul id="comments" style="width: 320%; transition: -webkit-transform 500ms ease; -webkit-transition: -webkit-transform 500ms ease;"><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/techcrunch.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">TechCrunch</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Since Overstock.com started to accept Bitcoin as a purchase currency, the company has received a good press for its efforts to support the nascent cryptocurrency. Working with Coinbase to process Bitcoin, Overstock.com announced that it crossed the million-dollar sale mark in the currency earlier this month. Bitcoin has settled in the “$20k to $30k” range, and is “gradually increasing from there."</div><div class="storyLink"><a href="http://techcrunch.com/2014/03/12/overstocks-bitcoin-purchases-account-for-less-than-1-of-revenue-but-its-growing/">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/yahoo.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Yahoo</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Goldman Sachs (GS) Group Inc. analysts see Bitcoin as an innovative payments technology while doubting that it will evolve into a true alternative currency. It is only a matter of time before major incumbents develop a digital currency strategy</div><div class="storyLink"><a href="http://www.bloomberg.com/news/2014-03-12/goldman-sachs-sees-bitcoin-s-promise-in-payments-over-currency.html">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="/uploads/newsAgency/CNBC.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">CNBC</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Bitcoin is valuable as a currency because of the economic efficiencies the bitcoin network is already creating as transactions flow over it. As with the Internet, more applications will flourish which will make the bitcoin network, and thus bitcoin as a currency, valuable.</div><div class="storyLink"><a href="http://www.boston.com/blogs/news/opinion/bostoncomment/2014/02/south_stations_bitcoin_atm_sign_of_things_to_come.html">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/venturebeat.png" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Venturebeat</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">While bitcoin represents a significant step in the evolution toward an Internet-based digital money ecosystem, it’s not clear that bitcoin itself will be one of surviving digital currencies. I also don’t see bitcoin, or any other digital currency, gaining full acceptance while escaping government regulation.                 </div><div class="storyLink"><a href="http://blogs.wsj.com/cio/2014/02/12/bitcoin-and-the-internet-of-money/">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/facebook.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Facebook</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">A life on bitcoin.For 100+ days from late July to the end of October, 2013, this intrepid couple place themselves in a social experiment where they are compelled to evangelize the controversial and fascinating bitcoin to survive. It can make life effective.</div><div class="storyLink"><a href="https://www.facebook.com/LifeOnBitcoin">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Michael Snyder: End of our economy #bitcoinsucks</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Parker Boyack You need to go mom and pops, much better chance of getting someone to take it. Big box stores will never allow it</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Leo Wandersleb Well, my first thought was, why advertise the shop if they don't take bitcoin but then, hey why not also name all the places that in July 2013 refused to take the money # bitcoinsneutral</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li></ul><nav><span class="cbp-fwprev">&lt;</span><span class="cbp-fwnext">&gt;</span></nav><div class="cbp-fwdots"><span class="cbp-fwcurrent"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>
    <div class="menu visible-xs" style="width: 1776px;">


        <div class="menuClass" id="filter">  
            <i class="fa fa-filter filter menuIcons"></i><div class="font12 lightGrey"> Filter</div>

        </div>

        <div class="menuClass home" id="backButton"> <i class="fa fa-home menuIcons"></i><div class="font12 lightGrey"> Home</div></div>
    </div>
</div>

            </body>



            <%@include file="footer.jsp" %> 
            <script type="text/javascript" src="js/backfix.min.js"></script>

            <script>



                $storiesPositive = $('li.stories.positiveNews');
                $storiesNegative = $('li.stories.negativeNews');
                $storiesneutral = $('li.stories.neutralNews');
                this.$sentimentsFilter = $('.sentimentsFilter');
                this.$sents = $('.sents');
                this.$slider = $('.cbp-fwslider');
                this.$comments_section = $('#comments');
                this.$posLarge = $('#posL');
                this.$negLarge = $('#negL');
                this.$neuLarge = $('#neuL');
                $isAnimating = false;
                var numSocial = $('.social').length;
                $('#socialCount').text(numSocial);
                var numNews = $('.news').length;
                $('#newsCount').text(numNews);
                var numPos = $('.positiveNews').length;
                $('#posCount').text(numPos);
                var numNeg = $('.negativeNews').length;
                $('#negCount').text(numNeg);

                var numNeu = $('.neutralNews').length;
                $('#neuCount').text(numNeu);




                $('.filter').click(function() {
                    $(this).toggleClass('activeOp');
                })
                $("#newsSourceHead").click(function() {
                    $('.newsSourceOptions').slideToggle();
                    $('.sents').removeClass('selected');
                })
                $("#sentimentsHead").click(function() {
                    $('.sentsOption').slideToggle();
                    $('.nSource').removeClass('selected');
                });
                $('.nSource').click(function() {
                    $(this).toggleClass('selected');
                    filterStoriesBySource();
                })
                //Enable swiping...
                $(".newsDetails").swipe({
                    //Generic swipe handler for all directions
                    swipe: function(event, direction, distance, duration, fingerCount) {
                        if (direction == "down") {
                            $('.newsArticle').css("-webkit-filter", "blur(5px)");
                            $slider.css("-webkit-filter", "blur(5px)");
                            $sentimentsFilter.slideToggle();
                            if ($('#filter').hasClass('active')) {
                                $('#filter').removeClass('active');
                            } else {
                                $('#filter').addClass('active');
                            }

                        }
                    },
                    //Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold: 20
                });
                $(".sentimentsFilter").swipe({
                    //Generic swipe handler for all directions
                    swipe: function(event, direction, distance, duration, fingerCount) {
                        if (direction == "up") {
                            $sentimentsFilter.slideToggle();
                            $('.newsArticle').css("-webkit-filter", "blur(0px)");
                            $slider.css("-webkit-filter", "blur(0px)");
                            if ($('#filter').hasClass('active')) {
                                $('#filter').removeClass('active');
                            } else {
                                $('#filter').addClass('active');
                            }

                        }
                    },
                    //Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold: 20
                });

                $posLarge.click(function() {
                    $(this).toggleClass('selected');
                    filterStoriesBySentiments();
                });
                $negLarge.click(function() {
                    $(this).toggleClass('selected');
                    filterStoriesBySentiments();
                });
                $('#neuL').click(function() {
                    $(this).toggleClass('selected');
                    filterStoriesBySentiments();
                });

                $('#filter').click(function() {
                    $sentimentsFilter.slideToggle();
                    $('#filter').toggleClass('active');
                    if ($('#filter').hasClass('active')) {
                        $('.newsArticle').css("-webkit-filter", "blur(0px)");
                        $slider.css("-webkit-filter", "blur(0px)");
                    } else {
                        $('.newsArticle').css("-webkit-filter", "blur(5px)");
                        $slider.css("-webkit-filter", "blur(5px)");
                    }
                });
                $('.home').click(function() {
                    close();
                });
                $(".icon-btn").swipe({
                    tap: function() {

                        $(this).toggleClass("chosen");
                    },
                    threshold: 10
                });
                $("#pos").swipe({
                    tap: function() {
                        $(this).toggleClass('selected');
                        $storiesNegative.hide("slide", function() {
                            $storiesPositive.show("slide");
                            $comments_section.css("-webkit-transform", "translate3d(0%, 0px, 0px)");

                        });
                    },
                    threshold: 10
                });
                $("#neg").swipe({
                    tap: function() {
                        $(this).toggleClass('selected');
                        $storiesPositive.hide("slide", function() {
                            $storiesNegative.show("slide");
                            $comments_section.css("-webkit-transform", "translate3d(0%, 0px, 0px)");
                        });
                    },
                    threshold: 10
                });
                $("#neu").swipe({
                    tap: function() {
                        $(this).toggleClass('selected');
                        $storiesPositive.hide("slide", function() {
                            $('li.stories.neutralNews').show("slide");
                            $comments_section.css("-webkit-transform", "translate3d(0%, 0px, 0px)");
                        });
                    },
                    threshold: 0
                });

                $(function() {
                    $('#cbp-fwslider').cbpFWSlider();

                });

                function init() {

                    $sentimentsFilter.height($(window).height() / 2 - 35);
                    $sentimentsFilter.width($(window).width() + 15);
                    $('.news_article').click(function() {
                        //$('.newsArticle').append($(this).html());
                        //   $(this).html().appendTo($('.newsArticle'));
                        /*  $('.content').hide(500);
                         $('#gn-menu').hide(500, function() {
                         $('.newsDetails').show(500, function() {*/
                        var count = 0;

                        $.getJSON("getNews", {type: "single", article: $(this).attr('id')}, function(response) {
                            $('.news_name').text(response.name);


                            $('.foregroundStory').css('background', 'url(' + response.relpic + ') #444 no-repeat center');
                            var midStory = '<div class="news_caption_title" id="originalStory">' + response.name + '</div>';
                            var bullets = response.snippet.split(";");
                            midStory += ('<div class="list-group">');

                            for (var i = 0; i < bullets.length - 1; i++) {
                                midStory += ('<a href="#" class="list-group-item"><p>' + bullets[i] + '</p></a> ');
                            }
                            midStory += "</div>";
                            $(midStory).appendTo('#middleStory');

                            $('<ul id="comments"></ul>').appendTo('#cbp-fwslider');

                            $.each(response.stories, function(key, val) {

                                var storyContent = "";
                                if (val.sentiment == 1) {
                                    storyContent += '<li class="stories positiveNews ' + val.type + '">';
                                } else if (val.sentiment == 0) {
                                    storyContent += '<li class="stories negativeNews ' + val.type + '">';
                                } else {
                                    storyContent += '<li class="stories neutralNews ' + val.type + '">';
                                }
                                storyContent += ' <div class="story-header">'
                                storyContent += '<img src="' + val.picLink + '" class="commentpic pull-left" width="70px" alt="">';
                                storyContent += '<div class="story-agency">';
                                storyContent += '<div class="story-metadata-name">' + val.name + '</div>';
                                storyContent += '<div class="story-metadata-date">' + timeAgo(val.time) + '</div>';
                                storyContent += '</div></div>';
                                storyContent += '<div class="story">' + val.story + '</div>';
                                storyContent += '<div class="storyLink"><a href="' + val.link + '">Full Story Here</a></div>  </li> ';
                                $(storyContent).appendTo($('#comments'));
                                $('.stories').css('height', $(window).height() / 2);
                                if ($(window).width() < 422) {
                                    $('.stories').css('min-width', $(window).width() + 15);
                                }
                                count += 1;
                            });

                            $('#cbp-fwslider').cbpFWSlider();

                        });

                        $('.content').hide(500);
                        $('#gn-menu').hide(500, function() {
                            $('.newsDetails').show(500);
                        });
                        $('#newsDetails').css('height', $(window).height() / 2);

                        $('.newsArticle').css('height', $(window).height() / 2 - 25);
                        $('.menu').css("width", $(window).width() + 15);
                        $slider.css('height', $(window).height() / 2 - 25);
                        // $slider.css('padding-top', $(window).height() / 2);
                        $('.overlay').css("margin-top", -$(window).height() / 2 + 25);
                        $('.blackOverlay').css("margin-top", -$(window).height() / 2 + 25);
                        var newsLength = $('.news').length;
                        $('#newsAgencyCount').text(newsLength);
                        var socialLength = $('.social').length;
                        $('#socialMediaCount').text(newsLength);
                        var othersLength = $('.others').length;
                        $('#othersCount').text(newsLength);
                    });


                }
                ;

                function timeAgo(time) {
                    var now = new Date;
                    // var time1 = new Date(time);
                    var nowUtc = new Date(now.getTime());
                    //now=now.getTime()-(now.getTimezoneOffset()*60000);

                    var time1 = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
                            diff = ((nowUtc.getTime() - (time1.getTime())) / 1000),
                            day_diff = Math.floor(diff / 86400);

                    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                        return;

                    return day_diff == 0 && (
                            diff < 60 && "just now" ||
                            diff < 120 && "1 minute ago" ||
                            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
                            diff < 7200 && "1 hour ago" ||
                            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
                            day_diff == 1 && "Yesterday" ||
                            day_diff < 7 && day_diff + " days ago" ||
                            day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
                }

                new gnMenu(document.getElementById('gn-menu'));

                function checkSource() {
                    var selectedSource = new Array();
                    if ($('#news').hasClass('selected')) {
                        selectedSource.push('.news');
                    }
                    if ($('#social').hasClass('selected')) {
                        selectedSource.push('.social');
                    }

                    console.log(selectedSource);
                    return selectedSource;
                }
                function checkSentiments() {
                    var selectedSentiments = new Array();
                    if ($posLarge.hasClass('selected')) {
                        selectedSentiments.push('.positiveNews');
                    }
                    if ($negLarge.hasClass('selected')) {
                        selectedSentiments.push('.negativeNews');
                    }
                    if ($neuLarge.hasClass('selected')) {
                        selectedSentiments.push('.neutralNews');
                    }
                    return selectedSentiments;
                }
                function filterStoriesBySentiments() {


                    if ($posLarge.hasClass('selected')) {
                        $('li.stories.positiveNews.news').show("slide");
                        $('li.stories.positiveNews.social').show("slide");

                    } else {
                        $('li.stories.positiveNews.news').hide("slide");
                        $('li.stories.positiveNews.social').hide("slide");
                    }

                    if ($negLarge.hasClass('selected')) {

                        $('li.stories.negativeNews.news').show("slide");
                        $('li.stories.negativeNews.social').show("slide");

                    } else {

                        $('li.stories.negativeNews.news').hide("slide");
                        $('li.stories.negativeNews.social').hide("slide");
                    }
                    if ($neuLarge.hasClass('selected')) {

                        $('li.stories.neutralNews.news').show("slide");
                        $('li.stories.neutralNews.social').show("slide");

                    } else {

                        $('li.stories.neutralNews.news').hide("slide");
                        $('li.stories.neutralNews.social').hide("slide");
                    }
                }
                function filterStoriesBySource() {
                    if ($('#social').hasClass('selected')) {

                        $('li.stories.negativeNews.social').show("slide");
                        $('li.stories.positiveNews.social').show("slide");
                        $('li.stories.neutralNews.social').show("slide");

                    } else {
                        $('li.stories.negativeNews.social').hide("slide");
                        $('li.stories.positiveNews.social').hide("slide");
                        $('li.stories.neutralNews.social').hide("slide");
                    }


                    if ($('#news').hasClass('selected')) {
                        $('li.stories.negativeNews.news').show("slide");
                        $('li.stories.positiveNews.news').show("slide");
                        $('li.stories.neutraleNews.news').show("slide");
                    } else {
                        $('li.stories.negativeNews.news').hide("slide");
                        $('li.stories.positiveNews.news').hide("slide");
                        $('li.stories.neutralNews.news').hide("slide");
                    }
                }

                ;
            </script>

