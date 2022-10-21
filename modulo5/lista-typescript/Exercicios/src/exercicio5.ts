enum USUARIOS {
    
    USER="user",
    ADM="admin"

} 
 
const usuarios =  [
	{name: "Rogério", email: "roger@email.com", role:USUARIOS.USER},
	{name: "Ademir", email: "ademir@email.com", role: USUARIOS.ADM},
	{name: "Aline", email: "aline@email.com", role: USUARIOS.USER},
	{name: "Jéssica", email: "jessica@email.com", role: USUARIOS.USER},  
	{name: "Adilson", email: "adilson@email.com", role: USUARIOS.USER},  
	{name: "Carina", email: "carina@email.com", role: USUARIOS.ADM}      
] 



const mapUsuarios = usuarios.filter(function(pessoa) {
	return  pessoa.role == "admin" 
   }).map((item:any)=>{
	 return  item.email
   })

console.log(mapUsuarios)