
// <!-- Logic to toggle user popup -->


const handleOnClick = () => {
    let userClick = document.getElementById("userclick")
    console.log(userClick)
    const check = userClick.style.display;
    if (check === "none") {
        userClick.style.display = "flex"
    } else {
        userClick.style.display = "none"
    }
}