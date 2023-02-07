import ReactModal from 'react-modal';
import {useEffect} from "react";
import './Modal.scss'

const customStyles = {
    overlay: {
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: 'none',
        padding: '0'
    },
};

export const Modal = (props) => {
    const {
        open,
        onClose,
        children,
        closeDisabled = false,
        ...modalProps
    } = props;

    useEffect(() =>  {
        if (open) {
            document.body.classList.add('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [open]);

    return <ReactModal
        isOpen={open}
        onRequestClose={(...args) => {
            if (closeDisabled) return;
            onClose(args)
        }}
        style={customStyles}
        ariaHideApp={false}
        {...modalProps}
    >
        {children}
    </ReactModal>
}
