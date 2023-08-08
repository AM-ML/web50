import socket

HOST = '127.0.0.1'  # Localhost
PORT = 8000

def create_response():
    return """HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
<head>
    <title>Simple Server</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple server.</p>
</body>
</html>
"""

def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((HOST, PORT))
        server_socket.listen()

        print(f"Serving at http://{HOST}:{PORT}")

        while True:
            client_socket, client_address = server_socket.accept()
            with client_socket:
                request = client_socket.recv(1024).decode('utf-8')
                print(request)
                response = create_response()
                client_socket.sendall(response.encode('utf-8'))

if __name__ == '__main__':
    main()

