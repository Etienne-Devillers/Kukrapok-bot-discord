import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Repond pong',

    slash:'both', 
    testOnly: true,
    

    callback: ({  }) => {
        return 'pong'
    }
} as ICommand