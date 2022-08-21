from socketserver import StreamRequestHandler, TCPServer


class TCPHandler(StreamRequestHandler):

    def handle(self):
        self.wfile.write(b"Ola, cliente!\n")

        for line in self.rfile:
            print(line.decode("ascii").strip())
            self.wfile.write(line)


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    # TCPServer.allow_reuse_address = True
    with TCPServer((HOST, PORT), TCPHandler) as server:
        print("Servidor TCP ativo.")
        server.serve_forever()