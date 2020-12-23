import React from "react"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import '../css/weather_table.css'

const WeatherTable = () => {

    const createData = (weather, type) => {
        return { weather, type }
    }

    const rows = [
        createData('Sunny', 'https://www.pokepedia.fr/images/f/fc/Miniature_Type_Feu_EB.png'),
        createData('Cloudy', 'https://www.pokepedia.fr/images/6/62/Miniature_Type_Vol_EB.png'),
        createData('Foggy', 'https://www.pokepedia.fr/images/e/e5/Miniature_Type_Spectre_EB.png'),
        createData('Raining', 'https://www.pokepedia.fr/images/4/4c/Miniature_Type_Eau_EB.png'),
        createData('Snowing', 'https://www.pokepedia.fr/images/7/7e/Miniature_Type_Glace_EB.png'),
        createData('Lightning_Cloudy', 'https://www.pokepedia.fr/images/6/6c/Miniature_Type_%C3%89lectrik_EB.png')
    ];

    return (
        <div style={{width: "250px"}}>
            <div className="weather-table-title">Table des types</div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Météo</TableCell>
                            <TableCell align="right">Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.weather}>
                                <TableCell component="th" scope="row">
                                    <img src={"https://cdn4.iconfinder.com/data/icons/weatherful/72/" + row.weather + "-512.png"}
                                        alt=""
                                        height="40px" />
                                </TableCell>
                                <TableCell align="right">
                                    <img src={row.type} alt="" width="80px" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default WeatherTable