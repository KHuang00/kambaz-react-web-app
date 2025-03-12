import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
    return (
        <span className="position-relative d-inline-flex align-items-center justify-content-center">
      <FaCircle className="text-white fs-5" />
      <FaCheckCircle className="text-success position-absolute fs-5" />
    </span>
    );
}
