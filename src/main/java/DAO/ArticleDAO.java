package DAO;

import com.util.ConnectionManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 *
 */
public class ArticleDAO {

    //Initialize query statments
    private static final String INSERT_ARTICLE = "insert into `articles` (`NewsArticle_Name`, `NewsArticle_Snippet`, `NewsArticle_Link`, `NewsArticle_pic`,`abPath`,`category`) values (?, ?, ?, ?, ?,?);";

    private static final String GET_ARTICLE = "select * from `articles`";

    /**
     * Insert a new user record into database
     *
     * @param row to be inserted into database
     *
     */
    public static String insertArticle(String[] row) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String reply = "";
        int insertedLine = 0;
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();

            ps = conn.prepareStatement(INSERT_ARTICLE);

         
            ps.setString(1, row[0]);
            ps.setString(2, row[1]);
            ps.setString(3, row[2]);
            ps.setString(4, row[3]);
            ps.setString(5, row[4]);
            ps.setString(6 ,row[5]);

            insertedLine = ps.executeUpdate();

        } catch (SQLException e) {
            //insertedLine = 100;
            System.out.println(e.getMessage());
            reply = "duplicate";
        } catch (Exception ex) {
            //insertedLine = 101;
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return reply;
    }

    public static JSONObject getArticles() {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String reply = "";
     
        JSONArray newspaper = new JSONArray();
          JSONObject data=new JSONObject();
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();

            ps = conn.prepareStatement(GET_ARTICLE);
            rs = ps.executeQuery();

            while (rs.next()) {
                try {   
                    JSONObject article = new JSONObject();
                    article.put("name", rs.getString("NewsArticle_Name"));
                    article.put("snippet", rs.getString("NewsArticle_Snippet"));
                    article.put("link", rs.getString("NewsArticle_link"));
                    article.put("relpic" , rs.getString("NewsArticle_pic"));
                    article.put("abpic", rs.getString("abPath"));
                    article.put("category" , rs.getString("category"));

                   newspaper.put(article);
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                } 
                
            }
             data.put("data",newspaper);
        } catch (SQLException e) {
            //insertedLine = 100;
            System.out.println(e.getMessage());
            reply = "duplicate";
        } catch (Exception ex) {
            //insertedLine = 101;
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return data;
    }

}
