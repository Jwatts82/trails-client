
const SearchTrails = (props) => {
    return (
        <div>
            <input type="text" value={props.search} onChange={props.updateOnSearch}/>
        </div>
    )
}

export { SearchTrails };