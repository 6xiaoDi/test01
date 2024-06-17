import React, {useState} from 'react'

interface ListItem {
    id:number;
    name:string;
}

const App: React.FC = () => {
    const [isTitleVisble, setIsTitleVisble] = useState(true);

    const mockData: ListItem[] = [
        {id:1, name:'Item 1'},
        {id:2, name:'Item 2'},
        {id:3, name:'Item 3'},
    ]

    const toggleTitleVisbility = () => {
        setIsTitleVisble(!isTitleVisble);
    }

    return (
        <div>
            {isTitleVisble && <h1>Title</h1>}
            <ul>
                {mockData.map(item => {
                    <li key={item.id}>{item.name}</li>
                })}

            </ul>
            <button onClick={toggleTitleVisbility}>
                {isTitleVisble ? "Hide Title" : "Show Title"}
            </button>
        </div>
    )
}