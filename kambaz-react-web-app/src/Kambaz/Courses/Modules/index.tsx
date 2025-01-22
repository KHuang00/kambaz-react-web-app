export default function Modules() {
    return (
        <div id="wd-modules">
            <div id="wd-modules-actions">
                <button id="wd-collapse-all">Collapse All</button>
                <button id="wd-view-progress">View Progress</button>

                <div className="dropdown-box">
                    <select id="wd-publish-options" style={{ width: "220px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}>
                        <option value="DEFAULT" disabled selected>
                            Publish All
                        </option>
                        <option value="PUBLISH_ALL">✅ Publish all modules and items</option>
                        <option value="PUBLISH_MODULES">✅ Publish modules only</option>
                        <option value="UNPUBLISH_ALL">🚫 Unpublish all modules and items</option>
                        <option value="UNPUBLISH_MODULES">🚫 Unpublish modules only</option>
                    </select>
                </div>



                <button id="wd-add-module">+ Module</button>
            </div>

            <ul className="wd-modules-list">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                </li>
            </ul>
        </div>
    );
}


