package server.Handlers;

//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//import java.io.IOException;
//import java.net.HttpURLConnection;
//import java.net.URI;
//import java.net.URISyntaxException;
//import java.net.URL;
//import java.net.http.HttpClient;
//import java.net.http.HttpRequest;
//import java.net.http.HttpResponse;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import spark.Spark;

public class SpotifyHandlerTest {

//  // NOTE: MUST UPDATE AUTH TOKEN MANUALLY BEFORE RUNNING TESTS
//  private final static String AUTH_TOKEN = "BQCFITypIbIE8dHr7wQnDAv_FsOcj9Dky541Yr2odzTj7E8ruP00gTOiRYftpC_zOmP67ttsjcft0CMeVRS5kooEIVcBPwFFrbdQdlxeVu2jsmZnibfTJSXxjCERi64JG4c5-WvcvOBELiCoLJnQ5AHBRdqBO-ZaRzo68aqvbegaCSWY2J65FbBdVeRtT8MHmWVZfgIgsG4";
//
//
//
//  /**
//   * sets up the server before any tests are run.
//   */
//  @BeforeAll
//  public static void setEverythingUp() {
//    System.out.println("Setting up server...");
//    Spark.port(0);
//    Logger.getLogger("").setLevel(Level.WARNING);
//  }
//
//  /**
//   * sets up the loadcsv and getcsv endpoints before each test.
//   *
//   * @throws IOException if the connection fails for some reason
//   */
//  @BeforeEach
//  public void setUp() throws IOException {
//    Spark.get("/spotify", new SpotifyHandler());
//    Spark.init();
//    Spark.awaitInitialization();
//
//    // Ensure connection is successful
//    HttpURLConnection clientConnection = tryRequest("spotify");
//    assertEquals(200, clientConnection.getResponseCode());
//
//  }
//
//  @AfterEach
//  public void tearDown() {
//    Spark.unmap("/spotify");
//    Spark.awaitStop();
//  }
//
//  /**
//   * Helper to start a connection to a specific API endpoint/params.
//   *
//   * @param apiCall the call string, including endpoint
//   * @return the connection for the given URL, just after connecting
//   * @throws IOException if the connection fails for some reason
//   */
//  private static HttpURLConnection tryRequest(String apiCall) throws IOException {
//    // Configure the connection (but don't actually send the request yet)
//    URL requestUrl = new URL("http://localhost:" + Spark.port() + "/" + apiCall);
//    HttpURLConnection clientConnection = (HttpURLConnection) requestUrl.openConnection();
//
//    clientConnection.connect();
//    return clientConnection;
//  }
//
//
//
//  /**
//   * Tests to make sure the top five genres start as null.
//   */
//  @Test
//  public void testGenresBeforeLoad() {
//    assertEquals(TopFiveGenres.getTopFiveGenres(), null);
//  }
//
//
//  private String sendRequest(String token) throws URISyntaxException, IOException, InterruptedException {
//    String url = "http://localhost:" + Spark.port() + "/spotify?access_token=" + token;
//    HttpRequest locationRequest = HttpRequest.newBuilder()
//        .uri(new URI(url))
//        .GET()
//        .build();
//
//    HttpResponse<String> response = HttpClient.newBuilder()
//        .build()
//        .send(locationRequest, HttpResponse.BodyHandlers.ofString());
//
//    return response.body();
//  }
//
//
//
//  @Test
//  public void testGenresAfterLoad() throws URISyntaxException, IOException, InterruptedException {
//    sendRequest(AUTH_TOKEN);
//    assertEquals(TopFiveGenres.getTopFiveGenres().length, 5);
//  }
//
//  @Test
//  public void testSuccess() throws URISyntaxException, IOException, InterruptedException {
//    String response = sendRequest(AUTH_TOKEN);
//    System.out.println(response);
//    assertTrue(response.contains("{\"result\":\"success\",\"response\":"));
//  }
//
//  @Test
//  public void testInvalidToken() throws URISyntaxException, IOException, InterruptedException {
//    String response = sendRequest("Invalid3098r9Authw39r8-3r8Token-24910");
//    assertEquals(response, "{\"result\":\"no_top_artists_error\"}");
//  }
//
//  @Test
//  public void testNoToken() throws URISyntaxException, IOException, InterruptedException {
//    String response = sendRequest("");
//    assertEquals(response, "{\"result\":\"error_invalid_token\"}");
//  }
//

}
