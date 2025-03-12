import { Modal, FormControl, Button } from "react-bootstrap";
export default function ModuleEditor({ show, handleClose, dialogTitle, moduleName, setModuleName, addModule,}: {
    show: boolean; handleClose: () => void; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void;
    addModule: () => void; }) {
    return (
        //  @ts-ignore
        <Modal show={show} onHide={handleClose}>
            { /* @ts-ignore */ }
            <Modal.Header closeButton>
                { /* @ts-ignore */ }
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            { /* @ts-ignore */ }
            <Modal.Body>
                { /* @ts-ignore */ }
                <FormControl value={moduleName}
                             onChange={(e) => { setModuleName(e.target.value); }} />
            </Modal.Body>
            { /* @ts-ignore */ }
            <Modal.Footer>
                { /* @ts-ignore */ }
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                { /* @ts-ignore */ }
                <Button variant="primary"
                        onClick={() => {
                            addModule();
                            handleClose();
                        }} > Add Module </Button>
            </Modal.Footer>
        </Modal>
    );}
