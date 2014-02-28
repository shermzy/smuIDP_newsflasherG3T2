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
            <div class="bugCage">
                <span class="bugAcro">P</span>
                <span class="bugTitle">est</span> 
                <span class="bugAcro">C</span>
                <span class="bugTitle">ontrol</span> 
                <span class="bugAcro">B</span>
                <span class="bugTitle">ureau</span> 
                <form action="processBug" method="POST">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="row">
                            Bug Species:
                         <textarea rows="5" placeholder="Walk me through..." name="bug" class="form-control" type="text"/></textarea>
                        Extermination Plan:
                        <textarea rows="5" name="plan" class="form-control" type="text"/></textarea>
                        </div>
                        <div class="row">
                            <input type="submit" class="btn green form-control">
                        </div>
                    </div>
                </form>

            </div>
        </div>


        <%@include file="footer.jsp" %> 
        <script>

        </script>