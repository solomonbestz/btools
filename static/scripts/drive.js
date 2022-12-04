let g_link = document.getElementById("sharelink")
let converted_link = document.getElementById("downloadlink")
let copy_alert = document.getElementById("alert-copy")
let link1 = ["/file/d/", "/uc?id="]
let link2 = ["/view?usp=share_link", "&export=download"]

// FUNCTION TO GENERATE DOWNLOADABLE LINK
function generatebtn(){
   let link_value =  g_link.value.replace(link1[0], link1[1])
   let magic = link_value.replace(link2[0], link2[1])
   converted_link.value = magic
   g_link.value = ""
}

//  FUNCTION TO COPY CLIBOARD LINK
function copybtn(){
   navigator.clipboard.writeText(converted_link.value)
   converted_link.value = ""
   copy_alert.style.display = "block"
   copy_alert.innerText = "Copied"
   setTimeout(function(){
       copy_alert.style.display = "none"
       copy_alert.innerText = ""
   }, 3000)
}
