
function initHomePage() {
    console.log("App is initialized");

    data.fetchUsers(function (response) {
        console.log("CTRL", "onSuccess", response);
        ui.displayUsers(response)
    })

}

export {
    initHomePage
}
