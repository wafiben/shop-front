import { useState } from "react";
export const usePosition = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return { handleClose, handleShow, show }
}