

const resume={
       
    "name": "Prasanth G",
    "email": "kuttyprasanth271296@gmail.com",
    "phone": "8973849423",
    "degree": "bcom(ca)",
    "website": "Your website URL",
    "summary": "I am a passionnate webdevloper",
      "address": "15/16 sasi mahal",
      "postalCode": "638311",
      "city": "Erode",
      "state": "Tamilnadu",
      "country": "India"
  }
  let profile=Object.keys(resume)
console.log(profile) 

for(let i=0; i <profile.length;i++) {
    let key=profile[i]
    console.log(`${key}:${resume[key]}`)
}
// for in loop
console.log(); // line spacing
//using for in loop
console.log("<---------For in loop--------->")
for(let key in resume) {
   console.log(key + " : " + resume[key]);
}

// for of loop

// using for of loop
console.log("<---------For of loop--------->")
for(let [key, value] of Object.entries(resume)) {
   console.log(key, " : ", value);
}

 //using forEach
 console.log("<---------For Each loop--------->")
 Object.entries(resume).forEach(([key, value]) => {
     console.log(key, " : ", value);
 });