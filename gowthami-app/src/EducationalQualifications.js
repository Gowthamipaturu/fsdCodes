import React from 'react'
import WorkHistory from './WorkHistory';

const EducationalQualifications = () => {
  return (
    <><div>EducationalQualifications</div>
    <table>
            <tr>
                <th>COURSE</th>
                <th>UNIVERSITY or BOARD</th>
                <th>YEAR OF PASSING</th>
                <th>AGGREGATE</th>
            </tr>
            <tr>
                <td>BE ECE</td>
                <td>JNTU Ananthapur</td>
                <td>2014</td>
                <td>66.3%</td>
            </tr>
            <tr>
                <td>Diploma ECE</td>
                <td>State board of technical education and training AP</td>
                <td>2011</td>
                <td>75%</td>
            </tr>
            <tr>
                <td>SSC</td>
                <td>Board of secondary Education AP</td>
                <td>2008</td>
                <td>84.2%</td>
            </tr>
        </table>
        <WorkHistory/>
    </>
  )
}

export default EducationalQualifications