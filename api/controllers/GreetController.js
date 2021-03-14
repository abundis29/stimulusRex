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
      <li>
        <%= item.text %>
      </li>
      <% }) %>`, {
        messages: messages,
    });
    return res.send(result);
  },

};
