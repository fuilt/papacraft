var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "PAPA - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1592428031",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "NORTE",
            "zoomLevels": 8,
            "defaultZoom": 4,
            "maxZoom": 8,
            "path": "NORTE_sup",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "PAPA - overworld",
            "last_rendertime": 1592262656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -191,
                80,
                -38
            ],
            "minZoom": 0,
            "spawn": [
                -191,
                80,
                -38
            ],
            "north_direction": 1
        },
        {
            "name": "SUL",
            "zoomLevels": 8,
            "defaultZoom": 4,
            "maxZoom": 8,
            "path": "SUL_sup",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "PAPA - overworld",
            "last_rendertime": 1592262656,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -191,
                80,
                -38
            ],
            "minZoom": 0,
            "spawn": [
                -191,
                80,
                -38
            ],
            "north_direction": 3
        }
    ]
};
