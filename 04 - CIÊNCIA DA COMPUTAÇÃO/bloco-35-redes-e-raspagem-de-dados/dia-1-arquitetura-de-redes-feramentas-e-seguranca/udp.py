from socketserver import DatagramRequestHandler, UDPServer


class UDPHandler(DatagramRequestHandler):

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip()) 


if __name__ == "__main__":
    HOST, PORT = "localhost", 8084

    with UDPServer((HOST, PORT), UDPHandler) as server:
        print("Servidor UDP ativo.")
        server.serve_forever()