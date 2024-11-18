const slider2 = document.getElementById('priceRange2');
const sliderAmount2 = document.getElementById('slider-amount-2');
const price  = document.getElementById('price');

const pricePoints = ['10,000', '20,000', '30,000', '40,000', '50,000','60,000','70,000','80,000','90,000','100,000'];


function updateSliderAmount() {
    const value = slider2.value;
    const amount = pricePoints[value - 1];
    sliderAmount2.textContent = amount;
    if(amount == "10,000"){
        price.textContent="$1,000.00"
    }
  else if(amount == "20,000"){
        price.textContent="$2,000.00"
    }
    else  if(amount == "30,000"){
        price.textContent="$3,000.00"
    }
    else if(amount == "40,000"){
        price.textContent="$4,000.00"
    }
    else if(amount == "50,000"){
        price.textContent="$5,000.00"
    }
    else if(amount == "60,000"){
        price.textContent="$6,000.00"
    }
    else if(amount == "70,000"){
        price.textContent="$7,000.00"
    }
    else if(amount == "80,000"){
        price.textContent="$8,000.00"
    }
    else if(amount == "80,000"){
        price.textContent="$9,000.00"
    }
    else if(amount == "100,000"){
        price.textContent="$10,000.00"
    }else{
        price.textContent="$1,000.00"

    }

}


updateSliderAmount();

slider2.addEventListener('input', updateSliderAmount);






document.getElementById("Country").addEventListener('change',function(){
    var country = document.getElementById("Country").value;
    var state= document.getElementById("state-list");
    var city =  document.getElementById('city-list');
    var zipcode = document.getElementById('zip-list');
    var radius =  document.getElementById('radius-list');
    if(country=="united-states"){
    state.innerHTML = `State<select name="" id="state" onchange='state(this)'>
                 <option value="" hidden>Select State</option>
                 <option value="alabama">Alabama</option>
                 <option value="alaska">Alaska</option>
                 <option value="arizona">Arizona</option>
                 <option value="arkansas">Arkansas</option>
                 <option value="california">California</option>
                 <option value="colorado">Colorado</option>
                 <option value="connecticut">Connecticut</option>
                 <option value="delaware">Delaware</option>
                 <option value="florida">Florida</option>
                 <option value="georgia">Georgia</option>
                 <option value="hawaii">Hawaii</option>
                 <option value="idaho">Idaho</option>
                 <option value="illinois">Illinois</option>
                 <option value="indiana">Indiana</option>
                 <option value="iowa">Iowa</option>
                 <option value="kansas">Kansas</option>
                 <option value="kentucky">Kentucky</option>
                 <option value="louisiana">Louisiana</option>
                 <option value="maine">Maine</option>
                 <option value="maryland">Maryland</option>
                 <option value="massachusetts">Massachusetts</option>
                 <option value="michigan">Michigan</option>
                 <option value="minnesota">Minnesota</option>
                 <option value="mississippi">Mississippi</option>
                 <option value="missouri">Missouri</option>
                 <option value="montana">Montana</option>
                 <option value="nebraska">Nebraska</option>
                 <option value="nevada">Nevada</option>
                 <option value="new-hampshire">New Hampshire</option>
                 <option value="new-jersey">New Jersey</option>
                 <option value="new-mexico">New Mexico</option>
                 <option value="new-york">New York</option>
                 <option value="north-carolina">North Carolina</option>
                 <option value="north-dakota">North Dakota</option>
                 <option value="ohio">Ohio</option>
                 <option value="oklahoma">Oklahoma</option>
                 <option value="oregon">Oregon</option>
                 <option value="pennsylvania">Pennsylvania</option>
                 <option value="rhode-island">Rhode Island</option>
                 <option value="south-carolina">South Carolina</option>
                 <option value="south-dakota">South Dakota</option>
                 <option value="tennessee">Tennessee</option>
                 <option value="texas">Texas</option>
                 <option value="utah">Utah</option>
                 <option value="vermont">Vermont</option>
                 <option value="virginia">Virginia</option>
                 <option value="washington">Washington</option>
                 <option value="west-virginia">West Virginia</option>
                 <option value="wisconsin">Wisconsin</option>
                 <option value="wyoming">Wyoming</option>
                
                   <!-- Add other states -->
               </select>`;
            }else{
                state.innerHTML=`State`;
                city.innerHTML=`City`;
                zipcode.innerHTML=`Zip Code`;

                radius.innerHTML=`Radius`;


            }
        });
        function state(e){
var state = e.value;
var city = document.getElementById('city-list');

    var zipcode = document.getElementById('zip-list');
    var radius =  document.getElementById('radius-list');

    if (state === 'florida') {
        city.innerHTML = `City<select id="city" onchange='city(this)'>
        <option value="" hidden>Select City</option>
        <option value="miami">Miami</option>
    <option value="orlando">Orlando</option>
    <option value="tampa">Tampa</option>
    <option value="jacksonville">Jacksonville</option>
    <option value="st-petersburg">St. Petersburg</option>
    <option value="fort-lauderdale">Fort Lauderdale</option>
    <option value="tallahassee">Tallahassee</option>
    <option value="sarasota">Sarasota</option>
    <option value="west-palm-beach">West Palm Beach</option>
    <option value="gainesville">Gainesville</option>
    
        </select>`;
    } else {
        city.innerHTML = 'City';
        zipcode.innerHTML = `Zip Code`;

        radius.innerHTML = `Radius`;

    }
        }
   function city(e) {
     const city = e.value;
     const zipList = document.getElementById('zip-list');
     
     var radius =  document.getElementById('radius-list');

     if (city == "miami") {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="33101">33101</option>
             <option value="33102">33102</option>
             <option value="33125">33125</option>
             <option value="33130">33130</option>
         </select>`;
     } else if (city == 'orlando') {
         zipList.innerHTML =` Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="32801">32801</option>
             <option value="32803">32803</option>
             <option value="32805">32805</option>
             <option value="32808">32808</option>
         </select>`;
     } else if (city == 'tampa') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="33602">33602</option>
             <option value="33603">33603</option>
             <option value="33604">33604</option>
             <option value="33605">33605</option>
         </select>`;
     } else if (city == 'jacksonville') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="32099">32099</option>
             <option value="32202">32202</option>
             <option value="32204">32204</option>
             <option value="32205">32205</option>
         </select>`;
     } else if (city == 'st-petersburg') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="33701">33701</option>
             <option value="33702">33702</option>
             <option value="33703">33703</option>
             <option value="33704">33704</option>
         </select>`;
     } else if (city == 'fort-lauderdale') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="33301">33301</option>
             <option value="33304">33304</option>
             <option value="33305">33305</option>
             <option value="33306">33306</option>
         </select>`;
     } else if (city == 'tallahassee') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="32301">32301</option>
             <option value="32303">32303</option>
             <option value="32304">32304</option>
             <option value="32305">32305</option>
         </select>`;
     } else if (city == 'sarasota') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="34230">34230</option>
             <option value="34231">34231</option>
             <option value="34232">34232</option>
             <option value="34233">34233</option>
         </select>`;
     } else if (city == 'west-palm-beach') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="33401">33401</option>
             <option value="33405">33405</option>
             <option value="33409">33409</option>
             <option value="33411">33411</option>
         </select>`;
     } else if (city == 'gainesville') {
         zipList.innerHTML = `Zip Code <select id='zipcodes' onchange='zipcode(this)'>
             <option hidden>Select Zip Code</option>
             <option value="32601">32601</option>
             <option value="32603">32603</option>
             <option value="32605">32605</option>
             <option value="32607">32607</option>
         </select>`;
     }else {
         zipList.innerHTML = 'Zip Code';
         radius.innerHTML = 'Radius';

     }
 }
  function zipcode(e) {
     const radius = document.getElementById('radius-list');
     radius.innerHTML = `Radius<select>
     <option hidden >Select Radius</option>
     <option value="1">1 mile</option>
     <option value="5">5 miles</option>
     <option value="10">10 miles</option>
     <option value="25">25 miles</option>
     <option value="50">50 miles</option>
     <option value="100">100 miles</option>
     <option value="1km">1 km</option>
     <option value="5km">5 km</option>
     <option value="10km">10 km</option>
     <option value="25km">25 km</option>
     <option value="50km">50 km</option>
     <option value="100km">100 km</option>
       
     </select>`;
 }