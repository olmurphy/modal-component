import { FC, useState } from "react";
import Modal from "./Modal";

export default function Dashboard(): ReturnType<FC> {
    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <>
            <Modal open={showModal} onClose={toggleModal}>
                <div>
                    Main Content goes here!
                </div>
            </Modal>
            <h1>Dashboard</h1>
            <div className="card">
                <span>Toggle Card</span>
                <button type="button" className="btn" onClick={toggleModal}>Open</button>
            </div>
        </>
    );
}