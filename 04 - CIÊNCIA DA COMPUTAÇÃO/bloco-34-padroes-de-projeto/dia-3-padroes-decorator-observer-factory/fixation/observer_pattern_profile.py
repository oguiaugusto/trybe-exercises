from abc import ABC, abstractmethod


class Perfil:
    def __init__(self):
        self.__sistemas_de_notificacao = []
        self.__new_post = None

    def adicionar_sistema_de_notificacao(self, sistema):
        print(sistema)
        self.__sistemas_de_notificacao.append(sistema)

    def notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()

    def adicionar_post(self, post):
        self.__new_post = post
        self.mostrar_post()
        self.notificar_todos()

    def mostrar_post(self):
        print(f"\nPost: {self.__new_post}\n")

    def remover_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.remove(sistema)


# Interface Observer
class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass


# Observador Mensagem
class NotificadorMensagem(Notificador):
    def __init__(self, perfil: Perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Notificando via Mensagens: {self.seguidores}")


# Observador Push Notification
class NotificadorPushNotification(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Push Notification para: {self.seguidores}")


# Observador Email
class NotificadorEmail(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Email's para: {self.seguidores}")


# Cliente
if __name__ == "__main__":
    seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    seguidores_push_notification = ["Carlos"]
    seguidores_email = ["Claudia", "Marcia"]

    meu_perfil = Perfil()
    NotificadorMensagem(meu_perfil, seguidores_mensagem)
    NotificadorPushNotification(meu_perfil, seguidores_push_notification)
    notificador_email = NotificadorEmail(meu_perfil, seguidores_email)

    meu_perfil.adicionar_post("Olá universo da programação!")

    meu_perfil.remover_sistema_de_notificacao(notificador_email)

    meu_perfil.adicionar_post("O email está indisponível!")
