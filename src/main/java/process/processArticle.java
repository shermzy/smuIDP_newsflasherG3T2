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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
            String absoultePath = "";
            String imageLink = "";
            String pictureName = "";
            File uploadedFile = null;
            ArrayList<String> cat = new ArrayList<String>();
            boolean isMultipart = ServletFileUpload.isMultipartContent(request);
            String OSDataFolder = System.getenv("OPENSHIFT_DATA_DIR");
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
                            if (OSDataFolder == null) {
                                String root = getServletContext().getRealPath("/");
                                DateFormat sf = new SimpleDateFormat("dd-MM-yyyy hh-mm");
                                String date = sf.format(new Date());

                                pictureName = item.getFieldName() + "_" + date;

                                System.out.println(pictureName);
                                pictureName = pictureName.replaceAll("\\s+", "_");

                                File path = new File(root + "/local/articles");
                                if (!path.exists()) {
                                    boolean status = path.mkdirs();
                                }
                                uploadedFile = new File(path + "/" + pictureName + ".png");
                                imageLink = "local/articles/" + pictureName + ".png";
                            } else {
                                String root = OSDataFolder;
                                DateFormat sf = new SimpleDateFormat("dd-MM-yyyy hh-mm");
                                String date = sf.format(new Date());

                                pictureName = item.getFieldName() + "_" + date;

                                pictureName = pictureName.replaceAll("\\s+", "_");
                                File path = new File(root + "/images/articles");
                                if (!path.exists()) {
                                    boolean status = path.mkdirs();
                                }
                                uploadedFile = new File(path + "/" + pictureName + ".png");
                                //imageLink = uploadedFile.getAbsolutePath();
                                imageLink = "images/articles/" + pictureName + ".png";
                            }

                            item.write(uploadedFile);

                        } else {

                            if (item.getFieldName().equalsIgnoreCase("newstitle")) {
                                newsTitle = (String) item.getString();
                                System.out.println("news title : " + newsTitle);
                            }

                            if (item.getFieldName().equalsIgnoreCase("newssnippet")) {
                                newsSnippet = (String) item.getString();
                                System.out.println(" newssnippet : " + newsSnippet);
                            }

                            if (item.getFieldName().equalsIgnoreCase("newslink")) {
                                newslink = (String) item.getString();
                                System.out.println(" newslink : " + newslink);
                            }
                            if (item.getFieldName().equalsIgnoreCase("cat")) {
                                cat.add(item.getString());
                                System.out.println(" newscat : " + cat);
                            }

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
            String catDB = "";
            for (String s : cat) {
                catDB += (s + ";");
            }
            SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy hh:mm");
            String timeNow = df.format(new Date());
            String[] articleDetails = {newsTitle, newsSnippet, newslink, imageLink, absoultePath, catDB, timeNow};

            ArticleDAO.insertArticle(articleDetails);
            response.sendRedirect("upload.jsp");
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
