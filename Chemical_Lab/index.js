
let temp;
let temp1;
let s,d;


//change the voice


function switchVoice(text,voice_name) {
  if (text){
    return "<voice name='" + voice_name + "'>" + text + "</voice>"
  }
}

//Temprature conversion


let k=0;
const l='';

function Tconv(a,x,y)
{
 
  temp=a - 273.15;
  temp1=a*(9/5)-459.67;
  s=x;
  d=y;
	 return {temp1,temp1,s,d};

}

//file import code


'use strict';
const fs = require('fs');
let rawdata = fs.readFileSync('element.json');  
let file1 = JSON.parse(rawdata);  

function validdata(a,b){
let i =0;
for(let r=0;r<100;r++)
{    
    if(file1.elements[r].name===a)
        {
            i=r;

        }
}

switch(b)
{


                case 'name':
                return(file1.elements[i].name);
              //  break;
                            
                case 'appearance':
                return(file1.elements[i].appearance);
                //break;
                
                case 'mass':
                return(file1.elements[i].mass);
                //break;

                case 'boil':
                return(file1.elements[i].boil);
                //break;
                
                case 'category':
                return(file1.elements[i].category);
                //break;

                case 'color':
                return(file1.elements[i].appearance);
                //break;
                
                case 'density':
                return(file1.elements[i].density);
               // break;

                case 'discovered_by':
                return(file1.elements[i].discovered_by);
                //break;
                
                case 'melt':
                return(file1.elements[i].melt);
               // break;

                case 'molar_heat':
                return(file1.elements[i].molar_heat);
               // break;
                
                case 'named_by':
                return(file1.elements[i].named_by);
                //break;

                case 'number':
                return(file1.elements[i].number);
                //break;

                case 'period':
                return(file1.elements[i].period);
               // break;

                case 'phase':
                return(file1.elements[i].phase);
               // break;

                                                
                case 'source':
                return(file1.elements[i].source);
                //break;


                case 'summary':
                return(file1.elements[i].summary);
                //break;
                                
                case 'symbol':
                return(file1.elements[i].symbol);
                //break;
                
                case 'xpos':
                return(file1.elements[i].xpos);
                //break;
                
                case 'ypos':
                return(file1.elements[i].ypos);
                //break;
                
                case 'shells':
                return(file1.elements[i].shells);
                //break;
                
                case undefined:
                return('sorry');
                //break;
}  
  
  

}; 

 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function



 let speechOutput;
 let reprompt = 'you can ask me about next elemet detail or should i close ';
 let welcomeOutput =[		'hello,in chemical lab happy to help you',
               'hello nice to meet you,chemical lab is here',
               'chemical lab welcome to you. ',
            ];
           
 let AllOutput=[ 'The',
                      'Here is',
                      'is the',
                   ];
  let welcomeReprompt = "How can i help you";



  // 2. Skill Code =======================================================================================================
 "use strict";
 const Alexa = require('alexa-sdk');
 const APP_ID = 'amzn1.ask.skill.098f30d1-a120-44bd-9333-2427b5491459';  // TODO replace with your app ID (OPTIONAL).
 speechOutput = '';
 const handlers = {
   'LaunchRequest': function () {
    const arr = welcomeOutput;
    const Indexarr = Math.floor(Math.random() * arr.length);
    const msg = arr[Indexarr];
    this.emit(':ask', msg+".............You can ask me about atomic mass,boiling point and other properties of chemical element", welcomeReprompt);
   },
   'AMAZON.HelpIntent': function () {
     speechOutput = 'You can ask me about the chemical element and is properties like Boiling point, Melting point, Atomic mass and number, and more about element';
     reprompt = 'You can also ask about the details of the chemical elemnt';
     this.emit(':ask', speechOutput, reprompt);
   },
    'AMAZON.CancelIntent': function () {
     speechOutput = 'happy to help you... enjoy your day surrounding with chemistry';
     this.emit(':tell', speechOutput);
   },
    'AMAZON.StopIntent': function () {
     speechOutput = 'Tell me how was your chemical lab experience by commenting and reviwing skill....thanks ';
     this.emit(':tell', speechOutput);
    },
    'SessionEndedRequest': function () {
     speechOutput = 'It was my plasure to help you...see you again in chemistry lab';
     this.emit(':tell', speechOutput);
    },
   'AMAZON.NavigateHomeIntent': function () {
    this.emit(":tell","i am not get the information that your searching may be it not discoverd yet or it's not a chemical element.............. come again");


     },
   'ElementIntent': function () {
     speechOutput = '';
 
     //any intent slot variables are listed here for convenience
 
     let ElementSlotRaw = this.event.request.intent.slots.Element.value;
     console.log(ElementSlotRaw);
     let ElementSlot = resolveCanonical(this.event.request.intent.slots.Element);
     console.log(ElementSlot);
     let detailSlotRaw = this.event.request.intent.slots.detail.value;
     console.log(detailSlotRaw);
     let detailSlot = resolveCanonical(this.event.request.intent.slots.detail);
     console.log(detailSlot);
 
     let a=ElementSlot;//.charAt(0).toUpperCase()+ElementSlot.substr(1)
     let b=detailSlot 
     
 if( a=="Hydrogen" ||a=="Helium" ||a=="Lithium" ||a=="Beryllium" ||a=="Boron" ||a=="Carbon" ||a=="Nitrogen" ||a=="Oxygen" ||a=="Fluorine" ||a=="Neon" ||a=="Sodium" ||a=="Magnesium" ||a=="Aluminum, Aluminium" ||a=="Silicon" ||a=="Phosphorus" ||a=="Sulfur" ||a=="Chlorine" ||a=="Argon" ||a=="Potassium" ||a=="Calcium" ||a=="Scandium" ||a=="Titanium" ||a=="Vanadium" ||a=="Chromium" ||a=="Manganese" ||a=="Iron" ||a=="Cobalt" ||a=="Nickel" ||a=="Copper" ||a=="Zinc" ||a=="Gallium"  ||a=="Germanium" ||a=="Arsenic" ||a=="Selenium" ||a=="Bromine" ||a=="Krypton" ||a=="Rubidium" ||a=="Strontium" ||a=="Yttrium" ||a=="Zirconium" ||a=="Niobium" ||a=="Molybdenum" ||a=="Technetium" ||a=="Ruthenium" ||a=="Rhodium" ||a=="Palladium" ||a=="Silver" ||a=="Cadmium" ||a=="Indium" ||a=="Tin" ||a=="Antimony" ||a=="TelluriumIodine" ||a=="Xenon" ||a=="Cesium" ||a=="Barium" ||a=="Lanthanum" ||a=="Cerium" ||a=="Praseodymium" ||a=="Neodymium" ||a=="Promethium" ||a=="Samarium" ||a=="Europium" ||a=="Gadolinium" ||a=="Terbium" ||a=="Dysprosium" ||a=="Holmium" ||a=="Erbium" ||a=="Thulium" ||a=="Ytterbium" ||a=="Lutetium" ||a=="Hafnium" ||a=="Tantalum" ||a=="Tungsten" ||a=="Rhenium" ||a=="Osmium" ||a=="Iridium" ||a=="Platinum" ||a=="Gold" ||a=="Mercury" ||a==" Thallium" ||a=="Lead" ||a=="Bismuth" ||a=="Polonium" ||a=="Astatine" ||a=="Radon" ||a=="Francium" ||a=="Radium" ||a=="Actinium" ||a=="Thorium" ||a=="Protactinium" ||a=="Uranium" ||a=="Neptunium" ||a=="Plutonium" ||a==" Americium" ||a=="Curium" ||a=="Berkelium" ||a=="Californium" ||a=="Einsteinium" ||a=="Fermium" ||a=="Mendelevium" ||a=="Nobelium" ||a=="Lawrencium" ||a=="Rutherfordium" ||a=="Dubnium" ||a=="Seaborgium" ||a=="Bohrium" ||a=="Hassium" ||a=="Meitnerium" ||a=="Darmstadtium" ||a=="Roentgenium" ||a=="Copernicium" ||a=="Nihonium" ||a=="Flerovium" ||a=="Moscovium" ||a=="Livermorium" ||a=="Tennessine" ||a=="Oganesson" ||a== "Ununennium" && b=="name"|| b=="appearance"|| b=="mass"|| b=="boil"|| b=="category"|| b=="color"|| b=="density"|| b=="discovered_by"|| b=="melt"|| b=="molar_heat"|| b=="named_by"|| b=="number"|| b=="period"|| b=="phase"|| b=="source"|| b=="summary"|| b=="symbol" || b=="xpos" || b=="ypos" || b=="shells")
     {
     var t= validdata(a,b)
     console.log(t);
     }
     
     else{
         console.log("data not found");
         this.emit('AMAZON.NavigateHomeIntent')
     }
     
 
     
     
     
     
     
                                              const arr = AllOutput;
                                             const Indexarr = Math.floor(Math.random() * arr.length);
                                             const msg = arr[Indexarr];
                                          
   
 
 
                                    if(detailSlot==='boil' ||detailSlot==='melt')
                                    {
                                               
                                          const speechOutput2 = "...if you want to convert it?.... then say next!";
                                      
                                          if(Indexarr === 0)
                                          {
                                           speechOutput =msg +" "+ detailSlot+"ing point of "+ a+" is "+ t +" Kelvin "+ " .......  ";
                                           const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                      
                                            this.emit(":ask", speechOutput1+speechOutput2 );
                                      
                                            if(true)
                                            {
                                              var{ temp, temp1, s, d} = Tconv(t,a,b);
                                            }
                                          }
                                        
                                        
                                          if(Indexarr === 1)
                                          {
                                             let speechOutput =msg +" "+detailSlot+"ing point of " +a +" is "+ t +" Kelvin";
                                            const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                            
                                                this.emit(":ask", speechOutput1+speechOutput2 );
                                      
                                            if(true)
                                            {
                                              var{ temp, temp1, s, d} = Tconv(t,a,b);
                                            }	
                                          }
                                          
                                          
                                          if(Indexarr === 2)
                                          {
                                              let speechOutput = t +" Kelvin " + msg +" "+detailSlot+"ing point of "+ a;
                                              const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                      
                                                this.emit(":ask", speechOutput1+speechOutput2 );
                                        
                                            if(true)
                                            {
                                              var{ temp, temp1, s, d} = Tconv(t,a,b);
                                            }
                                          }
                                    } 		
                                    
                                    
                                    
                                    
                                    
                                    if(detailSlot==='number' ||  detailSlot==='mass')
                                    {
                                     if(Indexarr === 0)
                                          {
                                           speechOutput =msg +" atomic "+ detailSlot +" of "+ a+" is ";
                                           const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                      
                                            if(detailSlot==='number')
                                            {this.emit(":tell", speechOutput + t);}
                                            if(detailSlot==='mass')
                                             {this.emit(":tell", speechOutput + t.toFixed(3)+" amu");}
                                              
                                      
                                   
                                          }
                                        
                                        
                                          if(Indexarr === 1)
                                          {
                                             let speechOutput =msg +" atomic " + detailSlot + " of " +a +" is ";
                                            const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                            
                                            if(detailSlot==='number')
                                            {this.emit(":tell", speechOutput + t);}
                                            if(detailSlot==='mass')
                                             {this.emit(":tell", speechOutput + t.toFixed(3)+" amu");}
                                              
                                      
                                          }
                                          
                                          
                                          if(Indexarr === 2)
                                          {
                                              let speechOutput = " "+ msg +" atomic "+ detailSlot +" of "+ a;
                                              const speechOutput1 =  switchVoice(speechOutput,"Ivy") ;
                                      
                                            if(detailSlot==='number')
                                            {this.emit(":tell", t+speechOutput);}
                                            if(detailSlot==='mass')
                                             {this.emit(":tell",t.toFixed(3)+" amu " + speechOutput);}
                                              
                                        
                                          }
                                     
                                    }
                                    
                                    
                                    
                                    if(detailSlot==='appearance' || detailSlot==='category' || detailSlot==='phase' || detailSlot==='symbol')
                                    {
                                     this.emit(":tell","The "+ b +" of " + a +" is "+ t);
                                     
                                    }
                                    
                                      if(detailSlot==='density')
                                    {
                                     this.emit(":tell","The "+ b +" of " + a +" is a "+ t+" gram");
                                     
                                    }
                                    
                                       if(detailSlot==='discovered_by')
                                    {
                                     this.emit(":tell",a+" is discovered by " + t);
                                     
                                    }
                                    
                                        if(detailSlot==='summary')
                                    {
                                     let cardTitle=ElementSlot;
                                     let cardContent=t;
                                     let speechOutput=switchVoice(t,"Matthew");
                                     const imageObject = {
                                                                 smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png',
                                                                 largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png'
                                                            };
                                     this.emit(':tellWithCard', speechOutput, cardTitle, cardContent,imageObject);
                                    //this.emit(":ask",speechOutput)//,cardTitle,cardTitle);
                                     
                                    }
                                    
                                    
                                    
                                    if(detailSlot==='source' )
                                    {
                                     let cardTitle=ElementSlot;
                              
                                     let cardContent ="\nFollow link :\n" + t;
                                     const imageObject = {
                                                                 smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png',
                                                                 largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png'
                                                            };
                                     let speechOutput="information is send your alexa app"
                                     this.emit(':tellWithCard', speechOutput, cardTitle,cardContent,imageObject);
                                     
                                    }
                                    
                                    if(detailSlot==='xpos' || detailSlot==='ypos'||detailSlot==='shells')
                                    {
                                     let cardTitle=ElementSlot;
                              
                                     let cardContent ="\nFound These Information :\n" + t;
                                     const imageObject = {
                                                                 smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png',
                                                                 largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/chemicalelement/'+ElementSlot+'.png'
                                                            };
                                     let speechOutput="information is send your alexa app"
                                     this.emit(':tellWithCard', speechOutput, cardTitle,cardContent,imageObject);
                                    }
                                    
                                    
                                    
                                    
                                    
                                    
     },
     
     	'InformationIntent': function () {

           	let ElementSlotRaw = this.event.request.intent.slots.Element.value;
          		console.log(ElementSlotRaw);
          		let ElementSlot = resolveCanonical(this.event.request.intent.slots.Element);
          		console.log(ElementSlot);
           
            let a=ElementSlot;
             
             if( a=="Hydrogen" ||a=="Helium" ||a=="Lithium" ||a=="Beryllium" ||a=="Boron" ||a=="Carbon" ||a=="Nitrogen" ||a=="Oxygen" ||a=="Fluorine" ||a=="Neon" ||a=="Sodium" ||a=="Magnesium" ||a=="Aluminum, Aluminium" ||a=="Silicon" ||a=="Phosphorus" ||a=="Sulfur" ||a=="Chlorine" ||a=="Argon" ||a=="Potassium" ||a=="Calcium" ||a=="Scandium" ||a=="Titanium" ||a=="Vanadium" ||a=="Chromium" ||a=="Manganese" ||a=="Iron" ||a=="Cobalt" ||a=="Nickel" ||a=="Copper" ||a=="Zinc" ||a=="Gallium"  ||a=="Germanium" ||a=="Arsenic" ||a=="Selenium" ||a=="Bromine" ||a=="Krypton" ||a=="Rubidium" ||a=="Strontium" ||a=="Yttrium" ||a=="Zirconium" ||a=="Niobium" ||a=="Molybdenum" ||a=="Technetium" ||a=="Ruthenium" ||a=="Rhodium" ||a=="Palladium" ||a=="Silver" ||a=="Cadmium" ||a=="Indium" ||a=="Tin" ||a=="Antimony" ||a=="TelluriumIodine" ||a=="Xenon" ||a=="Cesium" ||a=="Barium" ||a=="Lanthanum" ||a=="Cerium" ||a=="Praseodymium" ||a=="Neodymium" ||a=="Promethium" ||a=="Samarium" ||a=="Europium" ||a=="Gadolinium" ||a=="Terbium" ||a=="Dysprosium" ||a=="Holmium" ||a=="Erbium" ||a=="Thulium" ||a=="Ytterbium" ||a=="Lutetium" ||a=="Hafnium" ||a=="Tantalum" ||a=="Tungsten" ||a=="Rhenium" ||a=="Osmium" ||a=="Iridium" ||a=="Platinum" ||a=="Gold" ||a=="Mercury" ||a==" Thallium" ||a=="Lead" ||a=="Bismuth" ||a=="Polonium" ||a=="Astatine" ||a=="Radon" ||a=="Francium" ||a=="Radium" ||a=="Actinium" ||a=="Thorium" ||a=="Protactinium" ||a=="Uranium" ||a=="Neptunium" ||a=="Plutonium" ||a==" Americium" ||a=="Curium" ||a=="Berkelium" ||a=="Californium" ||a=="Einsteinium" ||a=="Fermium" ||a=="Mendelevium" ||a=="Nobelium" ||a=="Lawrencium" ||a=="Rutherfordium" ||a=="Dubnium" ||a=="Seaborgium" ||a=="Bohrium" ||a=="Hassium" ||a=="Meitnerium" ||a=="Darmstadtium" ||a=="Roentgenium" ||a=="Copernicium" ||a=="Nihonium" ||a=="Flerovium" ||a=="Moscovium" ||a=="Livermorium" ||a=="Tennessine" ||a=="Oganesson" ||a== "Ununennium")
               {
               var t= validdata(a,'summary')
               console.log(t);
               }
               
               else{
                   console.log("data not found");
                   this.emit('AMAZON.NavigateHomeIntent')
               }
               
               this.emit(":tell",switchVoice(t,"Matthew"));
   },
     
   'AMAZON.YesIntent': function () {
    this.emit('AMAZON.StopIntent')
    
    },
  
   'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent')
    
     },
    
	  'AMAZON.NextIntent': function () {
		       
     this.emit(':tell',d+"ing point of " + s +" in degree celcius "+ switchVoice(temp.toFixed(2),"Ivy")+ " and in degree fahrenheit " +switchVoice(temp1.toFixed(2),"Ivy"));
   },	
   
   
   
   'Unhandled': function () {
         speechOutput = "Im sorry i dont know about these............ bye bye ";
         this.emit(':tell', speechOutput);
     }
 };
 
 exports.handler = (event, context) => {
     const alexa = Alexa.handler(event, context);
     alexa.appId = 'amzn1.ask.skill.098f30d1-a120-44bd-9333-2427b5491459';
     // To enable string internationalization (i18n) features, set a resources object.
     //alexa.resources = languageStrings;
     alexa.registerHandlers(handlers);
   //alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
     alexa.execute();
 };
 
 //    END of Intent Handlers {} ========================================================================================
 // 3. Helper Function  =================================================================================================
 
 function resolveCanonical(slot){
   //this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
   let canonical;
     try{
     canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
   }catch(err){
       console.log(err.message);
       canonical = slot.value;
   };
   return canonical;
 };
 
 function delegateSlotCollection(){
   console.log("in delegateSlotCollection");
   console.log("current dialogState: "+this.event.request.dialogState);
     if (this.event.request.dialogState === "STARTED") {
       console.log("in Beginning");
     let updatedIntent= null;
     // updatedIntent=this.event.request.intent;
       //optionally pre-fill slots: update the intent object with slot values for which
       //you have defaults, then return Dialog.Delegate with this updated intent
       // in the updatedIntent property
       //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
     
     //this code is necessary if using ASK SDK versions prior to 1.0.9 
     if(this.isOverridden()) {
       return;
     }
     this.handler.response = buildSpeechletResponse({
       sessionAttributes: this.attributes,
       directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
       shouldEndSession: false
     });
     this.emit(':responseReady', updatedIntent);
     
     } else if (this.event.request.dialogState !== "COMPLETED") {
       console.log("in not completed");
       // return a Dialog.Delegate directive with no updatedIntent property.
       //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
     
     //this code necessary is using ASK SDK versions prior to 1.0.9
     if(this.isOverridden()) {
       return;
     }
     this.handler.response = buildSpeechletResponse({
       sessionAttributes: this.attributes,
       directives: getDialogDirectives('Dialog.Delegate', null, null),
       shouldEndSession: false
     });
     this.emit(':responseReady');
     
     } else {
       console.log("in completed");
       console.log("returning: "+ JSON.stringify(this.event.request.intent));
       // Dialog is now complete and all required slots should be filled,
       // so call your normal intent handler.
       return this.event.request.intent;
     }
 }
 
 
 function randomPhrase(array) {
     // the argument is an array [] of words or phrases
     let i = 0;
     i = Math.floor(Math.random() * array.length);
     return(array[i]);
 }
 function isSlotValid(request, slotName){
         let slot = request.intent.slots[slotName];
         //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
         let slotValue;
 
         //if we have a slot, get the text and store it into speechOutput
         if (slot && slot.value) {
             //we have a value in the slot
             slotValue = slot.value.toLowerCase();
             return slotValue;
         } else {
             //we didn't get a value in the slot.
             return false;
         }
 }
 
 //These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
 //will be removed once Lambda templates are updated with the latest SDK
 
 function createSpeechObject(optionsParam) {
     if (optionsParam && optionsParam.type === 'SSML') {
         return {
             type: optionsParam.type,
             ssml: optionsParam['speech']
         };
     } else {
         return {
             type: optionsParam.type || 'PlainText',
             text: optionsParam['speech'] || optionsParam
         };
     }
 }
 
 function buildSpeechletResponse(options) {
     let alexaResponse = {
         shouldEndSession: options.shouldEndSession
     };
 
     if (options.output) {
         alexaResponse.outputSpeech = createSpeechObject(options.output);
     }
 
     if (options.reprompt) {
         alexaResponse.reprompt = {
             outputSpeech: createSpeechObject(options.reprompt)
         };
     }
 
     if (options.directives) {
         alexaResponse.directives = options.directives;
     }
 
     if (options.cardTitle && options.cardContent) {
         alexaResponse.card = {
             type: 'Simple',
             title: options.cardTitle,
             content: options.cardContent
         };
 
         if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
             alexaResponse.card.type = 'Standard';
             alexaResponse.card['image'] = {};
 
             delete alexaResponse.card.content;
             alexaResponse.card.text = options.cardContent;
 
             if(options.cardImage.smallImageUrl) {
                 alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
             }
 
             if(options.cardImage.largeImageUrl) {
                 alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
             }
         }
     } else if (options.cardType === 'LinkAccount') {
         alexaResponse.card = {
             type: 'LinkAccount'
         };
     } else if (options.cardType === 'AskForPermissionsConsent') {
         alexaResponse.card = {
             type: 'AskForPermissionsConsent',
             permissions: options.permissions
         };
     }
 
     let returnResult = {
         version: '1.0',
         response: alexaResponse
     };
 
     if (options.sessionAttributes) {
         returnResult.sessionAttributes = options.sessionAttributes;
     }
     return returnResult;
 }
 
 function getDialogDirectives(dialogType, updatedIntent, slotName) {
     let directive = {
         type: dialogType
     };
 
     if (dialogType === 'Dialog.ElicitSlot') {
         directive.slotToElicit = slotName;
     } else if (dialogType === 'Dialog.ConfirmSlot') {
         directive.slotToConfirm = slotName;
     }
 
     if (updatedIntent) {
         directive.updatedIntent = updatedIntent;
     }
     return [directive];
 }