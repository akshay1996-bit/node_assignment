const LoopNames = (names) => {

    names.map( (data,i) => {
  
    console.log(data)
  
    } )
  
  }
  
  
  
  for(var i = 0 ; i<= 5 ; i++ ){
  
    console.log(`${i}`)
  
    
  
  }
  
  
  
  console.log("Hello")
  
  
  
  setTimeout( () => {
  
    console.log("In SetTimeout with timer 0")
  
    setTimeout( () => {
  
      LoopNames(["Rahul", "Ramesh"])
  
      console.log("Second SetTimeout with timer as 0")
  
      setTimeout( () => {
  
        console.log("Third SetTimeout with timer as 0")
  
      },0)
  
    },0)
  
    
  
    }, 0 )

    //OUTPUT: 
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // Hello
    // In SetTimeout with timer 0
    // Rahul
    // Ramesh
    // Second SetTimeout with timer as 0
    // Third SetTimeout with timer as 0