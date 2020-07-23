package main

import (
    "fmt"
    "log"
    "net/http"

    "github.com/googollee/go-socket.io"
)

type Msg struct {
    UserId    string   `json:"userId"`
    Text      string   `json:"text"`
    State     string   `json:"state"`
    Namespace string   `json:"namespace"`
    Rooms     []string `json:"rooms"`
}

func main() {
    server, err := socketio.NewServer(nil)
    if err != nil {
        log.Fatal(err)
    }
    server.OnConnect("/", func(s socketio.Conn) error {
        s.SetContext("")
        fmt.Println("connected:", s.ID())
        return nil
    })
    server.OnEvent("/", "notice", func(s socketio.Conn, msg string) {
        fmt.Println("notice:", msg)
        s.Emit("reply", "have "+msg)
    })
    server.OnEvent("/chat", "msg", func(s socketio.Conn, msg string) string {
        s.SetContext(msg)
        return "recv " + msg
    })
    server.OnEvent("/", "bye", func(s socketio.Conn) string {
        last := s.Context().(string)
        s.Emit("bye", last)
        s.Close()
        return last
    })
    server.OnError("/", func(s socketio.Conn, e error) {
        fmt.Println("meet error:", e)
    })
    server.OnDisconnect("/", func(s socketio.Conn, reason string) {
        fmt.Println("closed", reason)
    })
    go server.Serve()
    defer server.Close()

    http.Handle("/API/", server)
    http.Handle("/", http.FileServer(http.Dir("../dist")))
    log.Println("Serving at localhost:8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}