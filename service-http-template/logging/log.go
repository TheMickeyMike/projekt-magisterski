package log

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

var (
	defaultLogger *zap.Logger
)

func initialize(instance *zap.Logger) {
	defaultLogger = instance
}

func init() {
	initialize(zap.L())
}

// Debug logs an debug msg with fields
func Debug(msg string, fields ...zapcore.Field) {
	defaultLogger.Debug(msg, fields...)
}

// Info logs an info msg with fields
func Info(msg string, fields ...zapcore.Field) {
	defaultLogger.Info(msg, fields...)
}

// Error logs an error msg with fields
func Error(msg string, fields ...zapcore.Field) {
	defaultLogger.Error(msg, fields...)
}

// Fatal logs a fatal error msg with fields
func Fatal(msg string, fields ...zapcore.Field) {
	defaultLogger.Fatal(msg, fields...)
}
