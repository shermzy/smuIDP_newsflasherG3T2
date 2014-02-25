<%@include file="header.jsp" %> 

<body>
    <div class="content">

        <!-- preferences here -->
        <div class="news">
            <div class="row">
                <div class="category"> 
                    <div class="col-md-12">

                        <label class="btn news-sel All" id="All">
                            All </label>
                        <label class="btn news-sel Pol" id="Pol">
                            Politics </label>
                        <label class="btn news-sel Entertainment" id="Entertainment">
                            Entertainment </label>
                        <label class="btn news-sel Tech" id="Tech">
                            Technology </label>
                        <label class="btn news-sel Biz" id="Biz">
                            Business</label>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" id="colone"></div>
                <div class="col-md-4" id="coltwo"></div>
                <div class="col-md-4" id="colthree"></div>
            </div>
        </div>

        <div class="newsDetails">
            <div class="news_sum">
                <div class="news_name">

                </div>
                <div class="news_pic">

                </div>
                <div class="news_msg">

                </div>
            </div>


            <div id="cbp-fwslider" class="cbp-fwslider">
                <ul id="comments">
                    <li><a href="#"><img src="images/articles/little_india.png" alt="img01"/></a></li>
                    <li><a href="#"><img src="images/articles/swiss-immigration.jpg" alt="img02"/></a></li>
                    <li><a href="#"><img src="images/articles/wsx.png" alt="img03"/></a></li>
                    <li><a href="#"><img src="images/articles/little_india.png" alt="img04"/></a></li>
                    <li>dfabdidqil danwdihndn  asdknladniasn</li>
                </ul>
            </div>
        </div>
    </div>
</div>

</body>



<%@include file="footer.jsp" %> 

<script>

    $(function() {
       $('#cbp-fwslider').cbpFWSlider();

    });
    $('.news-sel').click(function() {
        var activeCats = "";

        $('.news_article').hide();
        if ($(this).hasClass('active')) {
            $('#' + $(this).attr("id")).removeClass('active');
        } else {
            $('#' + $(this).attr("id")).addClass('active');

        }

        if ($(this).attr("id") !== "All") {
            $("#All").removeClass('active');
            $(".active").each(function() {
                activeCats += ($(this).attr("id") + ";");
            });

        } else {

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
                if (val.category == activeCats || activeCats == "All") {
                    var content = "";
                    var cats = "";
                    content += '<div class="news_category">';

                    var categories = val.category.split(";");
                    for (var i = 0; i < categories.length; i++) {

                        content += '<div class="news-btn ' + categories[i] + '">' + categories[i] + '</div>';
                        cats += (categories[i] + " ");
                    }

                    content += '</div>';
                    content += '<div class="news_body">';
                    content += '<div class="news_img">';
                    content += '<img class="center img-responsive" src="' + val.relpic + '" />';
                    content += '<div class="news_caption">';
                    content += '<div class="news_caption_title">';
                    content += val.name;
                    content += '</div><div class="news_caption_body">';
                    content += val.snippet;
                    content += '</div></div>';
                    content += '<div class="social-info">';
                    content += '<div class="social-icons likes"><i class="fa fa-thumbs-up"></i></div>';
                    content += '<div class="social-icons fav"><i class="fa fa-star"></i></div>';
                    //   content += '<div class="social-icons readmore">Read More</div>';
                    content += '</div>';
                    content += '</div></div>';
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

        $('.news_article').click(function() {

            $('.news').hide("slide");
            $('.newsDetails').show();
            $this = $('.news_article').attr('id');
            $('.news_sum').css('height', $( window ).height()/2);
            $.getJSON("getNews", {type: "single", article: $this}, function(response) {
                $('.news_name').text(response.name);
            });
        });
    }
    ;



</script>