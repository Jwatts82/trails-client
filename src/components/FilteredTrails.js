
const FilterdTrails = props => {
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
                    <option key='all' value=''>All Trails</option>
                    {filterOptions}
                </select>
            </label>
        </form>
    )
}

export default FilterdTrails;