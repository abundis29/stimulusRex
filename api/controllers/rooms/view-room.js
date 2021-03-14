module.exports = {


  friendlyName: 'View room',


  description: 'Display "Room" page.',

  inputs: {

    room_id: {
      description: 'The id of the thing being borrowed',
      type: 'number',
    }
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/rooms/room'
    }

  },


  fn: async function () {

    var rooms = await Room.find({
      // or: [
      //   // Friend things:
      //   // { owner: { 'in': _.pluck(this.req.me.friends, 'id') } },
      //   // My things:
      //   // { owner: this.req.me.id }
      // ]
    })
    // console.log(rooms)
    // .populate('owner')
    // .populate('tag')
    // .populate('borrowedBy');

    // _.each(things, (thing)=> {
    //   thing.imageSrc = url.resolve(sails.config.custom.baseUrl, '/api/v1/things/'+thing.id+'/photo');
    //   delete thing.imageUploadFd;
    //   delete thing.imageUploadMime;
    // });

    // Respond with view.
    return {
      simon: 'ajua',
      rooms: rooms
    };

  }


};
