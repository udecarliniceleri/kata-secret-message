# Hash message kata

### Using the next table, write a function that converts message into hashed message:

| Message | Hash code | Hashed message |
| :-----: | :-------: | :------------: |
|   'a'   |     4     |       e        |
|   'b'   |     5     |       g        |
|  'ab'   |     3     |       de       |
| 'hola'  |     4     |      lspe      |
| 'test'  |     2     |      vguv      |

### Tips:

Convert any character into a number (for ASCII code), then add the hash code to each number for move de chart to other, and finally convert the number (ASCII code) into a character.

### Constrains:

1. Nothing

### To build and test execute the next command in root project folder:

`npm run test`
