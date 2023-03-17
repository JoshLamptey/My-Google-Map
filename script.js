function initMap(){
    var option ={
        zoom : 11,
        center : {lat:5.5466,lng:-0.1827}
    }
    var map = new google.maps.Map(document.getElementById("map"),option)



    /*
    var marker = new google.maps.Marker({
        position :{lat:5.5570,lng:-0.1763},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    })


    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Osu,Accra</h1>'
    })

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
*/

 var marker =[
    {
        coords:{lat:5.5768,lng:-0.1785},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1>cantonments</h1>'
    },
    {
        coords:{lat:5.5466,lng:-0.1827},
        content:'<h1>Osu</h1>'
    },
    {
        coords:{lat:5.6207,lng:-0.1246},
        content:'<h1>Mariville</h1>'
    },
    {
        coords:{lat:5.5647,lng:-0.1566},
        content:'<h1>Labadi</h1>'
    }

 ]
for(var i=0;i<marker.length;i++){
    addMarkers(marker[i])
}

 
 function addMarkers(props){
    
    var marker = new google.maps.Marker({
        position :props.coords,
        map:map,
        //icon:props.iconImage
    })

    if(props.iconImage){
        marker.setIcon(props.iconImage)
    }


    if(props.content){
        
    var infoWindow = new google.maps.InfoWindow({
        content:props.content
    })

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })

    }
 }
}