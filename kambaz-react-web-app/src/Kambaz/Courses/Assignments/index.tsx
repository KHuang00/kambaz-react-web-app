export default function Assignments() {
    const categories = {
        ASSIGNMENTS: [
            {
                id: "123",
                name: "A1 - ENV + HTML",
                available: "01/02/2025 at 10:00 am",
                due: "01/09/2025 at 11:59 pm",
                points: 100,
                module: "Module 1",
            },
            {
                id: "234",
                name: "A2 - CSS",
                available: "02/02/2025 at 09:00 am",
                due: "02/22/2025 at 11:59 pm",
                points: 100,
                module: "Module 2",
            },
            {
                id: "456",
                name: "A3 - JavaScript",
                available: "02/11/2025 at 09:00 am",
                due: "02/24/2025 at 11:59 pm",
                points: 100,
                module: "Module 2",
            },
        ],

        PROJECTS: [
            {
                id: "567",
                name: "Capstone Project",
                available: "01/02/2025 at 09:00 am",
                due: "04/02/2025 at 11:59 pm",
                points: 300,
                module: "Final Project",
            },
        ],
    };

    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments" id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>
            <div id="wd-assignments-categories">
                {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="wd-category">
                        <h4 className="wd-category-title">{category}</h4>
                        <ul className="wd-category-list">
                            {items.map((item) => (
                                <li key={item.id} className="wd-category-item">
                                    <a
                                        href={`#/Kambaz/Courses/1234/${category === "ASSIGNMENTS" ? "Assignments" : category.toLowerCase()}/${item.id}`}
                                        className="wd-category-link"
                                    >
                                        {item.name}
                                    </a>
                                    <p className="wd-category-details">
                                        {item.module} | Available until {item.available} | Due {item.due} | {item.points} points
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
