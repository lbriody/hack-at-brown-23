package server.MoshiHelpers.database_request_structures;

import java.util.List;

public class EventSearch {

    public List<Event> events;

    public static class Event {
        public String eventname;
        public List<Genre> genres;
        public String eventid;
        public String performer;
        public String epoch;
        public String venue;
        public String description;
        public String city;
        public static class Genre {
            public String name;

        }


    }


}
