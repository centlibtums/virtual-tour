TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_t.jpg",
  "id": "panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569",
  "pitch": 18.64,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1811,
       "width": 6434,
       "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1126,
       "width": 4002,
       "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5F403B04_5612_8AD6_41D5_3E46878DCA51",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0648\u0631\u0648\u062f  \u0628\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 41.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -61.67,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 79,
           "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.28
       }
      ],
      "items": [
       {
        "hfov": 41.02,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -61.67,
        "image": {
         "levels": [
          {
           "height": 160,
           "width": 792,
           "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.28
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5F41FB04_5612_8AD6_41CB_8DB43909060E",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0648\u0631\u0648\u062f  \u0628\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 3.07,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -77.01,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 30,
           "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.2
       }
      ],
      "items": [
       {
        "hfov": 3.07,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -77.01,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 60,
           "url": "media/panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.2
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1871",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_581EFBB4_560C_F905_41C3_991B25B4A53C",
    "loop": true,
    "audio": {
     "class": "AudioResource",
     "id": "audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
     "oggUrl": "media/audio_581EFBB4_560C_F905_41C3_991B25B4A53C.ogg",
     "mp3Url": "media/audio_581EFBB4_560C_F905_41C3_991B25B4A53C.mp3"
    },
    "autoplay": true
   }
  ],
  "vfov": 101.29,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.25,
   "pitch": -26.44
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_t.jpg",
  "id": "panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92",
  "pitch": -4.19,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1491,
       "width": 6434,
       "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 927,
       "width": 4002,
       "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4147ECF5_5185_A9B2_41C4_AD4D2FE8E3CA",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 2.97,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 62.52,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.14
       }
      ],
      "items": [
       {
        "hfov": 2.97,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 62.52,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.14
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4128B165_5185_D8DD_418B_A918D8EBB27F",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0648\u0631\u0648\u062f  \u0628\u0647 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -163.99,
        "image": {
         "levels": [
          {
           "height": 44,
           "width": 50,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.26
       }
      ],
      "items": [
       {
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -163.99,
        "image": {
         "levels": [
          {
           "height": 89,
           "width": 100,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.26
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_418ADE70_519A_68B3_41CE_D217249C43EC",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0637\u0628\u0642\u0647 \u0627\u0648\u0644   "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 37.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 77.59,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.78
       }
      ],
      "items": [
       {
        "hfov": 37.86,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 77.59,
        "image": {
         "levels": [
          {
           "height": 730,
           "width": 730,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.78
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_40D5FA21_519D_A852_41B4_7A1E55861F27",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a     "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 10.26,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -170.29,
        "image": {
         "levels": [
          {
           "height": 58,
           "width": 16,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.56
       }
      ],
      "items": [
       {
        "hfov": 10.26,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.29,
        "image": {
         "levels": [
          {
           "height": 730,
           "width": 200,
           "url": "media/panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.56
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1885",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_5857E2AA_560C_AB0C_41D4_68B7D987AF40",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 83.42,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27.03,
   "pitch": -15.25
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_t.jpg",
  "id": "panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7",
  "pitch": -5.92,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1494,
       "width": 6434,
       "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 929,
       "width": 4002,
       "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4767289F_5185_A86E_41A1_DB774C20CC66",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.36,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 70.32,
        "image": {
         "levels": [
          {
           "height": 58,
           "width": 50,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.84
       }
      ],
      "items": [
       {
        "hfov": 5.36,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 70.32,
        "image": {
         "levels": [
          {
           "height": 117,
           "width": 100,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.84
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_42B0DB9E_5186_686E_41C0_13F6AA2572E3",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.55,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 52,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.38
       }
      ],
      "items": [
       {
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.55,
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 105,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.38
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4267153C_5186_58B3_419F_1F875C1FC91F",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 3.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -102.19,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 29,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.39
       }
      ],
      "items": [
       {
        "hfov": 3.3,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -102.19,
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 59,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.39
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4594F058_5186_78F3_41D1_0CA35471AF39",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0648\u0631\u0648\u062f \u0628\u0647 \u06a9\u0627\u0631\u06af\u0627\u0647     "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 40.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -85.53,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 73,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.66
       }
      ],
      "items": [
       {
        "hfov": 40.5,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -85.53,
        "image": {
         "levels": [
          {
           "height": 157,
           "width": 725,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.66
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_45C38D5E_518D_A8EE_41B7_8E8AA085C569",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0637\u0628\u0642\u0647 \u062f\u0648\u0645"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 12.19,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -5.96,
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 16,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5
       }
      ],
      "items": [
       {
        "hfov": 12.19,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -5.96,
        "image": {
         "levels": [
          {
           "height": 731,
           "width": 221,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47D96292_518F_B877_41CF_22745A181E57",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0647\u0645\u06a9\u0641                      "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 11.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 71.3,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 16,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.72
       }
      ],
      "items": [
       {
        "hfov": 11.69,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 71.3,
        "image": {
         "levels": [
          {
           "height": 272,
           "width": 212,
           "url": "media/panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.72
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1866",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_583B6C2F_560D_7F04_41A0_109B4162C303",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 83.55,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.45,
   "pitch": -1.81
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_t.jpg",
  "id": "panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E",
  "pitch": -2.79,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1334,
       "width": 6434,
       "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 829,
       "width": 4002,
       "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C7638A0_560E_8DD9_41CA_4395B2257A2B",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 6.22,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 92.12,
        "image": {
         "levels": [
          {
           "height": 35,
           "width": 56,
           "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.34
       }
      ],
      "items": [
       {
        "hfov": 6.22,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 92.12,
        "image": {
         "levels": [
          {
           "height": 71,
           "width": 112,
           "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.34
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C7618A0_560E_8DD9_41C9_AB65519AED0C",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a            "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 12.16,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 87.95,
        "image": {
         "levels": [
          {
           "height": 41,
           "width": 16,
           "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.6
       }
      ],
      "items": [
       {
        "hfov": 12.16,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 87.95,
        "image": {
         "levels": [
          {
           "height": 587,
           "width": 225,
           "url": "media/panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.6
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1890",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_585BC42C_560D_AF05_41CD_CEB6B5BE89C2",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 74.62,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.03,
   "pitch": -23.65
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_t.jpg",
  "id": "panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E",
  "pitch": 3.8,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1663,
       "width": 6434,
       "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1034,
       "width": 4002,
       "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5CB2EF93_560F_83FF_41C5_8E87DEE23609",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 10.3,
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 45,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.71
       }
      ],
      "items": [
       {
        "hfov": 5,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 10.3,
        "image": {
         "levels": [
          {
           "height": 99,
           "width": 90,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.71
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5CB2FF93_560F_83FF_41D4_7B03E977E47C",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 3.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 72.9,
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 37,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.3
       }
      ],
      "items": [
       {
        "hfov": 3.86,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 72.9,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 74,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.3
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5CB11F93_560F_83FF_41B9_CD69B85B1850",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0637\u0628\u0642\u0647 \u0633\u0648\u0645"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 12.55,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.8,
        "image": {
         "levels": [
          {
           "height": 54,
           "width": 16,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.16
       }
      ],
      "items": [
       {
        "hfov": 12.55,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.8,
        "image": {
         "levels": [
          {
           "height": 832,
           "width": 245,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.16
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5CB13F93_560F_83FF_41D1_1C3E6A65CF64",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0637\u0628\u0642\u0647 \u0627\u0648\u0644"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 34.76,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 84.4,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 32,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.31
       }
      ],
      "items": [
       {
        "hfov": 34.76,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 84.4,
        "image": {
         "levels": [
          {
           "height": 314,
           "width": 643,
           "url": "media/panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.31
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1865",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_587982EF_560D_EB04_41C0_36F56F6C01E7",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 92.99,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.44,
   "pitch": -3.97
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_t.jpg",
  "id": "panorama_5B316733_50E5_720A_41CF_694445FA57EA",
  "pitch": 3.49,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1791,
       "width": 6434,
       "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1114,
       "width": 4002,
       "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4965AB47_5185_E8DD_41D0_6B0ACB4DBA9C",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 3.56,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -31.13,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 33,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.19
       }
      ],
      "items": [
       {
        "hfov": 3.56,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -31.13,
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 66,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.19
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_444A403A_518A_B8A6_41B8_77E07C2B7446",
      "rollOverDisplay": false,
      "data": {
       "label": "\u06cc\u0648\u0631\u0648\u062f       "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 39.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -8.96,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 41,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.66
       }
      ],
      "items": [
       {
        "hfov": 39.3,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -8.96,
        "image": {
         "levels": [
          {
           "height": 282,
           "width": 731,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.66
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_470DF8A0_518F_A852_41D1_4C15921DFE7E",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 4.56,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 86.83,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 41,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.29
       }
      ],
      "items": [
       {
        "hfov": 4.56,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 86.83,
        "image": {
         "levels": [
          {
           "height": 67,
           "width": 82,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.29
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47C05615_518A_587D_41BC_B9073862E2C3",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0637\u0628\u0642\u0647 \u062f\u0648\u0645"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 25.96,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 95,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.76
       }
      ],
      "items": [
       {
        "hfov": 25.96,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 95,
        "image": {
         "levels": [
          {
           "height": 286,
           "width": 466,
           "url": "media/panorama_5B316733_50E5_720A_41CF_694445FA57EA_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.76
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1858",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_588C2C45_560D_9F07_41A5_C1EB90F4A0EA",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 100.18,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5B316733_50E5_720A_41CF_694445FA57EA_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.05,
   "pitch": -3.86
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_t.jpg",
  "id": "panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA",
  "pitch": -4.28,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1481,
       "width": 6434,
       "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 921,
       "width": 4002,
       "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_472229FB_562D_8932_41A7_6697ECB752D2",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 161.36,
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 53,
           "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.83
       }
      ],
      "items": [
       {
        "hfov": 5.71,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 161.36,
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 107,
           "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.83
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4419BA63_562E_8B52_419E_74769F2AA585",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a        "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 36.89,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 176.03,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.76
       }
      ],
      "items": [
       {
        "hfov": 36.89,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 176.03,
        "image": {
         "levels": [
          {
           "height": 732,
           "width": 731,
           "url": "media/panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.76
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1851",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_5880E632_560D_AB1D_41B3_0AAD47451986",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 82.83,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -43,
   "pitch": -27.2
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_t.jpg",
  "id": "panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD",
  "pitch": -0.1,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1647,
       "width": 6434,
       "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 4002,
       "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C97E502_560F_84D8_41D1_BE91C424CEA2",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 3.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -58.98,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 30,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.41
       }
      ],
      "items": [
       {
        "hfov": 3.3,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -58.98,
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 60,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.41
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C97C502_560F_84D8_41B7_738440D08D70",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a            "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 36.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -44.06,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 75,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.09
       }
      ],
      "items": [
       {
        "hfov": 36.71,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -44.06,
        "image": {
         "levels": [
          {
           "height": 140,
           "width": 660,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.09
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C963502_560F_84D8_41A2_07A156B0F946",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 4.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 80.45,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 38,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.65
       }
      ],
      "items": [
       {
        "hfov": 4.28,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 80.45,
        "image": {
         "levels": [
          {
           "height": 111,
           "width": 76,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.65
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C961502_560F_84D8_41CF_8BC64D626B6E",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0627\u062a\u0627\u0642 \u0645\u0639\u0627\u0648\u0646"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 12.49,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 72.13,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 16,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.08
       }
      ],
      "items": [
       {
        "hfov": 12.49,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 72.13,
        "image": {
         "levels": [
          {
           "height": 255,
           "width": 223,
           "url": "media/panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.08
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1862",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_5894D3A8_560D_690D_41C1_CF4F7D928C41",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 92.14,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_camera",
  "manualRotationSpeed": 400,
  "automaticZoomSpeed": 8,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 50.38,
   "pitch": 4
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_t.jpg",
  "id": "panorama_5B2AD785_50E4_B209_41C4_759BB6961583",
  "pitch": -0.1,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1518,
       "width": 6434,
       "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 944,
       "width": 4002,
       "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47573894_55DB_50ED_41BD_2FDF16047C13",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.74,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 172.94,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 51,
           "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.73
       }
      ],
      "items": [
       {
        "hfov": 5.74,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 172.94,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 103,
           "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.73
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4746A141_55DA_B067_41D1_6ED7996E7BBD",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a            "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 27.73,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 171.41,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 28,
           "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.97
       }
      ],
      "items": [
       {
        "hfov": 27.73,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 171.41,
        "image": {
         "levels": [
          {
           "height": 277,
           "width": 496,
           "url": "media/panorama_5B2AD785_50E4_B209_41C4_759BB6961583_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.97
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1863",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_5898CEC3_560C_BB03_41C9_C47FC92970F0",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 84.92,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_42ACF6CB_5617_9B52_41C6_39C67583D5C8"
  },
  "class": "PanoramaCamera",
  "id": "panorama_5B2AD785_50E4_B209_41C4_759BB6961583_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.57,
   "pitch": -8.02
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_t.jpg",
  "id": "panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC",
  "pitch": 20.87,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1515,
       "width": 6434,
       "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 942,
       "width": 4002,
       "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5F9E19CC_518A_ABD3_41C0_49D03505D565",
      "rollOverDisplay": false,
      "data": {
       "label": "\u062e\u0631\u0648\u062c \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 1.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -12.72,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 17,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.32
       }
      ],
      "items": [
       {
        "hfov": 1.98,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -12.72,
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 35,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.32
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_41B82E77_518E_E8BD_41BD_0FF9E3649D33",
      "rollOverDisplay": false,
      "data": {
       "label": "\u06cc\u0648\u0631\u0648\u062f   "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 6.03,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 137.34,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 55,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.66
       }
      ],
      "items": [
       {
        "hfov": 6.03,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 137.34,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 110,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.66
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_403F0B18_5186_6873_41C9_5A5CF8134635",
      "rollOverDisplay": false,
      "data": {
       "label": "\u062e\u0631\u0648\u062c \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 10.54,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 128.85,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 22,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.7
       }
      ],
      "items": [
       {
        "hfov": 10.54,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 128.85,
        "image": {
         "levels": [
          {
           "height": 135,
           "width": 191,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.7
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_407CB144_518B_D8D2_41CC_C88A26BD1E17",
      "rollOverDisplay": false,
      "data": {
       "label": "\u06cc\u0648\u0631\u0648\u062f   "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 7.76,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -11.51,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.7
       }
      ],
      "items": [
       {
        "hfov": 7.76,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -11.51,
        "image": {
         "levels": [
          {
           "height": 139,
           "width": 139,
           "url": "media/panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.7
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1876",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_58ADB7F6_560C_E904_41A5_351D98A49AAB",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 84.74,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_437E2AD4_518A_E9F3_419C_0AE5E44C1485"
  },
  "class": "PanoramaCamera",
  "id": "panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.88,
   "pitch": -7.38
  }
 },
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_t.jpg",
  "id": "panorama_58987579_55DE_B027_41B5_AB05CD8B9101",
  "pitch": -6.01,
  "hfov": 360,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 1469,
       "width": 6434,
       "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 913,
       "width": 4002,
       "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5BE07FF1_55DB_D027_41D1_58BC4BBC3C72",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 2.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -145.08,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 24,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.67
       }
      ],
      "items": [
       {
        "hfov": 2.69,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -145.08,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 48,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.67
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5ADE129D_55DA_D01F_41CA_DAAE82BC5512",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 2.54,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 98.34,
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 26,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -31.23
       }
      ],
      "items": [
       {
        "hfov": 2.54,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 98.34,
        "image": {
         "levels": [
          {
           "height": 84,
           "width": 53,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -31.23
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5AFB219D_55C5_D01E_41BC_C577F1539AB1",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 4.18,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 173.98,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 37,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.61
       }
      ],
      "items": [
       {
        "hfov": 4.18,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 173.98,
        "image": {
         "levels": [
          {
           "height": 67,
           "width": 75,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.61
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_45D48497_55C6_D0EB_41AF_B44E2E57292A",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0628\u0627\u0632\u06af\u0634\u062a          "
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 24.63,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 175.7,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 24,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.93
       }
      ],
      "items": [
       {
        "hfov": 24.63,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 175.7,
        "image": {
         "levels": [
          {
           "height": 293,
           "width": 448,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.93
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_45398152_55C7_B065_41A5_497F7A3325A3",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 8.93,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -145.22,
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 79,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.72
       }
      ],
      "items": [
       {
        "hfov": 8.93,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -145.22,
        "image": {
         "levels": [
          {
           "height": 144,
           "width": 159,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.72
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4541F10F_55CB_51FB_41C5_87F55322C4B5",
      "rollOverDisplay": false,
      "data": {
       "label": "\u0627\u062a\u0627\u0642 \u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u0627\u0646"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 43.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 116.46,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 77,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.47
       }
      ],
      "items": [
       {
        "hfov": 43.02,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 116.46,
        "image": {
         "levels": [
          {
           "height": 178,
           "width": 866,
           "url": "media/panorama_58987579_55DE_B027_41B5_AB05CD8B9101_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.47
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "label": "IMG_1894",
  "audios": [
   {
    "data": {
     "label": "XWorld-S6"
    },
    "class": "PanoramaAudio",
    "id": "audio_58BE9028_560C_A70D_41D3_2127CB584875",
    "loop": true,
    "audio": "this.audioresource_5857C2AA_560C_AB0C_419F_5EB3AD05D99A",
    "autoplay": true
   }
  ],
  "vfov": 82.17,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.84,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "id": "panorama_58987579_55DE_B027_41B5_AB05CD8B9101_camera",
  "manualRotationSpeed": 400,
  "manualZoomSpeed": 2,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.93,
   "pitch": -15.02
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569",
    "camera": "this.panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92",
    "camera": "this.panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7",
    "camera": "this.panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E",
    "camera": "this.panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E",
    "camera": "this.panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_5B316733_50E5_720A_41CF_694445FA57EA",
    "camera": "this.panorama_5B316733_50E5_720A_41CF_694445FA57EA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA",
    "camera": "this.panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD",
    "camera": "this.panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_5B2AD785_50E4_B209_41C4_759BB6961583",
    "camera": "this.panorama_5B2AD785_50E4_B209_41C4_759BB6961583_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC",
    "camera": "this.panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58987579_55DE_B027_41B5_AB05CD8B9101",
    "camera": "this.panorama_58987579_55DE_B027_41B5_AB05CD8B9101_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 0, 1)",
    "media": "this.panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569",
    "camera": "this.panorama_5F400B04_5612_8AD6_41C8_C1B7998BE569_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 1, 2)",
    "media": "this.panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92",
    "camera": "this.panorama_5B7AE859_50E5_9E39_41C8_639C638ECC92_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 2, 3)",
    "media": "this.panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7",
    "camera": "this.panorama_5FD43ADE_50EF_923B_4150_C05FBCE4C8C7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 3, 4)",
    "media": "this.panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E",
    "camera": "this.panorama_5C7658A0_560E_8DD9_41B4_BFBA4D268B5E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 4, 5)",
    "media": "this.panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E",
    "camera": "this.panorama_5CB2CF93_560F_83FF_41B2_701436FF4C9E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 5, 6)",
    "media": "this.panorama_5B316733_50E5_720A_41CF_694445FA57EA",
    "camera": "this.panorama_5B316733_50E5_720A_41CF_694445FA57EA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 6, 7)",
    "media": "this.panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA",
    "camera": "this.panorama_5B26E0DF_50E4_AE39_41CD_5D929AAB7EAA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 7, 8)",
    "media": "this.panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD",
    "camera": "this.panorama_5C97F502_560F_84D8_41A4_1AF14B71C3AD_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 8, 9)",
    "media": "this.panorama_5B2AD785_50E4_B209_41C4_759BB6961583",
    "camera": "this.panorama_5B2AD785_50E4_B209_41C4_759BB6961583_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 9, 10)",
    "media": "this.panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC",
    "camera": "this.panorama_40C1FE4B_50A4_921A_41AC_C789B39E89DC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist, 10, 0)",
    "media": "this.panorama_58987579_55DE_B027_41B5_AB05CD8B9101",
    "camera": "this.panorama_58987579_55DE_B027_41B5_AB05CD8B9101_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.audio_581EFBB4_560C_F905_41C3_991B25B4A53C",
 "this.audio_5857E2AA_560C_AB0C_41D4_68B7D987AF40",
 "this.audio_583B6C2F_560D_7F04_41A0_109B4162C303",
 "this.audio_585BC42C_560D_AF05_41CD_CEB6B5BE89C2",
 "this.audio_587982EF_560D_EB04_41C0_36F56F6C01E7",
 "this.audio_5880E632_560D_AB1D_41B3_0AAD47451986",
 "this.audio_588C2C45_560D_9F07_41A5_C1EB90F4A0EA",
 "this.audio_5894D3A8_560D_690D_41C1_CF4F7D928C41",
 "this.audio_5898CEC3_560C_BB03_41C9_C47FC92970F0",
 "this.audio_58ADB7F6_560C_E904_41A5_351D98A49AAB",
 "this.audio_58BE9028_560C_A70D_41D3_2127CB584875"
], "children": [
 {
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "playbackBarBottom": 5,
  "paddingRight": 0,
  "toolTipBorderSize": 4,
  "paddingLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressHeight": 10,
  "progressBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "transitionMode": "blending",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "transitionDuration": 500,
  "toolTipShadowOpacity": 1,
  "progressBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "class": "ViewerArea",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipFontColor": "#606060",
  "toolTipDisplayTime": 600,
  "progressRight": 0,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 0,
  "height": "100%",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontFamily": "Arial",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "progressLeft": 0,
  "toolTipPaddingBottom": 4,
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "progressBottom": 0,
  "borderSize": 0,
  "toolTipFontStyle": "normal",
  "progressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "verticalAlign": "top",
  "itemLabelPosition": "bottom",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "itemThumbnailShadowBlurRadius": 8,
  "paddingRight": 20,
  "paddingLeft": 20,
  "selectedItemLabelFontWeight": "bold",
  "gap": 13,
  "itemThumbnailShadowVerticalLength": 3,
  "selectedItemLabelFontColor": "#CC6600",
  "itemThumbnailShadowOpacity": 0.27,
  "borderRadius": 5,
  "horizontalAlign": "left",
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontWeight": "bold",
  "class": "ThumbnailList",
  "backgroundColorRatios": [
   0
  ],
  "itemLabelTextDecoration": "none",
  "backgroundOpacity": 0.71,
  "backgroundColorDirection": "vertical",
  "itemLabelFontWeight": "normal",
  "itemThumbnailHeight": 75,
  "paddingBottom": 10,
  "itemLabelHorizontalAlign": "center",
  "itemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "itemPaddingBottom": 3,
  "layout": "vertical",
  "itemThumbnailBorderRadius": 5,
  "scrollBarColor": "#FFFFFF",
  "itemPaddingTop": 3,
  "itemLabelGap": 8,
  "width": "9.149%",
  "height": "14.638%",
  "itemLabelFontFamily": "Arial",
  "paddingTop": 10,
  "itemPaddingRight": 3,
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontColor": "#000000",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "itemMode": "normal",
  "minHeight": 20,
  "playList": "this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist",
  "itemHorizontalAlign": "center",
  "rollOverItemBackgroundOpacity": 0,
  "itemOpacity": 1,
  "top": "2.63%",
  "minWidth": 20,
  "itemThumbnailShadow": true,
  "itemVerticalAlign": "middle",
  "itemThumbnailWidth": 75,
  "shadow": false,
  "itemBorderRadius": 0,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "ThumbnailList35762"
  },
  "left": "1.72%",
  "itemLabelFontStyle": "normal",
  "id": "ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB",
  "scrollBarVisible": "rollOver",
  "itemBackgroundColorRatios": [],
  "borderSize": 0,
  "itemPaddingLeft": 3
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_59F9C01D_564F_9BF8_41D2_2749A1E93BAB_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "paddingTop": 0,
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "overflow": "visible",
 "minHeight": 20,
 "height": "100%",
 "class": "Player",
 "horizontalAlign": "left",
 "contentOpaque": false,
 "id": "rootPlayer",
 "shadow": false,
 "data": {
  "name": "Player424"
 },
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "delayed",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "layout": "absolute"
})