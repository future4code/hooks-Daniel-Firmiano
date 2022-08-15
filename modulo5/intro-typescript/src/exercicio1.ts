function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
       return "Escaleno";
    //  console.log("escaleno")
    } else if (a === b && b === c) {
        return "Equilátero";
    //  console.log("Equilatero")
    } else {
        return "Isósceles";
    //  console.log("isósceles")
    }
    
  }
console.log(checaTriangulo(1, 2, 2))