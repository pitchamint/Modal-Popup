//ซ่อนและแสดงตัว Modal
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.modal-container')

//ดักจับevent ว่ามีคนคลิกมั้ย
openBtn.addEventListener("click",()=>{
    modalContainer.classList.add("show") //เราต้องการแสดงผลใน modal contauner โดยเพิ่มคลาส show ไปที่มี opacity เป็น 1
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show") 
})