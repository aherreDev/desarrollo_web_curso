const avatarUrlTest = "https://scontent.felp1-1.fna.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/18056654_1765260630156710_8923932480773069792_n.jpg?_nc_cat=107&_nc_ht=scontent.felp1-1.fna&oh=29b486be234f9b845aaf0978dd9ff82f&oe=5D1025F7";
const imageDefaultPreview1 = "http://transparency.greatheartsacademies.org/wp-content/uploads/sites/38/2018/10/default-placeholder.png";

const Api = {
    key:"",
    name:"fakeFacebook"
};
const User = {
    name:"",
    email:"",
    pass:""
};

window.onload = ()=>{
    document.getElementById('crearPublicacion').addEventListener("click",()=>{
        let a = document.getElementById("textOfPublication").value;
        let b = document.getElementById("imageOfPublication").value;
        handlePublicationMake(a,b,{name:"Alberto Roman Herrera Espinoza",avatar:avatarUrlTest})//localStorage.getElement('user'))
    });
    document.getElementById("addImage").addEventListener("click",handleLoadImageClick);
    document.getElementById("preImageUrl").addEventListener("input",handleImageInput);
    document.getElementById("updateImage").addEventListener("click",handleImageChange);

}
let handleLoadImageClick = ()=>{
    $('#loadImage').click();
}
let handleImageInput = ()=>{
    var tester = new Image();
    tester.addEventListener('load', imageFound);
    tester.addEventListener('error', imageNotFound);
    tester.src = document.getElementById("preImageUrl").value;
};
let handleImageChange = ()=>{
    $('#closeUpdate').click();
    document.getElementById('preview2').src = document.getElementById('preview1').src;
    document.getElementById("imageOfPublication").value = document.getElementById('preview1').src;
};
let imageFound = ()=>{
    document.getElementById("updateImage").disabled = false;
    document.getElementById('preview1').src = document.getElementById("preImageUrl").value;
}
let imageNotFound = ()=>{
    document.getElementById("updateImage").disabled = true;
    document.getElementById('preview1').src ="https://res.cloudinary.com/teepublic/image/private/s--bNaE_2IB--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1533147535/production/designs/2966320_0.jpg"
}
let handlePublicationMake = (text,image,author)=>{
    let date = {};
    date.object = new Date();
    date.ano = date.object.getFullYear();
    date.mes = date.object.getMonth() + 1;
    date.dia = date.object.getDay();
    let push = subirPublicacion(text,(image)?image:false,`${date.dia}-${date.mes}-${date.ano}`);
    if(push.status){
        insertarPublicacion(push.id,author,text,(image)?image:false,`${date.dia}-${date.mes}-${date.ano}`,avatarUrlTest);
        
        document.getElementById("preImageUrl").value = "";
        document.getElementById('preview1').src = imageDefaultPreview1;
        document.getElementById('preview2').src =""
        document.getElementById("imageOfPublication").value = "";
        document.getElementById("textOfPublication").value = "";
        
    }else{
        $('#error1').click();
    }
}

let subirPublicacion = (text,imageUrl,date)=>{
    //Temporal
    
    if(Math.random() > 0.3){
        return {status:true,id:1};
    }else{
        return {status:false};
    }
    
    ///////////////////

    /*Aqui va el XMLHttpRequest*/
    /*
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", `http://localhost:3002/set/user/publication?key=${Api.key}&email=${User.email}&text=${text}&images=${imageUrl}&date=${date}`, false);
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let a = JSON.parse(this.responseText);
            return a;
            //https://topesdegama.com/app/uploads/2018/03/Fondo-Huawei-P20Lite-700x400.jpg
        }
    };
    request.send();
    */
    //let a = peticionSubmmit();
    //return a.status;
   
}
///Inicio seccion de XMLHTTPREQUEST
let peticionPublications = ()=>{
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", `http://aherredev.openode.io/get/user/publications?key=${Api.key}&email=${User.email}`, true);
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return JSON.parse(this.responseText);
        }
    };
    request.send();
}
let peticionSubmmit = (text,imageUrl,date)=>{
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", `http://localhost:3002/set/user/publication?key=${Api.key}&email=${User.email}&text=${text}&images=${imageUrl}&date=${date}`, true);
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return JSON.parse(this.responseText);
        }
    };
    request.send();
}
///////////////////////////////////
let insertarPublicacion = (id,autor,text,imagen,fecha,avatar)=>{
    let htmlData = `<div id="publication_${id}" class="card publication">
            <div class="add title author">
                <div class="tempoCont">
                    <img class="userSmallLogo publication" src="${autor.avatar}" />
                    <span class="userAuthor Name">${autor.name}</span>
                </div>
            </div>
            <div class="publication body">
                <p class="publication container">
                        ${text}
                </p>
                <div id="imageSpace_" class="publication container">
                    ${(imagen)?`<img class="publication" src="${imagen}" />`:''}
                </div>
            </div>
            <div class="actions publication">
                <hr/>
                <button class="button reaction">
                    <i class="far fa-thumbs-up"></i>
                    <span id="like_publication_${id}">Me gusta</span>
                </button>
                <button class="button reaction">
                    <i class="far fa-comment"></i>
                    <span id="comment_publication_${id}">Comentar</span>
                </button>
                <button class="button reaction">
                    <i class="fas fa-share"></i>
                    <span id="share_publication_${id}">Compartir</span>
                </button>
            </div>
            <div class="comments">
                <hr/>
                <div class="commentsBox">
                    <img class="avatar" src="${avatar}">
                    <input class="comment Input" />
                </div>
            </div>
        </div>`
        
        document.getElementById("content").insertAdjacentHTML('beforeend', htmlData);
};
let cargarPublicaciones = (publicaciones,avatar)=>{
    let htmlData = ``;
    for(let i =0;i<publicaciones.lenght;i++){
        htmlData += `<div id="publication_${publicaciones[i].id}" class="card publication">
        <div class="add title author">
            <div class="tempoCont">
                <img class="userSmallLogo publication" src="${publicaciones[i].avatar}" />
                <span class="userAuthor Name">${publicaciones[i].autor}</span>
            </div>
        </div>
        <div class="publication body">
            <p class="publication container">
                    ${publicaciones[i].text}
            </p>
            <div id="imageSpace_" class="publication container">
                ${(publicaciones[i].image)?`<img class="publication" src="${publicaciones[i].image}" />`:''}
            </div>
        </div>
        <div class="actions publication">
            <hr/>
            <button class="button reaction">
                <i class="far fa-thumbs-up"></i>
                <span id="like_publication_${publicaciones[i].id}">Me gusta</span>
            </button>
            <button class="button reaction">
                <i class="far fa-comment"></i>
                <span id="comment_publication_${publicaciones[i].id}">Comentar</span>
            </button>
            <button class="button reaction">
                <i class="fas fa-share"></i>
                <span id="share_publication_${publicaciones[i].id}">Compartir</span>
            </button>
        </div>
        <div class="comments">
            <hr/>
            <div class="commentsBox">
                <img class="avatar" src="${avatar}">
                <input class="comment Input" />
            </div>
        </div>
    </div>`;

    }
    document.getElementById("content").insertAdjacentHTML('beforeend', htmlData);
}