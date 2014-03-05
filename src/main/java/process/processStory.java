/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.ArticleDAO;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author Sherman
 */
public class processStory extends HttpServlet {

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
        String commentAgencyName = "";
        String commentStory = "";
        String commentLink = "";
        String originalStory = "";
        String date = "";
        File uploadedFile = null;
        String imageLink = "";
        try {
            /* TODO output your page here. You may use following sample code. */

            if (request.getParameter("commentagencyname") != null) {
                commentAgencyName = (String) request.getParameter("commentagencyname");
                System.out.println("commentAgencyName : " + commentAgencyName);
            }

            if (request.getParameter("commentstory") != null) {
                commentStory = (String) request.getParameter("commentstory");
                System.out.println(" commentstory : " + commentStory);
            }

            if (request.getParameter("commentLink") != null) {
                commentLink = (String) request.getParameter("commentLink");
                System.out.println(" commentLink : " + commentLink);
            }
            if (request.getParameter("originalstory") != null) {
                originalStory = (String) request.getParameter("originalstory");
                System.out.println(" originalStory : " + originalStory);
            }
             if (request.getParameter("time") != null) {
                date = (String) request.getParameter("time");
                System.out.println(" date : " + date);
            }
            String[] newsStory = {commentAgencyName, commentStory, commentLink, originalStory, date};
            ArticleDAO.insertStory(newsStory);
        } catch (Exception e) {

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
