# Vamos utilizar esse código com recursão e visualizar o funcionamento da pilha de chamadas:

def saudacao():
    print("Oi")

def despedida():
    print("Tchau")

def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()

init()