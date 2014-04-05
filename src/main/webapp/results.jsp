<%-- 
    Document   : results.jsp
    Created on : Apr 4, 2014, 5:08:01 PM
    Author     : Sherman
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
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
    <body style="background:#000 !important;color:white;padding:20px">
        <div class="col-md-12 cheat"><button class="btn green" id="repent">Repent</button><button class="btn red" id="cheat">Cheat</button></div>
        <div class="col-md-5" style="text-align:center">
            <h1>With Categorisation</h1>
            <div id="catmean"></div>
            <div id="catmean6"></div>
            <div id="catmean7"></div>
            <div id="catmeanTime"></div>
            <div id="countCat"></div>
            <table class="table" >

                <thead>
                    <tr>
                        <th>id</th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                        <th>Q4</th>
                        <th>Q5</th>
                        <th>Q6</th>
                        <th>Q7</th>
                        <th>Score (out of 5)</th>
                        <th>Time taken</th>
                    </tr>
                </thead>
                <tbody id="Cat">

                </tbody>
            </table>
        </div>
        <div class="col-md-offset-2 col-md-5" style="text-align:center">
            <h1>Without Categorisation</h1>
            <div id="woCatmean"></div>
            <div id="woCatmean6"></div>
            <div id="woCatmean7"></div>
            <div id="wocatmeanTime"></div>
            <div id="countWoCat"></div>
            <table class="table" >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                        <th>Q4</th>
                        <th>Q5</th>
                        <th>Q6</th>
                        <th>Q7</th>
                        <th>Score (out of 5)</th>
                        <th>Time taken</th>
                    </tr>
                </thead>
                <tbody id="woCat">

                </tbody>
            </table>
        </div>
    </body>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="color:#444 !Important">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">Ethics 101</button>
                    <h4 class="modal-title" id="myModalLabel"></h4>
                </div>
                <div class="modal-body">
                    <img src="uploads/davis.jpg">
                    <p>You have cheated more than 15 times. I will appear every time you cheat henceforth</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Continue Cheating</button>
                    
                </div>
            </div>
        </div>
    </div>
</html>
<script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script>
    var resultsArray = [];
    var cheatList = [];
    var clickTimes = 0;
    $.getJSON("getResults", function(response) {

        resultsArray = response.data;
        initResults(resultsArray);
        cheatList = resultsArray.slice(0);
        enableCheat();
    });
    $('#repent').click(function(){
        initResults(resultsArray);
        clickTimes=0;
    })
    function check() {
        
        if (clickTimes > 15) {
            $('#myModal').modal('show');
        }
    }
    function enableCheat() {
        $('#cheat').click(function() {
            $('#repent').show();
            clickTimes++;
            check();
            for (var i = 0; i < 10; i++) {
                var newItem = {};
                var rand = Math.random();
                if (rand > 0.5) {
                    newItem.filter = "true";
                    var randie = Math.random();
                    if (randie > 0.4) {
                        newItem.qn6 = 5;
                        newItem.qn7 = 5;
                    } else {
                        newItem.qn6 = Math.floor(Math.random() * 6) + 1;
                        newItem.qn7 = Math.floor(Math.random() * 6) + 1;
                    }
                    newItem.timeStart = 0;
                    newItem.timeEnd = Math.floor(Math.random() * 300 * 1000) + 1;
                } else {
                    newItem.filter = "false";
                    var randie = Math.random();
                    if (randie > 0.4) {
                        newItem.qn6 = 2;
                        newItem.qn7 = 2;
                    } else {
                        newItem.qn6 = Math.floor(Math.random() * 6) + 1;
                        newItem.qn7 = Math.floor(Math.random() * 6) + 1;
                    }
                    newItem.timeStart = 0;
                    newItem.timeEnd = Math.floor(Math.random() * 800 * 1000) + 1;
                }

                rand = Math.random();
                if (rand > 0.2) {
                    newItem.qn1 = 2;
                } else {
                    var innerRand = Math.random();
                    if (innerRand > 0.5) {
                        newItem.qn1 = 1;
                    } else {
                        newItem.qn1 = 3;
                    }
                }
                rand = Math.random();
                if (rand > 0.2) {
                    newItem.qn2 = 3;
                } else {
                    var innerRand = Math.random();
                    if (innerRand > 0.5) {
                        newItem.qn2 = 1;
                    } else {
                        newItem.qn2 = 2;
                    }
                }
                rand = Math.random();
                if (rand > 0.2) {
                    newItem.qn3 = 2;
                } else {
                    var innerRand = Math.random();
                    if (innerRand > 0.5) {
                        newItem.qn3 = 1;
                    } else {
                        newItem.qn3 = 3;
                    }
                }
                rand = Math.random();
                if (rand > 0.2) {
                    newItem.qn4 = 2;
                } else {
                    var innerRand = Math.random();
                    if (innerRand > 0.5) {
                        newItem.qn4 = 1;
                    } else {
                        newItem.qn4 = 3;
                    }
                }
                rand = Math.random();
                if (rand > 0.2) {
                    newItem.qn5 = 1;
                } else {
                    var innerRand = Math.random();
                    if (innerRand > 0.5) {
                        newItem.qn5 = 3;
                    } else {
                        newItem.qn5 = 2;
                    }
                }

                cheatList.push(newItem);
            }
            initResults(cheatList);
        })
    }
    function initResults(resultsArray) {
        $('tbody#Cat').html("");
        $('tbody#woCat').html("")
        var count = 1;
        var catMean = {mean: 0, length: 0};
        var woCatMean = {mean: 0, length: 0};
        var CatMeanExtra = {mean7: 0, mean7Length: 0, mean6: 0, mean6Length: 0};
        var woCatMeanExtra = {mean7: 0, mean7Length: 0, mean6: 0, mean6Length: 0};
        var timeCat = 0;
        var timeWoCat = 0;
        resultsArray.forEach(function(result) {
            var qn1Boo = false;
            var qn2Boo = false;
            var qn3Boo = false;
            var qn4Boo = false;
            var qn5Boo = false;
            var score = 0;
            if (result.qn1 == "2") {
                score++;
                qn1Boo = true;
            }
            if (result.qn2 == "3") {
                score++;
                qn2Boo = true;
            }
            if (result.qn3 == "2") {
                score++;
                qn3Boo = true;
            }
            if (result.qn4 == "2") {
                score++;
                qn4Boo = true;
            }
            if (result.qn5 == "1") {
                score++;
                qn5Boo = true;
            }

            if (result.filter == "true") {
                var content = '<tr>';
                var timeTaken = (result.timeEnd - result.timeStart);
                timeCat += timeTaken;
                content += '<td>User ' + count + '</td>';
                if (qn1Boo) {
                    content += '<td class="green">' + result.qn1 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn1 + '</td>';
                }
                if (qn2Boo) {
                    content += '<td class="green">' + result.qn2 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn2 + '</td>';
                }
                if (qn3Boo) {
                    content += '<td class="green">' + result.qn3 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn3 + '</td>';
                }
                if (qn4Boo) {
                    content += '<td class="green">' + result.qn4 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn5 + '</td>';
                }
                if (qn5Boo) {
                    content += '<td class="green">' + result.qn5 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn5 + '</td>';
                }
                ;
                content += '<td>' + result.qn6 + '</td>';
                content += '<td>' + result.qn7 + '</td>';
                content += '<td>' + score + '</td>';
                content += '<td>' + time(timeTaken) + '</td>';
                content += '</tr>';
                $(content).appendTo($('tbody#Cat'));
                CatMeanExtra.mean6 += num(result.qn6);
                CatMeanExtra.mean6Length++;
                CatMeanExtra.mean7 += num(result.qn7);
                CatMeanExtra.mean7Length++;
                catMean.mean += score;
                catMean.length++;
            } else {
                var content = '<tr>';
                content += '<td>User ' + count + '</td>';
                var timeTaken = (result.timeEnd - result.timeStart);
                timeWoCat += timeTaken;
                if (qn1Boo) {
                    content += '<td class="green">' + result.qn1 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn1 + '</td>';
                }
                if (qn2Boo) {
                    content += '<td class="green">' + result.qn2 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn2 + '</td>';
                }
                if (qn3Boo) {
                    content += '<td class="green">' + result.qn3 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn3 + '</td>';
                }
                if (qn4Boo) {
                    content += '<td class="green">' + result.qn4 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn5 + '</td>';
                }
                if (qn5Boo) {
                    content += '<td class="green">' + result.qn5 + '</td>';
                } else {
                    content += '<td class="red">' + result.qn5 + '</td>';
                }

                content += '<td>' + result.qn6 + '</td>';
                content += '<td>' + result.qn7 + '</td>';
                content += '<td>' + score + '</td>';
                content += '<td>' + time(timeTaken) + '</td>';
                content += '</tr>';
                $(content).appendTo($('tbody#woCat'));
                woCatMean.mean += score;
                woCatMean.length++;
                woCatMeanExtra.mean6 += num(result.qn6);
                woCatMeanExtra.mean6Length++;
                woCatMeanExtra.mean7 += num(result.qn7);
                woCatMeanExtra.mean7Length++;
            }
            count++;
        });
        catMean.mean = catMean.mean / catMean.length;
        woCatMean.mean = woCatMean.mean / woCatMean.length;
        CatMeanExtra.mean6 = CatMeanExtra.mean6 / CatMeanExtra.mean6Length;
        CatMeanExtra.mean7 = CatMeanExtra.mean7 / CatMeanExtra.mean7Length;
        $('#catmean6').text("Qn6 Mean:" + Math.round(CatMeanExtra.mean6 * 100) / 100);
        $('#catmean7').text("Qn7 Mean:" + Math.round(CatMeanExtra.mean7 * 100) / 100);
        woCatMeanExtra.mean6 = woCatMeanExtra.mean6 / woCatMeanExtra.mean6Length;
        woCatMeanExtra.mean7 = woCatMeanExtra.mean7 / woCatMeanExtra.mean7Length;
        $('#woCatmean6').text("Qn6 Mean:" + Math.round(woCatMeanExtra.mean6 * 100) / 100);
        $('#woCatmean7').text("Qn7 Mean:" + Math.round(woCatMeanExtra.mean7 * 100) / 100);
        timeWoCat = timeWoCat / woCatMean.length;
        timeCat = timeCat / catMean.length;
        $('#catmean').text("Mean: " + catMean.mean);
        $('#catmeanTime').text("Mean Time Taken: " + time(timeCat));
        $('#wocatmeanTime').text("Mean Time Taken: " + time(timeWoCat));
        $('#woCatmean').text("Mean: " + woCatMean.mean);
        $('#countCat').text("Number of Participants: " + $("#Cat tr").length);
        $('#countWoCat').text("Number of Participants: " + $("#woCat tr").length);
    }
    ;
    function num(number) {
        return Number(number);
    }
    function time(ms) {
        ms = ms / 1000;
        var mins = ms / 60;
        var sec = ms % 60;
        return Math.round(mins) + " mins " + Math.round(sec * 100) / 100 + " secs";
    }
</script>