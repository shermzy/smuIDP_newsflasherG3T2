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

        </div>

</body>



<%@include file="footer.jsp" %> 
<script>
    $('.news_article').click(function() {
        alert("hey");
        $('.news').css("display","none");
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
                    content += '<div class="social-tasks">';

                    content += '</div>';
                    content += '</div></div>';
                    if (counter % 3 == 0) {
                        $('<div class="news_article"> ' + content + '</div>').appendTo("#colone");
                        counter += 1;
                    } else if (counter % 3 == 1) {
                        $('<div class="news_article"> ' + content + '</div>').appendTo("#coltwo");
                        counter += 1;
                    } else {
                        $('<div class="news_article"> ' + content + '</div>').appendTo("#colthree");
                        counter += 1;
                    }
                }
            });


        });
    }
    ;



</script>