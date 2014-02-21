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
import org.json.JSONObject;

/**
 * Handle CRUD of Student and database
 *
 * @author huiyu.yeo.2012
 */
public class ArticleDAO {

    //Initialize query statments
    private static final String INSERT_ARTICLE = "insert into `articles` (`NewsArticle_Name`, `NewsArticle_Snippet`, `NewsArticle_Link`, `NewsArticle_pic`) values (?, ?, ?, ?);";
    

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

            //email
            ps.setString(1, row[0]);
            ps.setString(2, row[2]);
            ps.setString(3, row[2]);
            ps.setString(4,"hi");
            
           

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

    
}
