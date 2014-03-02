package com.util;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
 
import javax.activation.MimetypesFileTypeMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
 
@WebServlet(name = "uploads",urlPatterns = {"/images"})
@MultipartConfig
public class uploads extends HttpServlet {
 
 
  private static final long serialVersionUID = 2857847752169838915L;
  int BUFFER_LENGTH = 4096;
 
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 

  }
 
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 
    String filePath = request.getRequestURI();
 
    File file = new File(System.getenv("OPENSHIFT_DATA_DIR") + filePath.replace("/images/",""));
    InputStream input = new FileInputStream(file);
 
    response.setContentLength((int) file.length());
    response.setContentType(new MimetypesFileTypeMap().getContentType(file));
 
    OutputStream output = response.getOutputStream();
    byte[] bytes = new byte[BUFFER_LENGTH];
    int read = 0;
    while ((read = input.read(bytes, 0, BUFFER_LENGTH)) != -1) {
        output.write(bytes, 0, read);
        output.flush();
    }
 
    input.close();
    output.close();
  }
 
  private String getFileName(Part part) {
        for (String cd : part.getHeader("content-disposition").split(";")) {
          if (cd.trim().startsWith("filename")) {
            return cd.substring(cd.indexOf('=') + 1).trim()
                    .replace("\"", "");
          }
        }
        return null;
      }
}