$(function() {
    if (loaderhtmlfilename.indexOf("activity") >= 0) {
        $("#activity-navbar").addClass("active");
        $("#show-current").text("Activities");
        //        console.log("active finished");
    }
    if (loaderhtmlfilename.indexOf("repair") >= 0) {
        $("#repair-navbar").addClass("active");
        $("#show-current").text("Repair");
    }
    if (loaderhtmlfilename.indexOf("meals") >= 0) {
        $("#meals-navbar").addClass("active");
        $("#show-current").text("Meals");
    }
    if (loaderhtmlfilename.indexOf("profile") >= 0) {
        $("#profile-navbar").addClass("active");
        $("#show-current").text("Profile");
    }
});
