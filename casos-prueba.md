# Caso de prueba: CP-001

Conteo de texto normal exitoso

## Precondiciones:
- El texto o la frase debe estar en el idioma nativo

## Datos de prueba:
- Un texto corto: Hola - 1 palabra, 4 caracteres 
- Un texto largo: Hola mundo - 2 palabras, 10 caracteres
- Un texto con palabras y caracteres incluidos: Testing de prueba #21 - 5 palabras, 18 caracteres
- Un texto con solo caracteres: #21 _ 001 - 3 palabras, 8 caracteres
- Oraciones completas: Testing manual y testing automatizado - 5 palabras, 23 caracteres

## Pasos a seguir:
1. Ingresar el dato de prueba en la caja de texto
2. Dar clic en boton Analizar

## Resultado esperado:
Debera mostrar la cantidad de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, la palabra mas larga y la mas corta

## Resultado obtenido:
Muestra la cantidad de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, la palabra mas larga y la mas corta

## Estado:
- [ ] No ejecutado
- [ ] En ejecucion
- [x] Aprobado
- [ ] Fallido
- [ ] Bloqueado
- [ ] No aplica

***

# Caso de prueba: CP-002

Conteo de texto no ingresado

## Precondiciones:
N/A

## Datos de prueba:
N/A


## Pasos a seguir:
1. Dar clic en boton Analizar

## Resultado esperado:
No debera mostrar la cantidad de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, siendo estas en igual a cero, y la palabra mas larga y la mas corta sin dato a especificar.

## Resultado obtenido:
No muestra ni la cantidad de caracteres sin espacio que tiene el texto, ni numero 
de palabras, ni de oraciones y párrafos

## Estado:
- [ ] No ejecutado
- [ ] En ejecucion
- [x] Aprobado
- [ ] Fallido
- [ ] Bloqueado
- [ ] No aplica

***
# Caso de prueba: CP-003

Sin Conteo de solo espacios

## Precondiciones:
N/A

## Datos de prueba:
- N numero de clic en la tecla espacio

## Pasos a seguir:
1. Ingresar el dato de prueba en la caja de texto
2. Dar clic en boton Analizar

## Resultado esperado:
No debera mostrar la cantidad de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, iguales a cero. 
Y la palabra mas larga y la mas corta no deben estar especificada.

## Resultado obtenido:
No muestra la cantidad de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, iguales a cero. 
Y la palabra mas larga y la mas corta no deben estar especificada.

## Estado:
- [ ] No ejecutado
- [ ] En ejecucion
- [x] Aprobado
- [ ] Fallido
- [ ] Bloqueado
- [ ] No aplica

***

# Caso de prueba: CP-004

Conteo de una sola palabra exitoso

## Precondiciones:
- El texto o la frase debe estar en el idioma nativo

## Datos de prueba:
- Una palabra de 3 letras: Oro - 1 palabra
- Una palabra de 20 letras: Estacionamiento_#001 - 1 palabra


## Pasos a seguir:
1. Ingresar el dato de prueba en la caja de texto
2. Dar clic en boton Analizar

## Resultado esperado:
Debera mostrar la cantidad de caracteres sin espacio que tiene la palabra, tambien mostrar el numero 
de palabras, de oraciones y parrafos, y la palabra mas larga y la mas corta

## Resultado obtenido:
Muestra el número de la cantidad de caracteres sin espacio que tiene la palabra, tambien mostrar el numero 
de palabras, de oraciones y parrafos, y la palabra mas larga y la mas corta

## Estado:
- [ ] No ejecutado
- [ ] En ejecucion
- [x] Aprobado
- [ ] Fallido
- [ ] Bloqueado
- [ ] No aplica

***

# Caso de prueba: CP-005

Conteo de un texto con puntuacion exitoso

## Precondiciones:
- El texto o la frase debe estar en el idioma nativo

## Datos de prueba:
- Un texto que incluya puntuación: Necesitas la aprobación del Challenge para aprobar el Training, también debes realizar una entrega de la Misión para habilitar el siguiente stage.
- Un párrafo que incluya puntuacion: Git desde cero STAGE ACTIVO
20 AGO 2026, 10:59
Aprende a gestionar tus proyectos con Git y publica tu trabajo en GitHub utilizando el mismo flujo de trabajo que emplean las empresas tecnológicas. Porque un buen automatizador no solo crea pruebas: también sabe colaborar y mantener su código de forma profesional.


## Pasos a seguir:
1. Ingresar el dato de prueba en la caja de texto
2. Dar clic en boton Analizar

## Resultado esperado:
Debera mostrar la cantidad correcta que contiene el texto y /o parrafos ingresados, especificando el numero de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, y la palabra mas larga y la mas corta

## Resultado obtenido:
Muestra la cantidad correcta que contiene el texto y /o parrafos ingresados, especificando el numero de caracteres sin espacio que tiene el texto, numero 
de palabras, de oraciones y parrafos, y la palabra mas larga y la mas corta


## Estado:
- [ ] No ejecutado
- [ ] En ejecucion
- [x] Aprobado
- [ ] Fallido
- [ ] Bloqueado
- [ ] No aplica

| Passed | Failed |
| ------ | ------ |
|   5    |    0   |
