import EventEmitter from 'events';

export default class EventHandler extends EventEmitter {
    //This method is called so the message is 
    //more easily formatted for humans away from components
    //using event emitter
    //Really don't need this, eventHandler can just emit
    // a specific name for an event and the corresponding
    //function in "handleEventsToListenFor" can be run
    logTest(message) {
        //Raise event
        this.emit('messageLogged', ("\"" + message +"\""))
    }

    handleEventsToListenFor(eventHandler){
        eventHandler.on('messageLogged', (arg) =>{
            console.log('Listener called', arg)
          })

        // eventHandler.on('checkPassword', (arg) =>{

        // })
    }
}