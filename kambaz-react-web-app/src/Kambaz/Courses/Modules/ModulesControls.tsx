import { FaPlus } from "react-icons/fa6";
import {Dropdown } from "react-bootstrap";
import {FaCheckCircle} from "react-icons/fa";
import {BsSlashCircle} from "react-icons/bs";
import "./index.css";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="d-flex align-items-center gap-2 flex-nowrap w-100">
            {/* @ts-ignore */}
            <Dropdown>
                {/* @ts-ignore */}
                <Dropdown.Toggle variant="danger" size="lg" id="wd-add-module-btn" className="no-arrow">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Module
                </Dropdown.Toggle>
            </Dropdown>

            {/* @ts-ignore */}
            <Dropdown>
                {/* @ts-ignore */}
                <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-options-btn">
                    <FaCheckCircle className="text-success me-2 fs-5" /> Publish All
                </Dropdown.Toggle>
                {/* @ts-ignore */}
                <Dropdown.Menu>
                    {/* @ts-ignore */}
                    <Dropdown.Item id="wd-publish-all-modules-and-items">
                        <FaCheckCircle className="text-success me-2 fs-5" /> Publish all modules and items
                    </Dropdown.Item>
                    {/* @ts-ignore */}
                    <Dropdown.Item id="wd-publish-modules-only">
                        <FaCheckCircle className="text-success me-2 fs-5" /> Publish modules only
                    </Dropdown.Item>
                    {/* @ts-ignore */}
                    <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                        <BsSlashCircle className="text-secondary me-2 fs-5" /> Unpublish all modules and items
                    </Dropdown.Item>
                    {/* @ts-ignore */}
                    <Dropdown.Item id="wd-unpublish-modules-only">
                        <BsSlashCircle className="text-secondary me-2 fs-5" /> Unpublish modules only
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* @ts-ignore */}
            <Dropdown>
                {/* @ts-ignore */}
                <Dropdown.Toggle variant="light" size="lg" id="wd-view-progress" className="no-arrow">
                    View Progress
                </Dropdown.Toggle>
            </Dropdown>
            {/* @ts-ignore */}
            <Dropdown>
                {/* @ts-ignore */}
                <Dropdown.Toggle variant="light" size="lg" id="wd-collapse-all" className="no-arrow">
                    Collapse All
                </Dropdown.Toggle>
            </Dropdown>
    </div>

);}

