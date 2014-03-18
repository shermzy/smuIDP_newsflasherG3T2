<%@include file="header.jsp" %> 

<body>
    <div class="content" id="content">

        <!-- preferences here -->
        <div class="news">
            <div class="row">
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

    <div class="sentimentsFilter ">

        <div id="neu" class ="sentimentSel">     Neutral</div>
        <div id="pos" class ="sentimentSel"><i class="fa fa-circle green font7"></i>     Positive</div>  
        <div id="neg" class ="sentimentSel"><i class="fa fa-circle red font7"></i>        Negative</div>

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
        <div class="save"><button class="btn dark" id="save">Save</button></div>
    </div>
    <div class="newsDetails" id="newsDetails">


        <div class="newsArticle">
            <div class="foregroundStory"></div>
            <div class="blackOverlay"></div>
            <!--Issue-->
            <div class="overlay">
                <div class="col-md-4">
                    <!-- Add other related news here-->
                </div>
                <div class="col-md-4" id="middleStory">
                    <div class="Social">
                        <div class="summary">
                            <!--insert 3 points here -->
                        </div>
                        <div class="social-icons">
                            <!--         <button id="pos" class ="btn default">Positive</button>
                                     <button id="alltypes" class ="btn default">All</button>
                                     <button id="neg" class ="btn default">Negative</button>
                                     <button id="menu" class ="btn default">Go Down</button>-->
                            <!--      <i class="fa fa-facebook-square socialIcons"></i>
                                  <i class="fa fa-twitter-square socialIcons"></i>
                                  <i class="fa fa-google-plus-square socialIcons"></i>-->
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pull-right btn default" id="close">X</div>

                </div>
            </div>
        </div>
        <!--End Issue-->
        <!--News slider-->
        <div id="cbp-fwslider" class="cbp-fwslider">

        </div>
        <div class="menu visible-xs">
            <div class="menuClass" id="backButton"> <i class="fa fa-long-arrow-left menuIcons"></i><div class="font12 lightGrey"> Back</div></div>

            <div class="menuClass">  
                <i class="fa fa-filter filter menuIcons"></i><div class="font12 lightGrey"> Filter</div>

            </div>


        </div>
    </div>

    <!--End News Slider-->
</div>


</body>



<%@include file="footer.jsp" %> 
<script type="text/javascript" src="js/backfix.min.js"></script>

<script>

    $('#save').click(function() {
        alert("clicked");
        if ($('#pos').hasClass("selected")) {
            $('li.stories.positiveNews').show();
        } else {
            $('li.stories.positiveNews').hide();
        }
        if ($('#neg').hasClass("selected")) {
            $('li.stories.negativeNews').show();
        } else {
            $('li.stories.negativeNews').hide();
        }
        if ($('#neu').hasClass("selected")) {
            $('li.stories.neutralNews').show();
        } else {
            $('li.stories.neutralNews').hide();
        }


    });
    $('.filter').click(function() {
        $('.sentimentsFilter').slideToggle();
    });
    $('#backButton').click(function() {
        close();
    });
    $('#pos').click(function() {
        $(this).toggleClass('selected');
        /*   $('li.stories.negativeNews').hide("slide", function() {
         $('li.stories.positiveNews').show("slide");
         $('#comments').css("-webkit-transform", "translate3d(0%, 0px, 0px)");*/

    });


    $('#neg').click(function() {
        $(this).toggleClass('selected');
        /*   $('li.stories.positiveNews').hide("slide", function() {
         $('li.stories.negativeNews').show("slide");
         $('#comments').css("-webkit-transform", "translate3d(0%, 0px, 0px)");
         });*/

    });
    $('#neu').click(function() {
        $(this).toggleClass('selected');

    });
    bajb_backdetect.OnBack = function()
    {
        close();
    };
    $(window).unload(function() {
        close();
        alert("back");
    });
    $("#close").click(function() {
        close();
    });
    function close() {
        $('#newsDetails').hide(500, function() {
            $('.content').show(500);
            $('#gn-menu').show(500);
        });
        $('.summary').html("");
        $('#comments').html("");


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
        //  $('.stories').css('width', 100/($('#comments').children('li').length + 1) + '%');
        // $('#comments').css('width',(100/3) * ($('#comments').children('li').length + 1) + '%');
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
    function shownews(activeCats) {

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
                    //      content += '</div><div class="news_caption_body">';
                    //         var bullets = val.snippet.split(";");
                    //      content += "<ul>";
                    //       for (var a = 0; a < bullets.length - 1; a++) {
                    //            content += ("<li>" + bullets[a] + "</li>");
                    //       }
                    //       content += "</ul>";
                    content += '</div></div></div>';
                    // content += '<div class="social-info">';
                    // content += '<div class="social-icons likes"><i class="fa fa-thumbs-up"></i></div>';
                    //content += '<div class="social-icons fav"><i class="fa fa-star"></i></div>';
                    //   content += '<div class="social-icons readmore">Read More</div>';
                    //    content += '</div>';
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
        $.getJSON("getNewsAgency", function(response) {
            $.each(response.data, function(key, val) {
                $('#commentagencyname').append('<option value="' + val.name + '" >' + val.name + '</option>');
            });
        });
        $('.sentimentsFilter').height($(window).height() - 35);
        $('.sentimentsFilter').width($(window).width() + 15);
        $('.news_article').click(function() {
            //$('.newsArticle').append($(this).html());
            //   $(this).html().appendTo($('.newsArticle'));

            var count = 0;

            $.getJSON("getNews", {type: "single", article: $(this).attr('id')}, function(response) {
                $('.news_name').text(response.name);


                $('.foregroundStory').css('background', 'url(' + response.relpic + ') black no-repeat center');
                var midStory = '<div class="news_caption_title" id="originalStory">' + response.name + '</div>';
                var bullets = response.snippet.split(";");
                midStory += ('<div class="list-group">');

                for (var i = 0; i < bullets.length - 1; i++) {
                    midStory += ('<a href="#" class="list-group-item"><p>' + bullets[i] + '</p></a> ');
                }
                midStory += "</div>";
                $(midStory).appendTo('.summary');

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
            $('#newsDetails').css('height', $(window).height());

            $('.newsArticle').css('height', $(window).height() / 2 - 25);

            $('.cbp-fwslider').css('height', $(window).height() / 2 - 25);
            // $('.cbp-fwslider').css('padding-top', $(window).height() / 2);
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
</script>

