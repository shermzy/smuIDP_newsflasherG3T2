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
        <title>JSP Page</title>
    </head>
    <body>
        <div class="content">
            <div class="container">
                <form action="processArticle" method="POST" enctype="multipart/form-data">
                    <div class="col-md-4 col-md-offset-1">

                        News Title:
                        <input type="text" class="form-control" placeholder="News Title" name="newstitle"/>



                        News Snippet:
                        <textarea type="text" class="form-control"  name="newssnippet" rows="5"></textarea>

                        News Link:
                        <input class="form-control" type="text" name="newslink">

                        <button type="submit" class="btn btn-5 btn-5a" id="addnews">Add</button>
                    </div>
                    <div class="col-md-4">

                        Photo upload:
                        <div class="fileupload fileupload-new"><input type="hidden">
                            <div class="fileupload-new thumbnail" style="width: 320px; height: 400px;">
                                <img src="http://www.placehold.it/320x400/EFEFEF/AAAAAA&amp;text=no+image" alt="" id="blah">
                            </div>

                            <div>
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