document.querySelector(".btn").addEventListener("click",()=>{
  create();
})
function create()
{
  const chars="0123456789qwertyuiopasdfghjklzxcvbnm!@#$%^&*()_+QWERTYUIOPASDFGHJKLZXCVBNM";
  let password="";
  for(let i=0;i<15;i++)
  {
    const rand=Math.floor(Math.random()*chars.length);
    password+=chars.substring(rand,rand+1);
  }
  document.querySelector(".input").value=password;
}
const coptel=document.querySelector(".copy");
coptel.addEventListener("click",()=>{
  document.querySelector(".msg").classList.remove('active');
  setTimeout(()=>{
    document.querySelector(".msg").classList.add('active');},2000)
  document.querySelector(".input").select();
  document.querySelector(".input").setSelectionRange(0,9999);
  navigator.clipboard.writeText(document.querySelector(".input").value)
})