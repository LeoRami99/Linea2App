const uri="http://localhost/webservice/post.php?id=1";
//extrar la informacion de la uri
const uriData=new URL(uri);
//extraer el parametro id
const id=uriData.searchParams.get("id");
//extraer el parametro id

