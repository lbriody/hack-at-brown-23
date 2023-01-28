package server;

import static spark.Spark.after;

import java.util.HashSet;
import java.util.Set;

import server.utility.HandlerInterface;
import server.Handlers.SpotifyHandler;
import spark.Spark;


public class Server {


  // Set of handlers to be added to the server. HashSet is used so no duplicate endpoints exist.
  private static final Set<HandlerInterface> handlers = new HashSet<>();
  private static final int port = 8000;


  /**
   * This method sets the port, adds all handlers to the server and initializes.
   */
  private static void initialize() {
    Spark.port(port);
    after((request, response) -> {
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Methods", "*");
    });

    handlers.add(new SpotifyHandler());
    for (HandlerInterface handler : handlers) {
      Spark.get(handler.getPath(), handler);
    }
    Spark.init();
    Spark.awaitInitialization();

  }

  /**
   * Main method. Run to start the server.
   *
   * @param args program arguments
   */
  public static void main(String[] args) {
    initialize();
    System.out.println("Proxy Server started on port " + port + "!");

  }
}

