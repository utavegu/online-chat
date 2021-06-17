export class Message {
  constructor(message = '', userId = '') {
    this.id = userId + new Date().getTime();
    this.message = message;
    this.userId = userId + '';
    this.username = userId;
    this.time = new Date().getTime();
    this.status = 'SENT';
  }

  static STATE = {
    SENT: 'SENT',
    DELIVERED: 'DELIVERED',
    READ: 'READ',
  };
}

export class WSMessage {
  constructor(message = null) {
    this.type = message ? this.TYPE.TEXT : this.TYPE.ORDER_STATUS;
    this.message = message;
  }

  static TYPE = {
    TEXT: 'TEXT',
    UPDATE: 'UPDATE',
    ORDER_STATUS: 'ORDER_STATUS',
  };
}
