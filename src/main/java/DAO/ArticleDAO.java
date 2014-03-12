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
    private static final String INSERT_ARTICLE = "insert into `articles` (`NewsArticle_Name`, `NewsArticle_Snippet`, `NewsArticle_Link`, `NewsArticle_pic`,`abPath`,`category`,`date`) values (?, ?, ?, ?, ?, ?, ?);";

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
            ps.setString(6, row[5]);
            ps.setString(7, row[6]);

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

    public static void insertStory(String[] row) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        String query = "";
        int insertedLine = 0;
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();

            query += "insert into `newsstory` (`name`, `story`, `link`, `originalStory`,`time`) ";
            query += "values ('" + row[0] + "','" + row[1] + "','" + row[2] + "','" + row[3] + "','" + row[4] + "')";
            System.out.println(query);
            st = conn.createStatement();
            st.executeUpdate(query);

        } catch (SQLException e) {
            //insertedLine = 100;
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101;
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

    }
    public static JSONObject getSingleArticle(String name) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "";
        Statement st = null;
        JSONObject article = new JSONObject();
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();

            query = "select * from articles where NewsArticle_Name = '" + name + "'";
            st = conn.createStatement();
            rs = st.executeQuery(query);

            while (rs.next()) {
                try {

                    article.put("name", rs.getString("NewsArticle_Name"));
                    article.put("snippet", rs.getString("NewsArticle_Snippet"));
                    article.put("link", rs.getString("NewsArticle_link"));
                    article.put("relpic", rs.getString("NewsArticle_pic"));
                    //article.put("abpic", rs.getString("abPath"));
                    article.put("category", rs.getString("category"));

                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }

            }

        } catch (SQLException e) {

            System.out.println(e.getMessage());

        } catch (Exception ex) {

            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return article;
    }
    
    
    
    public static JSONArray getStories(String name) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "";
        Statement st = null;
        JSONArray storybook = new JSONArray();
         JSONObject data = new JSONObject();
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();

            query = "select * from newsstory a,newsagency b where a.name=b.name and a.originalStory='" + name + "' order by time desc";
            st = conn.createStatement();
            rs = st.executeQuery(query);

            while (rs.next()) {
                try {
                    JSONObject story = new JSONObject();
                    story.put("name", rs.getString("name"));
                    story.put("story", rs.getString("story"));
                    story.put("link", rs.getString("link"));
                    story.put("time", rs.getString("time"));
                    story.put("picLink", rs.getString("relPath"));
                   String abPath = System.getenv("OPENSHIFT_DATA_DIR");
                   if(abPath!=null){
                       story.put("abPath", abPath + rs.getString("relPath"));
                   }else{
                       
                   }
                   storybook.put(story);

                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }

            }
           // data.put("data",storybook);
        } catch (SQLException e) {

            System.out.println(e.getMessage());

        } catch (Exception ex) {

            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }
        
        return storybook;
    }

    public static JSONObject getArticles() {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String reply = "";

        JSONArray newspaper = new JSONArray();
        JSONObject data = new JSONObject();
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
                    article.put("relpic", rs.getString("NewsArticle_pic"));
                    article.put("category", rs.getString("category"));

                    newspaper.put(article);
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }

            }
            data.put("data", newspaper);
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

    public static JSONObject getNewsAgency() {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "";
        Statement st = null;
        JSONArray newsStand = new JSONArray();
        JSONObject data = new JSONObject();
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();
            query = "select * from newsagency order by name";
            st = conn.createStatement();
            rs = st.executeQuery(query);

            while (rs.next()) {
                try {
                    JSONObject agency = new JSONObject();
                    agency.put("name", rs.getString("name"));
                    agency.put("pic", rs.getString("relPath"));

                    newsStand.put(agency);
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }

            }
            data.put("data", newsStand);
        } catch (SQLException e) {
            //insertedLine = 100;
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101;
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return data;
    }
    
    public static String getNewsAgencySingle(String name) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String newsAgency = "";
        String query="";
        Statement st = null;
       
        try {
            //Get database connection & execute query
            conn = ConnectionManager.getConnection();
            query = "select relPath from newsagency where name='" + name + "'";
            st = conn.createStatement();
            rs = st.executeQuery(query);

            while (rs.next()) {
                try {
                   
                   newsAgency= rs.getString("relPath");

                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }

            }
           
        } catch (SQLException e) {
            //insertedLine = 100;
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101;
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return newsAgency;
    }

   

}
