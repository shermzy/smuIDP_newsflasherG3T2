<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
</head>

<body>
    <div id="intro">
        <div class="center">
            <h1> NEWSFLASHER Web Experiment</h1> </div>
        <ul>
            <li>We would like to thank you for your participation in this web experiment. The entire web experiment will take no longer than 10 minutes.</li>
            <li>Please do note that this experiment is solely testing on the user interface of the application. The results of the experiment do not serve to
                evaluate participant's proficiencies in any aspect.</li>
            <li> Please key in your name before starting the experiment.</li>
            <p style='margin-top:25px'>Name: <input type='text' id='name'/></p>
            <button id='proceed' class='btn green'>Proceed</button>
        </ul>


    </div>
    <div id='test'>
        <table id="table-wrapper">
            <tr>
                <td>
                    <div id="iframe-container">
                        <iframe  width="1027" height="770" frameborder="0"></iframe>
                    </div>
                </td>

            </tr>
        </table>

        <div class="info">
            <div class='instructions'>
                <p>Please review the application on the left and answer the following questions. There will be a total of 5 questions.</p>
                <p>You may want to familiarize yourself with the application before proceeding with the experiment</p>
            </div>
            <div class='question'></div>
        </div>
        <div id='end'></div>
        <div><btn class='btn default' id='next'></button></div>
    </div>
    <div id="aar" style="display:none">

    </div>
    <div class='center' id="thanks" style="display:none">
        <h1> Thank you for your participation.</h1>
    </div>
</body>
<%@include file="footer.jsp" %> 
<script>
    var count = 0;
    var answers = {};
    var withCat = false;
    var cat_one = "http://newsflasher-smuidp21.rhcloud.com/cat_one.jsp";
    var cat_two = "http://newsflasher-smuidp21.rhcloud.com/cat_two.jsp";

    var dec = Math.random();
    if (dec > 0.5) {
        $('iframe').attr("src", cat_one);
        withCat = true;
        answers.filter = "true";
    } else {
        $('iframe').attr("src", cat_two);
        answers.filter = "false";
    }
    if (count == 0) {
        $('#next').text("Begin");
    }
    $('#proceed').click(function() {
        if ($('#name').val() == "") {
            alert('Please enter your name' + $('#name').val());
        } else {
            $('#intro').hide(function() {
                $('#test').show("slide");
                answers.name = $('#name').val();
            });
        }
    });



    $('#next').click(function() {

        if (count == 0) {
            var d = new Date();
            var now = d.getTime();

            answers.timeStart = now;
        }
        if ($('#next').text() == "Begin") {
            $(qn1).appendTo($('.question'));
            $('#next').text("Next");
            count++;
        } else {
            var qn = "";
            if (!($("input[type='radio']").is(':checked')) && count < 6) {
                alert("Please answer the question before proceeding");

            } else {
                if (count == 1) {
                    $('.question').html(qn2);
                } else if (count == 2) {
                    $('.question').html(qn3);

                } else if (count == 3) {
                    $('.question').html(qn4);
                } else if (count == 4) {
                    $('.question').html(qn5);
                } else if (count == 5) {
                    $('.instructions').html('<div class="red">Now that you have done the test, please answer the following questions. 1 being strongly disagree and 5 being strongly agree</div>');
                    $('.question').html(qn6);
                } else if (count == 6) {
                    var e = new Date();
                    var end = e.getTime();
                    answers.timeEnd = end;
                    if (withCat) {
                        $('.question').html(qn8);
                    } else {
                        $('.question').html(qn7);
                    }
                } else if (count == 7) {
                    $('.question').html(endNote);
                    $('#next').text("End");
                } else if (count == 8) {
                    $('#test').hide(function() {
                        $('#thanks').show();
                    });
                    var result = JSON.stringify(answers);
                    $.post("processResults", {ans: result});
                }


                count++;
            }

        }
        $('input[type="radio"]').click(function() {
            if ($(this).is(':checked'))
            {
                var qns = 'qn' + count;
                answers[qns] = $(this).val();
                console.log(answers);
            }
        });
    }
    );



    var qn1 = '<div class="qn"> Question 1: <br/>What Is 联合晚报’s view on South Korea’s outroar on Kim Yuna’s Silver.</div>\n\
                    <div class="choices">\n\
                   <label> <div class="ops"><input class="qns" type="radio" name="qn" value="1"/> \n\
                    联合晚报 supports South Korea’s view on the unfair grading on Kim Yuna’s performance </div></label>\n\
                     <label> <div class="ops"> <input class="qns" type="radio" name="qn" value="2"/> \n\
                    联合晚报 thinks that korea should get over it</label></div> \n\
                    <label> <div class="ops">  <input class="qns" type="radio" name="qn" value="3"/> \n\
                   联合晚报 feels that both are in the wrong</div></label> \n\
               </div>';
    var qn2 = '<div class="qn"> Question 2: <br/>What did netizen Oliver Won says about this issue?</div>\n\
                    <div class="choices">\n\
                      <label><div class="ops"><input  type="radio" name="qn" value="1"> \n\
                    She feels that the judging was fair</div></label>\n\
                    <label>  <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        She is neutral about this issue</div></label> \n\
                    <label> <div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                        She felt that the judging was slanted towards Russia</div></label> \n\
               </div>';
    var qn3 = '<div class="qn"> Question 3: <br/>What is the overall sentiments based on the majority’s sentiment?</div>\n\
                    <div class="choices">\n\
                   <label>   <div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        Neutral</div></label>\n\
                    <label>  <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        Majority think Kim Yuna don’t deserve the gold</div></label> \n\
                    <label> <div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                        Majority think that Adelina Sotnikova deserves the gold medal</div></label> \n\
               </div>';
    var qn4 = '<div class="qn"> Question 4: <br/>How many positive articles are there?</div>\n\
                    <div class="choices">\n\
                     <label> <div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        6</div></label>\n\
                     <label> <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        7</div> </label>\n\
                     <label><div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                        8</div></label> \n\
               </div>';
    var qn5 = '<div class="qn"> Question 5: <br/>How many social media posts are there ? (facebook , twitter..)</div>\n\
                    <div class="choices">\n\
                      <label><div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        4</label></div>\n\
                     <label> <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        5</label></div> \n\
                     <label><div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                     6</label></div> \n\
               </div>';
    var qn6 = '<div class="qn"> Question 6: <br/>It was easy for me to navigate between articles</div>\n\
                    <div class="choices">\n\
                      <label><div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        1</label></div>\n\
                     <label> <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        2</label></div> \n\
                     <label><div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                     3</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="4"> \n\
                     4</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="5"> \n\
                     5</label></div> \n\
               </div>';
    var qn7 = '<div class="qn"> Question 7: <br/> It would be easier if there is a function to categorize the news\' sources.</div>\n\
                    <div class="choices">\n\
                      <label><div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        1</label></div>\n\
                     <label> <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        2</label></div> \n\
                     <label><div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                     3</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="4"> \n\
                     4</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="5"> \n\
                     5</label></div>\n\
</div>';
    var qn8 = '<div class="qn"> Question 7: <br/> The filtering function aids in speeding up the process of reading</div>\n\
                    <div class="choices">\n\
                      <label><div class="ops"><input  type="radio" name="qn" value="1"> \n\
                        1</label></div>\n\
                     <label> <div class="ops"> <input type="radio" name="qn" value="2"> \n\
                        2</label></div> \n\
                     <label><div class="ops">  <input  type="radio" name="qn" value="3"> \n\
                     3</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="4"> \n\
                     4</label></div> \n\
                      <label><div class="ops">  <input  type="radio" name="qn" value="5"> \n\
                     5</label></div>\n\
</div>';
    var endNote = '<div class="endNote"> You have come to the end of the web experiment.</div>';
</script>    