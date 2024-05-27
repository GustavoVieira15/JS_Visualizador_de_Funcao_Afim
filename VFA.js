function setup() {
  createCanvas(400, 400);
  
  background("rgb(0,0,0)");
  stroke("rgb(255,255,255)")
  
  //SETUP EIXOS
  line(0,height/2,width,height/2)
  line(width/2,0,width/2,height)
  
  //PARA A FUNÇÃO
  coeficienteAngular = 1.5
  coeficienteLinear = -10
  
  
  //OUTRAS VARIAVEIS
  xMaximo = width/2
  xMinimo = -xMaximo
  yMaximo=funcaoAfim(xMaximo,coeficienteAngular,coeficienteLinear)
  yMinimo=funcaoAfim(xMinimo,coeficienteAngular,coeficienteLinear)
  
  //MAPING
  x1 = findPositionX(xMinimo)
  y1 = findPositionY(yMinimo)
  x2 = findPositionX(xMaximo)
  y2 = findPositionY(yMaximo)
  
  stroke("red")
  line(x1,y1,x2,y2)
}

function funcaoAfim (x,a,b) {
  let y = x*a+b
  return y
}

function findPositionX (x) {
  return x + 200
}

function findPositionY (y) {
  let um = -y
  let dois = um+200
  return dois
}

function draw() {
}
