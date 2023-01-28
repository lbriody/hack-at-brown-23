package server.Handlers;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.Base64;

public class BackendTokenCall {

  private static String CLIENT_ID = "0dfecd40e87344e0adf73728e2317442";
  private static String CLIENT_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXXX";

  public static void main(String[] args) throws Exception {



    URL url = new URL("https://accounts.spotify.com/api/token");
    String postData = "grant_type=client_credentials&scope=user-top-read";
    String toEncode = CLIENT_ID + ":" + CLIENT_SECRET;
    URLConnection conn = url.openConnection();
    conn.setDoOutput(true);
    String str = "client_id:client_secret";
    conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
    conn.setRequestProperty("Authorization", "Basic " + Base64.getEncoder().encodeToString(toEncode.getBytes()));
//    conn.setRequestProperty("scope", "user-top-read");

    try (DataOutputStream dos = new DataOutputStream(conn.getOutputStream())) {
      dos.writeBytes(postData);
    }

    try (BufferedReader bf = new BufferedReader(new InputStreamReader(
      conn.getInputStream())))
    {
      String line;
      while ((line = bf.readLine()) != null) {
        System.out.println(line);
      }
    }

    HttpRequest tokenRequest = HttpRequest.newBuilder()
      .uri(new URI("https://api.spotify.com/v1/me/top/artists?time_range=short_term"))
      .GET()
      .header("Authorization", "Bearer " + "BQDTBGC800tHvhkSrvKMLNiNsXslnet5uSR0XWBbYlAnirAaNGd5ZUYyFrY0ACQUPA-F4ESgvmCx-oQ_9GOW1Xxy1kYTkAJ2xIAv1UgDeQTb5-CXSwyEtYnPZVk")
      .build();
    HttpResponse<String> topArtistsResponse = HttpClient.newBuilder()
      .build()
      .send(tokenRequest, BodyHandlers.ofString());
    System.out.println(topArtistsResponse.body());

  }

}
