const FilteredTrails = props => {
    const trails = props.trails.map( trail => {
        return (
            trail.difficulty
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
                Filter By Difficulty: &nbsp;
                <select
                    id="difficulty"
                    onChange={props.handleOnSelect}
                >
                    <option key='all' value=''>All Difficulties</option>
                    {filterOptions}
                </select>
            </label>
        </form>
    )
}

export { FilteredTrails };


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

export { FilteredParks };


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

export { FilteredMiles };
