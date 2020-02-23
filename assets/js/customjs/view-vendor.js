$(() => {


})
$("#search-type").on("change", () => {
    if ($("#search-type").val() == "Select option") {
        $("#availablity").attr("hidden", true)
        $("#serviceType").attr("hidden", true)
        $("#select-date").attr("hidden", true)
    }
    else if ($("#search-type").val() == "Vendors") {
        $("#serviceType").attr("hidden", true)
        $("#availablity").removeAttr("hidden")
        $("#availablity").on("change", () => {
            if ($("#availablity").val() == "Available on specific days") {
                $("#select-date").removeAttr("hidden")
            }
            else {
                $("#select-date").attr("hidden", true)
            }
        })


    }
    else if ($("#search-type").val() == "Items") {
        $("#availablity").attr("hidden", true)
        $("#serviceType").attr("hidden", true)
        $("#select-date").attr("hidden", true)

    }
    else if ($("#search-type").val() == "Service") {
        $("#availablity").attr("hidden", true)
        $("#serviceType").removeAttr("hidden", true)
        $("#select-date").attr("hidden", true)




    }



})