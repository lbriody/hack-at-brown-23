package server.Handlers;

import static server.utility.GenericResponseSerializer.serializeResponse;

import server.utility.HandlerInterface;
import spark.Request;
import spark.Response;

public class TokenHandler implements HandlerInterface {

    /**
     * Called by the server when initializing the handler. This is the path that the handler will be
     * invoked on.
     *
     * @return the path that this handler is set at.
     */
    @Override
    public String getPath() {
        return "tokens";
    }


    @Override
    public Object handle(Request request, Response response) {
        try {



            return serializeResponse("success", "something");
        } catch (Exception e) {
            e.printStackTrace();
            return serializeResponse("error", null);
        }
    }



}







