import React from 'react';
import { useDrawsContext } from '../../../hooks/useDrawsContext';

import Modal from '../../Modal';
import Time from '../Time';
import Numbers from '../Numbers';
import Stats from '../Stats';

const DrawModal = () => {
  const { hasSelectedDraw, selectedDraw, newestDraw } = useDrawsContext();
  const draw = hasSelectedDraw ? selectedDraw : newestDraw;

  return (
    <Modal>
        <Time time={draw.time} />
        <Numbers numbers={draw.numbers} />
        <Stats stats={draw.stats} />
    </Modal>
  );
}

export default DrawModal;