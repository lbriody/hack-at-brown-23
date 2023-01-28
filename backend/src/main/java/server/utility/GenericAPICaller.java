package server.utility;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GenericAPICaller {


    private GenericAPICaller() {}



    public static String makeCall(String url) throws Exception {
        try {
            HttpRequest locationRequest = HttpRequest.newBuilder()
                    .uri(new URI(url))
                    .GET()
                    .build();

            HttpResponse<String> locationResponse = HttpClient.newBuilder()
                    .build()
                    .send(locationRequest, HttpResponse.BodyHandlers.ofString());

            return locationResponse.body();
        }

        catch (InterruptedException | IOException | URISyntaxException e){
            throw new Exception("An error has occured while making this API call");

        }

    }







}
