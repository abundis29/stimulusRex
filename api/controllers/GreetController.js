/**
 * GreetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const ejs = require("ejs");
module.exports = {

  post: async function (req, res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    var ItemComponent = await Message.create(params).fetch();

    var messages = await Message.find({id: ItemComponent.owner});

    var messages = await Message.find({
      or: [
        // Friend things:
        { owner: ItemComponent.owner },
      ]
    })

    const result = await ejs.render(`<% messages.forEach(function(item,index){ %>
      <div class="clearfix">
          <div
            class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
          ><%= item.text %></div>
        </div>
      <% }) %>`, {
        messages: messages,
    });
    return res.send(result);
  },

};
