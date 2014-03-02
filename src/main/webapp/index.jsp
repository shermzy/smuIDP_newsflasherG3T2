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

    <div class="newsDetails" id="newsDetails">
        <div class="news_sum">
            <div class="col-md-3">
            </div>
            <div class="col-md-6" id="middleSegment">
                <div class="news_name">
                </div>
                <div class="news_pic">

                    <img id="newspicture" class="center pic-overlay img-responsive" width="300px"/>

                </div>
                <div class="news_msg">

                </div>
            </div>
            <div class="col-md-3">
            </div>
        </div>

        <div id="cbp-fwslider" class="cbp-fwslider">
            <ul id="comments">
                <li class="stories" id="commentBox">

                    <div class="col-md-2" id="commentsinput">
                        <div class="pull-left">
                            <img class="fb-pic" width="70px" alt="" id="blah">
                        </div>

                    </div>
                    <div class="col-md-6">

                        News agency: <select class="form-control" id="commentagencyname" name="commentagencyname"></select>
                        News story : <textarea class="form-control" id="commentstory" name ="commentstory"></textarea>
                        News Link : <input type="text" class="form-control" id="commentLink" name ="commentLink">
                        <input type="hidden" id="originalstory" name ="originalstory">
                        <button class="btn btn-default" id="submitComment"> Comment </button>  
                    </div>

                </li>


            </ul>
        </div>
    </div>



</body>



<%@include file="footer.jsp" %> 

<script>
    $('#submitComment').click(function() {
        $.ajax({url: "processStory", type: 'POST',
            data: {commentagencyname: $('#commentagencyname').val(), commentstory: $('#commentstory').val(), commentLink: $('#commentLink').val(),
                originalstory: $('#originalstory').val()}
        });
        var time = new Date();

        var content = "";
        content += '<div class="story-header">';
        content += '<img src="http://www.placehold.it/100x100/EFEFEF/AAAAAA&amp;text=no+image" class="commentpic pull-left" width="100px" alt="" id="blah">';
        content += '<div class="story-agency">'
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
    });
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
                    content += '<div class="news_caption_title">';
                    content += val.name;
                    content += '</div><div class="news_caption_body">';
                    content += val.snippet;
                    content += '</div></div></div>';
                    content += '<div class="social-info">';
                    content += '<div class="social-icons likes"><i class="fa fa-thumbs-up"></i></div>';
                    content += '<div class="social-icons fav"><i class="fa fa-star"></i></div>';
                    //   content += '<div class="social-icons readmore">Read More</div>';
                    content += '</div>';
                    content += '</div>';
                    if (counter % 3 === 0) {
                        $('<div class="news_article" id="' + val.name + '">  ' + content + '</div>').appendTo("#colone");
                        counter += 1;
                    } else if (counter % 3 === 1) {
                        $('<div class="news_article" id="' + val.name + '">' + content + '</div>').appendTo("#coltwo");
                        counter += 1;
                    } else {
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

        $('.news_article').click(function() {

            $('.content').hide("slide");
            $('#gn-menu').hide("slide");
            $('.newsDetails').show();
            $this = $(this).attr('id');
            $('#middleSegment').css('height', $(window).height() / 2 - 15);
            $('.news_sum').css('height', $(window).height() / 2);
            $('.cbp-fwslider').css('height', $(window).height() / 2);
            $('.stories').css('height', $(window).height() / 2);

            $.getJSON("getNews", {type: "single", article: $this}, function(response) {
                $('.news_name').text(response.name);
                $("#originalstory").val(response.name);
                $('#newspicture').attr('src', response.relpic);
                $.each(response.stories, function(key, val) {
                    var storyContent = "";
                    storyContent += '<li class="stories">';
                    storyContent += ' <div class="story-header">'
                    storyContent += '<img src="' + val.picLink + '" class="commentpic pull-left" width=70px" alt="">';
                    storyContent += '<div class="story-agency">';
                    storyContent += '<div class="story-metadata-name">' + val.name + '</div>';
                    storyContent += '<div class="story-metadata-date">' + timeAgo(val.time) + '</div>';
                    storyContent += '</div></div>';
                    storyContent += '<div class="story">' + val.story + '</div>';
                    storyContent += '<div class="storyLink"><a href="' + val.link + '">Full Story Here</a></div>  </li> ';
                    $(storyContent).appendTo($('#comments'));
                });
                $('#cbp-fwslider').cbpFWSlider();
            });

        });
    }
    ;

    function timeAgo(time) {
        var now = new Date;
        var time1 = new Date(time);

        var nowUtc = new Date(now.getTime());
        //now=now.getTime()-(now.getTimezoneOffset()*60000);
        // var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
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
                day_diff == 1 && (diff + "Yesterday") ||
                day_diff < 7 && day_diff + " days ago" ||
                day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
    }


</script>