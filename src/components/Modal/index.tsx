import '@epfl-sti/epfl-elements-styles/dist/css/combined.css'
import { useState, useEffect } from 'react';

type ModalProps = {
    title?: string;
    children: React.ReactNode;
    customFooter?: React.ReactNode;
    handleClose?: () => void;
};

export const Modal: React.FC<ModalProps> = ({ title, children, customFooter, handleClose }) => {

    const [showModal, setShowModal] = useState(true);
    const modalBackgroundColor = "rgb(33, 33, 33, 0.3)";

    function handleLocalClose() {
        setShowModal(false);
        document.body.style.overflow = "auto";
        if (handleClose) {
            handleClose();
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            {showModal && <><div className="modal fade show" style={{
                display: "block", 
                paddingRight: "15px",
                backgroundColor: modalBackgroundColor
            }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {title && <h5 className="modal-title">{title}</h5>}
                            <button type="button" className="close" onClick={handleLocalClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {customFooter ? customFooter : <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleLocalClose}>Close</button>}
                        </div>
                    </div>
                </div>
            </div>
            </>}
        </>
    );
};
