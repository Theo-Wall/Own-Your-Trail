import './ListTrails.css'

const ListTrails = () => {
    
    return (
        <div className='trailsTable'>
            <h3>Trail Title</h3>
            <table>
                <thead>
                    <tr>
                        <th>Col 1</th>
                        <th>Col 2</th>
                        <th>Col 3</th>
                        <th>Col 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>trail1</td>
                        <td>https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw</td>
                        <td>My dog loves taking dumps by this fir tree.</td>
                        <td>turn left at cowboy ave and take a right at lasso st</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTrails