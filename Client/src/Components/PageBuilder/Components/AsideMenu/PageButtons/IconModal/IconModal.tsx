import {Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react';
import {icons} from '../../../../../../util/Constatnts';
import {useDispatch, useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../util/types';
import {BuilderSlice} from '../../../../../../redux/slices';
import {v4} from 'uuid';

type IconModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const IconModal: React.FC<IconModalProps> = ({isOpen, onClose}) => {
  const dispatch = useDispatch();
  const editingBtnId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const onIconClickHandler = (index: number) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingBtnId, setting: {iconIndex: index}}));
    onClose();
  };
  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div className="w-full h-full p-4 grid grid-cols-6 justify-items-center gap-14">
            {icons.map((Icn, i) => (
              <div
                key={v4()}
                onClick={() => onIconClickHandler(i)}
                className="h-full bg-neutral-light2 hover:bg-neutral-light p-2 rounded-lg cursor-pointer hover:scale-[1.02] transition duration-100"
              >
                <Icn size={36} />
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IconModal;
