<%-- 
    Document   : upload
    Created on : Feb 21, 2014, 11:47:03 AM
    Author     : Sherman
--%>
<%@include file="header.jsp" %> 
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<link href="css/dropzone.css" rel="stylesheet" type="text/css" />
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>The Daily Planet</title>
    </head>
    <body>
        <div class="content">
            <div class="container">
                <form action="processArticle" method="POST" enctype="multipart/form-data">
                    <div class="col-md-4 col-md-offset-1">
                        <div class="row">
                            News Title:
                            <input type="text" class="form-control" placeholder="News Title" name="newstitle"/>

                        </div>
                        <div class="row category" data-toggle="buttons"> 
                            <span class="title">News Category:</span> 
                                <label class="btn news-btn Hot">
                                <input type="checkbox" name="cat" value="Hot" class="toggle"/> Hot </label>  
                            <label class="btn news-btn Pol">
                                <input type="checkbox" name="cat" value="Pol" class="toggle"/> Politics </label>  
                            <label class="btn news-btn Entertainment">
                                <input type="checkbox" name="cat" value="Entertainment" class="toggle"/> Entertainment </label>
                            <label class="btn news-btn Tech"> 
                                <input type="checkbox" name="cat" value="Tech" class="toggle"/> Technology </label>
                            <label class="btn news-btn Biz">
                                <input type="checkbox" name="cat" value="Biz" class="toggle"/> Business</label>
                                          <label class="btn news-btn Biz">
                                <input type="checkbox" name="cat" value="Sports" class="toggle"/> Sports</label>

                        </div>

                        <div class="row" > 
                            News Snippet:
                            <textarea type="text" class="form-control"  name="newssnippet" rows="5"></textarea>
                        </div>
                        <div class="row" > 
                            News Link:
                            <input class="form-control" type="text" name="newslink">
                        </div>
                        <div class="row"> 
                           Keywords: Delimiter -> ";"
                            <input class="form-control" type="text" name="newslink">
                        </div>
                        <input name="entrant" type="hidden" id="entrant">
                        <div class="row" > 
                            <button type="submit" class="btn btn-5 btn-5a" id="addnews">Add</button>
                        </div>
                        <div style="padding-top:20px">
                            <a href="/newsflasher/processNews">Check news</a>
                        </div>
                    </div>
                    <div class="col-md-4">

                        Photo upload:
                        <div class="fileupload fileupload-new"><input type="hidden">
                            <div class="fileupload-new thumbnail">
                                <img src="http://www.placehold.it/320x320/EFEFEF/AAAAAA&amp;text=no+image" alt="" id="blah">
                            </div>

                            <div class="form-controls">
                                <span class="btn default btn-file">
                                    <span class="fileupload-new">
                                        <i class="fa fa-paper-clip"></i> Select image
                                    </span>

                                    <input type="file" class="default" id="picture" name="picture">
                                </span>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <%@include file="footer.jsp" %> 
        <script>
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        $('#blah').attr('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }

            $("#picture").change(function() {
                readURL(this);
            });
        </script>