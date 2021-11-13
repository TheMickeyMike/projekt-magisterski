package errors

import "net/http"

const (
	INTERNAL_SERVER_ERROR = "server error"
	FRAGRANCE_NOT_FOUND   = "fragrance not found"
)

type Response struct {
	Code   int         `json:"code"`
	Msg    string      `json:"msg"`
	Errors interface{} `json:"errors"`
}

var (
	InternalServerError = Response{Code: http.StatusInternalServerError, Msg: "server error"}
)
