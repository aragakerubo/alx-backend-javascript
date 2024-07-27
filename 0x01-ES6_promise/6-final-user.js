import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const array = [];
    const dictUser = {};
    const dictFile = {};
    const prom1 = signUpUser(firstName, lastName)
        .then((obj) => {
            dictUser.status = "resolved";
            dictUser.value = obj;
        })
        .catch((error) => {
            dictUser.status = "rejected";
            dictUser.value = error;
        });
    const prom2 = uploadPhoto(fileName)
        .then((obj) => {
            dictFile.status = "resolved";
            dictFile.value = obj;
        })
        .catch((error) => {
            dictFile.status = "rejected";
            dictFile.value = error;
        });
    return Promise.all([prom1, prom2]).then(() => {
        array.push(dictUser, dictFile);
        return array;
    });
}
