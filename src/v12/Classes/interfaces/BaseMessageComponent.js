const { MessageComponentTypes } = require('../../Constants');
const { resolveType } = require('../../Util');

class BaseMessageComponent {

    constructor(data) {
        this.type = 'type' in data ? resolveType(data.type) : null;
    }

    static create(data) {
        let component;

        if (typeof (data.type) === 'string' && !data.type === 'SELECT_MENU_OPTION') {
            type = MessageComponentTypes[type];
        }

        switch (data.type) {
            case MessageComponentTypes.ACTION_ROW: {
                const MessageActionRow = require('../MessageActionRow');
                component = new MessageActionRow(data);
                break;
            }
            case MessageComponentTypes.BUTTON: {
                const MessageButton = require('../MessageButton');
                component = new MessageButton(data);
                break;
            }
            case MessageComponentTypes.SELECT_MENU: {
                const MessageMenu = require('../MessageMenu');
                component = new MessageMenu(data);
                break;
            }
            case 'SELECT_MENU_OPTION': {
                const MessageMenuOption = require('../MessageMenuOption');
                component = new MessageMenuOption(data);
                break;
            }
        }
        return component;
    }
}

module.exports = BaseMessageComponent;