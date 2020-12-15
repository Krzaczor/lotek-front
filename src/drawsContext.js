import React, { useState } from "react";

const DrawsContext = React.createContext([{}, () => { }]);

const DrawsContextProvider = props => {
    const [state, setState] = useState({
        draws: [],
        selectedDraw: null,
        hasSelectedDraw: false,
        newestDraw: null,
        showModal: false
    });

    return (
        <DrawsContext.Provider value={[state, setState]}>
            {props.children}
        </DrawsContext.Provider>
    );
};

export { DrawsContext, DrawsContextProvider };