import MockAdapter from "axios-mock-adapter";

const usersById = {
  1: "James Blanderphone",
  2: "Normalavian Ropetoter",
  3: "Flambaravo Chortleblatt",
};

const messagesByConversationId = {
  1: [
    {
      id: 3432,
      content: "Hey how are you?",
      index: 1,
      user_id: 1,
      username: "James Blanderphone",
    },
    {
      id: 444,
      content: "Not bad! I'm a bear pretending to be a human!",
      index: 2,
      user_id: 2,
      username: "Normalavian Ropetoter",
    },
    {
      id: 5554,
      content:
        "Oh, thanks for sharing that.  Must be hard not to catch a salmon in your mouth as it jumps out of a river when there are others around.",
      index: 3,
      user_id: 1,
      username: "James Blanderphone",
    },
    {
      id: 1423,
      content: "Boy, you're telling me! LOL!",
      index: 4,
      user_id: 2,
      username: "Normalavian Ropetoter",
    },
  ],
  2: [
    {
      id: 44344,
      content: "Salutations, brother in patchy beard!",
      index: 1,
      user_id: 1,
      username: "James Blanderphone",
    },
    {
      id: 76666,
      content: "Salutations! May I ask why your beard is so patchy?",
      index: 2,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
    {
      id: 9484,
      content:
        "But of course. I actually remove hair strategically as a calculated look. It helps me establish dominance in a business setting.",
      index: 3,
      user_id: 1,
      username: "James Blanderphone",
    },
    {
      id: 32222,
      content:
        "Oh wow! Mine is just because I drink too much Gatorade. Drinking Gatorade in excess has no career benefits that I have discovered so far.",
      index: 4,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
  ],
  3: [
    {
      id: 333,
      content: "Hey, James",
      index: 1,
      user_id: 2,
      username: "Normalavian Ropetoter",
    },
  ],
  4: [
    {
      id: 75526666,
      content: "What is going on, Normlavorino?",
      index: 1,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
    {
      id: 33344,
      content: "Oh, you know, just toting ropes as usual!",
      index: 2,
      user_id: 2,
      username: "Normalavian Ropetoter",
    },
  ],
  5: [
    {
      id: 355121,
      content:
        "Hi James, my close personal friend. I have something to tell you.",
      index: 1,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
    {
      id: 322333,
      content: "I am always here to listen to you",
      index: 2,
      user_id: 1,
      username: "James Blanderphone",
    },
    {
      id: 2555,
      content: "I swallowed a fly while riding my bicycle.",
      index: 3,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
    {
      id: 55622,
      content: "Oh, then I guess you don't need to eat lunch.",
      index: 4,
      user_id: 1,
      username: "James Blanderphone",
    },
  ],
  6: [
    {
      id: 663,
      content: "Hey! We still going to the bakery tonight?",
      index: 1,
      user_id: 2,
      username: "Normalavian Ropetoter",
    },
    {
      id: 777733,
      content: "Of course! I yearn for bread!",
      index: 2,
      user_id: 3,
      username: "Flambaravo Chortleblatt",
    },
  ],
};

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === "true";
};

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  mock
    .onGet(/\/conversations\/\d+\/messages/)
    .reply((config) => getMessagesForConversation(config));

  mock
    .onPost(/\/conversations\/\d+\/messages/)
    .reply((config) => handleMessageSend(config));

  mock
    .onPost(/\/conversations\/\d+\/view_horizon/)
    .reply((config) => handleSetViewed(config));

  mock.onGet("/conversations").reply((config) => getConversations(config));
};

export const getConversations = (config) => {
  const userId = parseInt(config.headers["User-Id"], 10);
  let conversations;
  switch (userId) {
    case 1: // James Blanderphone
      conversations = [
        {
          id: 1,
          name: "Normalavian Ropetoter",
        },
        {
          id: 2,
          name: "Flambaravo Chortleblatt",
        },
      ];
      break;
    case 2: // Normalavian Ropetoter
      conversations = [
        {
          id: 3,
          name: "James Blanderphone",
        },
        {
          id: 4,
          name: "Flambaravo Chortleblatt",
        },
      ];
      break;
    case 3: // Flambaravo Chortleblatt
      conversations = [
        {
          id: 5,
          name: "James Blanderphone",
        },
        {
          id: 6,
          name: "Normalavian Ropetoter",
        },
      ];
      break;
    default:
      conversations = null;
  }

  if (conversations) {
    return [200, { conversations }];
  } else {
    return [404, { error: `Could not find user with id: ${userId}` }];
  }
};

export const getMessagesForConversation = (config) => {
  const conversationId = extractConversationIdFromMessagesPath(config);
  const messages = messagesByConversationId[conversationId];
  return [200, { messages, next_cursor: null }];
};

export const handleMessageSend = (config) => {
  const body = JSON.parse(config.data);
  return [
    201,
    {
      message: {
        id: getRandomInt(9999),
        content: body.content,
        index: 99,
        user_id: body.user_id,
        username: usersById[body.user_id],
      },
    },
  ];
};

const handleSetViewed = (_config) => {
  return [204, ""];
};

const extractConversationIdFromMessagesPath = (config) => {
  return config.url.split("/")[2];
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
