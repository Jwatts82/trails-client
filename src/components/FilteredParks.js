
const FilteredParks = props => {
    const parks = props.parks.map( park => {
        return (
            park.location
        )
    }).sort()

    const uniqParks = [...new Set(parks)]

    const filterOptions = uniqParks.map( (c, i) => {
        return (
            <option key={i} value={c}>
                {c}
            </option>
        )
    })

    return (
        <form>
            <label>
                Filter By Location: &nbsp;
                <select
                    id="location"
                    onChange={props.handleOnSelect}
                >
                    <option key='all' value=''>All Parks</option>
                    {filterOptions}
                </select>
            </label>
        </form>
    )
}

export default FilteredParks;