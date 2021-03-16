module.exports = {


  friendlyName: 'View message',


  description: 'Display "Message" page.',

  inputs: {

    room_id: {
      description: 'The id of the thing being borrowed',
      type: 'number',
    }
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/messages/message'
    }

  },

  fn: async function ({room_id}) {
    var messages = await Room.findOne({id: room_id}).populate('messages')
   
    return {
      messages: messages.messages,
      room: messages
    };
  }
};
