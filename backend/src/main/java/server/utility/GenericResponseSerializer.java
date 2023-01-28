package server.utility;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;

import java.util.HashMap;
import java.util.Map;

public record GenericResponseSerializer() {
    public static String serializeResponse(String result, Object response) {
        Map<String, Object> moshiMap = new HashMap<>();
        moshiMap.put("result", result);
        if (response != null) { // if failed, don't add filepath
            moshiMap.put("response", response);
        }
        Moshi moshi = new Moshi.Builder().build();
        JsonAdapter<Map> jsonAdapter = moshi.adapter(Map.class);
        return jsonAdapter.toJson(moshiMap);
    }


}
