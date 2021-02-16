
const FilteredMiles = props => {
    const trails = props.trails.map( trail => {
        return (
            trail.miles
        )
    }).sort()

    const uniqTrails = [...new Set(trails)]

    const filterOptions = uniqTrails.map( (c, i) => {
        return (
            <option key={i} value={c}>
                {c}
            </option>
        )
    })

    return (
            <form>
                <label>
                    Filter By Miles: &nbsp;
                    <select
                        id="miles"
                        onChange={props.handleOnSelect}
                    >
                        <option key='all' value=''>All Distances</option>
                        {filterOptions}
                    </select>
                </label>
            </form>
    )
}

export default FilteredMiles;