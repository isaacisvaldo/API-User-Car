//Aqui teremos as interfaces que vai ser utilizado para todos os controllers!

export interface HttpResponse <T>{
    statusCode: number;
    body: T| string;

}