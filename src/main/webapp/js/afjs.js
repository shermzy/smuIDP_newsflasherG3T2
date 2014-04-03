/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//new gnMenu(document.getElementById('gn-menu'));
var data, dataset;
var teamPos = [];
var teams = [];
var teamOne = [];
var teamTwo = [];
var teamOneSim = [];
var teamTwoSim = [];
var players = [];
var total_points = [];
var average;
var league_average = 0;
var league_total = 0;
var radar_data = new Array();
var player_1_data = new Array();
var player_2_data = new Array();
var total = [];
var means = [];
var tempSD = [];
var variance = [];
var SD = [];
var oneChosen = false;
var twoChosen = false;
var teamOneOriginal = {};
var teamTwoOriginal = {};
var teamOneSwap = {};
var teamTwoSwap = {};

$('#charts').click(function() {
    $('.dataTable').hide();
});
var changeTeamEvent = false;
function initMenuBars() {
    var check = false;
    $('.teamHolder').click(function() {
        $('#rankings').remove();
        changeTeamEvent = true;
        getByTeam($(this).attr('id'));
        $('.teamHolder').removeClass('selected');
        $(this).addClass('selected');
        check = true;
    });
    if (!check) {

        getByTeam("All");
    }

    $('.navHeads').click(function() {
        $('.databody').hide();
        $('.' + $(this).attr("id")).show();
    });
    $('#player1').change(function() {

        if ($(this).val() != 'Select One') {
            selectPlayer($(this).val());
        } else {
            $('.holder').html("");
            if ($('.searchParameters').hasClass('open')) {
                $('.searchParameters').slideUp();
            }
        }
    });
    $('#tableData').click(function() {
        $('#ranking').hide(function() {
            $('#dt').show();
        });
    });
    $('#graphs').click(function() {
        $('#dt').hide(function() {
            $('#ranking').show();
        });
    });
    $('.searchBtn').click(function() {

        if ($('.searchParameters').hasClass('open')) {
            $('.searchParameters').slideUp();
            $('.searchParameters').removeClass('open');
            $('.searchResults').show(function() {
                console.log("retriveing data");
                var results = getSearchResult();
                showResults(results);
                initResults(results);
                $('#sankeyGraph').show();
            });
        } else {
            $('.searchParameters').slideDown();
            $('.searchParameters').addClass('open');
            $('.searchResults').hide();
            $('#sankeyGraph').hide();
        }
    });
    $('.statsFilter').change(function() {
        //alert($(this).val());
        var option = $(this).val();
        $('.statsFilter option').show(function() {


        });
        $('option.' + $('#stat1').val()).hide();
        $('.statsFilter').each(function() {
            if ($(this).val() != "None") {
                $('option.' + $(this).val()).hide();
            }
        });
    });
    $('#teamSelect_team1').change(function() {
        if ($(this).val() != 'Select One') {
            getTeamStatistics($(this).val(), 1);
        }

    });
    $('#teamSelect_team2').change(function() {
        if ($(this).val() != 'Select One') {
            getTeamStatistics($(this).val(), 2);
        }

    });
}
function getTeamStatistics(team, type) {


    var teamPlayers = [];
    var teamAllRoundTotal = 0;
    var teamShootingTotal = 0;
    var teamOffenseTotal = 0;
    var teamPlaymakingTotal = 0;
    var teamDefenseTotal = 0;
    var teamAllRoundAverage = 0;
    var teamShootingAverage = 0;
    var teamOffenseAverage = 0;
    var teamPlaymakingAverage = 0;
    var teamDefenseAverage = 0;
    if (type == '1') {
        $('#teamContainer_one').html("");
    } else {
        $('#teamContainer_two').html("");
    }

    dataset.forEach(function(player) {
        if (player.Team == team) {

            teamPlayers.push(player);
            teamAllRoundTotal += num(player.All_Around);
            teamShootingTotal += num(player.Shooting);
            teamOffenseTotal += num(player.Offense);
            teamPlaymakingTotal += num(player.Playmaking);
            teamDefenseTotal += num(player.Defense);
        }

    });
    teamAllRoundAverage = teamAllRoundTotal / teamPlayers.length;
    teamShootingAverage = teamShootingTotal / teamPlayers.length;
    teamOffenseAverage = teamOffenseTotal / teamPlayers.length;
    teamPlaymakingAverage = teamPlaymakingTotal / teamPlayers.length;
    teamDefenseAverage = teamDefenseTotal / teamPlayers.length;
    var sabermetrics = "";
    sabermetrics += '<div class="noOfPlayers">' + teamPlayers.length + ' Players</div>';
    sabermetrics += '<div class="sabermetrics">';
    sabermetrics += '<div class="metricGroup"><div class="metrics" id="AllRound_player' + type + '">' + Math.round(teamAllRoundAverage * 100) / 100 + '</div><div class="metricTitle" id="allRound">All Round</div><div class="saberChange" id="player_' + type + 'allRound_change"></div></div>';
    sabermetrics += '<div class="metricGroup"><div class="metrics" id="Shooting_player' + type + '">' + Math.round(teamShootingAverage * 100) / 100 + '</div><div class="metricTitle" id="shooting"> Shooting </div><div class="saberChange"  id="player_' + type + 'shooting_change"></div></div>';
    sabermetrics += '<div class="metricGroup"><div class="metrics" id="Offense_player' + type + '">' + Math.round(teamOffenseAverage * 100) / 100 + '</div><div class="metricTitle" id="Offense">Offense</div><div class="saberChange"  id="player_' + type + 'offense_change"></div></div>';
    sabermetrics += '<div class="metricGroup"><div class="metrics" id="PlayMaking_player' + type + '">' + Math.round(teamPlaymakingAverage * 100) / 100 + '</div><div class="metricTitle" id="playMaking">Play Making</div><div class="saberChange"  id="player_' + type + 'playMaking_change"></div></div> ';
    sabermetrics += '<div class="metricGroup"><div class="metrics" id="Defense_player' + type + '">' + Math.round(teamDefenseAverage * 100) / 100 + '</div><div class="metricTitle" id="Defense">Defense</div><div class="saberChange"  id="player_' + type + 'Defense_change"></div></div> ';
    sabermetrics += '</div>';
    var player_content = "";
    player_content += '<div class="playersContainer">';
    teamPlayers.forEach(function(player) {
        player_content += '<div class="players' + type + '">';
        player_content += '<div class="team_player' + type + ' pull-left" id="team_playerName">' + player.Player_Name + '</div>';
        player_content += '<div class="team_player pull-right" id="team_playerPos">' + player.Position + '</div>';
        player_content += '</div>';
    })
    player_content += ' </div>';
    if (type == "1") {
        $(sabermetrics).appendTo($('#teamContainer_one'));
        $(player_content).appendTo($('#teamContainer_one'));
        $('<div id="player1_barCharts_Offense"></div>').appendTo($('#teamContainer_one'));
        graphinit(teamPlayers, 1);
        teamOne.length = 0;
        teamOneOriginal = {Playmaking: teamPlaymakingAverage, Shooting: teamShootingAverage, Offense: teamOffenseAverage, All_Around: teamAllRoundAverage, Defense: teamDefenseAverage};
        teamOne = teamPlayers.slice(0);
    } else {
        $(sabermetrics).appendTo($('#teamContainer_two'));
        $(player_content).appendTo($('#teamContainer_two'));
        $('<div id="player2_barCharts"></div>').appendTo($('#teamContainer_Two'));
        graphinit2(teamPlayers, 1);
        teamTwo.length = 0;
        teamTwo = teamPlayers.slice(0);
        teamTwoOriginal = {Playmaking: teamPlaymakingAverage, Shooting: teamShootingAverage, Offense: teamOffenseAverage, All_Around: teamAllRoundAverage, Defense: teamDefenseAverage};
    }
    var graph = '<div id="player1_barCharts"></div>';
    initGraphFilter();
    initSwap();
}
function initGraphFilter() {
    $('.metricGroup').click(function() {
        //alert($(this).find($('.metrics')).attr("id"));
        var saberType = $(this).find($('.metrics')).attr("id").split("_");
        console.log(saberType);
        var type = indexSaber(saberType[0]);
        console.log("Type: " + type);
        var playerType = saberType[1].substring(saberType[1].length - 1, saberType[1].length);
        if (teamOneSim.length == 0 && teamTwoSim == 0) {
            if (playerType == 1) {
                graphinit(teamOne, type);
            } else {
                graphinit2(teamTwo, type);
            }
        } else {
            if (playerType == 1) {
                graphinit(teamOneSim, type);
            } else {
                graphinit2(teamTwoSim, type);
            }
        }
    });
}
function indexSaber(saber) {
    if (saber == "AllRound") {
        return 1;
    } else if (saber == "Shooting") {
        return 2;
    }
    else if (saber == "Offense") {
        return 3;
    }
    else if (saber == "PlayMaking") {
        return 4;
    }
    else if (saber == "Defense") {
        return 5;
    }
}
function graphinit(teamPlayers, saber) {
    var saberType = "";
    $("#player1_barChart").html("");
    $("#saberGraphTypeOne").show();
    switch (saber)
    {
        case 1:
            saberType = "All_Around";
            break;
        case 2:
            saberType = "Shooting";
            break;
        case 3:
            saberType = "Offense";
            break;
        case 4:
            saberType = "Playmaking";
            break;
        case 5:
            saberType = "Defense";
            break;
    }

    $("#saberGraphTypeOne").text(saberType);
    var graphData = [];
    var points_range = []

    teamPlayers.forEach(function(d) {
        points_range.push(d[saberType]);
        graphData.push({player: d.Player_Name, Score: Math.round(d[saberType] * 100) / 100});
    })
    //graphData.sortByProp("Score");
    graphData.sort(function(a, b) {
        return b.Score - a.Score;
    })
    var margin = {top: 40, right: 10, bottom: 10, left: 0},
    width = 700 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
    var formatPercent = d3.format(".0%");
    var x = d3.scale.linear()
            .range([0, 400]);
    var y = d3.scale.ordinal()
            .rangeRoundBands([0, height], .2);
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("top");
    var yAxis = d3.svg.axis().scale(y).orient("left");
    ;
    var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return "<strong>Score:</strong> <span style='color:red'>" + d.Score + "</span>";
            });

    var svg = d3.select("#player1_barChart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);
    console.log("min:" + d3.min(points_range));
    console.log("max:" + d3.max(points_range));
    var minPoint = Math.min.apply(Math, graphData.map(function(o) {
        return o.Score;
    }));
    var maxPoint = Math.max.apply(Math, graphData.map(function(o) {
        return o.Score;
    }));
    x.domain([minPoint, maxPoint]).nice();
    y.domain(graphData.map(function(d) {
        return d.player;
    }));
    console.log(graphData);

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(140,0)")
            .attr("fill", "#fff")
            .call(xAxis);
    svg.append("g")
            .attr("class", "y axis")
            .attr("fill", "#fff")
            .attr("transform", "translate(140,0)").attr("style", "font-size:12px")
            .call(yAxis);
    ;
    svg.selectAll(".bar")
            .data(graphData)
            .enter().append("rect")
            .attr("class", function(d) {
                return d.Score < 0 ? "bar negative" : "bar positive";
            }).on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("fill", function(d) {

                if (d.player == teamTwoSwap.Player_Name) {
                    return "green";
                } else if (d.player == teamOneSwap.Player_Name) {
                    return "red";
                }
                else {
                    return "blue";
                }
            })
            .attr("x", function(d) {

                return 140;
            })
            .attr("y", function(d) {

                return y(d.player);
            }).attr("width", 0).transition(2000)
            .attr("width", function(d) {
                console.log(Math.round(d.Score * 100) / 100 + " " + x(d.Score));
                return Math.max(0, x((Math.round(d.Score * 100) / 100)));
            })
            .attr("height", y.rangeBand());
}

function graphinit2(teamPlayers, saber) {
    var saberType = "";
    $("#saberGraphTypeTwo").show();
    $("#player2_barChart").html("");
    switch (num(saber))
    {
        case 1:
            saberType = "All_Around";
            break;
        case 2:
            saberType = "Shooting";
            break;
        case 3:
            saberType = "Offense";
            break;
        case 4:
            saberType = "Playmaking";
            break;
        case 5:
            saberType = "Defense";
            break;
    }

    $("#saberGraphTypeTwo").text(saberType);
    var graphData = [];
    teamPlayers.forEach(function(d) {
        graphData.push({player: d.Player_Name, Score: d[saberType]});
    })
    graphData.sort(function(a, b) {
        return b.Score - a.Score;
    })
    var margin = {top: 40, right: 10, bottom: 10, left: 0},
    width = 700 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
    var formatPercent = d3.format(".0%");
    var x = d3.scale.linear()
            .range([0, 500]);
    var y = d3.scale.ordinal()
            .rangeRoundBands([0, height], .2);
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("top");
    var yAxis = d3.svg.axis().scale(y).orient("left");
    ;
    var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return "<strong>Score:</strong> <span style='color:red'>" + d.Score + "</span>";
            })

    var svg = d3.select("#player2_barChart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);

    var minPoint = Math.min.apply(Math, graphData.map(function(o) {
        return o.Score;
    }));
    var maxPoint = Math.max.apply(Math, graphData.map(function(o) {
        return o.Score;
    }));
    x.domain([minPoint, maxPoint]).nice();
    y.domain(graphData.map(function(d) {
        return d.player;
    }));
    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(140,0)")
            .attr("fill", "#fff")
            .call(xAxis);
    svg.append("g")
            .attr("class", "y axis").attr("fill", "#fff")
            .attr("transform", "translate(140,0)").attr("style", "font-size:12px")
            .call(yAxis);
    ;
    svg.selectAll(".bar")
            .data(graphData)
            .enter().append("rect").on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("class", function(d) {
                return d.Score < 0 ? "bar negative" : "bar positive";
            })
            .attr("x", function(d) {

                return 140;
            }).attr("fill", function(d) {
        if (d.player == teamOneSwap.Player_Name) {
            return "green";
        } else if (d.player == teamTwoSwap.Player_Name) {
            return "red";
        } else {
            return "blue";
        }
    })
            .attr("y", function(d) {

                return y(d.player);
            }).attr("width", 0).transition(2000)
            .attr("width", function(d) {

                return Math.max(0, x(d.Score));
            })
            .attr("height", y.rangeBand());
}
function initSwap() {
    $('.players1').click(function() {

        $('.players1').removeClass('active');
        $(this).addClass('active');
        simulate();
    });
    $('.players2').click(function() {

        $('.players2').removeClass('active');
        $(this).addClass('active');
        simulate();
    });
}
function simulate() {



    if ($('div.players1.active').length > 0 && $('div.players2.active').length > 0) {

        var tempOne = teamOne.slice(0);
        var tempTwo = teamTwo.slice(0);
        teamOneSim = teamOne.slice(0);
        teamTwoSim = teamTwo.slice(0);
        var tempPlayerOne = {};
        var tempPlayerTwo = {};
        var indexOne = 0;
        var indexTwo = 0;
        var nameOne = $('div.players1.active').find($('div#team_playerName')).text();
        var nameTwo = $('div.players2.active').find($('div#team_playerName')).text();
        $.each(tempOne, function(index, element) {
            if (element.Player_Name == nameOne) {
                tempPlayerTwo = $.extend(true, {}, element);
                teamOneSwap = $.extend(true, {}, element);
                indexOne = index;
            }
        });
        $.each(tempTwo, function(index, element) {
            if (element.Player_Name == nameTwo) {
                tempPlayerOne = $.extend(true, {}, element);
                teamTwoSwap = $.extend(true, {}, element);
                indexTwo = index;
            }
        });
        tempOne.splice(indexOne, 1);
        tempTwo.splice(indexTwo, 1);
        tempOne.push(tempPlayerOne);
        teamOneSim.push(tempPlayerOne);
        teamTwoSim.push(tempPlayerTwo);
        tempTwo.push(tempPlayerTwo);
        var saberScoresOne = {Playmaking: 0, Shooting: 0, Offense: 0, All_Around: 0, Defense: 0};
        tempOne.forEach(function(player) {
            saberScoresOne.Playmaking += num(player.Playmaking);
            saberScoresOne.Shooting += num(player.Shooting);
            saberScoresOne.Offense += num(player.Offense);
            saberScoresOne.All_Around += num(player.All_Around);
            saberScoresOne.Defense += num(player.Defense);
            // console.log(saberScoresOne.Shooting + " " + player.Shooting);
        });
        // console.log(num(saberScoresOne.Shooting));
        saberScoresOne.Playmaking = saberScoresOne.Playmaking / tempOne.length;
        saberScoresOne.Shooting = saberScoresOne.Shooting / tempOne.length;
        saberScoresOne.Offense = saberScoresOne.Offense / tempOne.length;
        saberScoresOne.All_Around = saberScoresOne.All_Around / tempOne.length;
        saberScoresOne.Defense = saberScoresOne.Defense / tempOne.length;
        // console.log(saberScoresOne)
        var diffAAOne = Math.round(((num(saberScoresOne.All_Around) - num(teamOneOriginal.All_Around)) / (num(teamOneOriginal.All_Around)) * 100) * 100) / 100;
        if (diffAAOne < 0) {

            $('#player_1allRound_change').html(diffAAOne + '%<i class="fa fa-caret-down"></i>');
            $('#AllRound_player1').parent().css("background", "#BD1010");
        } else if (diffAAOne > 0) {

            $('#player_1allRound_change').html(diffAAOne + '%<i class="fa fa-caret-up"></i>');
            $('#AllRound_player1').parent().css("background", "#27B305");
        } else {
            $('#player_1allRound_change').html("0.00");
            $('#AllRound_player1').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }

        $('#AllRound_player1').html(Math.round(saberScoresOne.All_Around * 100) / 100);
        var diffShootOne = Math.round(((num(saberScoresOne.Shooting) - num(teamOneOriginal.Shooting)) / (num(teamOneOriginal.Shooting)) * 100) * 100) / 100;
        if (diffShootOne < 0) {
            $('#player_1shooting_change').html(diffShootOne + '%<i class="fa fa-caret-down"></i>');
            $('#Shooting_player1').parent().css("background", "#BD1010");
        } else if (diffShootOne > 0) {
            $('#player_1shooting_change').html(diffShootOne + '%<i class="fa fa-caret-up"></i>');
            $('#Shooting_player1').parent().css("background", "#27B305");
        } else {
            $('#player_1shooting_change').html("0.00");
            $('#Shooting_player1').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }
        $('#Shooting_player1').html(Math.round(saberScoresOne.Shooting * 100) / 100);
        var diffOffOne = Math.round(((num(saberScoresOne.Offense) - num(teamOneOriginal.Offense)) / (num(teamOneOriginal.Offense)) * 100) * 100) / 100;
        if (diffOffOne < 0) {
            $('#player_1offense_change').html(diffOffOne + '%<i class="fa fa-caret-down"></i>');
            $('#Offense_player1').parent().css("background", "#BD1010");
        } else if (diffOffOne > 0) {
            $('#player_1offense_change').html(diffOffOne + '%<i class="fa fa-caret-up"></i>');
            $('#Offense_player1').parent().css("background", "#27B305");
        } else {
            $('#player_1offense_change').html("0.00");
            $('#Offense_player1').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }
        $('#Offense_player1').html(Math.round(saberScoresOne.Offense * 100) / 100);
        var diffPMOne = Math.round(((num(saberScoresOne.Playmaking) - num(teamOneOriginal.Playmaking)) / (num(teamOneOriginal.Playmaking)) * 100) * 100) / 100;
        if (diffPMOne < 0) {
            $('#player_1playMaking_change').html(diffPMOne + '%<i class="fa fa-caret-down"></i>');
            $('#PlayMaking_player1').parent().css("background", "#BD1010");
        } else if (diffPMOne > 0) {
            $('#player_1playMaking_change').html(diffPMOne + '%<i class="fa fa-caret-up"></i>');
            $('#PlayMaking_player1').parent().css("background", "#27B305");
        } else {
            $('#PlayMaking_player1').parent().css("background", "rgba(150, 150, 150, 0.54)");
            $('#player_1playMaking_change').html("0.00");
        }
        $('#PlayMaking_player1').html(Math.round(saberScoresOne.Playmaking * 100) / 100);
        var diffDefOne = Math.round(((num(saberScoresOne.Defense) - num(teamOneOriginal.Defense)) / (num(teamOneOriginal.Defense)) * 100) * 100) / 100;
        if (diffDefOne < 0) {
            $('#player_1Defense_change').html(diffDefOne + '%<i class="fa fa-caret-down"></i>');
            $('#Defense_player1').parent().css("background", "#BD1010");
        } else if (diffDefOne > 0) {
            $('#player_1Defense_change').html(diffDefOne + '%<i class="fa fa-caret-up"></i>');
            $('#Defense_player1').parent().css("background", "#27B305");
        } else {
            $('#Defenseplayer1').parent().css("background", "rgba(150, 150, 150, 0.54)");
            $('#player_1Defense_change').html("0.00");
        }
        $('#Defenseplayer1').html(Math.round(saberScoresOne.Defense * 100) / 100);
        var saberScoresTwo = {Playmaking: 0, Shooting: 0, Offense: 0, All_Around: 0, Defense: 0};
        tempTwo.forEach(function(player) {
            saberScoresTwo.Playmaking += num(player.Playmaking);
            saberScoresTwo.Shooting += num(player.Shooting);
            saberScoresTwo.Offense += num(player.Offense);
            saberScoresTwo.All_Around += num(player.All_Around);
            saberScoresTwo.Defense += num(player.Defense);
            // console.log(saberScoresOne.Shooting + " " + player.Shooting);
        });
        // console.log(num(saberScoresOne.Shooting));
        saberScoresTwo.Playmaking = saberScoresTwo.Playmaking / tempTwo.length;
        saberScoresTwo.Shooting = saberScoresTwo.Shooting / tempTwo.length;
        saberScoresTwo.Offense = saberScoresTwo.Offense / tempTwo.length;
        saberScoresTwo.All_Around = saberScoresTwo.All_Around / tempTwo.length;
        saberScoresTwo.Defense = saberScoresTwo.Defense / tempTwo.length;
        var diffAATwo = Math.round(((num(saberScoresTwo.All_Around) - num(teamTwoOriginal.All_Around)) / (num(teamTwoOriginal.All_Around)) * 100) * 100) / 100;
        if (diffAATwo < 0) {
            $('#player_2allRound_change').html(diffAATwo + '%<i class="fa fa-caret-down"></i>');
            $('#AllRound_player2').parent().css("background", "#BD1010");
        } else if (diffAATwo > 0) {
            $('#player_2allRound_change').html(diffAATwo + '%<i class="fa fa-caret-up"></i>');
            $('#AllRound_player2').parent().css("background", "#27B305");
        } else {
            $('#player_2allRound_change').html("0.00");
            $('#AllRound_player2').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }

        $('#AllRound_player2').html(Math.round(saberScoresTwo.All_Around * 100) / 100);

        var diffShootTwo = Math.round(((num(saberScoresTwo.Shooting) - num(teamTwoOriginal.Shooting)) / (num(teamTwoOriginal.Shooting)) * 100) * 100) / 100;
        if (diffShootTwo < 0) {
            $('#player_2shooting_change').html(diffShootTwo + '%<i class="fa fa-caret-down"></i>');
            $('#Shooting_player2').parent().css("background", "#BD1010");
        } else if (diffShootTwo > 0) {
            $('#player_2shooting_change').html(diffShootTwo + '%<i class="fa fa-caret-up"></i>');
            $('#Shooting_player2').parent().css("background", "#27B305");
        } else {
            $('#player_2shooting_change').html("0.00");
            $('#Shooting_player2').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }
        $('#Shooting_player2').html(Math.round(saberScoresTwo.Shooting * 100) / 100);


        var diffOffTwo = Math.round(((num(saberScoresTwo.Offense) - num(teamTwoOriginal.Offense)) / (num(teamTwoOriginal.Offense)) * 100) * 100) / 100;
        if (diffOffTwo < 0) {
            $('#player_2offense_change').html(diffOffTwo + '<i class="fa fa-caret-down"></i>');
            $('#Offense_player2').parent().css("background", "#BD1010");
        } else if (diffOffTwo > 0) {
            $('#player_2offense_change').html(diffOffTwo + '<i class="fa fa-caret-up"></i>');
            $('#Offense_player2').parent().css("background", "#27B305");
        } else {
            $('#player_2offense_change').html("0.00");
            $('#Offense_player2').parent().css("background", "rgba(150, 150, 150, 0.54)");
        }
        $('#Offense_player2').html(Math.round(saberScoresTwo.Offense * 100) / 100);
        var diffPMTwo = Math.round(((num(saberScoresTwo.Playmaking) - num(teamTwoOriginal.Playmaking)) / (num(teamTwoOriginal.Playmaking)) * 100) * 100) / 100;
        if (diffPMTwo < 0) {
            $('#player_2playMaking_change').html(diffPMTwo + '<i class="fa fa-caret-down"></i>');
            $('#PlayMaking_player2').parent().css("background", "#BD1010");
        } else if (diffPMTwo > 0) {
            $('#player_2playMaking_change').html(diffPMTwo + '<i class="fa fa-caret-up"></i>');
            $('#PlayMaking_player2').parent().css("background", "#27B305");
        } else {
            $('#PlayMaking_player2').parent().css("background", "rgba(150, 150, 150, 0.54)");
            $('#player_2playMaking_change').html("0.00");
        }
        $('#PlayMaking_player2').html(Math.round(saberScoresTwo.Playmaking * 100) / 100);
        var diffDefTwo = Math.round(((num(saberScoresTwo.Defense) - num(teamTwoOriginal.Defense)) / (num(teamTwoOriginal.Defense)) * 100) * 100) / 100;
        if (diffDefTwo < 0) {
            $('#player_2Defense_change').html(diffDefTwo + '<i class="fa fa-caret-down"></i>');
            $('#Defense_player2').parent().css("background", "#BD1010");
        } else if (diffDefTwo > 0) {
            $('#player_2Defense_change').html(diffDefTwo + '<i class="fa fa-caret-up"></i>');
            $('#Defense_player2').parent().css("background", "#27B305");
        } else {
            $('#Defense_player2').parent().css("background", "rgba(150, 150, 150, 0.54)");
            $('#player_2Defense_change').html("0.00");
        }
        $('#Defenseplayer2').html(Math.round(saberScoresTwo.Defense * 100) / 100);
    }

}
function initResults(results) {
    $('.resultsHolder').hover(function() {
        $('#player_2').html("");
        var player_id = $(this).find('div.resultsPlayerName').text();
        results.forEach(function(data) {
            if (data.Player_Name == player_id) {
                var att = "";
                att += '<div class="playerName">' + data.Player_Name + '</div>';
                att += '<div class="position">' + position(data.Position) + '</div>';
                att += '<div class="attrholder" id="player2_Attr"><div class="priAttr">Primary Attributes</div>';
                att += '<section class="demo-3"><ul class="bokeh"><li></li><li></li><li></li><li></li></ul>';
                att += '</section></div>';
                $('#player_2').html(att);
                var priAttributes = "";
                var secAttributes = "";
                $.each(data, function(key, value) {


                    if (key == 'Player_Name' || key == "Team" || key == "Position" || key == "Field_Goals"
                            || key == "Field_Goals_Attempted" || key == "Three_points"
                            || key == "Three_points_attempted" || key == "Free_throw"
                            || key == "Free_throw_attempt" || key == "Offensive_rebounds"
                            || key == "Defensive_rebounds") {
                        return true;
                    } else if (key == "Three_points_percentage" || key == "Free_throw_percentage" || key == "Field_Goal_Percentage") {
                        var p1stats = $('#' + key + '_player1').text();
                        p1stats = p1stats.replace("%", "");
                        var p2stats = Math.round(value * 100) / 100;
                        var diffP = (p2stats - p1stats);
                        diffP = Math.round(diffP * 10) / 10;
                        secAttributes += '<div class="attr">';
                        secAttributes += '<div class="key pull-left">' + key + ':</div>';
                        if (diffP < 0) {

                            secAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '%</span> <span class="diff change red"><i class="fa fa-caret-down"></i>' + (+diffP) + '</span></div>';
                        } else if (diffP > 0) {
                            secAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '%</span>  <span class="diff change green"><i class="fa fa-caret-up"></i>' + diffP + '</span></div>';
                        } else {
                            secAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '%</span>  <span class="diff change grey">' + diffP + '%</span></div>';
                        }
                        secAttributes += '</div>';
                    } else {

                        var p1stats = $('#' + key + '_player_stats_1').text();
                        var p2stats = Math.round(value * 100) / 100;
                        var diffP = ((p2stats - p1stats) / p1stats) * 100;
                        priAttributes += '<div class="attr">';
                        priAttributes += '<div class="key pull-left">' + key + ':</div>';
                        diffP = Math.round(diffP * 10) / 10;
                        if (diffP < 0) {

                            priAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '</span> <span class="diff change red"><i class="fa fa-caret-down"></i>' + (+diffP) + '%</span></div>';
                        } else if (diffP > 0) {
                            priAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '</span>  <span class="diff change green"><i class="fa fa-caret-up"></i>' + diffP + '%</span></div>';
                        } else {
                            priAttributes += '<div class="value pull-right"><span class="diff">' + p2stats + '</span>  <span class="diff change grey">' + diffP + '%</span></div>';
                        }
                        priAttributes += '</div>';
                    }

                });
                $('section.demo-3').remove();
                $(priAttributes).appendTo($('#player2_Attr'));
                $('<div class="divider"></div>').appendTo($('#player2_Attr'));
                $(secAttributes).appendTo($('#player2_Attr'));
            }
        });
    });
    $('.resultsHolder').click(function() {
        $(this).toggleClass('select');
    });
    /*   $('#sankeyGraph').click(function() {
     var displayPlayers = [];
     $('.compare').slideUp(function() {
     $('.sankeyGraph').slideDown();
     });
     var players = [];
     $.each($('div.resultsHolder.select'), function(d) {
     players.push($(this).find($('div.resultsPlayerName')).text())
     })
     
     var attributestack = ["Playmaking", "Shooting", "Offense", "All Around", "Defense"];
     var datastack = [];
     var playerStack = [];
     results.forEach(function(data) {
     players.forEach(function(playerChosen) {
     if (data.Player_Name == playerChosen) {
     displayPlayers.push(data);
     playerStack.push(playerChosen);
     }
     })
     });
     var playRangePlayMaking = Math.max.apply(Math, dataset.map(function(o) {
     return o.Playmaking;
     })) - Math.min.apply(Math, dataset.map(function(o) {
     return o.Playmaking;
     }));
     var playRangeOffense = Math.max.apply(Math, dataset.map(function(o) {
     return o.Offense;
     })) - Math.min.apply(Math, dataset.map(function(o) {
     return o.Offense;
     }));
     var playRangeDefense = Math.max.apply(Math, dataset.map(function(o) {
     return o.Defense;
     })) - Math.min.apply(Math, dataset.map(function(o) {
     return o.Defense;
     }));
     var playRangeShooting = Math.max.apply(Math, dataset.map(function(o) {
     return o.Shooting;
     })) - Math.min.apply(Math, dataset.map(function(o) {
     return o.Shooting;
     }));
     var playRangeAllRound = Math.max.apply(Math, dataset.map(function(o) {
     return o.All_Around;
     })) - Math.min.apply(Math, dataset.map(function(o) {
     return o.All_Around;
     }));
     displayPlayers.forEach(function(d) {
     
     //PLAYMAKING
     var minPM = Math.min.apply(Math, dataset.map(function(o) {
     return o.Playmaking;
     }));
     var playdataPm = [];
     if (Number(d.Playmaking) <= 0) {
     console.log(d.Player_Name + " " + Math.abs(minPM) + " " + Math.abs(d.Playmaking) + " " + playRangePlayMaking);
     var position = ((Math.abs(minPM) - Math.abs(d.Playmaking)) / playRangePlayMaking) * 100;
     playdataPm = ["Playmaking", position, d.Player_Name];
     } else {
     var position = ((d.Playmaking - minPM) / playRangePlayMaking) * 100;
     playdataPm = ["Playmaking", position, d.Player_Name];
     }
     datastack.push(playdataPm);
     //SHOOTING
     var minShoot = Math.min.apply(Math, dataset.map(function(o) {
     return o.Shooting;
     }));
     var playdataShoot = [];
     if (Number(d.Shooting) <= 0) {
     
     var position = ((Math.abs(minShoot) - Math.abs(d.Shooting)) / playRangeShooting) * 100;
     playdataShoot = ["Shooting", position, d.Player_Name];
     } else {
     var position = ((d.Shooting - minShoot) / playRangeShooting) * 100;
     playdataShoot = ["Shooting", position, d.Player_Name];
     }
     datastack.push(playdataShoot);
     //OFFENSE
     var minOffense = Math.min.apply(Math, dataset.map(function(o) {
     return o.Offense;
     }));
     var playdataOffense = [];
     if (Number(d.Offense) <= 0) {
     var position = ((Math.abs(minOffense) - Math.abs(d.Offense)) / playRangeOffense) * 100;
     playdataOffense = ["Offense", position, d.Player_Name];
     } else {
     var position = ((d.Offense - minOffense) / playRangeOffense) * 100;
     playdataOffense = ["Offense", position, d.Player_Name];
     }
     datastack.push(playdataOffense);
     //DEFENSE
     var minDefense = Math.min.apply(Math, dataset.map(function(o) {
     return o.Defense;
     }));
     var playdataDefense = [];
     if (Number(d.Defense) <= 0) {
     var position = ((Math.abs(minDefense) - Math.abs(d.Defense)) / playRangeDefense) * 100;
     playdataDefense = ["Defense", position, d.Player_Name];
     } else {
     var position = ((d.Defense -minDefense) / playRangeDefense) * 100;
     playdataDefense = ["Defense", position, d.Player_Name];
     }
     datastack.push(playdataDefense);
     //All Around
     var minAllAround = Math.min.apply(Math, dataset.map(function(o) {
     return o.All_Around;
     }));
     var playdataAA = [];
     if (Number(d.All_Around) <= 0) {
     var position = ((Math.abs(minAllAround) - Math.abs(d.All_Around)) / playRangeAllRound) * 100;
     playdataAA = ["All Around", position, d.Player_Name];
     } else {
     var position = ((d.All_Around - minAllAround) / playRangeAllRound) * 100;
     playdataAA = ["All Around", position, d.Player_Name];
     }
     datastack.push(playdataAA);
     });
     console.log(datastack);
     var sankey = new Sankey();
     sankey.stack(0, attributestack);
     sankey.stack(1, playerStack);
     //sankey.stack(2,["Good","Bad"]);
     
     sankey.setData(datastack);
     sankey.draw();
     });*/
}
function showResults(results) {
    $('.searchResults').html("");
    if (results.length == 0) {
        $('.searchResults').html('<div style="text-align:center;height:50px;line-height:50px">No records found</div>');
    } else {
        var resultDis = "";
        results.forEach(function(data) {
            resultDis += "<div class='resultsHolder'>";
            resultDis += "<div class='resultsPlayerName'>" + data.Player_Name + "</div>";
            resultDis += "<div class ='resultsPos'>" + data.Position + "</div>";
            resultDis += "<div class='resultsTeamName'>" + data.Team + "</div>";
            resultDis += "</div>";
        });
        $('.searchResults').html(resultDis);
    }
}
function getSearchResult() {
    $('<section class="demo-3"><ul class="bokeh"><li></li><li></li><li></li><li></li></ul>\n\
</section>').appendTo($('.searchResults'));
    var team = $('#searchByTeam').val();
    var posSearch = $('#posSearch').val();
    var stat1Attr = $('#stat1').val();
    var stat1val = $('#stat1Val').val();
    var stat2Attr = $('#stat2').val();
    var stat2val = $('#stat2Val').val();
    var stat3Attr = $('#stat3').val();
    var stat3val = $('#stat3Val').val();
    var results = dataset;
    var tempArr = [];
    var count = 0;
    //filter team 1st
    var teamF = false;
    if (team != "All") {
        teamF = true;
        results.forEach(function(ent) {
            if (ent.Team == team) {
                tempArr.push(ent);
            }

        });
    }

    if (teamF) {
        results = tempArr.slice(0);
    }
    console.log("before" + posSearch);
    console.log(results);
    var tempPos = [];
    var posF = false;
    if (posSearch != "All") {
        posF = true;
        results.forEach(function(ent) {
            if (ent.Position == revPosition(posSearch)) {
                tempPos.push(ent);
            }

        });
    }
    if (posF) {
        results = tempPos.slice(0);
    }
    console.log("position" + posF);
    console.log(results);
    var tempOne = [];
    var oneF = false;
    if (stat1Attr != "None") {
        oneF = true;
        results.forEach(function(ent) {

            if (Number(ent[stat1Attr]) >= Number(stat1val)) {

                tempOne.push(ent);
            }

        });
    }
    if (oneF) {
        results = tempOne;
    }
    var tempTwo = [];
    var twoF = false;
    if (stat2Attr != "None") {
        twoF = true;
        results.forEach(function(ent) {
            if (ent[stat2Attr] >= stat2val) {
                tempTwo.push(ent);
            }

        });
    }
    if (tempTwo.length > 0) {
        results = tempTwo;
    }
    var tempThree = [];
    threeF = false;
    if (stat3Attr != "None") {
        threeF = true;
        results.forEach(function(ent) {
            if (ent[stat3Attr] >= stat3val) {
                tempThree.push(ent);
            }

        });
    }
    if (threeF) {
        results = tempThree;
    }
    $('section.demo-3').remove();
    return results;
}
function sortBy(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
function selectPlayer(name) {
    var att = "";
    $($('.holder')).html("");
    dataset.forEach(function(d) {

        if (d.Player_Name == name) {

            att += '<div class="playerName">' + d.Player_Name + '</div>';
            att += '<div class="position">' + position(d.Position) + '</div>';
            att += '<div class="attrholder" id="attrholder_player1"><div class="priAttr">Primary Attributes</div>';
            att += '<section class="demo-3"><ul class="bokeh"><li></li><li></li><li></li><li></li></ul>';
            att += '</section></div>';
            var attributesPrimary = [];
            var attributesSecondary = [];
            var statsSearch = [];
            statsSearch.push("None");
            $.each(d, function(key, value) {

                var priAttributes = "";
                var secAttributes = "";
                if (key == 'Player_Name' || key == "Team" || key == "Position" || key == "Field_Goals"
                        || key == "Field_Goals_Attempted" || key == "Three_points"
                        || key == "Three_points_attempted" || key == "Free_throw"
                        || key == "Free_throw_attempt" || key == "Offensive_rebounds"
                        || key == "Defensive_rebounds") {
                    return true;
                } else if (key == "Three_points_percentage" || key == "Free_throw_percentage" || key == "Field_Goal_Percentage") {
                    secAttributes += '<div class="attr">';
                    secAttributes += '<div class="key pull-left">' + key + ':</div>';
                    secAttributes += '<div class="value pull-right" id="' + key + '_player_stats_1">' + Math.round(Number(value) * 100) / 100 + '%</div>';
                    secAttributes += '</div>';
                    attributesSecondary.push(secAttributes);
                    statsSearch.push(key);
                } else {


                    priAttributes += '<div class="attr">';
                    priAttributes += '<div class="key pull-left">' + key + ':</div>';
                    priAttributes += '<div class="value pull-right" id="' + key + '_player_stats_1">' + Math.round(Number(value) * 100) / 100 + '</div>';
                    priAttributes += '</div>';
                    attributesPrimary.push(priAttributes);
                    statsSearch.push(key);
                }

            });
            var pos = 0;
            var pos1 = 0;
            $($('.holder')).html(att);

            var print = setInterval(function() {
                if (pos == 0) {
                    $('.demo-3').remove();
                }
                if (pos < attributesPrimary.length) {
                    $(attributesPrimary[pos]).appendTo($('#attrholder_player1'));
                    pos++;
                } else {
                    clearInterval(print);
                    $('<div class="divider"></div>').appendTo($('#attrholder_player1'));
                }

                if (pos == attributesPrimary.length) {
                    var print2 = setInterval(function() {
                        if (pos1 <= attributesSecondary.length - 1) {
                            $(attributesSecondary[pos1]).appendTo($('#attrholder_player1'));
                            pos1++;
                        } else {
                            clearInterval(print2);
                        }
                    }, 100);
                }
                d
            }, 100);
            $.each(statsSearch, function(key, value) {
                if (value !== "") {
                    $('<option class="' + value + '">' + value + '</option>').appendTo($('.statsFilter'));
                }
            });
        }
    });
    //radar_data.push(player_1_data);
//    deployRadar();
}

window.onload = function() {
    d3.csv("data/NBA_Player_Data.csv", function(d) {

        dataset = d;
        if (!data) {
            data = dataset;
        }
        createDataTable();
        //  console.log(teams);
        fillAdmin();
        initMenuBars();
        //init();
        $('#playersStatistics').dataTable();
    });
};
function getByTeam(teamName) {


    dataTouse = [];
    if (teamName != "All") {
        dataset.forEach(function(e) {

            if (e.Team == teamName) {

                this.dataTouse.push(e);
            }

        });
    } else {
        league_average = 0;
        league_total = 0;
        dataTouse = dataset;
        dataset.forEach(function(data) {
            league_total += (numeric(data.PTS));
        });
        league_average = league_total / dataset.length;
    }

    init(dataTouse);
}
function fillAdmin() {
    var options = '  <div class="teamTitle"> Teams </div><div class="teamHolder" id="All">All</div>';
    var options2 = "<option>All</option>";
    var options3 = "<option id='nil'>Select One</option>";
    teams.forEach(function(e) {
        options2 += ('<option id="' + e + '">' + e + '</option>');
        options3 += ('<option id="' + e + '">' + e + '</option>');
        options += ('<div class="teamHolder" id="' + e + '">' + e + "</div>");
    });
    $(options).appendTo($(".teamFilter"));
    $(options2).appendTo($(".searchByTeam"));
    $(options3).appendTo($('.team_select'));
    var teamOptions = '<option id="nil">Select One</option>';
    players.sort();
    players.forEach(function(f) {
        teamOptions += ('<option id="' + f + '">' + f + '</option>');
    });
    $(teamOptions).appendTo($('#player1'));
}
;
function init(data) {
    /* total height is equals to the total number of players * 20px for each bar and *9px for buffer space between players */
    var height = 360 + (data.length * 25 + data.length * 12);
    $("#rankings").css("height", (25 + height) + 'px').css("width", 100 + "%");
    /*Set the paameters for the entire graph */
    $('<div id="rankings"></div>').appendTo($('.rankings'));
    var rankings = d3.select("#rankings")
            .append("svg:svg")
            .attr("height", height + 25)
            .attr("width", 100 + '%')
            .attr('id', "graph");
    var totalPoints = 0;
    data.forEach(function(data) {

        total_points.push(data.PTS);
        totalPoints += (numeric(data.PTS));
    });
    average = totalPoints / data.length;
    /*Set the parameters for the scale of total Points */
    var totalPoint_scale = d3.scale.linear()
            .domain([d3.min(total_points), d3.max(total_points)])
            .range([0, 590]);
    /* This is the x-axis (on top of the graph) */
    rankings.append("line").attr("class", "graph_scale")
            .attr("x1", 150).attr("y1", 130)
            .attr("stroke", "#d9dee2")
            .attr("stroke-width", 1)
            .attr("x2", 850).attr("y2", 130);
    /* create the ticks from the range as state above */
    var points_ticks = Array();
    var tickies = totalPoint_scale.ticks(3);
    points_ticks.push(d3.max(total_points));
    points_ticks.push(tickies[0]);
    points_ticks.push(tickies[1]);
    points_ticks.push(tickies[2]);
    points_ticks.push(average.toFixed(2));
    points_ticks.push(league_average.toFixed(2));
    var scaleTicks = rankings.selectAll(".scale_ticks").data(points_ticks).enter()
            .append("g").attr("class", "scale_ticks").attr("opacity", 1);
    scaleTicks.append("text").attr("style", "font-family:'lato'; font-size:20px")
            .attr("fill", function(d) {
                if (d == average.toFixed(2)) {
                    return "#fff";
                } else {
                    return "#fff";
                }
                ;
            })
            .attr("x", function(d) {

                return (150 + totalPoint_scale(d));
            }).attr("y", function(d) {
        if (d == average.toFixed(2)) {
            return 100;
        } else {
            return 120;
        }
    })
            .attr("text-anchor", "middle")
            .text(function(d) {
                if (d != league_average.toFixed(2)) {
                    d = d + " points";
                    return d;
                } else {
                    return "";
                }
            });
    scaleTicks.append("line").attr("y2", 0)
            .transition().duration(500)
            .attr("id", function(d) {
                if (d == average.toFixed(2)) {
                    return "team_average";
                }
            })
            .attr("x1", function(d) {
                return (150 + totalPoint_scale(d));
            }).attr("y1", 125)
            .attr("stroke", function(d) {
                if (d == average.toFixed(2)) {
                    if (league_average > average) {
                        return "#850909";
                    } else {
                        return "#0B8A1A";
                    }
                } else if (d == league_average.toFixed(2)) {
                    return "#850909";
                } else {
                    return "#d9dee2";
                }
            })
            .attr("stroke-width", 2)
            .attr("x2", function(d) {
                return (150 + totalPoint_scale(d));
            }).attr("y2", height);
    /*add bars into the graph */

    rankings.selectAll(".team_bars_container").data(data).enter().append("g")
            .attr("class", "team_bars_container").attr("transform", function(d, i) {
        var xpos = 0;
        var ypos = 150 + ((i * 25) + (i * 9));
        return "translate(" + xpos + "," + ypos + ")";
    }).attr("opacity", 1).on("mouseover", function(d, i) {
        $('.teamFilter').css("opacity", "0.4");
        $('.teamFilter').css("z-index", "-10");
        // teamtooltip(req_relationship, d3.select(this), payroll_scale, winamt_scale, height);
        hoverShow(d3.select(this), totalPoint_scale, height, i);
        d3.select(this).attr("opacity", 1.0);
        d3.selectAll(".post_season_stuff").transition().duration(400)
                .attr("opacity", 0.0);
    }).on("mouseout", function() {
        $('.teamFilter').css("opacity", "1");
        $('.teamFilter').css("z-index", "2");
        d3.selectAll(".team_tooltip").transition().duration(300)
                .attr("opacity", 0).each("end", function() {
            d3.select(this).remove();
        });
        d3.selectAll(".team_bars_container").transition().duration(50).attr("opacity", 1);
        //d3.select(this).attr("opacity",0.6);

        d3.select(this).select(".team_bar_bg").transition()
                .attr("fill", "#ffffff").attr("opacity", 0)
                .attr("width", function(d, i) {
                    var amount = total_points[i];
                    return totalPoint_scale(amount);
                })
                .attr("ry", 0).attr("rx", 0);
        d3.timer.flush();
        d3.selectAll(".scale_ticks").transition().duration(100)
                .attr("opacity", 1);
        d3.selectAll(".hover_marker").transition()
                .duration(100).attr("opacity", 0.0).each("end", function() {
            d3.select(this).remove();
        });
        d3.selectAll(".sliding_amount_value").transition()
                .duration(100).attr("opacity", 0.0).each("end", function() {
            d3.select(this).remove();
        });
        d3.selectAll(".post_season_stuff").transition().duration(300)
                .attr("opacity", 1.0);
    });
    //add a background rectangle to handle the pointer events
    d3.selectAll(".team_bars_container").append("rect").attr("class", "team_bar_bg")
            .attr("x", 150).attr("height", 20).attr("width", function(d, i) {


        return totalPoint_scale(d.PTS);
    })
            .attr("fill", "#ffffff").attr("opacity", 1);
    //add the players name to the group
    d3.selectAll(".team_bars_container").append("text")
            .text(function(d, i) {
                return data[i].Player_Name;
            }).attr("fill", "#fff")
            .attr("style", "font-family:'lato'; font-size:16px; cursor:pointer; font-weight:normal;")
            .attr("y", 16).attr("text-anchor", "end").attr("x", 130)
            .on("click", function(d, i) {
                /* handle clicking on player name */

                showPlayerStats(data[i].Player_Name);
            });
    //PLAYER SCORE BAR
    d3.selectAll(".team_bars_container").append("rect").attr("width", 0)
            .attr("class", "player_score").attr("x", 150)
            .attr("stroke", "#ffffff").attr("stroke-width", 1)
            .attr("height", 20).attr("fill", "#965107")
            .attr("pointer-events", "none")
            .transition().duration(1600)
            .attr("width", function(d) {
                return totalPoint_scale(d.PTS);
            });
    //add the rectangle that represents the payroll data
    /*    d3.selectAll(".team_bars_container").append("rect")
     .attr("class", "team_winamt_data").attr("x", 130)
     .attr("stroke", "#ffffff").attr("stroke-width", 1)
     .attr("pointer-events", "none")
     .attr("y", 11).attr("height", 9).attr("fill", "#9dbab5")
     .transition().duration(600).attr("width", function(d, i) {
     var amount = total_points[i];
     
     return totalPoint_scale(amount);
     
     
     });*/
}
;
function showPlayerStats(player) {

    $('.databody').hide(function() {
        $('.compare').show(function() {
            //console.log(player);

        });
    });
    selectPlayer(player);
    $("#player1").val(player);
}
function hoverShow(d3selection, totalPointScale, height, index) {
    d3.selectAll(".team_tooltip").transition().duration(300)
            .attr("opacity", 0).each("end", function() {
        d3.select(this).remove();
    });
    var scale_ticks = d3.selectAll(".scale_ticks").data();
    var playersPoints = d3selection.data()[0].PTS;
    var created = false;
    // d3.timer.flush();
    d3.selectAll(".scale_ticks").transition().duration(200)
            .delay(300).attr("opacity", 0.0)
            .each("end", function() {
                if (!created) {
                    created = true;
                    d3.selectAll(".team_bars_container").each(function() {
                        if (d3.select(this).data()[0] != d3selection.data()[0]) {
                            d3.select(this).transition().duration(600).attr("opacity", 0.2);
                        }
                    });
                    d3.select("#rankings").selectAll("svg").append("line")
                            .attr("class", "hover_marker")
                            .attr("x1", 0).attr("x2", 0)
                            .attr("y1", 95).attr("y2", height)
                            .attr("stroke", "#c2bca4")
                            .attr("opacity", 0.0)
                            .attr("pointer-events", "none")
                            .attr("stroke-width", 2).transition().duration(300)
                            .attr("opacity", 1.0)
                            .attr("x1", function() {
                                return (150 + totalPointScale(playersPoints));
                            }).attr("x2", function() {
                        return (150 + totalPointScale(playersPoints));
                    });
                    var sliding_payroll_text = d3.select("#rankings").selectAll("svg").append("g")
                            .attr("class", "sliding_amount_value")
                            .attr("transform", "translate(150,90)")
                            .attr("opacity", 0.0);
                    var payroll_rect_box = sliding_payroll_text.append("rect")
                            .attr("width", 125).attr("height", 25)
                            .attr("fill", "rgba(0,0,0,0.7").attr("x", 0).attr("y", index * 29)
                            .attr("ry", 5).attr("rx", 5);
                    var payroll_text_chunk = sliding_payroll_text.append("text")
                            .attr("style", "font-family:'lato'; font-size:16px; cursor:pointer")
                            .attr("x", 62.5).attr("y", index * 29 + 18).text(playersPoints + ' Points')
                            .attr("text-anchor", "middle").attr("fill", "#ffffff");
                    sliding_payroll_text.transition().duration(300)
                            .attr("opacity", 1.0)
                            .attr("transform", function() {
                                var xpos = (68 + totalPointScale(playersPoints));
                                var ypos = 90;
                                return "translate(" + xpos + "," + ypos + ")";
                            });
                }
            });
    var tg = d3selection.select(".team_bar_bg").transition()
            .attr("fill", "#ebeef0").attr("opacity", 1)
            .attr("width", 610)
            .attr("ry", 0).attr("rx", 0).each("end", function() {

        var tt = d3selection.append("g").attr("class", "team_tooltip")
                .attr("transform", "translate(800,0)")
                .attr("pointer-events", "none");
        //the path to make the end of the rectangle appear pointed			
        var ttp = tt.append("path").attr("d", "M -25 0 L 0 10 L -25 20 L -25 0")
                .attr("fill", "#ffffff").transition().duration(300).attr("fill", "#ebeef0")
                .attr("pointer-events", "none");
        //the rectangle that acts as a bg for the info
        var ttr = tt.append("rect").attr("width", 600).attr("height", function(d) {
            return 250;
        }).attr("fill", "rgba(0, 0, 0, 0.7)").attr("y", function(d, i) {
            return -25;
        }).attr("pointer-events", "none")
                .attr("rx", 5).attr("ry", 5).attr("opacity", 0.0)
                .transition().duration(300).attr("opacity", 1)
                .attr("style", "background: rgba(0,0,0,0.5")
                .each("end", function() {
                    var green = "#0AFF00";
                    var yellow = "#FFF500";
                    var orange = "#FC5B00";
                    var red = "#FF0000";
                    var chosenColor;
                    var x = index / data.length;
                    switch (true) {
                        case x >= 0 && x <= 0.25 :
                            chosenColor = green;
                            console.log("green");
                            break;
                        case x > 0.25 && x <= 0.5 :
                            chosenColor = yellow;
                            console.log("yellow");
                            break;
                        case x > 0.5 && x <= 0.75 :
                            chosenColor = orange;
                            console.log("orange");
                            break;
                        case x > 0.75 && x <= 1 :
                            chosenColor = red;
                            console.log("red");
                            break;
                        default :
                            chosenColor = red;
                            console.log("default");
                            break;
                    }
                    var countX = 0;
                    var countY = 0;
                    $.each(d3selection.data()[0], function(key, value) {
                        tt.append("text").text(function(d) {

                            return key + " : ";
                        }).attr("style", "font-family:lato; font-size:16px;line-height:20px")
                                .attr("x", function(d, i) {

                                    if (countX < 14) {
                                        return 10;
                                    } else {
                                        return 340;
                                    }
                                }).attr("y", function(d, i) {
                            if (countY == 14) {
                                countY = 0;
                            }

                            return countY * 16;
                        }).transition().duration(300).attr("fill", "#ffffff");
                        tt.append("text").text(function(d) {

                            if ((value / value) == 1) {

                                return Math.round(value * 100) / 100;
                            } else {
                                return value;
                            }
                        }).attr("style", " font-family:lato; font-size:16px; line-height:20px;")
                                .attr("x", function(d, i) {

                                    if (countX < 14) {
                                        return 200;
                                    } else {
                                        return 500;
                                    }
                                }).attr("y", function(d, i) {
                            if (countY == 14) {
                                countY = 0;
                            }

                            return countY * 16;
                        }).transition().duration(50).attr("fill", chosenColor);
                        countY++;
                        countX++;
                    });
                });
    });
}
function createDataTable() {
    var titles = "";
    titles += "<thead class='fixed'><tr>";
    titles += "<th>Players Name </th>";
    titles += "<th>Team </th>";
    titles += "<th>Position</th>";
    titles += "<th>Minutes Played</th>";
    //   titles += "<th>Field Goals Made </th>";
//    titles += "<th>Field Goals Attempted </th>";
    titles += "<th>Field Goals % </th>";
    //   titles += "<th>3 Points</th>";
    //  titles += "<th>3Points Attempted </th>";
    titles += "<th>3 Point % </th>";
    //  titles += "<th>Free Throw</th>";
    //  titles += "<th>Free Throw Attempted</th>";
    titles += "<th>Free Throw %</th>";
    //  titles += "<th>Offensive Rebounds </th>";
    //  titles += "<th>Defensive Rebounds </th>";
    titles += "<th>Total Rebounds</th>";
    titles += "<th>Assists </th>";
    titles += "<th>Steals</th>";
    titles += "<th>Turnovers</th>";
    titles += "<th>Blocks </th>";
    titles += "<th>Personal Fouls</th>";
    titles += "<th>Points</th>";
    titles += "</tr></thead>";
    $(titles).appendTo("table");
    var contents = "<tbody>";
    data.forEach(function(data) {

        var header = $('th').eq($(this).index()).text();
        contents += "<tr>";
        contents += "<td>" + data.Player_Name + "</td>";
        players.push(data.Player_Name);
        contents += "<td>" + data.Team + "</td>";
        var hasTeam = checkTeam(data.Team);
        if (!hasTeam) {
            teams.push(data.Team);
            teamPos[data.Team] = {length: 1, playmaking: data.PlayMaking, offense: data.Offense, defense: data.Defense, shooting: data.Shooting, allaround: data.All_Around};

        } else {
            teamPos[data.Team].length += 1;
            teamPos[data.Team].playmaking += data.PlayMaking;
            teamPos[data.Team].offense += data.Offense;
            teamPos[data.Team].defense += data.Defense;
            teamPos[data.Team].shooting += data.Shooting;
            teamPos[data.Team].allaround += data.All_Around;

        }
        contents += "<td>" + position(data.Position) + "</td>";
        contents += "<td>" + Number(data.Minutes) + "</td>";
        contents += "<td>" + data.Field_Goal_Percentage + "</td>";
        contents += "<td>" + data.Three_points_percentage + "</td>";
        contents += "<td>" + data.Free_throw_percentage + "</td>";
        contents += "<td>" + data.Total_rebounds + "</td>";
        contents += "<td>" + data.Assists + "</td>";
        contents += "<td>" + data.Steals + "</td>";
        contents += "<td>" + data.Turnovers + "</td>";
        contents += "<td>" + data.Blocks + "</td>";
        contents += "<td>" + data.Personal_fouls + "</td>";
        contents += "<td>" + Number(data.PTS) + "</td>";
        total_points.push(numeric(data.PTS));
        teams[data.tm] += data.PTS;
        contents += "</tr>";
    });
    console.log(teamPos);
    //  teamPos.forEach(function(data) {
  
    console.log(teamPos);
    contents += '</tbody>';
    $('#teams').html(teams.length + "<div class='statsTitle'>Teams</div>");
    $('#players').html(players.length + "<div class='statsTitle'>Players</div>");
    $('.choose').html("");
    $('<div class="navigate"><div class="tog" id="tableData"><i class="fa fa-table"></i><div>Tables</div></div><div class="tog" id="graphs"><i class="fa fa-tasks"></i><div>Graphs</div></div></div>').appendTo($('.choose'));
    $(contents).appendTo("table");
    function checkTeam(team) {
        var exist = false;
        teams.forEach(function(e) {
            if (team === e) {
                exist = true;
            }
        });
        return exist;
    }
    ;
}
;
function numeric(num) {

    var integer = +num;
    return integer;
}
;
/*menu js*/

function normalcdf(X) {   //HASTINGS.  MAX ERROR = .000001
    var T = 1 / (1 + .2316419 * Math.abs(X));
    var D = .3989423 * Math.exp(-X * X / 2);
    var Prob = D * T * (.3193815 + T * (-.3565638 + T * (1.781478 + T * (-1.821256 + T * 1.330274))));
    if (X > 0) {
        Prob = 1 - Prob
    }
    return Prob
}

function compute(Z, M, SD) {

    with (Math) {
        if (SD < 0) {
            alert("The standard deviation must be nonnegative.")
        } else if (SD == 0) {
            if (Z < M) {
                Prob = 0
            } else {
                Prob = 1
            }
        } else {
            Prob = normalcdf((Z - M) / SD);
            Prob = round(100000 * Prob) / 100000;
        }
    }
    return Prob;
}
// done hiding from old browsers -->

function calculateMeans() {
    var rowCheck = 1;
    dataset.forEach(function(player) {
        var attributeCount = 0;
        $.each(player, function(key, value) {

            if (key == 'Player_Name' || key == "Tm" || key == "Pos") {
                return true;
            } else {

                if (rowCheck != 1) {
                    total[attributeCount] += numeric(value);
                } else
                    total.push(numeric(value));
            }

            attributeCount++;
        });
        rowCheck++;
    });
    total.forEach(function(totalScore) {
        means.push(totalScore / dataset.length);
    });
    //console.log(means);

}
;
function calculateSD() {
    var rowCheck = 1;
    dataset.forEach(function(player) {
        var attributeCount = 0;
        $.each(player, function(key, value) {

            if (key == 'Player_Name' || key == "Tm" || key == "Pos") {
                return true;
            } else {

                if (rowCheck != 1) {

                    tempSD[attributeCount] += (Math.pow((numeric(value) - means[attributeCount]), 2));
                } else
                    tempSD.push((Math.pow(numeric(value) - means[attributeCount], 2)));
                // console.log(numeric(value) + " - " + means[attributeCount])
            }

            attributeCount++;
        });
        rowCheck++;
    });
    tempSD.forEach(function(totalScore) {
        variance.push(totalScore / dataset.length);
    });
    //  console.log(means.length + " " + variance.length + " " + tempSD.length);
    // console.log(variance);
    variance.forEach(function(totalScore) {
        SD.push(Math.sqrt(totalScore));
    });
    console.log(SD);
}
function position(pos) {
    if (pos == "C") {
        return "Center";
    } else if (pos == "SF") {
        return "Small Forward";
    } else if (pos == "SG") {
        return "Shooting Guard";
    } else if (pos == "PG") {
        return "Point Guard";
    } else {
        return "Power Forward";
    }
}
function revPosition(pos) {
    if (pos == "Center") {
        return "C";
    } else if (pos == "Small Forward") {
        return "SF";
    } else if (pos == "Shooting Guard") {
        return "SG";
    } else if (pos == "Point Guard") {
        return "PG";
    } else {
        return "PF";
    }
}

function num(number) {
    return Number(number);
}
