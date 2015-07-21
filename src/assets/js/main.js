Home = {
		map:{},
		lat:"",
		lng:"",
		init: function (e) {
			e.preventDefault();
			if (Home.validate()){ 
				
				document.getElementById('error').setAttribute('style','display:none;');
			
				lat = parseFloat(document.getElementById('idLat').value);
				lng = parseFloat(document.getElementById('idLng').value);
			  map = new google.maps.Map(document.getElementById('map_canvas'), {
				    zoom: 4,
				    center: {lat: lat, lng: lng}
				  });
			  var marker = new google.maps.Marker({
		          map: map,
		          position: map.getCenter()
		      });
			  return false;
			}
				},
		lookAddress: function(){
			geocoder = new google.maps.Geocoder(); 
			addr = document.getElementById('idAddr').value
			geocoder.geocode( { 'address': addr}, function(results, status) {
			    if (status == google.maps.GeocoderStatus.OK) {
			    	map = new google.maps.Map(document.getElementById('map_canvas'), {
					    zoom: 6
					  });
			      map.setCenter(results[0].geometry.location);
			      var marker = new google.maps.Marker({
			          map: map,
			          position: results[0].geometry.location
			      });
			    } else {
			      alert('Geocode was not successful for the following reason: ' + status);
			      document.getElementById('idAddr').value = '';
			    }
			  });
		},
		check: function(e){
			if(e.keyCode === 13){
	            Home.lookAddress();
	        }

	        return false;
		},
		validate: function() {
			lat = document.getElementById('idLat');
			lng = document.getElementById('idLng');
			
			pattern_lat = new RegExp(lat.getAttribute('pattern'));
			required_lat = lat.getAttribute('required');
			
			pattern_lng = new RegExp(lng.getAttribute('pattern'));
			required_lng = lng.getAttribute('required');
			
			if (lat.value!="") {
				
				ptrn_test ='';
				
				pttrn_test= pattern_lat.test(lat.value);
				if (pttrn_test==false) {
					document.getElementById('error').setAttribute('style','display:block;');
					document.getElementById('error').innerHTML = 'Please enter valid Latitude';
					return false;
				}
				
			}
			if ( lng.value!="") {
				
				pttrn_test="";
				pttrn_test= pattern_lng.test(lng.value);
				if (pttrn_test==false) {
					document.getElementById('error').setAttribute('style','display:block;color:red');
					document.getElementById('error').innerHTML = 'Please enter valid Longitude';
					return false;
				}
			} 
				if (lng.value=="" || lat.value=="") {
				document.getElementById('error').setAttribute('style','display:block;');
				document.getElementById('error').innerHTML = 'Please enter the fields';
				return false;
				
			}
			
			
			
			
			return true;
		}
};