import Axios from 'axios';

const register = async (email:string, password:string) => {

    try {
        
       const response = await Axios.post("http://example-react.this.is/", {email, password})

       sessionStorage.setItem("token", JSON.stringify(response.data.token));

    } catch (error) {
        return error;
    }
} 


export default register;
