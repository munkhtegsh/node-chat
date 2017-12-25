
let messages = [];
let id = 0;

module.exports = {
    create: function(req, res) {
        let {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },

    read: function(req, res) {
        res.status(200).send(messages);
    },

    update: function(req, res) {
        let reqId = req.params.id;
        let index = messages.findIndex(message => reqId == message.id);

        messages[ index ] = {
            text: req.body.text,
            time: req.body.time
        };

        res.status(200).send(messages);

    },

    destroy: function(req, res) {
        let reqId = req.params.id;  
        let index = messages.findIndex(message => messages.id == reqId);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}


