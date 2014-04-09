<%@include file="header.jsp" %> 

<body>
    <div class="content" id="content">

        <!-- preferences here -->
        <div class="news"> <div class="center">


                <div class="category"> 

                    <div class="col-md-12">

                        <label class="btn news-sel All" id="All">
                            All </label>
                        <label class="btn news-sel Hot" id="Hot">
                            Hot News </label>
                        <label class="btn news-sel Pol" id="Pol">
                            Politics </label>
                        <label class="btn news-sel Entertainment" id="Entertainment">
                            Entertainment </label>
                        <label class="btn news-sel Tech" id="Tech">

                            Technology </label>
                        <label class="btn news-sel Biz" id="Biz">
                            Business</label>
                        <label class="btn news-sel Sports" id="Sports">
                            Sports</label>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 col-xs-12" id="colone"></div>
                <div class="col-md-4 col-xs-12" id="coltwo"></div>
                <div class="col-md-4 col-xs-12" id="colthree"></div>

            </div>
        </div>
    </div>

</div>
<div class="newsDetails" id="newsDetails">


    <div class="newsArticle">
        <div class="foregroundStory"></div>

        <!--Issue-->
        <div class="overlay">
            <div class="col-md-3 col-sm-3 hidden-xs">
                <ul class="bmenu">
                    <li class="home"><div><i class="fa fa-home"></i>Home</div></li>
                    <div id="sentiments">            
                        <li>
                            <div class='filter' id="sentimentsHead">
                                <i class="fa fa-thumbs-up"></i>Sentiments
                            </div>
                        </li>
                        <div class="sentsOption">
                            <div class="sents" id="neuL">Neutral
                                <span class="white pull-right" id="neuCount"></span></div>
                            <div class="sents" id="posL">Positive
                                <span class="white pull-right" id="posCount"></span></div>
                            <div class="sents" id="negL">Negative
                                <span class="white pull-right" id="negCount"></span></div>
                        </div>
                    </div>

                    <div id="newsSource"> 
                        <li>
                            <div class='filter' id="newsSourceHead">
                                <i class="fa fa-flash"></i>News Source
                            </div>
                        </li>
                        <div class="newsSourceOptions">
                            <div class="nSource" id="social">Social media
                                <span class="white pull-right" id="socialCount"></span></div>
                            <div class="nSource" id="news">News Agency
                                <span class="white pull-right" id="newsCount"></span>
                            </div>                                   
                        </div>
                    </div>
                </ul>
            </div>



            <div class="col-md-offset-1 col-md-4 col-xs-12" id="middleStory">

            </div>
            <div class="col-md-4">


            </div>
        </div>
    </div>
    <!--End Issue-->
    <!--News slider-->
    <div id="cbp-fwslider" class="cbp-fwslider">

    </div>
    <div class="menu visible-xs">


        <div class="menuClass" id="filter">  
            <i class="fa fa-filter filter menuIcons"></i><div class="font12 lightGrey"> Filter</div>

        </div>

        <div class="menuClass home" id="backButton"> <i class="fa fa-home menuIcons"></i><div class="font12 lightGrey"> Home</div></div>
    </div>
</div>

<!--End News Slider-->
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel"></h4>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

            </div>
        </div>
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

    $('#search').keydown(function(e) {
        if (e.keyCode == 13) {
            searchInit();
        }
    });
    $('#go').click(function() {

        searchInit();

    });

    function searchInit() {
        $('#colone').html("");
        $('#coltwo').html("");
        $('#colthree').html("");
        $.getJSON("getNews", {type: "search", article: $('#search').val()}, function(response) {
            console.log(response.data);
            var counter = 0;

            $.each(response.data, function(key, val) {

                var content = "";

                content += '<div class="news_category">';

                var categories = val.category.split(";");
                for (var i = 0; i < categories.length - 1; i++) {
                    content += '<div class="news-btn ' + categories[i] + '">' + categories[i] + '</div>';
                }

                content += '</div>';
                content += '<div class="news_body">';
                content += '<div class="news_img">';
                content += '<img class="center pic-overlay img-responsive" src="' + val.relpic + '" />';
                content += '<div class="news_caption">';
                content += '<div class="news_caption_title" id="' + val.name + '">';
                content += val.name;
                content += '</div></div></div>';
                content += '</div>';
                if (counter % 3 === 0) {
                    $('<div class="news_article" id="' + val.name + '">  ' + content + '</div>').appendTo("#colone");
                    counter += 1;
                } else if (counter % 3 === 1) {
                    $('<div class="news_article" id="' + val.name + '">' + content + '</div>').appendTo("#coltwo");
                    counter += 1;
                } else if (counter % 3 === 2) {
                    $('<div class="news_article" id="' + val.name + '"> ' + content + '</div>').appendTo("#colthree");
                    counter += 1;
                }

            });
            init();
        })
    }
    ;
    $("#newsSourceHead").click(function() {
        $('.newsSourceOptions').slideToggle();
        $('.sents').removeClass('selected');
    })
    $("#sentimentsHead").click(function() {
        $('.sentsOption').slideToggle();
        $('.nSource').removeClass('selected');
    });
    $('.sents').click(function() {
        $('.nSource').removeClass('selected');
    });
    $('.nSource').click(function() {
        $('.sents').removeClass('selected');
        $(this).toggleClass('selected');
        filterStoriesBySource();
        checkAll();
    });
    function storyInit() {
        $('li.stories').click(function() {
            $('#myModal').modal('show');
            $('#myModalLabel').html($(this).find('.story-metadata-name').text());
            $('.modal-body').text($(this).find('.story').html());
            $('<br/><br/><b>This news snippet is to illustrate the functionality of the actual news source showing on clicking of a particular story.</b>').appendTo($('.modal-body'));
        })
    }

    function checkAll() {
        if ($('.sents.selected').length == 0 && $('.nSource.selected').length == 0) {

            $('li.stories').show("slide");
        }
    }
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
    $('.nSource').click(function() {
        $(this).toggleClass('selected');
        filterStories();
    })
    $posLarge.click(function() {
        $(this).toggleClass('selected');
        filterStoriesBySentiments();
        checkAll();
    });
    $negLarge.click(function() {

        $(this).toggleClass('selected');
        filterStoriesBySentiments();
        checkAll();
    });
    $('#neuL').click(function() {

        $(this).toggleClass('selected');
        filterStoriesBySentiments();
        checkAll();
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




    bajb_backdetect.OnBack = function()
    {
        close();
    };
    $(window).unload(function() {
        close();

    });
    $("#close").click(function() {
        close();
    });
    function close() {
        $('#newsDetails').hide(500, function() {
            $('.content').show(500);
            $('#gn-menu').show(500);
        });
        $('#middleStory').html("");
        $comments_section.html("");


    }
    $('#submitComment').click(function() {
        var now = new Date().toString();
        var gmt = now.indexOf("G");
        now = now.substring(0, gmt);

        $.ajax({url: "processStory", type: 'POST',
            data: {commentagencyname: $('#commentagencyname').val(), commentstory: $('#commentstory').val(), commentLink: $('#commentLink').val(),
                originalstory: $('#originalStory').text(), time: now}
        });

        $.ajax({url: "getNewsAgency", type: 'GET',
            data: {type: "single", name: $('#commentagencyname').val()},
            success: function(response) {

                insertStory(response);
            }
        });
    });
    function insertStory(pictureRelLink) {
        var time = new Date().toString();
        var gmt = time.indexOf("G");

        time = time.substring(0, gmt);

        var content = "";
        content += '<div class="story-header">';
        content += ('<img src="' + pictureRelLink + '" class="commentpic pull-left" width="70px" alt="" id="blah" >');
        content += '<div class="story-agency">';
        content += '<div class="story-metadata-name">' + $('#commentagencyname').val() + '</div>';
        content += '<div class="story-metadata-date">' + timeAgo(time) + '</div>';
        content += '</div>';
        content += '</div>';
        content += '<div class="story">' + $('#commentstory').val() + '</div>';
        content += '<div class="storyLink"> <a href="' + $('#commentLink').val() + '">Full Story Here</a></div> ';


        $('<li class="stories">' + content + '</li>').insertAfter($('#commentBox'));
        $('#cbp-fwslider').cbpFWSlider();
        storyInit();
    }
    ;
    $(function() {
        $('#cbp-fwslider').cbpFWSlider();

    });
    $('.news-sel').click(function() {
        var activeCats = new Array;

        $('.news_article').hide();
        //toggle the class active on the category clicked
        if ($(this).hasClass('active')) {
            $('#' + $(this).attr("id")).removeClass('active');
        } else {
            $('#' + $(this).attr("id")).addClass('active');

        }
        //if it is not all, get all buttons with an active class an add to active cats
        if ($(this).attr("id") !== "All") {
            $("#All").removeClass('active');
            $(".active").each(function() {
                // activeCats += ($(this).attr("id") + ";");
                activeCats.push($(this).attr("id"));
            });

        } else {
            //else remove all other classes and only leave all active
            activeCats = "All";
            $(".active").each(function() {
                $(this).removeClass('active');
            });
            $("#All").addClass('active');
        }


        shownews(activeCats);

    });
    $(window).load(function() {
        shownews("All");
        $("#All").addClass('active');

    });
    function shownews(activeCats, type) {

        $.getJSON("getNews", function(response) {
            var counter = 0;
            var categories = $(this).attr("id");
            $.each(response.data, function(key, val) {
                var chosen = false;
                var categories = val.category.split(";");
                for (var j = 0; j < categories.length; j++) {
                    var articleCat = categories[j]
                    for (var i = 0; i < activeCats.length; i++) {
                        var chosenCat = activeCats[i];
                        if (chosenCat === articleCat) {
                            chosen = true;
                            break;
                        }

                    }
                }
                if (chosen || activeCats == "All") {
                    var content = "";

                    content += '<div class="news_category">';

                    var categories = val.category.split(";");
                    for (var i = 0; i < categories.length - 1; i++) {
                        content += '<div class="news-btn ' + categories[i] + '">' + categories[i] + '</div>';
                    }

                    content += '</div>';
                    content += '<div class="news_body">';
                    content += '<div class="news_img">';
                    content += '<img class="center pic-overlay img-responsive" src="' + val.relpic + '" />';
                    content += '<div class="news_caption">';
                    content += '<div class="news_caption_title" id="' + val.name + '">';
                    content += val.name;
                    content += '</div></div></div>';
                    content += '</div>';
                    if (counter % 3 === 0) {
                        $('<div class="news_article" id="' + val.name + '">  ' + content + '</div>').appendTo("#colone");
                        counter += 1;
                    } else if (counter % 3 === 1) {
                        $('<div class="news_article" id="' + val.name + '">' + content + '</div>').appendTo("#coltwo");
                        counter += 1;
                    } else if (counter % 3 === 2) {
                        $('<div class="news_article" id="' + val.name + '"> ' + content + '</div>').appendTo("#colthree");
                        counter += 1;
                    }
                }
            });
            init();

        });
    }
    ;

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
                storyInit();
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
        if ($('#others').hasClass('selected')) {
            selectedSource.push('.others');
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

