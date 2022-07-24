import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import axios from "axios";
import {searchByCountry} from "../config";
import {UiButton} from "../UI/UiButton";
import Info from "../components/Info";

const Details = ({ match }) => {

    const {name} = useParams()
    const {push, goBack} = useHistory()
    const [country, setCountry] = useState(null)

    console.log(country)

    useEffect(()=> {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <div>
            <UiButton onClick={goBack}>
                <IoArrowBack /> back
            </UiButton>
            {country && <Info push={push} {...country}/>}

        </div>
    );
};

export default Details;