/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.ArticleDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

/**
 *
 * @author Sherman
 */
public class getNews extends HttpServlet {

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
            //get Specific news
            if (request.getParameter("type") != null) {
                if (request.getParameter("type").equalsIgnoreCase("single")) {
                    System.out.println(request.getParameter("type"));
                    try {
                        JSONObject articles = ArticleDAO.getSingleArticle((String) request.getParameter("article"));
                        System.out.println("hi: " + (String) request.getParameter("article"));
                        JSONArray stories = ArticleDAO.getStories((String) request.getParameter("article"));
                        articles.put("stories", stories);

                        System.out.println(articles);
                        out.print(articles);
                    } catch (Exception e) {

                    }
                }else{
                    
                    String searchWords = (String) request.getParameter("article");
                    JSONObject articles = ArticleDAO.getSearchArticle(searchWords);
                     out.print(articles);
                }
            } else {
                //get all news article for main page
                JSONObject articles = ArticleDAO.getArticles();

                try {
                    JSONTokener tokener = new JSONTokener(articles.toString()); //tokenize the ugly JSON string
                    JSONObject finalResult = new JSONObject(tokener); // convert it to JSON object
                    out.print(finalResult.toString(4));
                } catch (Exception e) {

                }
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
