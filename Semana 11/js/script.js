import { registerUser } from "./firebase.js";

async function register(){
    await registerUser("diegoemz09@gmail.com", "123456");
};

register();