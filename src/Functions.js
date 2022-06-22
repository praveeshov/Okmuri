async function Apidatas(source, methord,params) {

    const server = 'http://3.145.145.124:8000'
    // const [place, SetPlaces] = useState([])

    try {
        const response = await fetch(server + source, { method: methord })
        const json = await response.json();
        // console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
    // console.log(place);
   // http://3.145.145.124:8000/contact/list/contacts/?main_cat=other&place=3
   //http://3.145.145.124:8000/contact/list/contacts/?main_cat=other&place=3&sub_cat=itc
}
export { Apidatas };