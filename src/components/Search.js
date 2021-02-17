
const SearchTrails = (props) => {
    return (
        <div>
            <input type="text" value={props.search} onChange={props.updateOnSearch} placeholder="Trail Name..."/>
        </div>
    )
}

export { SearchTrails };

const SearchParks = (props) => {
    return (
        <div>
            <input type="text" value={props.search} onChange={props.updateOnSearch} placeholder="Park Name...."/>
        </div>
    )
}

export { SearchParks };

// const SearchParkTrails = (props) => {
//     return (
//         <div>
//             <input type="text" value={props.search} onChange={props.updateOnSearch} placeholder="Difficulty...."/>
//         </div>
//     )
// }

//export { SearchParkTrails };