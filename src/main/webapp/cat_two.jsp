

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
            <!-- <div class="save"><button class="btn green" id="save">Save</button></div>-->
        </div>
        <div class="newsDetails" id="newsDetails" style="height: 753px; display: block;">


            <div class="newsArticle" style="height: 351.5px;">
                <div class="foregroundStory" style="background-image: url(http://newsflasher-smuidp21.rhcloud.com/images/articles/articlePicture_10-03-2014_04-32.png); background-color: rgb(68, 68, 68); background-position: 50% 50%; background-repeat: no-repeat no-repeat;"></div>
                <div class="blackOverlay" style="margin-top: -351.5px;"></div>
                <!--Issue-->
                <div class="overlay" style="margin-top: -351.5px;">
                    <div class="col-md-3 hidden-xs">
                        <!-- Add other related news here-->
                     
                    </div>
                    <div class="col-md-offset-1 col-md-4 col-xs-12" id="middleStory">

                        <div class="news_caption_title" id="originalStory">Is controversial silver at Sochi winter Olympics valid? </div><div class="list-group"><a href="#" class="list-group-item"><p>Hot favourite Kim Yuna controversial silver at Sochi Winter Olympics </p></a> <a href="#" class="list-group-item"><p>
                                    Fans and professionals believe that she deserved better and that judges are bias to Russia's athlete</p></a> <a href="#" class="list-group-item"><p>
                                    Russia's Adelina Sotnikova finished with a total score of 224.59, beating Kim's score of 219.11 by 5.48 points after the free skate program</p></a> </div></div>
                    <div class="col-md-4">


                    </div>
                </div>
            </div>
            <!--End Issue-->
            <!--News slider-->
            <div id="cbp-fwslider" class="cbp-fwslider" style="height: 351.5px;">

                <ul id="comments">
                    <!-- STORY 1 -->
                    <li class="stories positiveNews news"> <div class="story-header">
                            <img src="uploads/newsAgency/forbes.jpg" class="commentpic pull-left" width="70px" alt="">
                            <div class="story-agency">
                                <div class="story-metadata-name">News - Forbes</div>
                                <div class="story-metadata-date">3 weeks ago</div>
                            </div>
                        </div>
                        <div class="story">While the protests flowed fast and furiously over her loss to the Russian Adelina Sotnikova, Yu-na showed she was as flawless off ice as on. From her vantage as the silver medalist, she betrayed no sign of chagrin, congratulating the winner, saying she was “glad it’s over” and announcing her retirement from competitive skating. 
                            A majority – 55% —  said her overall performance and gracious response provided the best moments of the Olympics. Nearly half – 46% —- agreed the Games were not a success, as reported by Yonhap, the South Korean news agency, and most of those polled – 88% –  believed the judging was not fair.
                        </div>
                        <div class="storyLink">
                            <!--    <a href="http://www.forbes.com/sites/donaldkirk/2014/02/26/kim-yu-nasilver-at-sochi-wins-gold-in-korean-hearts/ ">Full Story Here</a>-->
                        </div> 
                    </li>
                    <!-- STORY 2 -->
                    <li class="stories positiveNews news">
                        <div class="story-header">
                            <img src="uploads/newsAgency/yahoo.jpg" class="commentpic pull-left" width="70px" alt="">
                            <div class="story-agency">
                                <div class="story-metadata-name">News - Yahoo</div>
                                <div class="story-metadata-date">3 weeks ago</div>                               
                            </div>
                        </div>
                        <div class="story">Some pointed out that she had stepped out after landing a triple combination, and others raised questions about the anonymous judging system.
                            Dick Button, a men's figure skating two-time Olympic gold medalist, said he didn't think Sotnikova was the whole package.
                            It didn't help that one of the judges had been suspended for a year for trying to fix an event at the Winter Olympics 16 years ago. Or that another is married to the head of the Russian figure skating federation.
                        </div>
                        <div class="storyLink">
                            <!--    <a href="http://edition.cnn.com/2014/02/21/sport/kim-sotnikova-skating-controversy/ ">Full Story Here</a>
                       </div>  </li>
                            <!-- STORY 3 -->
                            <li class="stories negativeNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/wanBao.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - 联合晚报</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">Deal with it, South Korea: Adelina Sotnikova beat Yuna Kim fair and square.
                                    SOCHI, Russia – Give it up, South Korea.
                                    The International Olympic Committee said Saturday it received a "protest letter" from South Korea over the scoring in the ladies individual 
                                    figure skating competition. Russia's Adelina Sotnikova beat out South Korea's Yuna Kim for gold on Thursday.
                                    At issue is the scoring in the free skate where Sotnikova received an extremely high mark – 149.95 – more than enough to beat Kim's 144.19.
                                    The score was the best of any skater in a free program this year (Kim's is the second-best) and was more than 18 points higher than Sotnikova's season's best.
                                </div>
                                <div class="storyLink">
                                    <!--    <a href="http://sports.yahoo.com/news/deal-with-it--south-korea--adelina-sotnikova-beat-yuna-kim-fair-and-square-152619212.html ">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- STORY 4 -->
                            <li class="stories positiveNews social">
                                <div class="story-header">
                                    <img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency"><div class="story-metadata-name">Social - Twitter</div>
                                        <div class="story-metadata-date">3 weeks ago</div>                                   
                                    </div>                              
                                </div>
                                <div class="story">John Carruthers ‏@Jonny_BeGood  Feb 21
                                    It does seem that #Kim Yuna was robbed..Her performance was perfection as usual.
                                </div>
                                <div class="storyLink">
                                    <!--   <a href="www.twitter.com">Full Story Here</a>-->
                                </div> 
                            </li>
                            <!-- STORY 5 -->
                            <li class="stories positiveNews social">
                                <div class="story-header">
                                    <img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">Social - Twitter</div>
                                        <div class="story-metadata-date">3 weeks ago</div>

                                    </div>

                                </div>
                                <div class="story">Olivia Won ‏@Olivia_Won  Feb 22
                                    Brennan: Official says judges slanted toward Adelina Sotnikova http://usat.ly/1f3td0H  #Olympics #figureskating #Sochi2014 #Kim #Sotnikova
                                </div>
                                <div class="storyLink">
                                    <!--       <a href="www.twitter.com">Full Story Here</a>-->
                                </div> 
                            </li>
                            <!-- STORY 6 -->
                            <li class="stories negativeNews social"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency"><div class="story-metadata-name">Twitter</div>
                                        <div class="story-metadata-date">3 weeks ago</div>                                    
                                    </div>                                
                                </div>
                                <div class="story">maakopla ‏@maakopla87  Feb 24
                                    #YunaKim’s Silver medal: Koreans lost but are too arrogant to admit anything 
                                </div>
                                <div class="storyLink">
                                    <!--    <a href="www.twitter.com">Full Story Here</a>-->
                                </div>  
                            </li>
                            <!-- STORY 7 -->
                            <li class="stories positiveNews social"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/BrianNicholas.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">Social - BrianNicholas</div>
                                        <div class="story-metadata-date">3 weeks ago</div>                                    
                                    </div>
                                </div>
                                <div class="story">The results show that the judges gave questionably high scores to Sotnikova and questionably low scores to Kim.
                                    Even though I am not a figure skating judge, the scoring does seem odd. Kim Yuna is a proven athlete, and she has broken multiple 
                                    world records throughout her career. She has received consistently high scores, being the first one to break the 140 and 150 mark 
                                    for the free skate and the 200 mark for overall score. She has won the gold medal in the 2010 Vancouver Winter Olympics, smashing
                                    the world record. Kim was the overwhelming favorite, and most were sure of her second gold after her stunning performances in Sochi.
                                    Sotnikova, meanwhile, is an athlete no one expected to be on the podium. She has barely moved to seniors from the juniors. Did Sotnikova 
                                    really out perform Kim, and more so with a large margin of 5.48?
                                </div>
                                <div class="storyLink">
                                    <!--    <a href="www.blogger.com">Full Story Here</a>-->
                                </div> 
                            </li>
                            <!-- Story 8 -->
                            <li class="stories negativeNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/guardian.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - The Guardian</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">As of Friday, more than 1.5 million of them had signed an online petition demanding an inquiry into Kim's shock defeat.
                                    The petition could end up breaking change.org recordsKim had been denied the chance to join Germany's Katarina Witt and Norway's Sonja 
                                    Henie as the only women to win successive Olympic figure skating golds by partisan judging and an "extra judge" in the form of Putin.
                                    Rage among South Korean skating fans may not be enough to force an official inquiry, though. The International Olympic Committee said on
                                    Friday that it would not investigate Sotnikova's win unless a formal complaint was lodged.

                                </div>
                                <div class="storyLink">
                                    <!--    <a href="http://www.theguardian.com/sport/2014/feb/21/sochi-2014-south-korea-russia-figure-skating-gold-sotnikova-kim-yuna ">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 9 -->
                            <li class="stories negativeNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/ESPN.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - ESPN</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">KSU officials said they are gathering necessary documents and materials. Cinquanta did say any protests would have to be backed up by hard evidence.
                                    "Opinion and criticism is one thing," Cinquanta said. "But when there is criticism based on wrongdoing, it needs to be presented with evidence."
                                    "The judges are experts, they take part in seminars, they know a lot and we have given them a video replay system," Cinquanta said. "We are working very hard to give the skaters 
                                    the number of points they deserve but we are not perfect and mistakes are possible, just as with the skaters mistakes are possible because we are human beings. 
                                    But the best human beings we can use are those seated at the events."


                                </div>
                                <div class="storyLink">
                                    <!--   <a href="http://www.theguardian.com/sport/2014/feb/21/sochi-2014-south-korea-russia-figure-skating-gold-sotnikova-kim-yuna ">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 10 -->
                            <li class="stories neutralNews news"> 
                                <div class="story-header">
                                    <img src="http://placehold.it/350&text=No+Image" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - The Wire</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">
                                    Some are claiming that Sotnikova benefitted from Russian judges and a hometown crowd
                                    Alla Shekhovtseva, the wife of Valentin Piseev, the long time president and general director of the Russian Skating Federation was one of the judges.
                                    Sotnikova's scores look like an anomaly compared to her peers, they put Sotnikova's performance up there with some of the very best scores in history.

                                </div>
                                <div class="storyLink">
                                    <!--   <a href="http://www.thewire.com/culture/2014/02/why-people-think-adelina-sotnikovas-figure-skating-gold-medal-was-rigged/358344/">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 12 -->
                            <li class="stories positiveNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/guardian.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - The Guardian</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">
                                    At the end of a flawless performance, it seemed that nothing could come between Yuna Kim and her bid to become only the third woman to win back-to-back 
                                    Olympic gold medals in figure skating. But Kim, the undisputed darling of South Korean sport, and the millions of her compatriots who had stayed up into
                                    to the early hours to watch her decisive long programme at the Sochi Winter Olympics on Thursday, had not reckoned with the sport's opaque and controversial scoring system.


                                </div>
                                <div class="storyLink">
                                    <!--    <a href="http://www.theguardian.com/sport/2014/feb/21/sochi-2014-south-korea-russia-figure-skating-gold-sotnikova-kim-yuna ">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 13 -->
                            <li class="stories positiveNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/forbes.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - Forbes</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">
                                    If there were a gold medal for good sportsmanship, Korean figure skater Kim Yu-na would surely have been the winner at the Sochi Winter Olympics.
                                    While the protests flowed fast and furiously over her loss to the Russian Adelina Sotnikova, Yu-na showed she was as flawless off ice as on. From
                                    her vantage as the silver medalist, she betrayed no sign of chagrin, congratulating the winner, saying she was “glad it’s over” and announcing her 
                                    retirement from competitive skating.

                                </div>
                                <div class="storyLink">
                                    <!--    <a href="http://www.forbes.com/sites/donaldkirk/2014/02/26/kim-yu-nasilver-at-sochi-wins-gold-in-korean-hearts/">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 14 -->
                            <li class="stories negativeNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/reuters.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - Reuters</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">(Reuters) - The International Skating Union (ISU) has defended the under-fire figure skating judging system used at the Sochi Winter Olympics that deemed
                                    Kim Yuna's routine worthy only of a silver medal.

                                </div>
                                <div class="storyLink">
                                    <!--     <a href="http://www.forbes.com/sites/donaldkirk/2014/02/26/kim-yu-nasilver-at-sochi-wins-gold-in-korean-hearts/">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 15 -->
                            <li class="stories neutralNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/br.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - Bleach Report</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">Experts, including figure skaters, admit they can’t explain the marks at all, which leaves little hope for the rest of us. 
                                    A petition that was started on the Change.org website calling for an investigation into the controversy had already registered 1.6 million signatures by
                                    Friday afternoon, one of the biggest petitions the site has ever seen. 

                                </div>
                                <div class="storyLink">
                                    <!--        <a href="http://bleacherreport.com/articles/1969257-olympic-figure-skating-controversy-judging-system-is-most-to-blame-for-uproar">Full Story Here</a>-->
                                </div>
                            </li>
                            <!-- Story 16 -->
                            <li class="stories neutralNews news"> 
                                <div class="story-header">
                                    <img src="uploads/newsAgency/br.jpg" class="commentpic pull-left" width="70px" alt="">
                                    <div class="story-agency">
                                        <div class="story-metadata-name">News - VanityFair.com</div>
                                        <div class="story-metadata-date">3 weeks ago</div>
                                    </div>
                                </div>
                                <div class="story">Some of Adelina’s moves defied “bone logic,” and was a great show.
                                    I didn’t see really any mistakes in her performance, but it was known to the public as “the stumble heard round the world”
                                    Both girls did unbelievable jobs, and are soon to be household names thanks to the controversy.


                                </div>
                                <div class="storyLink">
                                    <!--         <a href="http://bleacherreport.com/articles/1969257-olympic-figure-skating-controversy-judging-system-is-most-to-blame-for-uproar">Full Story Here</a>-->
                                </div>
                            </li>
                </ul>

                <div class="menu visible-xs" style="width: 1600px;">
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

                    $sentimentsFilter.height($(window).height() - 35);
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

