const  LOGIN_EMAIL = 'admin@email.com.br';
const  LONGIN_SENHA = '123logar';

function efetuarLogin(){


 if($("#email").val() == LOGIN_EMAIL && $("#password").val() == LONGIN_SENHA){
    toastr.success('email correto!!');
 }else if($("#email").val() != LOGIN_EMAIL){
    toastr.error('Por favor preencha corretamente seu email.!');
 }else{
    toastr.error('Por favor preencha corretamente sua senha.!');
 }
}


