const replybtn1 = document.getElementById("replybtn1")
const replycomment1 = document.getElementById("replycomment1")
const buttoninreply1 = document.getElementById("buttoninreply1")
const answer1 = document.getElementById("answer1")
const replyinput1 = document.getElementById("replyinput1")
const answertext1 = document.getElementById("answertext1")
const rank1 = document.getElementById("rank1")
const plus1 = document.getElementById("plus1")
const minus1 = document.getElementById("minus1")
const rank2 = document.getElementById("rank2")
const plus2 = document.getElementById("plus2")
const minus2 = document.getElementById("minus2")
const rank3 = document.getElementById("rank3")
const plus3 = document.getElementById("plus3")
const minus3 = document.getElementById("minus3")
const rank4 = document.getElementById("rank4")
const plus4 = document.getElementById("plus4")
const minus4 = document.getElementById("minus4")
const rank5 = document.getElementById("rank5")
const plus5 = document.getElementById("plus5")
const minus5 = document.getElementById("minus5")
const rank6 = document.getElementById("rank6")
const plus6 = document.getElementById("plus6")
const minus6 = document.getElementById("minus6")
const rank7 = document.getElementById("rank7")
const plus7 = document.getElementById("plus7")
const minus7 = document.getElementById("minus7")
const edit1 = document.getElementById("edit1")
const delete1 = document.getElementById("delete1")
const edit2 = document.getElementById("edit2")
const delete2 = document.getElementById("delete2")
const edit3 = document.getElementById("edit3")
const delete3 = document.getElementById("delete3")
const edit4 = document.getElementById("edit4")
const delete4 = document.getElementById("delete4")
const replybtn2 = document.getElementById("replybtn2")
const replycomment2 = document.getElementById("replycomment2")
const buttoninreply2 = document.getElementById("buttoninreply2")
const answer2 = document.getElementById("answer2")
const replyinput2 = document.getElementById("replyinput2")
const answertext2 = document.getElementById("answertext2")
const replybtn3 = document.getElementById("replybtn3")
const replycomment3 = document.getElementById("replycomment3")
const buttoninreply3 = document.getElementById("buttoninreply3")
const answer3 = document.getElementById("answer3")
const replyinput3 = document.getElementById("replyinput3")
const answertext3 = document.getElementById("answertext3")
const replybtn4 = document.getElementById("replybtn4")
const replycomment4 = document.getElementById("replycomment4")
const buttoninreply4 = document.getElementById("buttoninreply4")
const answer4 = document.getElementById("answer4")
const replyinput4 = document.getElementById("replyinput4")
const answertext4 = document.getElementById("answertext4")
const yesbtn = document.getElementById("yes")
const nobtn = document.getElementById("no")
const deletepop = document.getElementById("delete")
const main = document.getElementById("main")
const body = document.body
let value = 0


replybtn1.addEventListener("click", ()=>{
    replycomment1.style.display = "flex"
})
buttoninreply1.addEventListener("click", ()=>{
    replycomment1.style.display = "none"
    answer1.style.display = "flex"
    answertext1.innerText= replyinput1.value
})
replybtn2.addEventListener("click", ()=>{
    replycomment2.style.display = "flex"
})
buttoninreply2.addEventListener("click", ()=>{
    replycomment2.style.display = "none"
    answer2.style.display = "flex"
    answertext2.innerText= replyinput2.value
})
replybtn3.addEventListener("click", ()=>{
    replycomment3.style.display = "flex"
})
buttoninreply3.addEventListener("click", ()=>{
    replycomment3.style.display = "none"
    answer3.style.display = "flex"
    answertext3.innerText= replyinput3.value
})
buttoninreply4.addEventListener("click", ()=>{
    answer4.style.display = "flex"
    answertext4.innerText= replyinput4.value
})
edit1.addEventListener("click", ()=>{
    replycomment1.style.display = "flex"
    answer1.style.display = "none"
    replyinput1.value = answertext1.innerText
})
delete1.addEventListener("click", ()=>{
    value = 1
    deletepop.style.display = "block"
    main.style.overflow = "hidden"
    main.style.display = "none"
})
edit2.addEventListener("click", ()=>{
    replycomment2.style.display = "flex"
    answer2.style.display = "none"
    replyinput2.value = answertext2.innerText
})
delete2.addEventListener("click", ()=>{
    value = 2
    deletepop.style.display = "block"
    main.style.overflow = "hidden"
    main.style.display = "none"
})
edit3.addEventListener("click", ()=>{
    replycomment3.style.display = "flex"
    answer3.style.display = "none"
    replyinput3.value = answertext3.innerText
})
delete3.addEventListener("click", ()=>{
    value = 3
    deletepop.style.display = "block"
    main.style.overflow = "hidden"
    main.style.display = "none"

})
edit4.addEventListener("click", ()=>{
    replycomment4.style.display = "flex"
    answer4.style.display = "none"
    replyinput4.value = answertext4.innerText
})
delete4.addEventListener("click", ()=>{
    value = 4
    deletepop.style.display = "block"
    main.style.overflow = "hidden"
    main.style.display = "none"
})
yesbtn.addEventListener("click", ()=>{
    deletepop.style.display = "none"
        main.style.overflow = "scroll"
        main.style.display = "block"
    if(value == 1){
        replycomment1.style.display = "none"
        answer1.style.display = "none"
        replyinput1.value = ""
        answertext1 = ""
    }
    if (value == 2){
        replycomment2.style.display = "none"
        answer2.style.display = "none"
        replyinput2.value = ""
        answertext2 = ""
    }
    if (value == 3){
        replycomment3.style.display = "none"
        answer3.style.display = "none"
        replyinput3.value = ""
        answertext3 = ""
    }
    if (value == 4){
        answer4.style.display = "none"
        replyinput4.value = ""
        answertext4 = ""
    }
})
nobtn.addEventListener("click",()=>{
    deletepop.style.display = "none"
    main.style.overflow = "scroll"
    main.style.opacity = "1"
})
plus1.addEventListener("click",()=>{
    rank1.innerText ++
})
minus1.addEventListener("click",()=>{
    rank1.innerText --
})
plus2.addEventListener("click",()=>{
    rank2.innerText ++
})
minus2.addEventListener("click",()=>{
    rank2.innerText --
})
plus3.addEventListener("click",()=>{
    rank3.innerText ++
})
minus3.addEventListener("click",()=>{
    rank3.innerText --
})
plus4.addEventListener("click",()=>{
    rank4.innerText ++
})
minus4.addEventListener("click",()=>{
    rank4.innerText --
})
plus5.addEventListener("click",()=>{
    rank5.innerText ++
})
minus5.addEventListener("click",()=>{
    rank5.innerText --
})
plus6.addEventListener("click",()=>{
    rank6.innerText ++
})
minus6.addEventListener("click",()=>{
    rank6.innerText --
})
plus7.addEventListener("click",()=>{
    rank7.innerText ++
})
minus7.addEventListener("click",()=>{
    rank7.innerText --
})
