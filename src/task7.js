const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  // se puede agregar un elemento a una fila existente
  arr[0].push("Valor agregado en primera fila")

  // se puede agregar una fila completa de elementos
  arr.splice(1,0,["Esta", "es", "una", "nueva", "fila"])

  // se puede eliminar un solo número de una fila específica
  arr[2].pop() // eliminando el 19 de la fila con índice 2
  
  // Se puede invertir una fila sin afectar las demás
  arr[3].reverse()

  console.log(arr)
  // Type your code above this line!