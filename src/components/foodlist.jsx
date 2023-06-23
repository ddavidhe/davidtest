

function DoctorsList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=05937eba&app_key=7f8c81b2f89b7d71d740c4ba140c9201&ingr=apple&nutrition-type=cooking&category=generic-foods')
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
}