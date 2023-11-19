const selectWorldData = async () => {
    let data = {
        "scenes": [
          {
            "scene_id": 0,
            "id": "0-sea-lions-world",
            "name": "Sea Lion's World",
            "levels": [
              {
                "tileSize": 256,
                "size": 256,
                "fallbackOnly": true
              },
              {
                "tileSize": 512,
                "size": 512
              },
              {
                "tileSize": 512,
                "size": 1024
              },
              {
                "tileSize": 512,
                "size": 2048
              }
            ],
            "faceSize": 2048,
            "initialViewParameters": {
              "yaw": 0.053879802156057366,
              "pitch": 0.47262215424937537,
              "fov": 1.5707963267948966
            },
            "linkHotspots": [
              {
                "yaw": -0.7601601066804804,
                "pitch": 0.11926844659782532,
                "rotation": 0,
                "target": "1-fishs-world"
              },
              {
                "yaw": 1.3785519592463658,
                "pitch": 0.1419408817915766,
                "rotation": 0,
                "target": "2-cattles-world"
              }
            ],
            "infoHotspots": [
              {
                "yaw": 0.507241812096991,
                "pitch": 0.17827686402150889,
                "title": "Sea Lion",
                "text": "Sea lions are pinnipeds characterized by external ear flaps, long foreflippers, the ability to walk on all fours, short and thick hair, and a big chest and belly. Together with the fur seals, they make up the family Otariidae, eared seals. The sea lions have six extant and one extinct species (the Japanese sea lion) in five genera."
              }
            ]
          },
          {
            "scene_id": 1,
            "id": "1-fishs-world",
            "name": "Fish's World",
            "levels": [
              {
                "tileSize": 256,
                "size": 256,
                "fallbackOnly": true
              },
              {
                "tileSize": 512,
                "size": 512
              },
              {
                "tileSize": 512,
                "size": 1024
              },
              {
                "tileSize": 512,
                "size": 2048
              }
            ],
            "faceSize": 1920,
            "initialViewParameters": {
              "yaw": 1.4370215069033572,
              "pitch": -0.25077670019730647,
              "fov": 1.5707963267948966
            },
            "linkHotspots": [
              {
                "yaw": 0.4333683225321998,
                "pitch": -0.3311644121370634,
                "rotation": 0,
                "target": "2-cattles-world"
              },
              {
                "yaw": -2.167495696027631,
                "pitch": 0.08995700035861276,
                "rotation": 0,
                "target": "0-sea-lions-world"
              }
            ],
            "infoHotspots": [
              {
                "yaw": 1.466268563011826,
                "pitch": -0.5184774456288235,
                "title": "Damselfish",
                "text": "Damselfish are those within the subfamilies Abudefdufinae, Chrominae, Lepidozyginae, Pomacentrinae, and Stegastenae within the family Pomacentridae. Most species within this group are relatively small, with the largest species being about 30cm (12 in) in length. Most damselfish species exist only in marine environments, but a few inhabit brackish or fresh water. These fish are found globally in tropical, subtropical, and temperate waters."
              }
            ]
          },
          {
            "scene_id": 2,
            "id": "2-cattles-world",
            "name": "Cattle's World",
            "levels": [
              {
                "tileSize": 256,
                "size": 256,
                "fallbackOnly": true
              },
              {
                "tileSize": 512,
                "size": 512
              },
              {
                "tileSize": 512,
                "size": 1024
              },
              {
                "tileSize": 512,
                "size": 2048
              }
            ],
            "faceSize": 1944,
            "initialViewParameters": {
              "yaw": -1.5638491135171915,
              "pitch": 0.26383013910560216,
              "fov": 1.5707963267948966
            },
            "linkHotspots": [
              {
                "yaw": -2.4158376374575052,
                "pitch": -0.07263504223957362,
                "rotation": 0,
                "target": "0-sea-lions-world"
              },
              {
                "yaw": -0.3099449791652198,
                "pitch": 0.247789295887344,
                "rotation": 0,
                "target": "1-fishs-world"
              }
            ],
            "infoHotspots": [
              {
                "yaw": -1.5391103467136205,
                "pitch": 0.24160691883228935,
                "title": "Cattle",
                "text": "Cattle (Bos taurus) are large, domesticated, bovid ungulates. They are prominent modern members of the subfamily Bovinae and the most widespread species of the genus Bos. Mature female cattle are referred to as cows and mature male cattle are referred to as bulls. Colloquially, young female cattle (heifers), young male cattle (bullocks), and castrated male cattle (steers) are also referred to as \"cows\"."
              }
            ]
          }
        ],
        "name": "360 Wildlife",
        "settings": {
          "mouseViewMode": "drag",
          "autorotateEnabled": true,
          "fullscreenButton": true,
          "viewControlButtons": true
        }
    }

    return data
}

module.exports = {
  selectWorldData
}