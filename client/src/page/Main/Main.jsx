import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react';
import style from './main.module.scss'

function Main() {

    const [values, setValues] = useState('');
    const [currencies, setCurrencies] = useState([]);

    async function getData() {
        const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
        setCurrencies(response.data)
    }

    const handleChange = (event) => {
        setValues(event.target.value);
    };

    useEffect(() => {
        getData();
    }, []);

    return <>

        <div className={style.wrapper}>

            <Box sx={{ maxWidth: 500 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currencies</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values}
                        label="Currencies"
                        onChange={handleChange}
                    >

                        {currencies.map((el) => <MenuItem key={el.Cur_ID} value={el.Cur_Code}>{el.Cur_Name}</MenuItem>)}

                    </Select>
                </FormControl>
            </Box>
        </div>

    </>
}
export default Main;