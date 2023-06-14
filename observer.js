class Channel {
  subscribers = [];

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  sendNotification(message) {
    this.subscribers.forEach(subscriber => subscriber.notify(message));
  }
}

class Subscriber {
  notify(message) {
    console.log(message);
  }
}

let channel = new Channel();
channel.addSubscriber(new Subscriber());
channel.addSubscriber(new Subscriber());
channel.addSubscriber(new Subscriber());
channel.sendNotification("new video uploaded");
