'use strict';

//var mapApp = angular.module('mapApp');
//mapApp.controller()

/* Controllers */
function MapCtrl($scope) {
    $scope.countries = [
        { shortCode : "ABW" , name:	"Aruba" },
        { shortCode : "AFG" , name:	"Afghanistan" },
        { shortCode : "AGO" , name:	"Angola" },
        { shortCode : "AIA" , name:	"Anguilla" },
        { shortCode : "ALA" , name:	"Åland Islands" },
        { shortCode : "ALB" , name:	"Albania" },
        { shortCode : "AND" , name:	"Andorra" },
        { shortCode : "ARE" , name:	"United Arab Emirates" },
        { shortCode : "ARG" , name:	"Argentina" },
        { shortCode : "ARM" , name:	"Armenia" },
        { shortCode : "ASM" , name:	"American Samoa" },
        { shortCode : "ATA" , name:	"Antarctica" },
        { shortCode : "ATF" , name:	"French Southern Territories" },
        { shortCode : "ATG" , name:	"Antigua and Barbuda" },
        { shortCode : "AUS" , name:	"Australia" },
        { shortCode : "AUT" , name:	"Austria" },
        { shortCode : "AZE" , name:	"Azerbaijan" },
        { shortCode : "BDI" , name:	"Burundi" },
        { shortCode : "BEL" , name:	"Belgium" },
        { shortCode : "BEN" , name:	"Benin" },
        { shortCode : "BES" , name:	"Bonaire, Sint Eustatius and Saba" },
        { shortCode : "BFA" , name:	"Burkina Faso" },
        { shortCode : "BGD" , name:	"Bangladesh" },
        { shortCode : "BGR" , name:	"Bulgaria" },
        { shortCode : "BHR" , name:	"Bahrain" },
        { shortCode : "BHS" , name:	"Bahamas" },
        { shortCode : "BIH" , name:	"Bosnia and Herzegovina" },
        { shortCode : "BLM" , name:	"Saint Barthélemy" },
        { shortCode : "BLR" , name:	"Belarus" },
        { shortCode : "BLZ" , name:	"Belize" },
        { shortCode : "BMU" , name:	"Bermuda" },
        { shortCode : "BOL" , name:	"Bolivia, Plurinational State of" },
        { shortCode : "BRA" , name:	"Brazil" },
        { shortCode : "BRB" , name:	"Barbados" },
        { shortCode : "BRN" , name:	"Brunei Darussalam" },
        { shortCode : "BTN" , name:	"Bhutan" },
        { shortCode : "BVT" , name:	"Bouvet Island" },
        { shortCode : "BWA" , name:	"Botswana" },
        { shortCode : "CAF" , name:	"Central African Republic" },
        { shortCode : "CAN" , name:	"Canada" },
        { shortCode : "CCK" , name:	"Cocos (Keeling) Islands" },
        { shortCode : "CHE" , name:	"Switzerland" },
        { shortCode : "CHL" , name:	"Chile" },
        { shortCode : "CHN" , name:	"China" },
        { shortCode : "CIV" , name:	"Côte d'Ivoire" },
        { shortCode : "CMR" , name:	"Cameroon" },
        { shortCode : "COD" , name:	"Congo, the Democratic Republic of the" },
        { shortCode : "COG" , name:	"Congo" },
        { shortCode : "COK" , name:	"Cook Islands" },
        { shortCode : "COL" , name:	"Colombia" },
        { shortCode : "COM" , name:	"Comoros" },
        { shortCode : "CPV" , name:	"Cape Verde" },
        { shortCode : "CRI" , name:	"Costa Rica" },
        { shortCode : "CUB" , name:	"Cuba" },
        { shortCode : "CUW" , name:	"Curaçao" },
        { shortCode : "CXR" , name:	"Christmas Island" },
        { shortCode : "CYM" , name:	"Cayman Islands" },
        { shortCode : "CYP" , name:	"Cyprus" },
        { shortCode : "CZE" , name:	"Czech Republic" },
        { shortCode : "DEU" , name:	"Germany" },
        { shortCode : "DJI" , name:	"Djibouti" },
        { shortCode : "DMA" , name:	"Dominica" },
        { shortCode : "DNK" , name:	"Denmark" },
        { shortCode : "DOM" , name:	"Dominican Republic" },
        { shortCode : "DZA" , name:	"Algeria" },
        { shortCode : "ECU" , name:	"Ecuador" },
        { shortCode : "EGY" , name:	"Egypt" },
        { shortCode : "ERI" , name:	"Eritrea" },
        { shortCode : "ESH" , name:	"Western Sahara" },
        { shortCode : "ESP" , name:	"Spain" },
        { shortCode : "EST" , name:	"Estonia" },
        { shortCode : "ETH" , name:	"Ethiopia" },
        { shortCode : "FIN" , name:	"Finland" },
        { shortCode : "FJI" , name:	"Fiji" },
        { shortCode : "FLK" , name:	"Falkland Islands (Malvinas)" },
        { shortCode : "FRA" , name:	"France" },
        { shortCode : "FRO" , name:	"Faroe Islands" },
        { shortCode : "FSM" , name:	"Micronesia, Federated States of" },
        { shortCode : "GAB" , name:	"Gabon" },
        { shortCode : "GBR" , name:	"United Kingdom" },
        { shortCode : "GEO" , name:	"Georgia" },
        { shortCode : "GGY" , name:	"Guernsey" },
        { shortCode : "GHA" , name:	"Ghana" },
        { shortCode : "GIB" , name:	"Gibraltar" },
        { shortCode : "GIN" , name:	"Guinea" },
        { shortCode : "GLP" , name:	"Guadeloupe" },
        { shortCode : "GMB" , name:	"Gambia" },
        { shortCode : "GNB" , name:	"Guinea-Bissau" },
        { shortCode : "GNQ" , name:	"Equatorial Guinea" },
        { shortCode : "GRC" , name:	"Greece" },
        { shortCode : "GRD" , name:	"Grenada" },
        { shortCode : "GRL" , name:	"Greenland" },
        { shortCode : "GTM" , name:	"Guatemala" },
        { shortCode : "GUF" , name:	"French Guiana" },
        { shortCode : "GUM" , name:	"Guam" },
        { shortCode : "GUY" , name:	"Guyana" },
        { shortCode : "HKG" , name:	"Hong Kong" },
        { shortCode : "HMD" , name:	"Heard Island and McDonald Islands" },
        { shortCode : "HND" , name:	"Honduras" },
        { shortCode : "HRV" , name:	"Croatia" },
        { shortCode : "HTI" , name:	"Haiti" },
        { shortCode : "HUN" , name:	"Hungary" },
        { shortCode : "IDN" , name:	"Indonesia" },
        { shortCode : "IMN" , name:	"Isle of Man" },
        { shortCode : "IND" , name:	"India" },
        { shortCode : "IOT" , name:	"British Indian Ocean Territory" },
        { shortCode : "IRL" , name:	"Ireland" },
        { shortCode : "IRN" , name:	"Iran, Islamic Republic of" },
        { shortCode : "IRQ" , name:	"Iraq" },
        { shortCode : "ISL" , name:	"Iceland" },
        { shortCode : "ISR" , name:	"Israel" },
        { shortCode : "ITA" , name:	"Italy" },
        { shortCode : "JAM" , name:	"Jamaica" },
        { shortCode : "JEY" , name:	"Jersey" },
        { shortCode : "JOR" , name:	"Jordan" },
        { shortCode : "JPN" , name:	"Japan" },
        { shortCode : "KAZ" , name:	"Kazakhstan" },
        { shortCode : "KEN" , name:	"Kenya" },
        { shortCode : "KGZ" , name:	"Kyrgyzstan" },
        { shortCode : "KHM" , name:	"Cambodia" },
        { shortCode : "KIR" , name:	"Kiribati" },
        { shortCode : "KNA" , name:	"Saint Kitts and Nevis" },
        { shortCode : "KOR" , name:	"Korea, Republic of" },
        { shortCode : "KWT" , name:	"Kuwait" },
        { shortCode : "LAO" , name:	"Lao People's Democratic Republic" },
        { shortCode : "LBN" , name:	"Lebanon" },
        { shortCode : "LBR" , name:	"Liberia" },
        { shortCode : "LBY" , name:	"Libya" },
        { shortCode : "LCA" , name:	"Saint Lucia" },
        { shortCode : "LIE" , name:	"Liechtenstein" },
        { shortCode : "LKA" , name:	"Sri Lanka" },
        { shortCode : "LSO" , name:	"Lesotho" },
        { shortCode : "LTU" , name:	"Lithuania" },
        { shortCode : "LUX" , name:	"Luxembourg" },
        { shortCode : "LVA" , name:	"Latvia" },
        { shortCode : "MAC" , name:	"Macao" },
        { shortCode : "MAF" , name:	"Saint Martin (French part)" },
        { shortCode : "MAR" , name:	"Morocco" },
        { shortCode : "MCO" , name:	"Monaco" },
        { shortCode : "MDA" , name:	"Moldova, Republic of" },
        { shortCode : "MDG" , name:	"Madagascar" },
        { shortCode : "MDV" , name:	"Maldives" },
        { shortCode : "MEX" , name:	"Mexico" },
        { shortCode : "MHL" , name:	"Marshall Islands" },
        { shortCode : "MKD" , name:	"Macedonia, the former Yugoslav Republic of" },
        { shortCode : "MLI" , name:	"Mali" },
        { shortCode : "MLT" , name:	"Malta" },
        { shortCode : "MMR" , name:	"Myanmar" },
        { shortCode : "MNE" , name:	"Montenegro" },
        { shortCode : "MNG" , name:	"Mongolia" },
        { shortCode : "MNP" , name:	"Northern Mariana Islands" },
        { shortCode : "MOZ" , name:	"Mozambique" },
        { shortCode : "MRT" , name:	"Mauritania" },
        { shortCode : "MSR" , name:	"Montserrat" },
        { shortCode : "MTQ" , name:	"Martinique" },
        { shortCode : "MUS" , name:	"Mauritius" },
        { shortCode : "MWI" , name:	"Malawi" },
        { shortCode : "MYS" , name:	"Malaysia" },
        { shortCode : "MYT" , name:	"Mayotte" },
        { shortCode : "NAM" , name:	"Namibia" },
        { shortCode : "NCL" , name:	"New Caledonia" },
        { shortCode : "NER" , name:	"Niger" },
        { shortCode : "NFK" , name:	"Norfolk Island" },
        { shortCode : "NGA" , name:	"Nigeria" },
        { shortCode : "NIC" , name:	"Nicaragua" },
        { shortCode : "NIU" , name:	"Niue" },
        { shortCode : "NLD" , name:	"Netherlands" },
        { shortCode : "NOR" , name:	"Norway" },
        { shortCode : "NPL" , name:	"Nepal" },
        { shortCode : "NRU" , name:	"Nauru" },
        { shortCode : "NZL" , name:	"New Zealand" },
        { shortCode : "OMN" , name:	"Oman" },
        { shortCode : "PAK" , name:	"Pakistan" },
        { shortCode : "PAN" , name:	"Panama" },
        { shortCode : "PCN" , name:	"Pitcairn" },
        { shortCode: "PER" , name:	"Peru" },
        { shortCode: "PHL" , name:	"Philippines" },
        { shortCode: "PLW" , name:	"Palau" },
        { shortCode: "PNG" , name:	"Papua New Guinea" },
        { shortCode: "POL" , name:	"Poland" },
        { shortCode: "PRI" , name:	"Puerto Rico" },
        { shortCode: "PRK" , name:	"Korea, Democratic People's Republic of" },
        { shortCode: "PRT" , name:	"Portugal" },
        { shortCode: "PRY" , name:	"Paraguay" },
        { shortCode: "PSE" , name:	"Palestine, State of" },
        { shortCode: "PYF" , name:	"French Polynesia" },
        { shortCode: "QAT" , name:	"Qatar" },
        { shortCode: "REU" , name:	"Réunion" },
        { shortCode: "ROU" , name:	"Romania" },
        { shortCode: "RUS" , name:	"Russian Federation" },
        { shortCode: "RWA" , name:	"Rwanda" },
        { shortCode: "SAU" , name:	"Saudi Arabia" },
        { shortCode: "SDN" , name:	"Sudan" },
        { shortCode: "SEN" , name:	"Senegal" },
        { shortCode: "SGP" , name:	"Singapore" },
        { shortCode: "SGS" , name:	"South Georgia and the South Sandwich Islands" },
        { shortCode: "SHN" , name:	"Saint Helena, Ascension and Tristan da Cunha" },
        { shortCode: "SJM" , name:	"Svalbard and Jan Mayen" },
        { shortCode: "SLB" , name:	"Solomon Islands" },
        { shortCode: "SLE" , name:	"Sierra Leone" },
        { shortCode: "SLV" , name:	"El Salvador" },
        { shortCode: "SMR" , name:	"San Marino" },
        { shortCode: "SOM" , name:	"Somalia" },
        { shortCode: "SPM" , name:	"Saint Pierre and Miquelon" },
        { shortCode: "SRB" , name:	"Serbia" },
        { shortCode: "SSD" , name:	"South Sudan" },
        { shortCode: "STP" , name:	"Sao Tome and Principe" },
        { shortCode: "SUR" , name:	"Suriname" },
        { shortCode: "SVK" , name:	"Slovakia" },
        { shortCode: "SVN" , name:	"Slovenia" },
        { shortCode: "SWE" , name:	"Sweden" },
        { shortCode: "SWZ" , name:	"Swaziland" },
        { shortCode: "SXM" , name:	"Sint Maarten (Dutch part)" },
        { shortCode: "SYC" , name:	"Seychelles" },
        { shortCode: "SYR" , name:	"Syrian Arab Republic" },
        { shortCode: "TCA" , name:	"Turks and Caicos Islands" },
        { shortCode: "TCD" , name:	"Chad" },
        { shortCode: "TGO" , name:	"Togo" },
        { shortCode: "THA" , name:	"Thailand" },
        { shortCode: "TJK" , name:	"Tajikistan" },
        { shortCode: "TKL" , name:	"Tokelau" },
        { shortCode: "TKM" , name:	"Turkmenistan" },
        { shortCode: "TLS" , name:	"Timor-Leste" },
        { shortCode: "TON" , name:	"Tonga" },
        { shortCode: "TTO" , name:	"Trinidad and Tobago" },
        { shortCode: "TUN" , name:	"Tunisia" },
        { shortCode: "TUR" , name:	"Turkey" },
        { shortCode: "TUV" , name:	"Tuvalu" },
        { shortCode: "TWN" , name:	"Taiwan, Province of China" },
        { shortCode: "TZA" , name:	"Tanzania, United Republic of" },
        { shortCode: "UGA" , name:	"Uganda" },
        { shortCode: "UKR" , name:	"Ukraine" },
        { shortCode: "UMI" , name:	"United States Minor Outlying Islands" },
        { shortCode: "URY" , name:	"Uruguay" },
        { shortCode: "USA" , name:	"United States" },
        { shortCode: "UZB" , name:	"Uzbekistan" },
        { shortCode: "VAT" , name:	"Holy See (Vatican City State)" },
        { shortCode: "VCT" , name:	"Saint Vincent and the Grenadines" },
        { shortCode: "VEN" , name:	"Venezuela, Bolivarian Republic of" },
        { shortCode: "VGB" , name:	"Virgin Islands, British" },
        { shortCode: "VIR" , name:	"Virgin Islands, U.S." },
        { shortCode: "VNM" , name:	"Viet Nam" },
        { shortCode: "VUT" , name:	"Vanuatu" },
        { shortCode: "WLF" , name:	"Wallis and Futuna" },
        { shortCode: "WSM" , name:	"Samoa" },
        { shortCode: "YEM" , name:	"Yemen" },
        { shortCode: "ZAF" , name:	"South Africa" },
        { shortCode: "ZMB" , name:	"Zambia" },
        { shortCode: "ZWE" , name:	"Zimbabwe" }
    ];
    $scope.shortListedCountries = [];
    $scope.activeCountry = {};

    var NUMBER_OF_OPTIONS = 4;
    var NUMBER_OF_COUNTRIES = $scope.countries.length;
    var svg_id_of_element;
    var should_show_result = false;
    var SUCCESS_MESSAGE = "Success";
    var FAILURE_MESSAGE = "Failure";
    $scope.failure_counter = 0;
    $scope.message;

    $scope.utility = function(){
        for(var i = 0 ; i < NUMBER_OF_OPTIONS ; i++){
            $scope.shortListedCountries.push($scope.countries[Math.floor((Math.random()*NUMBER_OF_COUNTRIES))]);
        }
        $scope.activeCountry = $scope.shortListedCountries[Math.floor(Math.random()*NUMBER_OF_OPTIONS)];
        svg_id_of_element = 'g' + $scope.activeCountry.shortCode;
        angular.element(document.getElementById(svg_id_of_element))[0].className.baseVal += "activeCountry";
    }

    $scope.submitAnswer = function(submittedAnswer) {
        should_show_result = true;
        if(submittedAnswer === $scope.activeCountry.shortCode){
            console.log(SUCCESS_MESSAGE);
            $scope.message=SUCCESS_MESSAGE;
        }
        else{
            console.log(FAILURE_MESSAGE);
            $scope.message=FAILURE_MESSAGE;
            $scope.failure_counter++;
        }
    }


    $scope.utility();

    $scope.nextQuestion = function() {
        $scope.failure_counter = 0;
        should_show_result = false;
        $scope.message == FAILURE_MESSAGE
        angular.element(document.getElementById(svg_id_of_element))[0].className.baseVal -= "activeCountry";
        $scope.shortListedCountries = [];
        $scope.activeCountry = {};
        $scope.utility();
    }

    $scope.showResult = function(){
        return should_show_result;
    }

    $scope.isAnswerFalse = function() {
        return $scope.message === FAILURE_MESSAGE ? true : false;
    }

}