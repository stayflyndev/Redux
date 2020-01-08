const COLLECTIONS = [
    {
      id: 1,
      title: 'Mexican',
      routeName: 'mexican',
      items: [
        {
          id: 1,
          name: 'burrito',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 25
        },
        {
          id: 2,
          name: 'tacos',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 18
        },
        {
          id: 3,
          name: 'enchiladas',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 35
        },
        {
          id: 4,
          name: 'tortas',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 25
        },
        {
          id: 5,
          name: 'tamales',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 18
        },
        {
          id: 6,
          name: 'menudo',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 14
        },
        {
          id: 7,
          name: 'beans',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 18
        },
        {
          id: 8,
          name: 'rice',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 14
        },
        {
          id: 9,
          name: 'chorros',
          imageUrl: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Jamaican',
      routeName: 'jamaican',
      items: [
        {
          id: 10,
          name: 'oxtails',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 220
        },
        {
          id: 11,
          name: 'chicken curry',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 280
        },
        {
          id: 12,
          name: 'lamb curry',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 110
        },
        {
          id: 13,
          name: 'jerk chicken',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 160
        },
        {
          id: 14,
          name: 'jamaican patty',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 160
        },
        {
          id: 15,
          name: 'stewed chicken',
          imageUrl: 'https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1842&q=80',
          price: 160
        }
      ]
    },
    {
      id: 3,
      title: 'Chinese',
      routeName: 'chinese',
      items: [
        {
          id: 18,
          name: 'Beef and Brocc',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          price: 125
        },
        {
          id: 19,
          name: 'Sesame Chicken',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          price: 90
        },
        {
          id: 20,
          name: 'Shrimp Lo Mein',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          price: 90
        },
        {
          id: 21,
          name: 'Fried Rice',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          price: 165
        },
        {
          id: 22,
          name: 'Happy Family',
          imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Italian',
      routeName: 'italian',
      items: [
        {
          id: 23,
          name: 'Pizza',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 25
        },
        {
          id: 24,
          name: 'Spaghetti',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 20
        },
        {
          id: 25,
          name: 'Alfredo',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 80
        },
        {
          id: 26,
          name: 'Crusty Parm',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 80
        },
        {
          id: 27,
          name: 'Eggplant Parm',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 45
        },
        {
          id: 28,
          name: 'Lasagna',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 135
        },
        {
          id: 29,
          name: 'Ravioli',
          imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          price: 20
        }
      ]
    
    }
  ];
  
  export default COLLECTIONS;
  