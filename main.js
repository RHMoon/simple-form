const handleSubmitForm = () => {
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const age = document.getElementById("age").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const occupancy = document.getElementById("occupancy").value;
    const newsLetter = document.getElementById("newsletter").value;


    // console.log(value);
    // if (newsletter=="on") {
    //     const subscribe = "subscribe";
    // } else {
    //     const subscribe = "not subscribe";
    // }
    alert("Name: "+firstName+" "+lastName+"\n"+dateOfBirth+" "+age+"\n"+gender+" "+occupancy+"\n"+newsLetter);
};