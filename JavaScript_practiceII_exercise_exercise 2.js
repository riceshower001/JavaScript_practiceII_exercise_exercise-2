// Let's add information about recommended menus.

const cafe = {
    name: "JavaScriptcafe",
    businessHours: { 
      opening: "10:00(AM)",
      closing: "8:00(PM)"
    },
    // Please assign an array to the property "menus".
    menus:["coffee","tea","chocolate cake"]
  };
  
  console.log(`store name: ${cafe.name}`);
  console.log(`open hours: ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);
  console.log(`----------------------------`);
  console.log(`recommended menu`);
  
  // Output the contents of the array "menus" using the for statement.
  for(let i = 0; i<cafe.menus.length; i++){
    console.log(cafe.menus[i]);
  }