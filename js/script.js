

// hader link activate
const link = document.querySelectorAll('.linkHeader');
function activeLink() {
   link.forEach((ele) => {
      ele.classList.remove('active');
   });
   this.classList.add('active');
}
link.forEach((ele) => {
   ele.addEventListener('click', activeLink);
});
// End of header link activate

function myFun() {
   alert('Waiting For Future')
}