<%-- 
    Document   : af
    Created on : Mar 17, 2014, 2:46:40 PM
    Author     : Sherman
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link href="css/afCSS.css" rel="stylesheet" type="text/css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'>
        <link href="css/bootstrap/css/bootstrap.min.css"
              rel="stylesheet" type="text/css" />

    </head>
    <body>
        <!-- menu bar -->

        <nav id="cbp-hrmenu" class="cbp-hrmenu">
            <ul>
                <li>
                    <div class="navHeads" id="main">
                        <i class="fa fa-user menuIcons">
                        </i>
                        <div class="navName">Main</div>
                    </div>
                </li>
                <li>
                    <div class="navHeads" id="compare"><i class="fa fa-dribbble menuIcons"></i>PVP</div>
                </li>
                <li>
                    <div class="navHeads" id="teamTrade"><i class="fa fa-dribbble menuIcons"></i>Teams</div>
                </li>
            </ul>
        </nav>
        <!-- OVERVIEW-->
        <div class="main databody">
            <div class="overall">
                <div class="stats" id="players">

                </div>
                <div class="stats" id="teams">

                </div>

            </div>
            <div class="choose"><section class="demo-3">
                    <ul class="bokeh">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>';
                </section></div>
            <!-- Data Table-->
            <div class="dataTable" id="dt">
                <table id="playersStatistics">
                </table>
            </div>
            <div class="leagueGraph">
                <div class="teamFilter">
                </div>
                <div class="rankings" id="ranking" style="display:none">

                </div>
            </div>
            <!--End Data -->
        </div>

        <!-- END OVERVIEW-->

        <!--PLAYER VS PLAYER -->
        <div class="compare databody" style="display:none">
            <div class="playersCom">
                <div class="col-md-4">

                    <div class="selection"><select class="players" id="player1"></select></div>
                    <div class="holder">

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="searchParameters">
                        <div class="searchTitle middle" id="teamSearch">Teams</div>
                        <select class="seachSelect searchByTeam" id="searchByTeam">

                        </select>

                        <div class="searchTitle middle">Position</div>
                        <select class="seachSelect" id="posSearch">
                            <option>All</option>
                            <option>Small Forward</option>
                            <option>Power Forward</option>
                            <option>Center</option>
                            <option>Shooting Guard</option>
                            <option>Point Guard</option>
                        </select>
                        <div class="preferedStats">
                            <div class="searchTitle">Preferred Attributes</div>
                            <div class="pStats">
                                <select class="statsFilter" id="stat1">

                                </select>
                                <input type="text" class="searchVal" id="stat1Val"/></div>
                            <div class="pStats">
                                <select class="statsFilter" id="stat2">

                                </select>
                                <input type="text" class="searchVal" id="stat2Val"/></div>
                            <div class="pStats">
                                <select class="statsFilter" id="stat3">

                                </select>
                                <input type="text" class="searchVal" id="stat3Val"/></div>
                        </div>
                    </div>
                    <div class="search">
                        <div class="searchBtn">Search</div>
                    </div>
                    <div class="searchResults"></div>
                    <div id="sankey">Compare</div>
                </div>
                <div class="col-md-4">
                    <div id="player_2">

                    </div>
                </div>
            </div>
        </div>
        <div class="sankey">
            <div id='sankeyGraph' style="width:1000px;height:1000px">
                &nbsp;
            </div>
        </div>

        <!--END PLAYER VS PLAYER -->
        <div class="teamTrade databody">
            <div id="teamTrading">
                <!-- TEAM 1 -->
                <div class="col-md-6">
                    <select class="team_select" id="teamSelect_team1"></select>
                    <div class="teamContainer" id="teamContainer_one">

                    </div>
                </div>

                <!-- TEAM 2 -->
                <div class="col-md-6">
                    <select class="team_select" id="teamSelect_team2"></select>
                    <div class="teamContainer" id="teamContainer_two">

                    </div>
                </div>
            </div>
        </div>

    </body>
</html>

<script src="js/d3.js"></script>

<script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="js/classie.js"></script>
<script src="js/jquery.dataTables.min.js"></script>
<script src="js/afjs.js"></script>
<script src="js/radar.js"></script>
    <script src="js/sankey.js" type="text/javascript"></script>  
<script>

</script>