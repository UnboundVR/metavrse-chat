import consts from'./constants';

export default {
  onMessage(message, broadcast) {
    if (!message.text || message.text.length == 0) {
      return;
    }

    if (message.text.length > consts.chat.MAX_MSG_LENGTH) {
      message.text = message.text.substr(0, consts.chat.MAX_MSG_LENGTH);
    }

    broadcast(message);
  }
};
