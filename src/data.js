const users = [
    {
      id: 1,
      name: 'Kaley Danford',
      image: './assests/images/user1.png',
      messages: [
        { id: 1, text: 'Hello Kaley. this is lerom epsum. nice to meet You.)!', timestamp: '09:30 AM', senderId: 1 },
        { id: 2, text:  'Hello Kaley. this is lerom epsum. nice to meet You. this is lerom epsum. nice to meet You.', timestamp: '2023-08-28 10:15 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'incoming', timestamp: '2023-08-28 09:30 AM' },
        { id: 2, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
      ],
    },
    {
      id: 2,
      name: 'Jim Carry',
      image: './assests/images/user2.png',
      messages: [
        { id: 1, text: 'please send location :)!', timestamp: '10:15 AM', senderId: 1 },
        { id: 2, text: 'I\'m good!', timestamp: '2023-08-28 11:30 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
        { id: 2, callType: 'incoming', timestamp: '2023-08-28 12:15 PM' },
      ],
    },
    {
      id: 3,
      name: 'Kate Belanchet',
      image: './assests/images/user3.png',
      messages: [
        { id: 3, text: 'Thank you so much!', timestamp: '10:15 AM', senderId: 3 },
        { id: 2, text: 'How are you?', timestamp: '2023-08-28 10:15 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'incoming', timestamp: '2023-08-28 09:30 AM' },
        { id: 2, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
      ],
    },
    {
      id: 4,
      name: 'Jim Carry',
      image: './assests/images/user2.png',
      messages: [
        { id: 4, text: 'Hi there!', timestamp: 'yesterday', senderId: 4 },
        { id: 2, text: 'I\'m good!', timestamp: '2023-08-28 11:30 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
        { id: 2, callType: 'incoming', timestamp: '2023-08-28 12:15 PM' },
      ],
    },
    {
      id: 5,
      name: 'Kaley Danford',
      image: './assests/images/user1.png',
      messages: [
        { id: 5, text: 'Hello!', timestamp: 'yesterday', senderId: 5 },
        { id: 2, text: 'How are you?', timestamp: '2023-08-28 10:15 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'incoming', timestamp: '2023-08-28 09:30 AM' },
        { id: 2, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
      ],
    },
    {
      id: 6,
      name: 'Kate Belanchet',
      image: './assests/images/user3.png',
      messages: [
        { id: 6, text: 'Hi there!', timestamp: 'yesterday', senderId: 6 },
        { id: 2, text: 'I\'m good!', timestamp: '2023-08-28 11:30 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
        { id: 2, callType: 'incoming', timestamp: '2023-08-28 12:15 PM' },
      ],
    },
    {
      id: 7,
      name: 'Kaley Danford',
      image: './assests/images/user1.png',
      messages: [
        { id: 7, text: 'Hello!', timestamp: 'last week', senderId: 7 },
        { id: 2, text: 'How are you?', timestamp: '2023-08-28 10:15 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'incoming', timestamp: '2023-08-28 09:30 AM' },
        { id: 2, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
      ],
    },
    {
      id: 8,
      name: 'Jim Carry',
      image: './assests/images/user2.png',
      messages: [
        { id: 8, text: 'Hi there!', timestamp: 'last week', senderId: 8 },
        { id: 2, text: 'I\'m good!', timestamp: '2023-08-28 11:30 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
        { id: 2, callType: 'incoming', timestamp: '2023-08-28 12:15 PM' },
      ],
    },
    {
      id: 9,
      name: 'Kate Belanchet',
      image: './assests/images/user3.png',
      messages: [
        { id: 9, text: 'Hello!', timestamp: 'last week', senderId: 9 },
        { id: 2, text: 'How are you?', timestamp: '2023-08-28 10:15 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'incoming', timestamp: '2023-08-28 09:30 AM' },
        { id: 2, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
      ],
    },
    {
      id: 10,
      name: 'Jim Carry',
      image: './assests/images/user2.png',
      messages: [
        { id: 10, text: 'Hi there!', timestamp: 'last week', senderId: 10 },
        { id: 2, text: 'I\'m good!', timestamp: '2023-08-28 11:30 AM', senderId: 2 },
      ],
      callHistory: [
        { id: 1, callType: 'outgoing', timestamp: '2023-08-28 11:45 AM' },
        { id: 2, callType: 'incoming', timestamp: '2023-08-28 12:15 PM' },
      ],
    },
  ];
  
  export default users;