package server.utility;

import spark.Route;

/**
 * This is the interface that all handlers must implement.
 */
public interface HandlerInterface extends Route {

  /**
   * This method is called when the handler is invoked. Converts the response into a JSON string.
   *
   * @param result   string representation of result (success/error)
   * @param response response object to be converted into JSON String
   * @return JSON string result of serialization
   */
//  String serializeResponse(String result, Object response);

  /**
   * Called by the server when initializing the handler. This is the path that the handler will be
   * invoked on.
   *
   * @return the path that this handler is set at.
   */
  String getPath();
}
