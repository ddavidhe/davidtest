import { useEffect, useState } from "react";

function foodCall() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/v1/patients')
            .then((res) => res.json())
            .then((data) => setPatients(data));
    }, []);

}

export default foodCall;