import sys
"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)
    
    def update(self, index, value):
         self.data[index] = value
        

if __name__ == "__main__":
  # vamos inicializar e preencher uma estrutura de dados array
  array = ListaArray()
  array.set(0, "Marcos")
  array.set(1, "Patrícia")
  # print(array), internamente chama o método array.__str__() que implementamos
  print(array)  # saída: ["Marcos", "Patrícia"]

  # inserindo no começo do array
  array.set(0, "Valeria")
  print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

  # inserindo em uma posição intermediária
  array.set(1, "Miguel")
  print(array) # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']

  # removendo o indice 0
  array.remove(0)  # retorna a string "Marcos"
  print(array)  # saída: ['Valeria']

  # update no índice 0 (de Miguel p/ Gustavo)
  array.update(0, 'Gustavo')
  print(array) # saíde: ['Gustavo', 'Marcos', 'Patrícia']

  # sys.getsizeof retorna o tamanho da lista em bytes
  array_memory_size = sys.getsizeof(array.data)
  print(array_memory_size)


  # para acessar um elemento do array, utilizamos seu índice
  print(array.get(0))  # saída: Felipe
  print(array.get(2))  # saída: Shirley
  print("-----")

  # podemos iterar sobre seus elementos da seguinte maneira
  index = 0
  # enquanto há elementos no array
  while index < len(array):
      # recupera o elemento através de um índice
      print("Index:", index, ", Nome:", array.get(index))
      index += 1
