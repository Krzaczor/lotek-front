import { useContext } from "react";
import { DrawsContext } from "../drawsContext";

const parseDraw = (draw) => ({
    id: String(draw.id),
    numbers: draw.numbers.map(number => parseInt(number)),
    time: new Date(draw.time),
    winers: draw.winers,
});

export const useDrawsContext = () => {
    const [state, setState] = useContext(DrawsContext);

    const setDraws = drawsArray => {
        const newDraws = drawsArray.map(draw => parseDraw(draw))

        setState(prevState => ({
            ...prevState,
            draws: [...prevState.draws, ...newDraws]
        }));
    };

    const setSelectDraw = drawObject => {
        setState(prevState => ({
            ...prevState,
            selectedDraw: drawObject,
            hasSelectedDraw: true
        }));
    };

    const removeSelectDraw = () => {
        setState(prevState => ({
            ...prevState,
            selectedDraw: {},
            hasSelectedDraw: false
        }));
    };

    const setNewestDraw = drawObject => {
        setState(prevState => ({
            ...prevState,
            newestDraw: parseDraw(drawObject)
        }));
    };

    const setShowModal = trueOrFalse => {
        setState(prevState => ({
            ...prevState,
            showModal: trueOrFalse
        }));
    };

    return {
        draws: state.draws,
        selectedDraw: state.selectedDraw,
        hasSelectedDraw: state.hasSelectedDraw,
        newestDraw: state.newestDraw,
        showModal: state.showModal,

        setDraws,
        setSelectDraw,
        removeSelectDraw,
        setNewestDraw,
        setShowModal
    };
};
