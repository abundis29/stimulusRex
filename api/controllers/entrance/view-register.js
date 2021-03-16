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
        viewTemplatePath: 'pages/entrance/register'
      }
  
    },
  
    fn: async function ({room_id}) {
      return {
      };
    }
  };
  