var citiesByState = {
    AndhraPradesh: ["Adoni","Amaravati","Anantapur","Chandragiri","Chittoor","Dowlaiswaram","Eluru","Guntur","Kadapa"
    ,"Kakinada","Kurnool","Machilipatnam","Nagarjunakoṇḍa","Rajahmundry","Srikakulam","Tirupati","Vijayawada"
    ,"Visakhapatnam","Vizianagaram","Yemmiganur"],
    ArunachalPradesh: ["Itanagar"],
    Assam: ["Dhuburi",,"Dibrugarh","Dispur","Guwahati","Jorhat","Nagaon","Sivasagar","Silchar","Tezpur","Tinsukia"],
    Bihar: ["Ara","Barauni","Begusarai","Bettiah","Bhagalpur","Bihar Sharif","Bodh Gaya","Buxar","Chapra"
    ,"Darbhanga","Dehri","Dinapur Nizamat","Gaya","Hajipur","Jamalpur","Katihar","Madhubani","Motihari"
    ,"Munger","Muzaffarpur","Patna","Purnia","Pusa","Saharsa","Samastipur","Sasaram","Sitamarhi","Siwan"],
    Chandigarh: ["Chandigarh"],
    Chhattisgarh: ["Ambikapur","Bhilai","Bilaspur","Dhamtari","Durg","Jagdalpur","Raipur","Rajnandgaon"],
    DadraandagarHaveliandDamanandDiu: ["Daman","Diu","Silvassa"],
    Delhi: ["Delhi","New Delhi"],
    Goa: ["Madgaon","Panaji"],
    Gujarat: ["Ahmadabad","Amreli","Bharuch","Bhavnagar","Bhuj","Dwarka","Gandhinagar","Godhra"
    ,"Jamnagar","Junagadh","Kandla","Khambhat","Kheda","Mahesana","Morbi","Nadiad","Navsari"
    ,"Okha","Palanpur","Patan","Porbandar","Rajkot","Surat","Surendranagar","Valsad","Veraval"],
    Haryana: ["Ambala","Bhiwani","Chandigarh","Faridabad","Firozpur Jhirka","Gurugram","Hansi","Hisar"
    ,"Jind","Kaithal","Karnal","Kurukshetra","Panipat","Pehowa","Rewari","Rohtak","Sirsa","Sonipat"],
    HimachalPradesh: ["Bilaspur","Chamba","Dalhousie","Dharmshala","Hamirpur","Kangra","Kullu"
    ,"Mandi","Nahan","Shimla","Una"],
    JammuandKashmir: ["Anantnag","Baramula","Doda","Gulmarg","Jammu","Kathua","Punch","Rajouri"
    ,"Srinagar","Udhampur"],
    Jharkhand: ["Bokaro","Chaibasa","Deoghar","Dhanbad","Dumka","Giridih","Hazaribag","Jamshedpur"
    ,"Jharia","Rajmahal","Ranchi","Saraikela"],
    Karnataka: ["Badami","Ballari","Bengaluru","Belagavi","Bhadravati","Bidar","Chikkamagaluru","Chitradurga"
    ,"Davangere","Halebid","Hassan","Hubballi-Dharwad","Kalaburagi","Kolar","Madikeri","Mandya","Mangaluru"
    ,"Mysuru","Raichur","Shivamogga","Shravanabelagola","Shrirangapattana","Tumakuru","Vijayapura"],
    Kerala: ["Alappuzha","Vatakara","Idukki","Kannur","Kochi","Kollam","Kottayam","Kozhikode","Mattancheri"
    ,"Palakkad","Thalassery","Thiruvananthapuram","Thrissur"],
    Ladkh: ["Kargil","Leh"],
    MadyaPradesh:["Balaghat","Barwani","Betul","Bharhut","Bhind","Bhojpur","Bhopal","Burhanpur","Chhatarpur","Chhindwara"
    ,"Damoh","Datia","Dewas","Dhar","Dr. Ambedkar Nagar (Mhow)","Guna","Gwalior","Hoshangabad","Indore","Itarsi","Jabalpur"
    ,"Jhabua","Khajuraho","Khandwa","Khargone","Maheshwar","Mandla","Mandsaur","Morena","Murwara","Narsimhapur","Narsinghgarh"
    ,"Narwar","Neemuch","Nowgong","Orchha","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Sarangpur","Satna","Sehore"
    ,"Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Ujjain","Vidisha"],
    Maharashtra: ["Ahmadnagar","Akola","Amravati","Aurangabad","Bhandara","Bhusawal","Bid","Buldhana","Chandrapur","Daulatabad"
    ,"Dhule","Jalgaon","Kalyan","Karli","Kolhapur","Mahabaleshwar","Malegaon","Matheran","Mumbai","Nagpur","Nanded","Nashik"
    ,"Osmanabad","Pandharpur","Parbhani","Pune","Ratnagiri","Sangli","Satara","Sevagram","Solapur","Thane","Ulhasnagar"
    ,"Vasai-Virar","Wardha","Yavatmal"],
    Manipur: ["Imphal"],
    Meghalaya: ["Cherrapunji","Shillong"],
    Mizoram: ["Aizawl","Lunglei"],
    Nagaland: ["Kohima","Mon","Phek","Wokha","Zunheboto"],
    Odisha: ["Balangir","Baleshwar","Baripada","Bhubaneshwar","Brahmapur","Cuttack","Dhenkanal","Kendujhar","Konark","Koraput"
    ,"Paradip","Phulabani","Puri","Sambalpur","Udayagiri"],
    Puducherry: ["Karaikal","Mahe","Puducherry","Yanam"],
    Punjab: ["Amritsar","Batala","Chandigarh","Faridkot","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala"
    ,"Ludhiana","Nabha","Patiala","Rupnagar","Sangrur"],
    Rajasthan: ["Abu","Ajmer","Alwar","Amer","Barmer","Beawar","Bharatpur","Bhilwara","Bikaner","Bundi","Chittaurgarh","Churu"
    ,"Dhaulpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Kishangarh"
    ,"Kota","Merta","Nagaur","Nathdwara","Pali","Phalodi","Pushkar","Sawai Madhopur","Shahpura","Sikar","Sirohi","Tonk","Udaipur"],
    Sikkim: ["Gangtok","Gyalshing","Lachung","Mangan"],
    TamilNdu: ["Arcot","Chengalpattu","Chennai","Chidambaram","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode"
    ,"Kanchipuram","Kanniyakumari","Kodaikanal","Kumbakonam","Madurai","Mamallapuram","Nagappattinam","Nagercoil","Palayamkottai"
    ,"Pudukkottai","Rajapalayam","Ramanathapuram","Salem","Thanjavur","Tiruchchirappalli","Tirunelveli","Tiruppur","Thoothukudi"
    ,"Udhagamandalam","Vellore"],
    Telangana: ["Hyderabad","Karimnagar","Khammam","Mahbubnagar","Nizamabad","Sangareddi","Warangal"],
    Tripura: ["Agartala"],
    UttarPradesh: ["Agra","Aligarh","Amroha","Ayodhya","Azamgarh","Bahraich","Ballia","Banda","Bara Banki","Bareilly","Basti"
    ,"Bijnor","Bithur","Budaun","Bulandshahr","Deoria","Etah","Etawah","Faizabad","Farrukhabad-cum-Fatehgarh","Fatehpur"
    ,"Fatehpur Sikri","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi"
    ,"Kannauj","Kanpur","Lakhimpur","Lalitpur","Lucknow","Mainpuri","Mathura","Meerut","Mirzapur-Vindhyachal","Moradabad"
    ,"Muzaffarnagar","Partapgarh","Pilibhit","Prayagraj","Rae Bareli","Rampur","Saharanpur","Sambhal","Shahjahanpur","Sitapur"
    ,"Sultanpur","Tehri","Varanasi"],
    Uttarakhand: ["Almora","Dehra Dun","Haridwar","Mussoorie","Nainital","Pithoragarh"],
    WestBengal: ["Alipore","Alipur Duar","Asansol","Baharampur","Bally","Balurghat","Bankura","Baranagar","Barasat","Barrackpore"
    ,"Basirhat","Bhatpara","Bishnupur","Budge Budge","Burdwan","Chandernagore","Darjeeling","Diamond Harbour","Dum Dum","Durgapur"
    ,"Halisahar","Haora","Hugli","Ingraj Bazar","Jalpaiguri","Kalimpong","Kamarhati","Kanchrapara","Kharagpur","Cooch Behar"
    ,"Kolkata","Krishnanagar","Malda","Midnapore","Murshidabad","Nabadwip","Palashi","Panihati","Purulia","Raiganj","Santipur"
    ,"Shantiniketan","Shrirampur","Siliguri","Siuri","Tamluk","Titagarh"]
}
    function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    function displaySelected() { var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
    alert(country+"\n"+city);
    }
    function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
    }