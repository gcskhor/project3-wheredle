const { json } = require('express/lib/response');
const jsSHA = require('jssha');

module.exports = {
  up: async (queryInterface) => {
    const userPassword = 'a';
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(userPassword);
    const hashedPassword = shaObj.getHash('HEX');

    const usersList = [
      {
        email: '1@1.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: '2@2.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', usersList, { returning: true });

    const loc1 = {
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
    };

    const loc2 = {
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
    };

    const gamesList = [
      {
        user_id: 1,
        game_state: JSON.stringify({
          guesses: [],
          answer: loc1,
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        game_state: JSON.stringify({
          guesses: [],
          answer: loc2,
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('games', gamesList, { returning: true });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('games', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
