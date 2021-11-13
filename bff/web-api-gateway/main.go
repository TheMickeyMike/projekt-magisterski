package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway/fragrance"
	fragranceV1 "github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway/fragrance/v1"
	log "github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway/logging"
	"go.uber.org/zap"
)

var (
	name    = "frontend"
	version = "dev"
	commit  = "none"
)

var shutdownSignals = []os.Signal{os.Interrupt, syscall.SIGTERM}

// @title web-api-gateway
// @version 1.0
// @description An app template
// @termsOfService https://github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway
// @license.name MIT
// @license.url https://github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway/LICENSE
func main() {
	// app main context
	ctx := context.Background()

	if err := run(ctx); err != nil {
		log.Error("error :", zap.Error(err))
		os.Exit(1)
	}
	os.Exit(0)
}

func run(ctx context.Context) error {
	log.Setup(log.Options{
		Debug:    true,
		LogLevel: "debug",
		AppName:  name,
		AppID:    name,
		Version:  version,
		Revision: commit,
	})

	log.Info("Starting....")

	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	// api handlers with injected services
	fragranceV1 := fragranceV1.NewHandler(fragrance.NewService([]fragrance.Fragrance{
		{
			ID:    "1",
			Name:  "Sauvage ELixir",
			Price: 534.32,
		},
	}))

	// create router
	router := LoadRouter(fragranceV1)

	// create api server
	server := NewAPI(":8080", time.Second*2, time.Second*2, router)

	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, shutdownSignals...)
	defer func() {
		signal.Stop(shutdown)
		close(shutdown)
	}()

	serverErrorsCh := make(chan error, 1)
	defer close(serverErrorsCh)

	// Start API server
	server.Start(serverErrorsCh)

	// Blocking main and waiting for shutdowlon.
	select {
	case err := <-serverErrorsCh:
		return fmt.Errorf("server error: %w", err)
	case sig := <-shutdown:
		log.Info("main : Start shutdown", zap.String("signal", sig.String()))

		// Asking listener to shutdown
		context, cancel := context.WithTimeout(ctx, 5*time.Second)
		defer cancel()
		err := server.Stop(context)

		switch {
		case sig == syscall.SIGSTOP:
			return errors.New("integrity issue caused shutdown")
		case err != nil:
			return fmt.Errorf("could not stop server gracefully: %w", err)
		}
	case <-ctx.Done():
		log.Info("main : context done")
	}
	return nil
}
