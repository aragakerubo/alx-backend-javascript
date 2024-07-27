import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    let body;
    let firstName;
    let lastName;
    uploadPhoto()
        .then((obj) => {
            body = obj.body;
        })
        .then(() => createUser())
        .then((obj) => {
            firstName = obj.firstName;
            lastName = obj.lastName;
        })
        .then(() => console.log(`${body} ${firstName} ${lastName}`))
        .catch(() => console.log("Signup system offline"));
}
