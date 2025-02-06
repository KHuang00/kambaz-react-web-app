import { ListGroup} from "react-bootstrap";

export default function BootstrapLists() {

    return (
    <>
        <div id="wd-css-styling-lists">
            <br/><br/><br/>
            <h2>Favorite movies</h2>
            {/* @ts-ignore */}
            <ListGroup>
                {/* @ts-ignore */}
                <ListGroup.Item active>Aliens</ListGroup.Item>
                {/* @ts-ignore */}
                <ListGroup.Item>Terminator</ListGroup.Item>
                {/* @ts-ignore */}
                <ListGroup.Item>Blade Runner</ListGroup.Item>
                {/* @ts-ignore */}
                <ListGroup.Item>Lord of the Ring</ListGroup.Item>
                {/* @ts-ignore */}
                <ListGroup.Item disabled>Star Wars</ListGroup.Item>
            </ListGroup>
        </div>

        <div id="wd-css-hyperlink-list">
        <br/><br/><br/>
        <h3>Favorite books</h3>
        {/* @ts-ignore */}
        <ListGroup>
            {/* @ts-ignore */}
            <ListGroup.Item   action active
                              href="https://en.wikipedia.org/wiki/Dune_(novel)">
                Dune                 </ListGroup.Item>
            {/* @ts-ignore */}
            <ListGroup.Item   action
                              href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
                Lord of the Rings    </ListGroup.Item>
            {/* @ts-ignore */}
            <ListGroup.Item   action
                              href="https://en.wikipedia.org/wiki/The_Forever_War">
                The Forever War      </ListGroup.Item>
            {/* @ts-ignore */}
            <ListGroup.Item   action
                              href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
                2001 A Space Odyssey </ListGroup.Item>
            {/* @ts-ignore */}
            <ListGroup.Item   action   disabled
                              href="https://en.wikipedia.org/wiki/Ender%27s_Game">
                Ender's Game         </ListGroup.Item>
            {/* @ts-ignore */}
            <ListGroup.Item action onClick={() => alert("New book added")}>
                Add another book     </ListGroup.Item>
        </ListGroup>
    </div>

    </>
);}