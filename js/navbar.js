$(function() {
    if (loaderhtmlfilename.indexOf("activity") >= 0) {
        $("#activity-navbar").addClass("active");
        //        console.log("active finished");
    }
    if (loaderhtmlfilename.indexOf("repair") >= 0) {
        $("#repair-navbar").addClass("active");
    }
    if (loaderhtmlfilename.indexOf("meals") >= 0) {
        $("#meals-navbar").addClass("active");
    }
    if (loaderhtmlfilename.indexOf("profile") >= 0) {
        $("#profile-navbar").addClass("active");
    }
});
