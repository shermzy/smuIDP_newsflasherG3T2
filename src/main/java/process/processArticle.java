/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.ArticleDAO;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;

/**
 *
 * @author Sherman
 */
@WebServlet(name = "processArticle", urlPatterns = {"/processArticle"})
public class processArticle extends HttpServlet {

    int BUFFER_LENGTH = 4096;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            String newsTitle = "";
            String newsSnippet = "";
            String newslink = "";
            /*
             if (request.getParameter("newstitle") != null) {
             newsTitle = (String) request.getParameter("newstitle");
             System.out.println("news title : " + newsTitle);
             }

             if (request.getParameter("newssnippet") != null) {
             newsSnippet = (String) request.getParameter("newssnippet");
             System.out.println(" newssnippet : " + newsSnippet);
             }

             if (request.getParameter("newslink") != null) {
             newslink = (String) request.getParameter("newslink");
             System.out.println(" newslink : " + newslink);
             }
             String[] articleDetails = {newsTitle, newsSnippet, newslink};
           
           
             //ArticleDAO.insertArticle(articleDetails);
             response.sendRedirect("upload.jsp");*/

            boolean isMultipart = ServletFileUpload.isMultipartContent(request);

            if (isMultipart) {
                // Create a factory for disk-based file items  
                FileItemFactory factory = new DiskFileItemFactory();
                // Create a new file upload handler  
                ServletFileUpload upload = new ServletFileUpload(factory);
                try {
                    // Parse the request  
                    List /* FileItem */ items = upload.parseRequest(request);
                    Iterator iterator = items.iterator();
                    while (iterator.hasNext()) {
                        FileItem item = (FileItem) iterator.next();
                        if (!item.isFormField()) {
                            String fileName = item.getName();
                            String root = getServletContext().getRealPath("/");
                      
                          
                            File path = new File(root + "/uploads/articles");
                            if (!path.exists()) {
                                boolean status = path.mkdirs();
                            }
                            File uploadedFile = new File(path + "/" + fileName);
                            System.out.println(uploadedFile.getAbsolutePath());
                        /*    if (fileName != "") {
                                item.write(uploadedFile);
                            } else {
                                out.println("file not found");
                            }*/
                            out.println("<h1>File Uploaded Successfully....:-)@ " + uploadedFile.getAbsolutePath() + "</h1><br/>" + uploadedFile);
                        } else {
                            String abc = item.getString();
                            //        out.println("<br><br><h1>"+abc+"</h1><br><br>");  
                        }
                    }
                } catch (FileUploadException e) {
                    out.println(e);
                } catch (Exception e) {
                    out.println(e);
                }
            } else {
                out.println("Not Multipart");
            }
        } finally {
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
