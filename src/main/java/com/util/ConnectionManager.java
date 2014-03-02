package com.util;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Handles connection to access database
 * @author huiyu.yeo.2012
 */
public class ConnectionManager {
    private static final String PROPS_FILENAME = "connection.properties";
    private static String dbUser;
    private static String dbPassword;
    private static String dbURL;
    
    static {
    // grab environment variable
    String host = System.getenv("OPENSHIFT_MYSQL_DB_HOST");

    if (host != null) {
      // this is production environment
      // obtain database connection properties from environment variables
      String port = System.getenv("OPENSHIFT_MYSQL_DB_PORT");
      String dbName = System.getenv("OPENSHIFT_APP_NAME");
      dbUser = System.getenv("OPENSHIFT_MYSQL_DB_USERNAME");
      dbPassword = System.getenv("OPENSHIFT_MYSQL_DB_PASSWORD");
      
      dbURL = "jdbc:mysql://" + host + ":" + port + "/" + dbName;

    } else {
      // this is development environment
      // obtain database connection properties from properties file
      
      try {
        // Retrieve properties from connection.properties via the CLASSPATH
        // WEB-INF/classes is on the CLASSPATH
        InputStream is = ConnectionManager.class.getClassLoader().getResourceAsStream(PROPS_FILENAME);
         
        System.out.println(is);
        Properties props = new Properties();
        props.load(is);

        // load database connection details
        host = props.getProperty("db.host");
        String port = props.getProperty("db.port");
        String dbName = props.getProperty("db.name");
        dbUser = props.getProperty("db.user");
        dbPassword = "1234";

        dbURL = "jdbc:mysql://" + host + ":" + port + "/" + dbName;
        System.out.println("host: " + host + " port: " + port + "dbName: " + dbName + "dbUser: " +dbUser + "pw: " + dbPassword );
        System.out.println("Connecting to " + dbURL);
      } catch (Exception ex) {
        // unable to load properties file
        String message = "Unable to load '" + PROPS_FILENAME + "'.";

        System.out.println(message);
        Logger.getLogger(ConnectionManager.class.getName()).log(Level.SEVERE, message, ex);
        throw new RuntimeException(message, ex);
      }
    } // Make sure to close this before the try block below

        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
        } catch (Exception ex) {
            // unable to load properties file
            String message = "Unable to find JDBC driver for MySQL.";
            
            System.out.println(message);
        }
    }
    
    /**
     * Gets a connection to the database
     *
     * @return the connection
     * @throws SQLException if an error occurs when connecting
     */
    public static Connection getConnection() throws SQLException {
        String message = "dbURL: " + dbURL
                + "  , dbUser: " + dbUser
                + "  , dbPassword: " + dbPassword;
        return DriverManager.getConnection(dbURL, dbUser, dbPassword);
        
    }
    
    /**
     * close the given connection, statement and resultset
     *
     * @param conn the connection object to be closed
     * @param stmt the statement object to be closed
     * @param rs the resultset object to be closed
     */
    public static void close(Connection conn, Statement stmt, ResultSet rs) {
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException ex) {
            System.out.println("Result set close - " + ex.getMessage());
        }
        try {
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException ex) {
            System.out.println("Statement set close - " + ex.getMessage());
        }
        try {
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException ex) {
               System.out.println("Connection set close - " + ex.getMessage());
        }
    }
}

