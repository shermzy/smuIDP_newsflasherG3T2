<%-- 
    Document   : prac
    Created on : Apr 4, 2014, 5:01:45 PM
    Author     : Sherman
--%>



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

        </div>
        <div class="newsDetails" id="newsDetails" style="height: 447px; display: block;">


    <div class="newsArticle" style="height: 422px;">
        <div class="foregroundStory" style="background-image: url(http://newsflasher-smuidp21.rhcloud.com/images/articles/articlePicture_05-03-2014_01-44.png); background-color: rgb(68, 68, 68); background-position: 50% 50%; background-repeat: no-repeat no-repeat;"></div>

        <!--Issue-->
        <div class="overlay" style="margin-top: -422px;">
            <div class="col-md-3 hidden-xs">

            </div>

            

            <div class="col-md-offset-1 col-sm-offset-1 col-md-4 col-sm-4" id="middleStory">

            <div class="news_caption_title" id="originalStory">Should you buy bitcoin?</div><div class="list-group"><a href="#" class="list-group-item"><p>Bitcoin is the currency of the Internet: a distributed, worldwide, decentralized digital money. Unlike traditional currencies such as dollars, bitcoins are issued and managed without any central authority</p></a> <a href="#" class="list-group-item"><p>
To some, Bitcoin today is considered "better" than other stores of value because of reasons like easy to hide, impossible to steal and not controlled by central authority. </p></a> </div></div>
            <div class="col-md-4">


            </div>
        </div>
    </div>
    <!--End Issue-->
    <!--News slider-->
    <div id="cbp-fwslider" class="cbp-fwslider" style="height: 422px;">

    <ul id="comments" style="width: 320%; transition: -webkit-transform 500ms ease; -webkit-transition: -webkit-transform 500ms ease;"><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/techcrunch.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">TechCrunch</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Since Overstock.com started to accept Bitcoin as a purchase currency, the company has received a good press for its efforts to support the nascent cryptocurrency. Working with Coinbase to process Bitcoin, Overstock.com announced that it crossed the million-dollar sale mark in the currency earlier this month. Bitcoin has settled in the “$20k to $30k” range, and is “gradually increasing from there."</div><div class="storyLink"><a href="http://techcrunch.com/2014/03/12/overstocks-bitcoin-purchases-account-for-less-than-1-of-revenue-but-its-growing/">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/yahoo.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Yahoo</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Goldman Sachs (GS) Group Inc. analysts see Bitcoin as an innovative payments technology while doubting that it will evolve into a true alternative currency. It is only a matter of time before major incumbents develop a digital currency strategy</div><div class="storyLink"><a href="http://www.bloomberg.com/news/2014-03-12/goldman-sachs-sees-bitcoin-s-promise-in-payments-over-currency.html">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="/uploads/newsAgency/CNBC.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">CNBC</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">Bitcoin is valuable as a currency because of the economic efficiencies the bitcoin network is already creating as transactions flow over it. As with the Internet, more applications will flourish which will make the bitcoin network, and thus bitcoin as a currency, valuable.</div><div class="storyLink"><a href="http://www.boston.com/blogs/news/opinion/bostoncomment/2014/02/south_stations_bitcoin_atm_sign_of_things_to_come.html">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/venturebeat.png" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Venturebeat</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">While bitcoin represents a significant step in the evolution toward an Internet-based digital money ecosystem, it’s not clear that bitcoin itself will be one of surviving digital currencies. I also don’t see bitcoin, or any other digital currency, gaining full acceptance while escaping government regulation.                 </div><div class="storyLink"><a href="http://blogs.wsj.com/cio/2014/02/12/bitcoin-and-the-internet-of-money/">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/facebook.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Facebook</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">A life on bitcoin.For 100+ days from late July to the end of October, 2013, this intrepid couple place themselves in a social experiment where they are compelled to evangelize the controversial and fascinating bitcoin to survive. It can make life effective.</div><div class="storyLink"><a href="https://www.facebook.com/LifeOnBitcoin">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Michael Snyder: End of our economy #bitcoinsucks</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li><li class="stories negativeNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Parker Boyack You need to go mom and pops, much better chance of getting someone to take it. Big box stores will never allow it</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li><li class="stories positiveNews " style="height: 447px; width: 12.5%;"> <div class="story-header"><img src="uploads/newsAgency/twitter.jpg" class="commentpic pull-left" width="70px" alt=""><div class="story-agency"><div class="story-metadata-name">Twitter</div><div class="story-metadata-date">4 weeks ago</div></div></div><div class="story">@Leo Wandersleb Well, my first thought was, why advertise the shop if they don't take bitcoin but then, hey why not also name all the places that in July 2013 refused to take the money # bitcoinsneutral</div><div class="storyLink"><a href="www.twitter.com">Full Story Here</a></div>  </li></ul><nav><span class="cbp-fwprev">&lt;</span><span class="cbp-fwnext">&gt;</span></nav><div class="cbp-fwdots"><span class="cbp-fwcurrent"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>
    <div class="menu visible-xs" style="width: 1776px;">


        <div class="menuClass" id="filter">  
            <i class="fa fa-filter filter menuIcons"></i><div class="font12 lightGrey"> Filter</div>

        </div>

        <div class="menuClass home" id="backButton"> <i class="fa fa-home menuIcons"></i><div class="font12 lightGrey"> Home</div></div>
    </div>
</div>

            </body>



            <%@include file="footer.jsp" %> 
            <script type="text/javascript" src="js/backfix.min.js"></script>

           