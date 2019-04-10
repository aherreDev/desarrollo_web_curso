let position = 4;
let grid = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0]];

setInterval(()=>{
    let place = Math.round(Math.random()*8);
    console.log("Enemigo spawn: " + place);
    document.getElementById(`1_${(place == 0)?place + 1:place}`).innerHTML = enemy;
    grid[0][(place -1 < 0)?0:place-1] = 2;
},8000);
setInterval(()=>{
    for(let i = grid.length;i>0;i--){
        for(let e = 0;e<grid[i].length;e++){
            if(grid[i][e] == 2){
                
            }
        }
    }
},10000)
//Controles
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(position-1 > 0){
                document.getElementById(`5_${position}`).innerHTML = "";
                document.getElementById(`5_${position-1}`).innerHTML = spaceShip;
                grid[4][position-1]=0;
                grid[4][(position-1)-1]=1;
                position--;
            }
            break;
        case 38:
            alert('up');
            break;
        case 39:
            if(position+1 < 9){
                document.getElementById(`5_${position}`).innerHTML = "";
                document.getElementById(`5_${position+1}`).innerHTML = spaceShip;
                grid[4][position-1]=0;
                grid[4][(position-1)+1]=1;
                position++;
            }
            break;
        case 40:
            alert('down');
            break;
    }
};







const enemy = `<svg class="svg2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<path style="fill:#E4C05C;" d="M497.807,209.023l-27.445-5.489c-6.539-26.768-18.058-52.065-33.956-74.571l20.507-30.761   c2.334-3.501,1.873-8.163-1.103-11.139l-39.702-39.702c-2.975-2.976-7.637-3.437-11.138-1.103l-32.988,21.992   c-22.338-13.843-46.982-23.557-72.758-28.681L292.73,7.096C291.904,2.97,288.281,0,284.073,0h-56.147   c-4.208,0-7.831,2.97-8.656,7.096l-6.495,32.474c-27.37,5.448-53.448,16.07-76.835,31.295l-22.402-14.935   c-7.002-4.668-16.327-3.745-22.278,2.206l-41.951,41.951c-5.951,5.951-6.874,15.275-2.206,22.278l16.749,25.124   c-12.748,22.503-21.412,47.086-25.59,72.609l-31.166,6.233C2.97,227.158,0,230.781,0,234.989v42.023   c0,4.208,2.97,7.831,7.096,8.656l31.166,6.233c5.393,32.911,18.217,64.159,37.498,91.37l-21.55,32.325   c-2.334,3.501-1.873,8.163,1.103,11.138l29.714,29.715c2.976,2.975,7.638,3.437,11.139,1.103l32.275-21.517   c27.277,19.393,58.629,32.29,91.657,37.702l6.233,31.167c0.825,4.126,4.448,7.096,8.656,7.096h42.023   c4.208,0,7.831-2.97,8.656-7.096l6.233-31.167c28.403-4.643,55.614-14.833,80.081-29.988l32.988,21.992   c3.501,2.334,8.163,1.872,11.139-1.103l39.702-39.702c2.976-2.975,3.437-7.637,1.103-11.138l-20.507-30.761   c15.898-22.506,27.417-47.804,33.956-74.571l27.445-5.489c8.253-1.65,14.193-8.896,14.193-17.312v-59.328   C512,217.92,506.06,210.674,497.807,209.023z"/>
	<g>
		<circle style="fill:#B19046;" cx="172.138" cy="154.483" r="48.552"/>
		<circle style="fill:#B19046;" cx="375.172" cy="198.621" r="48.552"/>
		<circle style="fill:#B19046;" cx="158.897" cy="317.793" r="61.793"/>
		<circle style="fill:#B19046;" cx="379.586" cy="335.448" r="26.483"/>
		<circle style="fill:#B19046;" cx="282.483" cy="264.828" r="26.483"/>
		<circle style="fill:#B19046;" cx="291.31" cy="105.931" r="26.483"/>
		<circle style="fill:#B19046;" cx="264.828" cy="406.069" r="26.483"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
const spaceShip = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.003 512.003" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve">
<g>
    <rect x="200.177" y="454.915" style="fill:#5BACF5;" width="38.945" height="57.089"/>
    <rect x="272.881" y="454.915" style="fill:#5BACF5;" width="38.945" height="57.089"/>
</g>
<path style="fill:#E42105;" d="M424.164,370.034c-1.121-9.215-8.422-20.938-16.166-26.058l-78.021-51.579H182.026l-78.021,51.579  c-7.744,5.12-15.045,16.843-16.166,26.058c-2.922,24.025-11.418,96.129-11.418,96.129h106.281l72.336-22.506l74.263,22.506h106.281  C435.582,466.164,427.086,394.059,424.164,370.034z"/>
<path style="fill:#FFB367;" d="M329.301,144.268c0-59.264-28.873-111.765-73.299-144.268  c-44.426,32.504-73.298,85.004-73.298,144.268v288.137l73.299,22.505l73.299-22.505V144.268H329.301z"/>
<rect x="182.701" y="432.409" style="fill:#3D51CC;" width="146.601" height="33.758"/>
<path style="fill:#FF7039;" d="M216.462,144.268h79.081c0-13.441-1.905-26.686-5.518-39.385h-68.045  C218.367,117.582,216.462,130.827,216.462,144.268z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;