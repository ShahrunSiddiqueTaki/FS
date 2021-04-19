document.body.style.backgroundColor = "rgb(214,214,214)";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.height = "100%";

document.getElementById("Social").style.backgroundColor = "white";

document.write('<button id="buttonCopyCode" onclick="CopyCode()">Copy Code</button>');

document.getElementById("buttonCopyCode").style.padding = "20px";
document.getElementById("buttonCopyCode").style.margin = "20px";
document.getElementById("buttonCopyCode").style.background = "rgb(214,214,214)";
document.getElementById("buttonCopyCode").style.border = "none";
document.getElementById("buttonCopyCode").style.borderRadius = "10px";
document.getElementById("buttonCopyCode").style.fontWeight = "bold";
document.getElementById("buttonCopyCode").style.textTransform = "uppercase";
document.getElementById("buttonCopyCode").style.letterSpacing = "2px";
document.getElementById("buttonCopyCode").style.boxShadow = "-7px -7px 20px 0 rgba(255,255,255,0.7), 7px 7px 20px 0 rgba(0,0,0,0.2)";


function CopyCode() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#Social").html()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("buttonCopyCode").style.boxShadow = "inset -7px -7px 20px 0 rgba(255,255,255,0.7),inset 7px 7px 20px 0 rgba(0,0,0,0.2)";
    document.getElementById("buttonCopyCode").style.color = "rgb(0, 153, 51)";
    document.getElementById("buttonCopyCode").innerHTML = "Code Copied";

}
var OptionCheck = false;

function IconSize() {
    if (OptionCheck == false){
        document.getElementById("IconSize").value = 70;
        document.getElementById("IconDifference").value = 300;
        OptionCheck = true;
        ResetButton();
    }
}
function IconDifference() {
    if (OptionCheck == false){
        document.getElementById("IconSize").value = 70;
        document.getElementById("IconDifference").value = 300;
        OptionCheck = true;
        ResetButton();
    } 
}

$(document).ready(function(){
    $("#IconSize").on("input", function(){
        document.getElementById("facebook").width = $(this).val();
        document.getElementById("linkedin").width = $(this).val();
        document.getElementById("twitter").width = $(this).val();
        document.getElementById("youtube").width = $(this).val();

        document.getElementById("IconDifference").value = $(this).val()*4+20;
        document.getElementById("SocialImage").style.width = $(this).val()*4+20+"px";
        ResetButton();
    });
    $("#IconDifference").on("input", function(){
        document.getElementById("SocialImage").style.width = $(this).val()+"px";
        ResetButton();
    });
});


function ResetButton(){
    document.getElementById("buttonCopyCode").style.boxShadow = "-7px -7px 20px 0 rgba(255,255,255,0.7), 7px 7px 20px 0 rgba(0,0,0,0.2)";
    document.getElementById("buttonCopyCode").style.color = "rgb(0, 0, 0)";
    document.getElementById("buttonCopyCode").innerHTML = "Copy Code";
}

