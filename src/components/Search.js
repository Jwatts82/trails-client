
const SearchTrails = (props) => {
    return (
        <div>
            <input type="text" value={props.search} onChange={props.updateOnSearch}/>
        </div>
    )
}

export { SearchTrails };


const SearchParks = (props) => {
    return (
        <div>
            <input type="text" value={props.search} onChange={props.updateOnSearch}/>
        </div>
    )
}

export { SearchParks };