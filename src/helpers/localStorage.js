export const loadState = () => {
    try{
        const stateFromStorage = localStorage.getItem( "state" );

        if( stateFromStorage === null ){
            return undefined;
        }

        return JSON.parse( stateFromStorage );
    }
    catch( err ){
        return undefined;
    }
}

export const saveState = ( state ) => {
    try{
        const jsonState = JSON.stringify( state );

        localStorage.setItem( "state", jsonState );
    }
    catch( err ){
        console.log( "saveState error", err );
    }
}
