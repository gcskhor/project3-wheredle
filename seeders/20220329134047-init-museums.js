module.exports = {
  up: async (queryInterface, Sequelize) => {
    const museums = [
      {
        business_status: 'OPERATIONAL',
        formatted_address: '93 Stamford Rd, Singapore 178897',
        geometry: {
          location: {
            lat: 1.296613,
            lng: 103.8485091,
          },
          viewport: {
            northeast: {
              lat: 1.298156229892722,
              lng: 103.8503791,
            },
            southwest: {
              lat: 1.295456570107278,
              lng: 103.8473567,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'National Museum of Singapore',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3120,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/101916002770678528681"\u003eshaunhuang.t\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uECYRJuLJccO8GLWtTuPuPoDqRHjWfwEJbC8PwBa-udH_q8gaNmb7WawTT_8F8HmTpSsyq-kIHOYBO2De5u3Tj8xJhm8Q6NolAaPDu2ye7LeY48mbrryCIA92DkQ1SuwZHenm1FF1y7V_W8oyBpga0LRzTUwu6asAXZTUT1wVqaD9zWp',
            width: 4160,
          },
        ],
        place_id: 'ChIJD1u-EaMZ2jERaLhNfFkR45I',
        plus_code: {
          compound_code: '7RWX+JC Singapore',
          global_code: '6PH57RWX+JC',
        },
        rating: 4.6,
        reference: 'ChIJD1u-EaMZ2jERaLhNfFkR45I',
        types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 10214,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '1 Empress Pl, Singapore 179555',
        geometry: {
          location: {
            lat: 1.2874969,
            lng: 103.8513861,
          },
          viewport: {
            northeast: {
              lat: 1.289165229892722,
              lng: 103.8527006298927,
            },
            southwest: {
              lat: 1.286465570107278,
              lng: 103.8500009701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Asian Civilisations Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 2304,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/106176553282833336854"\u003etanchihhsing .\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEDcbdrtxkDllYFWbW047fDJOpMZBiyMN_1SX9GB7t8eLTzo6iLaHJhGrZLwbw_Hot74PLWXlL_mtccTi4jvDVfYxZGM5WQLnWZnIdqF4zj-kDi_NJ_F-8xTB35TtB6sLF4ob9OBb1NfMOIoTpiw6yAF6DnKeweuTFyAb56Xh_Lt6RW5',
            width: 4096,
          },
        ],
        place_id: 'ChIJoZOhmQkZ2jERehLfvKlsoCA',
        plus_code: {
          compound_code: '7VP2+XH Singapore',
          global_code: '6PH57VP2+XH',
        },
        rating: 4.5,
        reference: 'ChIJoZOhmQkZ2jERehLfvKlsoCA',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 3943,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '6 Bayfront Ave, Singapore 018974',
        geometry: {
          location: {
            lat: 1.2862738,
            lng: 103.8592663,
          },
          viewport: {
            northeast: {
              lat: 1.28894715,
              lng: 103.8607249,
            },
            southwest: {
              lat: 1.27922815,
              lng: 103.8563141,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'ArtScience Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/104941206454684782517"\u003ePanya C.\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEB4O-2LIpS30NzLwnUKO2Lymzy4i1OOhWViuN7UYdJ0GAGOoXd-lcnGkruwaAcKdABC56j6Rmi-EmAXmiePTOcA125cAMaJqFPU1d7xJHaBYem6rjCvxa5pXBDkFHkozqODjyR5Ri0wb6DYWXWfVoDMAE6xQcigv2JXTDzrIgXoHhi5',
            width: 4032,
          },
        ],
        place_id: 'ChIJnWdQKQQZ2jERScXuKeFHyIE',
        plus_code: {
          compound_code: '7VP5+GP Singapore',
          global_code: '6PH57VP5+GP',
        },
        rating: 4.5,
        reference: 'ChIJnWdQKQQZ2jERScXuKeFHyIE',
        types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
        user_ratings_total: 10357,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: "1 St Andrew's Rd, #01 – 01, Singapore 178957",
        geometry: {
          location: {
            lat: 1.2902217,
            lng: 103.8515167,
          },
          viewport: {
            northeast: {
              lat: 1.2920437,
              lng: 103.8528691298927,
            },
            southwest: {
              lat: 1.2885221,
              lng: 103.8501694701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'National Gallery Singapore',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 1365,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/111615850842635827333"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uECzJSaHPnHU102ZXY0bB00sq3EcHoQ8dDLd8Vh-RtY03nTH53NLN6OBAec3eyoWlG9L4Et8-wtOsq9bG7ZgpMDLmt1RigDpkGY4RKodYwV9N4sQQZ14tQIxhK2Xu7RZZKK-dLPZLM2rcVh_UHwtnJzoWeYfNIu_zKNk1BcW6S8bbAMP',
            width: 2048,
          },
        ],
        place_id: 'ChIJFQzeR6cZ2jERgM6--iWeY-U',
        plus_code: {
          compound_code: '7VR2+3J Singapore',
          global_code: '6PH57VR2+3J',
        },
        rating: 4.6,
        reference: 'ChIJFQzeR6cZ2jERgM6--iWeY-U',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 10829,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '61 Stamford Rd, #03-08, Singapore 178892',
        geometry: {
          location: {
            lat: 1.293942,
            lng: 103.849996,
          },
          viewport: {
            northeast: {
              lat: 1.295255279892722,
              lng: 103.8514344298927,
            },
            southwest: {
              lat: 1.292555620107278,
              lng: 103.8487347701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/civic_building-71.png',
        icon_background_color: '#7B9EB0',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/civic-bldg_pinlet',
        name: 'National Heritage Board',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 2848,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/101987719761795065337"\u003eChatuphon Pua\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEA74nyuCozGEzAUskDtEfryVyTotI6oXWn9U6P824fOX48tKb_bvp84RO6_NOevCqKkcRYn6SRJzpS8vczip0Yt2kzQNnd-YCm_5pURAUz4-aryEe24O-piscQQYTQnUdDX5P7ZiTQXSL6jFhLrJaeqvFPQyJTDNoB4hNSAADHVdMh6',
            width: 4288,
          },
        ],
        place_id: 'ChIJm5Hr_KMZ2jERj8CLGpDZ8ZA',
        plus_code: {
          compound_code: '7RVX+HX Singapore',
          global_code: '6PH57RVX+HX',
        },
        rating: 4.2,
        reference: 'ChIJm5Hr_KMZ2jERj8CLGpDZ8ZA',
        types: ['local_government_office', 'point_of_interest', 'establishment'],
        user_ratings_total: 11,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '2 Conservatory Dr, Singapore 117377',
        geometry: {
          location: {
            lat: 1.3014107,
            lng: 103.7734981,
          },
          viewport: {
            northeast: {
              lat: 1.302814079892722,
              lng: 103.7747023798927,
            },
            southwest: {
              lat: 1.300114420107278,
              lng: 103.7720027201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Lee Kong Chian Natural History Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 4032,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/115950413780513445517"\u003eEdmund Yim\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uECBTn3wnp5sPfseTbf57fpuyPEFbRtY8joE0hlvxyRolNjUFz5TZpy5-uSDqxim271dvCCZVCILI5uS6FQI4k8eTJPx8TdZRVSw-DcbQx8kLDO7dsZP3EV2kMgWJja1pMc_um_nK4HDEialVRl9duCP9h3WYJv1Qs2ju076phpIkaV4',
            width: 3024,
          },
        ],
        place_id: 'ChIJlcijSfYa2jERGZ3CD7lpz_E',
        plus_code: {
          compound_code: '8Q2F+H9 Singapore',
          global_code: '6PH58Q2F+H9',
        },
        rating: 4.6,
        reference: 'ChIJlcijSfYa2jERGZ3CD7lpz_E',
        types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 1355,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '26 Seah St, Singapore 188382',
        geometry: {
          location: {
            lat: 1.2963208,
            lng: 103.8546329,
          },
          viewport: {
            northeast: {
              lat: 1.297581879892722,
              lng: 103.8559171798927,
            },
            southwest: {
              lat: 1.294882220107278,
              lng: 103.8532175201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'MINT Museum of Toys',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/102093528475068866833"\u003eshih sheng\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEBvvhwC9qijbQNodTfheAkfrBgMjwsg29N6ZeBQgRIKoeV5zcX0HaGWLMeUj1oOtTJeqYgqX5L8WF2T1_CQGA7WSrFeqhEa0VeC_G46bTmHkrogmBdaE1jtWt0Ox3Ckl6DV6J9Cs7mG6-tcW4_5jcTchyJAkaSjsg1nDefrOEE2FcEW',
            width: 4032,
          },
        ],
        place_id: 'ChIJW7B7zRIZ2jERINTI_uV1O-A',
        plus_code: {
          compound_code: '7VW3+GV Singapore',
          global_code: '6PH57VW3+GV',
        },
        rating: 4.3,
        reference: 'ChIJW7B7zRIZ2jERINTI_uV1O-A',
        types: [
          'art_gallery',
          'museum',
          'point_of_interest',
          'store',
          'establishment',
        ],
        user_ratings_total: 766,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '5 Campbell Ln, Singapore 209924',
        geometry: {
          location: {
            lat: 1.3056816,
            lng: 103.8522606,
          },
          viewport: {
            northeast: {
              lat: 1.307080079892722,
              lng: 103.8532650298927,
            },
            southwest: {
              lat: 1.304380420107278,
              lng: 103.8505653701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Indian Heritage Centre',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/114345555265183607362"\u003eChee Kong Chim\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEB4nyHNaDW2nysVisdQitYtNHIHu6vYLk3I-7BHI_bzUlaMsdbQVGIT84e-ZD6WfZbAZJZ7CKYLAP4pBRsi8fxyFYzVCQw3gCdJa8UbFdgMIBHEvdz1xTSEbu1NzxduW1RAol_fXnwTh9HyQ8IUr5HAEp-pnDDL4jirCIJizZzEbEgu',
            width: 4032,
          },
        ],
        place_id: 'ChIJlShO3LgZ2jER4Xlf4Yo-jbs',
        plus_code: {
          compound_code: '8V42+7W Singapore',
          global_code: '6PH58V42+7W',
        },
        rating: 4.5,
        reference: 'ChIJlShO3LgZ2jER4Xlf4Yo-jbs',
        types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 1015,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '8C Jln Kledek, Singapore 199263',
        geometry: {
          location: {
            lat: 1.3035014,
            lng: 103.8590172,
          },
          viewport: {
            northeast: {
              lat: 1.304846079892722,
              lng: 103.8603587798927,
            },
            southwest: {
              lat: 1.302146420107278,
              lng: 103.8576591201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Vintage Camera Museum',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/117153314239584247796"\u003eUma verma\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEAE1KaTJ_k-E0KBiI2XYZO8pfT0ETwBznwCao1qDuORFIdfWgwZuHd9mBTcf93KXPDu9yBGsNoGt729ELlO6Knao5TP4ZpaB6VJ4DkN2bE3yJn8ZNkBF6lr9te4T-X2z8H5alz4mruIrnX9niADAc9CCE3hB0MwvfWwHKuaz2r-ojF4',
            width: 4032,
          },
        ],
        place_id: 'ChIJs5g6GYsZ2jEROCBZiMCUtlo',
        plus_code: {
          compound_code: '8V35+CJ Singapore',
          global_code: '6PH58V35+CJ',
        },
        rating: 4.4,
        reference: 'ChIJs5g6GYsZ2jEROCBZiMCUtlo',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 8,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '168 Telok Ayer St, Singapore 068619',
        geometry: {
          location: {
            lat: 1.2807495,
            lng: 103.847493,
          },
          viewport: {
            northeast: {
              lat: 1.282073429892722,
              lng: 103.8488970298927,
            },
            southwest: {
              lat: 1.279373770107278,
              lng: 103.8461973701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Singapore Musical Box Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 1733,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/104402906375731360683"\u003eSon Ma\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEBQ6M1o-wDZOlZQPy7bL8CKpsUhe4lXYiece1z0RgZC25aO86SH04y5QkDIZ0sO9_vanYi5UDA0PgSWp_xsF60e7QtKyja_mvIW_USVN7ZKJwhMq-NCNguYAh34HgIBMHDDJl5-RxicrHVr08zf4a68MHHe0cDtbT6-fSbzJjKsA5-v',
            width: 2600,
          },
        ],
        place_id: 'ChIJg4jcdA0Z2jERe0XPfVA08bU',
        plus_code: {
          compound_code: '7RJW+7X Singapore',
          global_code: '6PH57RJW+7X',
        },
        rating: 4.7,
        reference: 'ChIJg4jcdA0Z2jERe0XPfVA08bU',
        types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
        user_ratings_total: 117,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '351 Upper Bukit Timah Rd, Singapore 588192',
        geometry: {
          location: {
            lat: 1.3527256,
            lng: 103.7688464,
          },
          viewport: {
            northeast: {
              lat: 1.354080179892722,
              lng: 103.7704953298927,
            },
            southwest: {
              lat: 1.351380520107278,
              lng: 103.7677956701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Former Ford Factory',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/111498871101441258431"\u003ejoachim chan\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uECm_9jUNFuXpD35ajVCiTdXOxj70Q4pszdWXQWevxjf42CvbZN6RksJYKRX4TDBYKUZ0jNrO2QIabNhtrvuk6LLcgGvR5BOLfH6iZeo_ZeOd2APMTG8nH1Z_QTDvvMIYX55PooUGHeIy8ShRj1K_k1jpi7fXvv3l2rTBVWqNqrCvJQH',
            width: 4032,
          },
        ],
        place_id: 'ChIJTcyXK1oQ2jERMjEftNlLGk0',
        plus_code: {
          compound_code: '9Q39+3G Singapore',
          global_code: '6PH59Q39+3G',
        },
        rating: 4.4,
        reference: 'ChIJTcyXK1oQ2jERMjEftNlLGk0',
        types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 834,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '2 Cox Terrace, Singapore 179622',
        geometry: {
          location: {
            lat: 1.2961611,
            lng: 103.8461761,
          },
          viewport: {
            northeast: {
              lat: 1.297510929892722,
              lng: 103.8475259298927,
            },
            southwest: {
              lat: 1.294811270107278,
              lng: 103.8448262701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Battlebox',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 2268,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/116995698484077572106"\u003eTami R\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEBTR-QWUUfm5VmYZ09k52ZrnxqtMThKjmrHz_RVcwd0UtCSGybpVCm_01MI9xWsOX6aei883GGE_Zh32MLc0fssSOXBKOIt7Pgb1CrNHErTKIjYxeahFmvCFvKUPG5Kt-w4khoVrvtS3A6oPeQp_zE7jN0YkOYUKOmf3Vwbj_xVQ7z2',
            width: 4032,
          },
        ],
        place_id: 'ChIJdXkrRKIZ2jERL3OFhRYeSp4',
        plus_code: {
          compound_code: '7RWW+FF Singapore',
          global_code: '6PH57RWW+FF',
        },
        rating: 4.6,
        reference: 'ChIJdXkrRKIZ2jERL3OFhRYeSp4',
        types: [
          'tourist_attraction',
          'museum',
          'travel_agency',
          'point_of_interest',
          'establishment',
        ],
        user_ratings_total: 748,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '1000 Upper Changi Rd N, Singapore 507707',
        geometry: {
          location: {
            lat: 1.362212,
            lng: 103.974025,
          },
          viewport: {
            northeast: {
              lat: 1.363754329892722,
              lng: 103.9752539798927,
            },
            southwest: {
              lat: 1.361054670107278,
              lng: 103.9725543201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Changi Chapel & Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 2829,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/106139796511061373821"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEDwsOx3PRKo1qi2jj0-o8c5aCKFmeAhMdBnCFr6spTEWO2JXlxMvSp6PDR17cAAetGbyGKafnopXaMjKPyRu_xAvMg2UanKSykEFfQutc8L0t8rUquxqWEcRng9aSteG83kreGoLmDtO-vzaIn-wP2Bw6Hy4bYejlLxQCvdv9REHkoE',
            width: 4241,
          },
        ],
        place_id: 'ChIJCQHB6vc82jERq6iFty4Fzo4',
        plus_code: {
          compound_code: '9X6F+VJ Singapore',
          global_code: '6PH59X6F+VJ',
        },
        rating: 4.2,
        reference: 'ChIJCQHB6vc82jERq6iFty4Fzo4',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 366,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '510 Upper Jurong Rd, Singapore 638365',
        geometry: {
          location: {
            lat: 1.3326904,
            lng: 103.6789432,
          },
          viewport: {
            northeast: {
              lat: 1.33374845,
              lng: 103.6798723798927,
            },
            southwest: {
              lat: 1.32951625,
              lng: 103.6771727201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
        name: 'Singapore Discovery Centre',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/104635242990343320484"\u003eWhey Zhen Hui\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uECx-Xqdxani5I_2qBcX50S1FUQGR0azBxqJecpfdMj-cjELaHVMMDzITfL1tU0uutDdQNdEBnEJMo43Nxf_A2fXZknMiGS0yfvfy56kugnqcQ99lZqCbb3Iadda-6Rt-cfaSJMmRgoNp8D8OnPpq9N53as2IPh4RChcKuWYIhTisfqu',
            width: 4032,
          },
        ],
        place_id: 'ChIJq7P-2n4P2jERoflGFhUAEfQ',
        plus_code: {
          compound_code: '8MMH+3H Singapore',
          global_code: '6PH58MMH+3H',
        },
        rating: 4.5,
        reference: 'ChIJq7P-2n4P2jERoflGFhUAEfQ',
        types: ['tourist_attraction', 'point_of_interest', 'establishment'],
        user_ratings_total: 2395,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '12 Tai Gin Rd, Singapore 327874',
        geometry: {
          location: {
            lat: 1.3280736,
            lng: 103.8471167,
          },
          viewport: {
            northeast: {
              lat: 1.329352529892722,
              lng: 103.85062585,
            },
            southwest: {
              lat: 1.326652870107278,
              lng: 103.84400285,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
        icon_background_color: '#7B9EB0',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
        name: 'Sun Yat Sen Nanyang Memorial Hall',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/110824909094698803199"\u003etangyin cheng\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEBtIrwSSaBMtccJ6zS5004N2pN6vkT5a3IQ2MPEwKniujpvvawtKgM1l8fkMZku1jd2yhhd8fUkTb0M2iqzNRcaDsfnCur4J_jTOyDR1iR2bsYVWgnXtwduh1jGMYMjqPiYxv2PCtjj-rwrfumKFpPy4v7S80z-bfyoB0R_88JwLGvQ',
            width: 4032,
          },
        ],
        place_id: 'ChIJY4U5TGAX2jERQYsGly-qKIo',
        plus_code: {
          compound_code: '8RHW+6R Singapore',
          global_code: '6PH58RHW+6R',
        },
        rating: 4.5,
        reference: 'ChIJY4U5TGAX2jERQYsGly-qKIo',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 492,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '45 Maxwell Road The URA Centre, Singapore 069118',
        geometry: {
          location: {
            lat: 1.2792629,
            lng: 103.8453731,
          },
          viewport: {
            northeast: {
              lat: 1.280546629892722,
              lng: 103.8466296298927,
            },
            southwest: {
              lat: 1.277846970107278,
              lng: 103.8439299701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Singapore City Gallery',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 4032,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/116752230452396842511"\u003eHao Zheng Duncan Wong\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEAR6JATnXOMTdQ-27st0NYZHndVDM8rqLW8bGHyulleTHZ37ZujR_SWE24gJs5WClYPKXerRfgJUhsJSYNDhKd85tqJFkJNCVWWcKWdnYi6zUE_OYA6RxeIraCKOfblulXuosI7V_zQo6QeHQCYi0PSXKmd0vn0tL_-WDyFsXKaOA_7',
            width: 3024,
          },
        ],
        place_id: 'ChIJRaIcWw0Z2jERts3whuuZPsM',
        plus_code: {
          compound_code: '7RHW+P4 Singapore',
          global_code: '6PH57RHW+P4',
        },
        rating: 4.5,
        reference: 'ChIJRaIcWw0Z2jERts3whuuZPsM',
        types: ['museum', 'travel_agency', 'point_of_interest', 'establishment'],
        user_ratings_total: 1581,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '85 Sultan Gate, Singapore 198501',
        geometry: {
          location: {
            lat: 1.3027993,
            lng: 103.8599265,
          },
          viewport: {
            northeast: {
              lat: 1.304317729892722,
              lng: 103.8614070298927,
            },
            southwest: {
              lat: 1.301618070107278,
              lng: 103.8587073701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Malay Heritage Centre',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3456,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/110386079668623861610"\u003eRaffaele Tassone\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEDnRPodFThwDPV3MPR1XcqVd-hPM2wEM0sokYlfejWfRtQCK2EJR1bUENxFIib0Ld7RlAUYz2HlfWz6LQcjpN5QXXS2kZZr24xZ3X5h5e20asspLQU2DDdpCyvfgR-lgvm3k1FED9R3vaIOkAejjlSltF81yGjWyVkPVUz9dBTx8y7B',
            width: 4608,
          },
        ],
        place_id: 'ChIJU-yCOrEZ2jER9h_JbDNPFBQ',
        plus_code: {
          compound_code: '8V35+4X Singapore',
          global_code: '6PH58V35+4X',
        },
        rating: 4.3,
        reference: 'ChIJU-yCOrEZ2jER9h_JbDNPFBQ',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 1471,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '69 Joo Chiat Terrace, Singapore 427231',
        geometry: {
          location: {
            lat: 1.3146307,
            lng: 103.9009827,
          },
          viewport: {
            northeast: {
              lat: 1.315927779892722,
              lng: 103.9023641298927,
            },
            southwest: {
              lat: 1.313228120107278,
              lng: 103.8996644701073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'The Intan',
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/101545819345614164484"\u003eA Google User\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEA-OGnxEEvY6XtQbtOvMsa6H8iWFjyJG1MAvgm7bO1m2Bfz7E9rxjttHaa4BhIlD0O2P9NjjNhbrL27unKDhWXObJVYFvInTq9zkrBrtGrEd8h9k8e1ZKwfs_pMtd_DM5VLXE8-jHPFX9_RfZ4KepGiTh3T3Hfv92oFcFqkT5oHO5j8',
            width: 4032,
          },
        ],
        place_id: 'ChIJ4UVXsxEY2jERZ3a6nVN3LqI',
        plus_code: {
          compound_code: '8W72+V9 Singapore',
          global_code: '6PH58W72+V9',
        },
        rating: 4,
        reference: 'ChIJ4UVXsxEY2jERZ3a6nVN3LqI',
        types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
        user_ratings_total: 61,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '15 Science Centre Rd, Singapore 609081',
        geometry: {
          location: {
            lat: 1.3331687,
            lng: 103.7356443,
          },
          viewport: {
            northeast: {
              lat: 1.3358396,
              lng: 103.7386221,
            },
            southwest: {
              lat: 1.3300336,
              lng: 103.7341873,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Science Centre Singapore',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 2736,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/108780587066336883371"\u003eChua Chua\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uEBYH1NdhixVbggQZRAJ94F7N0z9rxYsxGlNAZlvBSjs3FJG-RCvyj35qq2jqpjB0YSl7Mu-oHbQAfGjhDs2XCPESYN7wekmZuIAnyar5t3zvzAre7nRxuxKzgdTTWmU3ct5mBPam6OUEn7AKzswLFWxRubsIJvw4gPawoVn_g9VpYi1',
            width: 3648,
          },
        ],
        place_id: 'ChIJY618FAQQ2jERzo1f5IAj4Bg',
        plus_code: {
          compound_code: '8PMP+77 Singapore',
          global_code: '6PH58PMP+77',
        },
        rating: 4.4,
        reference: 'ChIJY618FAQQ2jERzo1f5IAj4Bg',
        types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 6542,
      },
      {
        business_status: 'OPERATIONAL',
        formatted_address: '6 Stadium Walk, Singapore 397698',
        geometry: {
          location: {
            lat: 1.3013548,
            lng: 103.8736219,
          },
          viewport: {
            northeast: {
              lat: 1.302799629892722,
              lng: 103.8755326798927,
            },
            southwest: {
              lat: 1.300099970107278,
              lng: 103.8728330201073,
            },
          },
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
        icon_background_color: '#13B5C7',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
        name: 'Singapore Sports Museum',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '\u003ca href="https://maps.google.com/maps/contrib/103384224519218409319"\u003eozi priawadi\u003c/a\u003e',
            ],
            photo_reference: 'Aap_uED_kINzCz6HarwsHzxA50HOJWeIs7pRpbZumioLxPN8wCajoNAAnVuWcQElEDXv9gzqBVewLAaugCNkZXmB8wlBB22c_1Vy8Jkhd0x81iCOAQtoCFHvDnxFbB1Nf5XwYXJK0bHRRYbA1vuEW3tbzmKc05Kv0IrCfLH2TIBZQjoOcUIm',
            width: 4032,
          },
        ],
        place_id: 'ChIJ6TfRJUwY2jERzZlFMhLB0bA',
        plus_code: {
          compound_code: '8V2F+GC Singapore',
          global_code: '6PH58V2F+GC',
        },
        rating: 4.4,
        reference: 'ChIJ6TfRJUwY2jERzZlFMhLB0bA',
        types: ['museum', 'point_of_interest', 'establishment'],
        user_ratings_total: 146,
      },
    ];

    const validKeys = ['name', 'formatted_address', 'geometry', 'rating']; // later key in 'geometry'
    museums.forEach((museum) => {
      Object.keys(museum).forEach((key) => validKeys.includes(key) || delete museum[key]);
      const geometryValue = museum.geometry;
      museum.geometry = JSON.stringify(geometryValue); // stringify to avoid json value issues

      // add created_at/updated_at keys
      museum.created_at = new Date();
      museum.updated_at = new Date();
    });

    await queryInterface.bulkInsert('places', museums, { returning: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
