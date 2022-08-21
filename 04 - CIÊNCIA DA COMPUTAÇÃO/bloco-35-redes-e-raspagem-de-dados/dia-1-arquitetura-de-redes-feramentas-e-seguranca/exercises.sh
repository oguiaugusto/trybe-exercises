# 2.1 Faça uma chamada GET, utilizando o cURL, para "google.com".
curl google.com

# 2.2 Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location, que serve para "seguir redirecionamentos".
curl -L google.com

# 3 Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.
wget https://www.betrybe.com/

# 5.1 Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.
python3 tcp.py
telnet localhost 8085

# 5.2 Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
ctrl + c

# 8 Envie pacotes para o servidor UDP utilizando o Netcat (nc). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo client.
nc -u localhost 8084

# 9 Faça uma chamada ao server utilizando o cURL. Lembre que, além do HTTP, o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.
curl localhost:8084
