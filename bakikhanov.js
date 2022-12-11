<script>
      function initMap() {
        //map options
        var options = {
          zoom: 14,
          center: { lat: 40.42536, lng: 49.970403 },
        };

        //New map
        var map = new google.maps.Map(document.getElementById("map"), options);

        /*
        // Add marker

        var marker = new google.maps.Marker({
          position: { lat: 40.425713, lng: 49.960275 },
          map: map,
        });

        var infoWindow = new google.maps.InfoWindow({
          content: "<h1>Lynn MA </h1>",
        });

        marker.addListener("click", function () {
          infoWindow.open(map, marker);
        });
        */

        addMarker({
          coords: { lat: 40.415988, lng: 49.965577 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2>Bakikhanov Residence 1</h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, Sakit Qocayev küç, 13-21</p>",
        });

        addMarker({
          coords: { lat: 40.4147854, lng: 49.9670788 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Bakikhanov Residence 2 </h2> <p>Bakı ş. Sabunçu rayonu, Bakıxanov qəsəbəsi, E. Xəlilov küç, 1</p>",
        });
        addMarker({
          coords: { lat: 40.431985, lng: 49.960333 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Bakikhanov Residence 3 </h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, Ə. Ağayev küç, 125A və 131</p>",
        });
        addMarker({
          coords: { lat: 40.424779, lng: 49.958927 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Bakikhanov Residence A </h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, S. Mehmandarov küç, 26-28</p>",
        });
        addMarker({
          coords: { lat: 40.4274321, lng: 49.9621759 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Bakikhanov Residence B </h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, E. Xəlilov küç, 1</p>",
        });
        addMarker({
          coords: { lat: 40.4249785, lng: 49.9597241 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Brilliance Residence </h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, Mehmandarov küç., 17 və 19 / Mədəniyyət küç, 28</p>",
        });
        addMarker({
          coords: { lat: 40.423046, lng: 49.968277 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Brilliance Residence 2</h2> <p>Bakı ş., Sabunçu rayonu, Bakıxanov qəsəbəsi, Mehmandarov küç, 17 və 19 / Mədəniyyət küç, 28</p>",
        });
        addMarker({
          coords: { lat: 40.427797, lng: 49.956972 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Fireland</h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, E. Xəlilov küç, 1</p>",
        });
        addMarker({
          coords: { lat: 40.422467, lng: 49.965268 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Fireland 2</h2> <p>Bakı ş, Sabunçu rayonu, Bakıxanov qəsəbəsi, E. Xəlilov küç, 1</p>",
        });
        addMarker({
          coords: { lat: 40.4406862, lng: 49.9804859 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63907087a2f3a218310e72b2_pin%202.svg",
          content:
            "<h2> Ramana</h2> <p>Bakı ş, Sabunçu rayonu, Ramana qəsəbəsi, D. Bünyatzadə küç, 23</p>",
        });
        addMarker({
          coords: { lat: 40.4283251, lng: 49.9429111 },
          iconImage:
            "https://uploads-ssl.webflow.com/6360cd3011b3d846e833b262/63962a31027db0fcb914d4a9_pin%20yellow.svg",
          content:
            "<h2> Bakıxanov Rezidens Koroğlu</h2> <p>Bakıxanov Rezidens Koroğlu, CWHV+984, Baku, Азербайджан</p>",
        });

        // Add Marker Function
        function addMarker(props) {
          var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage,
          });

          //check for custom icon
          if (props.iconImage) {
            //Set icon image
            marker.setIcon(props.iconImage);
          }

          // check content
          if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
              content: props.content,
            });

            marker.addListener("click", function () {
              infoWindow.open(map, marker);
            });
          }
        }

        map.setOptions({
          styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5",
                },
              ],
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f5f5",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dadada",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c9c9c9",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
          ],
        });
      }
    </script>
    <script
      async
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBH319iVwg9aVgzjqLbKbhJIX8njp1Eor8&callback=initMap"
    ></script>
 
